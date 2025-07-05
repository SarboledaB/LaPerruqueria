const {
  fetchComments,
  fetchCommentDetails,
  createComment,
  updateComment,
  deleteComment
} = require("../../services/clientsCommentsService");

// Obtener todos los comentarios
async function getCommentsController(req, res, next) {
  try {
    const comments = await fetchComments(req.query.type);
    res.json(comments);
  } catch (error) {
    next(error);
  }
}

// Obtener un comentario por ID
async function getCommentByIdController(req, res, next) {
  try {
    const comment = await fetchCommentDetails(req.params.id);
    if (!comment) {
      return res.status(404).json({ message: "Comentario no encontrado" });
    }
    res.json(comment);
  } catch (error) {
    next(error);
  }
}

// Crear un comentario
async function createCommentController(req, res, next) {
  try {
    const newComment = await createComment(req.body);
    res.status(201).json(newComment);
  } catch (error) {
    next(error);
  }
}

// Actualizar un comentario por ID
async function updateCommentController(req, res, next) {
  try {
    const updatedComment = await updateComment(req.params.id, req.body);
    if (!updatedComment) {
      return res.status(404).json({ message: "Comentario no encontrado" });
    }
    res.json(updatedComment);
  } catch (error) {
    next(error);
  }
}

// Eliminar un comentario por ID
async function deleteCommentController(req, res, next) {
  try {
    const deletedComment = await deleteComment(req.params.id);
    if (!deletedComment) {
      return res.status(404).json({ message: "Comentario no encontrado" });
    }
    res.json(deletedComment);
  } catch (error) {
    next(error);
  }
}
module.exports = {
  getCommentsController,
  getCommentByIdController,
  createCommentController,
  updateCommentController,
  deleteCommentController
};