const express = require('express');
const productRoutes = require('./product');
const clientCommentsRoutes = require('./clientComments');
const clientImagesRoutes = require('./clientImages');

const router = express.Router();

router.use(productRoutes);
router.use(clientCommentsRoutes);
router.use(clientImagesRoutes);

module.exports = router;
