import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  brainTreePaymentController,
  brainTreeTokenController,
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productCategoryController,
  productCountController,
  productFilterController,
  productListController,
  productPhotoController,
  relatedProductController,
  searchProductController,
  updateProductController,
} from "../controllers/productController.js";
import formidable from "express-formidable";

const router = express.Router();

//routes
// create product
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);


//get all product
router.get("/get-product", getProductController);

//get single product
router.get("/get-single-product/:slug", getSingleProductController);

//get Photo
router.get("/product-photo/:pid", productPhotoController);

// delete product
router.delete("/delete-product/:pid", deleteProductController);

// filer product
router.post("/product-filter", productFilterController);

//product  count
router.get("/product-count", productCountController);

// product per page
router.get("/product-list/:page", productListController);

//search product
router.get("/search/:keyword", searchProductController);

//similar products
router.get('/related-product/:pid/:cid',relatedProductController);

//category wise product
router.get('/product-category/:slug',productCategoryController);

//payment routes
//token
router.get('/braintree/token', brainTreeTokenController);

//payment
router.post('/braintree/payment',requireSignIn, brainTreePaymentController);
export default router;
