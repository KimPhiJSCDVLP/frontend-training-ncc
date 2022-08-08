const express = require("express");
const {
    getProduct,
    getProductById,
    getAllProduct,
    getProductByCategory,
    addProduct,
    updateProductById,
    deleteProduct,
} = require("../controllers/productController");
const router = express.Router();

// GET PRODUCTS
router.get("/", getProduct);

// GET ALL PRODUCTS
router.get("/all", getAllProduct);

// GET SINGLE PRODUCT BY ID
router.get("/:productId", getProductById);

// GET PRODUCT BY CATEGORY
router.get("/category/:categoryId", getProductByCategory);

// ADD PRODUCT
router.post("/add", addProduct);
// DELETE SINGLE PRODUCT BY ID
router.delete("/:productId", deleteProduct);

// UPDATE PRODUCT
router.put("/update/:productId", updateProductById);
module.exports = router;
