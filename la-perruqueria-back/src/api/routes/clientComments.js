const express = require('express');
const {
  getCommentsController,
  getCommentByIdController,
  createCommentController,
  updateCommentController,
  deleteCommentController,
} = require('../controllers/clientCommentsController');

const router = express.Router();

router.get('/clients_comments', getCommentsController);
router.get('/clients_comments/:id', getCommentByIdController);
router.post('/clients_comments', createCommentController);
router.put('/clients_comments/:id', updateCommentController);
router.delete('/clients_comments/:id', deleteCommentController);

module.exports = router;
