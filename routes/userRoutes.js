const express = require('express');
const { getUser, registerUser , updateUserProfile, getUserProfile, writeReview, getUsers, updateUser,deleteUser, loginUser} = require('../controller/userController');
const { verifyIsLoggedIn , verifyIsAdmin } = require("../middleware/verifyAuthToken");
const router = express.Router()




router.post("/register", registerUser)
router.post("/login", loginUser)
// user logged in routes: 
router.use(verifyIsLoggedIn)
router.put("/profile", updateUserProfile);
router.get("/profile/:id", getUserProfile);
router.post("/review/:productId", writeReview)
// admin routes:
router.use(verifyIsAdmin)
router.get("/", getUser);
router.get("/:id", getUsers)
router.put("/:id", updateUser)
router.delete("/:id", deleteUser)



module.exports= router;