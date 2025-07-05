const {
  collection,
  getDocs,
  getDoc,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
} = require('firebase/firestore');
const { db } = require('../config/firebase');
const crypto = require('crypto');
const imagesCollection = collection(db, 'client_images');

function isValidUUID(uuid) {
  const uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidRegex.test(uuid);
}

async function fetchClientImages() {
  const snapshot = await getDocs(imagesCollection);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

async function fetchClientImageDetails(id) {
  if (!isValidUUID(id)) {
    throw new Error('ID inválido: debe ser un UUID válido');
  }
  const imageRef = doc(db, 'client_images', id);
  const imageSnap = await getDoc(imageRef);
  if (!imageSnap.exists()) return null;
  return { id: imageSnap.id, ...imageSnap.data() };
}

async function createClientImage(imageData) {
  let id = crypto.randomUUID();
  if (!isValidUUID(id)) {
    throw new Error('ID inválido: debe ser un UUID válido');
  }
  const imageRef = doc(db, 'client_images', id);
  await setDoc(imageRef, { ...imageData, id });
  return { ...imageData, id };
}

async function updateClientImage(id, imageData) {
  if (!isValidUUID(id)) {
    throw new Error('ID inválido: debe ser un UUID válido');
  }
  const imageRef = doc(db, 'client_images', id);
  await updateDoc(imageRef, imageData);
  return { id, ...imageData };
}

async function deleteClientImage(id) {
  if (!isValidUUID(id)) {
    throw new Error('ID inválido: debe ser un UUID válido');
  }
  const imageRef = doc(db, 'client_images', id);
  await deleteDoc(imageRef);
  return { message: 'Imagen eliminada', id };
}

module.exports = {
  fetchClientImages,
  fetchClientImageDetails,
  createClientImage,
  updateClientImage,
  deleteClientImage,
};
