const express = require("express");
const router = express.Router();
const Order = require("../models/order");
const Product = require("../models/product");
const auth = require("../middleware/auth");
const isAdmin = require("../middleware/isAdmin");

// Get all orders (Admin only)
router.get("/", auth, isAdmin, async (req, res) => {
  try {
    const orders = await Order.find({})
      .populate("user", "name email")
      .populate("products.product", "name price images")
      .sort({ orderId: -1 });
    res.json(orders);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching orders", error: error.message });
  }
});

// Get user's orders
router.get("/my-orders", auth, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id })
      .populate("products.product", "name price images")
      .sort({ orderId: -1 });
    res.json(orders);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching orders", error: error.message });
  }
});

// Get order by orderId
router.get("/:orderId", auth, async (req, res) => {
  try {
    const order = await Order.findOne({ orderId: Number(req.params.orderId) })
      .populate("user", "name email")
      .populate("products.product", "name price images");

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // Check if user is admin or the order owner
    if (
      order.user._id.toString() !== req.user._id.toString() &&
      req.user.role !== "admin"
    ) {
      return res
        .status(403)
        .json({ message: "Not authorized to view this order" });
    }

    res.json(order);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching order", error: error.message });
  }
});

// Create new order
router.post("/", auth, async (req, res) => {
  try {
    const { products, payment, shippingAddress } = req.body;

    // Validate products array
    if (!products || !Array.isArray(products) || products.length === 0) {
      return res.status(400).json({ message: "Products array is required" });
    }

    // Validate shipping address
    if (!shippingAddress) {
      return res.status(400).json({ message: "Shipping address is required" });
    }

    // Calculate total price and validate products
    let totalPrice = 0;
    for (const item of products) {
      const product = await Product.findById(item.product);
      if (!product) {
        return res
          .status(400)
          .json({ message: `Product ${item.product} not found` });
      }
      if (product.stock < item.quantity) {
        return res.status(400).json({
          message: `Insufficient stock for product ${product.name}`,
        });
      }
      totalPrice += product.price * item.quantity;
    }

    // Create order
    const order = new Order({
      user: req.user._id,
      products,
      totalPrice,
      payment,
      shippingAddress,
    });

    // Update product stock
    for (const item of products) {
      await Product.findByIdAndUpdate(item.product, {
        $inc: { stock: -item.quantity },
      });
    }

    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error creating order", error: error.message });
  }
});

// Update order status (Admin only)
router.patch("/:orderId/status", auth, isAdmin, async (req, res) => {
  try {
    const { status } = req.body;
    const order = await Order.findOne({ orderId: Number(req.params.orderId) });

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    if (
      !["pending", "processing", "shipped", "delivered", "cancelled"].includes(
        status
      )
    ) {
      return res.status(400).json({ message: "Invalid status" });
    }

    order.status = status;
    await order.save();
    res.json({ message: "Order status updated", order });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error updating order status", error: error.message });
  }
});

// Cancel order
router.patch("/:orderId/cancel", auth, async (req, res) => {
  try {
    const order = await Order.findOne({ orderId: Number(req.params.orderId) });

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // Check if user is admin or the order owner
    if (
      order.user.toString() !== req.user._id.toString() &&
      req.user.role !== "admin"
    ) {
      return res
        .status(403)
        .json({ message: "Not authorized to cancel this order" });
    }

    // Check if order can be cancelled
    if (order.status === "delivered" || order.status === "cancelled") {
      return res.status(400).json({ message: "Order cannot be cancelled" });
    }

    // Restore product stock
    for (const item of order.products) {
      await Product.findByIdAndUpdate(item.product, {
        $inc: { stock: item.quantity },
      });
    }

    order.status = "cancelled";
    await order.save();
    res.json({ message: "Order cancelled successfully", order });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error cancelling order", error: error.message });
  }
});

module.exports = router;
