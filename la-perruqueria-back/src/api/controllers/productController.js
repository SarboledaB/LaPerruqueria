const express = require("express");
const router = express.Router();
const {
  fetchProduct,
  fetchProductDetails,
  createProduct,
  updateProduct,
  deleteProduct
} = require("../../services/productService");

// Obtener todos los productos
async function getProductsController(req, res, next) {
  try {
    const products = await fetchProduct(req.query.category);
    res.json(products);
  } catch (error) {
    next(error);
  }
}

// Obtener un producto por ID
async function getProductByIdController(req, res, next) {
  try {
    const product = await fetchProductDetails(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    res.json(product);
  } catch (error) {
    next(error);
  }
}

// Crear un producto
async function createProductController(req, res, next) {
  try {
    const newProduct = await createProduct(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
}

// Actualizar un producto por ID
async function updateProductController(req, res, next) {
  try {
    const updatedProduct = await updateProduct(req.params.id, req.body);
    if (!updatedProduct) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    res.json(updatedProduct);
  } catch (error) {
    next(error);
  }
}

// Eliminar un producto por ID
async function deleteProductController(req, res, next) {
  try {
    const deletedProduct = await deleteProduct(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    res.json(deletedProduct);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getProductsController,
  getProductByIdController,
  createProductController,
  updateProductController,
  deleteProductController
};