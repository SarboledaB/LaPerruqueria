const express = require('express');
const {
  getClientImagesController,
  getClientImageByIdController,
  createClientImageController,
  updateClientImageController,
  deleteClientImageController,
} = require('../controllers/clientImagesController');

const router = express.Router();

router.get("/client_images", getClientImagesController);
router.get("/client_images/:id", getClientImageByIdController);
router.post("/client_images", createClientImageController);
router.put("/client_images/:id", updateClientImageController);
router.delete("/client_images/:id", deleteClientImageController);

module.exports = router;