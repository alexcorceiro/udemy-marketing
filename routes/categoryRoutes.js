const express = require('express');
const { getCategory, newCategory, deleteCategory, saveAttr } = require('../controller/categoryController');
const { verifyIsLoggedIn , verifyIsAdmin } = require("../middleware/verifyAuthToken");
const router = express.Router()

router.use(verifyIsLoggedIn);
router.use(verifyIsAdmin)
router.get("/", getCategory);
router.post("/", newCategory);
router.delete("/:category", deleteCategory);
router.post("/attr", saveAttr);




module.exports= router;