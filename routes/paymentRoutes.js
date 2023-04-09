import express from "express";
import { buySubscription, cancelSubscription, getRazorPayKey, paymentVerification } from "../controllers/paymentController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

//Buy Membership
router.route("/subscribe").get(isAuthenticated, buySubscription)

//Verify Payment
router.route("/paymentverification").post(isAuthenticated, paymentVerification)

//Get Razorpay Key
router.route("/razorpaykey").get(getRazorPayKey)

//Cancel Subscription
router.route("/subscribe/cancel").delete(isAuthenticated, cancelSubscription)


export default router;