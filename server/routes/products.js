const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const auth = require("../middleware/auth");
const isAdmin = require("../middleware/isAdmin");

// Get all products with filtering, sorting, and pagination
router.get("/", async (req, res) => {
  try {
    const {
      category,
      subcategory,
      minPrice,
      maxPrice,
      sort = "createdAt",
      order = "desc",
      page = 1,
      limit = 10,
      search,
    } = req.query;

    // Build query
    const query = {};
    if (category) query.category = category;
    if (subcategory) query.subcategory = subcategory;
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }

    // Calculate skip value for pagination
    const skip = (page - 1) * limit;

    // Execute query with sorting and pagination
    const products = await Product.find(query)
      .sort({ [sort]: order === "desc" ? -1 : 1 })
      .skip(skip)
      .limit(Number(limit));

    // Get total count for pagination
    const total = await Product.countDocuments(query);

    res.json({
      products,
      currentPage: Number(page),
      totalPages: Math.ceil(total / limit),
      totalProducts: total,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching products", error: error.message });
  }
});

// Get featured products
router.get("/featured", async (req, res) => {
  try {
    const products = await Product.find({ featured: true }).limit(8);
    res.json(products);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching featured products",
      error: error.message,
    });
  }
});

// Get product by ID
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findOne({ id: Number(req.params.id) });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching product", error: error.message });
  }
});

// Create new product (Admin only)
router.post("/", auth, isAdmin, async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error creating product", error: error.message });
  }
});

// Update product (Admin only)
router.put("/:id", auth, isAdmin, async (req, res) => {
  try {
    const product = await Product.findOneAndUpdate(
      { id: Number(req.params.id) },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error updating product", error: error.message });
  }
});

// Delete product (Admin only)
router.delete("/:id", auth, isAdmin, async (req, res) => {
  try {
    const product = await Product.findOneAndDelete({
      id: Number(req.params.id),
    });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting product", error: error.message });
  }
});

// Add review to product
router.post("/:id/reviews", auth, async (req, res) => {
  try {
    const { rating, comment } = req.body;
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Check if user already reviewed
    const alreadyReviewed = product.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    );

    if (alreadyReviewed) {
      return res.status(400).json({ message: "Product already reviewed" });
    }

    const review = {
      user: req.user._id,
      rating: Number(rating),
      comment,
    };

    product.reviews.push(review);
    product.rating =
      product.reviews.reduce((acc, item) => item.rating + acc, 0) /
      product.reviews.length;

    await product.save();
    res.status(201).json({ message: "Review added" });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error adding review", error: error.message });
  }
});

// Get product categories
router.get("/categories/all", async (req, res) => {
  try {
    const categories = await Product.distinct("category");
    const subcategories = await Product.distinct("subcategory");
    res.json({ categories, subcategories });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching categories", error: error.message });
  }
});

module.exports = router;
