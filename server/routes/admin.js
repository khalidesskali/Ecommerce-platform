const express = require("express");
const router = express.Router();
const User = require("../models/user");
const auth = require("../middleware/auth");
const isAdmin = require("../middleware/isAdmin");

// Get all users (Admin only)
router.get("/users", auth, isAdmin, async (req, res) => {
  try {
    const users = await User.find({ role: "user" }).select("-password");
    res.json(users);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching users", error: error.message });
  }
});

// Get specific user (Admin only)
router.get("/users/:id", auth, isAdmin, async (req, res) => {
  try {
    const user = await User.findOne({
      _id: req.params.id,
      role: "user",
    }).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching user", error: error.message });
  }
});

// Update user (Admin only)
router.put("/users/:id", auth, isAdmin, async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await User.findOne({ _id: req.params.id, role: "user" });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update user fields
    if (name) user.name = name;
    if (email) user.email = email;

    await user.save();
    res.json({ message: "User updated successfully", user: user.toJSON() });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error updating user", error: error.message });
  }
});

// Delete user (Admin only)
router.delete("/users/:id", auth, isAdmin, async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id, role: "user" });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await user.remove();
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting user", error: error.message });
  }
});

// Change user role (Admin only)
router.patch("/users/:id/role", auth, isAdmin, async (req, res) => {
  try {
    const { role } = req.body;
    const user = await User.findOne({ _id: req.params.id, role: "user" });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (!["user", "admin"].includes(role)) {
      return res.status(400).json({ message: "Invalid role" });
    }

    user.role = role;
    await user.save();
    res.json({
      message: "User role updated successfully",
      user: user.toJSON(),
    });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error updating user role", error: error.message });
  }
});

module.exports = router;
