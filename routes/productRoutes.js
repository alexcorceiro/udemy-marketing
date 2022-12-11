const express = require('express');
const router = express.Router()
const {getBestsellers, getProductById, getProducts, 
    adminGetProduct, adminDeleteProduct, adminCreateProduct
    ,adminUpdateProduct,adminUplaodProduct,adminDeleteProductImage} = require("../controller/productController");
const { verifyIsLoggedIn , verifyIsAdmin } = require("../middleware/verifyAuthToken");


router.get("/", getProducts);
router.get("/category/:categoryName", getProducts);
router.get("/search/:searchQuery", getProducts)
router.get("/category/:categoryName/search/:searchQuery", getProducts)
router.get("/get-one/:id", getProductById)
router.get("/bestsellers", getBestsellers)

//admin routes :
router.use(verifyIsLoggedIn);
router.use(verifyIsAdmin)
router.get("/admin/", adminGetProduct)
router.delete("/admin/:id", adminDeleteProduct)
router.delete("/admin/image/:imagePath/:productId", adminDeleteProductImage)
router.put("/admin/:id",adminUpdateProduct)
router.post("/admin/upload", adminUplaodProduct)
router.post("/admin/",adminCreateProduct)





module.exports= router;