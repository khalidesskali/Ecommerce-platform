const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    orderId: {
      type: Number,
      unique: true,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: { type: Number, required: true, min: 1 },
      },
    ],
    totalPrice: { type: Number, required: true, min: 0 },
    status: {
      type: String,
      enum: ["pending", "processing", "shipped", "delivered", "cancelled"],
      default: "pending",
    },
    payment: {
      method: { type: String, enum: ["paypal", "stripe"], required: true },
      isPaid: { type: Boolean, default: false },
      paidAt: { type: Date },
      transactionId: {
        type: String,
      },
    },
    shippingAddress: {
      street: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      country: { type: String, required: true },
      zipCode: { type: String, required: true },
    },
  },
  {
    timestamps: true,
  }
);

// Auto-increment orderId middleware
orderSchema.pre("save", async function (next) {
  if (!this.orderId) {
    const lastOrder = await this.constructor.findOne(
      {},
      {},
      { sort: { orderId: -1 } }
    );
    this.orderId = lastOrder ? lastOrder.orderId + 1 : 1000; // Starting from 1000
  }
  next();
});

module.exports = mongoose.model("Order", orderSchema);
