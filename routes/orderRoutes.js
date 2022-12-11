const express = require('express');
const { getUserOrders, getOrder,cerateOrder,updateOrderToPaid, updateOrderToDelivred, getOrders,getOrderForAnalysis} = require('../controller/orderController');
const { verifyIsLoggedIn , verifyIsAdmin } = require("../middleware/verifyAuthToken");
const router = express.Router()

//user routes
router.use(verifyIsLoggedIn)
router.get("/", getUserOrders);
router.get("/user/:id", getOrder);
router.post("/", cerateOrder);
router.put("/paid/:id", updateOrderToPaid)

//admin routes
router.use(verifyIsAdmin)
router.put("/delivered/:id", updateOrderToDelivred)
router.get("/admin", getOrders)
router.get("/analysis/:date", getOrderForAnalysis)




module.exports= router;