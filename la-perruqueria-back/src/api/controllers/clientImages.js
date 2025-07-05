const {
  fetchClientImages,
  fetchClientImageDetails,
  createClientImage,
  updateClientImage,
  deleteClientImage
} = require("../../services/clientImagesService");

// Obtener todas las imágenes
async function getClientImagesController(req, res, next) {
  try {
    const images = await fetchClientImages();
    res.json(images);
  } catch (error) {
    next(error);
  }
}

// Obtener una imagen por ID
async function getClientImageByIdController(req, res, next) {
  try {
    const image = await fetchClientImageDetails(req.params.id);
    if (!image) {
      return res.status(404).json({ message: "Imagen no encontrada" });
    }
    res.json(image);
  } catch (error) {
    next(error);
  }
}

// Crear una imagen
async function createClientImageController(req, res, next) {
  try {
    const { imageUrl, userId } = req.body;
    if (!imageUrl) {
      return res.status(400).json({ message: "La URL de la imagen es obligatoria" });
    }
    const newImage = await createClientImage({ imageUrl, userId });
    res.status(201).json(newImage);
  } catch (error) {
    next(error);
  }
}

// Actualizar una imagen por ID
async function updateClientImageController(req, res, next) {
  try {
    const { imageUrl } = req.body;
    const updatedImage = await updateClientImage(req.params.id, { imageUrl });
    if (!updatedImage) {
      return res.status(404).json({ message: "Imagen no encontrada" });
    }
    res.json(updatedImage);
  } catch (error) {
    next(error);
  }
}

// Eliminar una imagen por ID
async function deleteClientImageController(req, res, next) {
  try {
    const deletedImage = await deleteClientImage(req.params.id);
    if (!deletedImage) {
      return res.status(404).json({ message: "Imagen no encontrada" });
    }
    res.json(deletedImage);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getClientImagesController,
  getClientImageByIdController,
  createClientImageController,
  updateClientImageController,
  deleteClientImageController
};
