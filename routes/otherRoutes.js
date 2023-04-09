import express from "express";
import { contact, courseRequest, getDashboardStats } from "../controllers/otherController.js";

import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

// Contact-Us
router.route("/contact").post(contact)

// Request New Course
router.route("/courserequest").post(courseRequest)

// Get Admin Dashboard Stats
router.route("/admin/stats").get(isAuthenticated, authorizeAdmin,getDashboardStats)

export default router;