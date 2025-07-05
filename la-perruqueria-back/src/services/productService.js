const {
  collection,
  getDocs,
  getDoc,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
} = require('firebase/firestore');
const { db } = require('../config/firebase');
const crypto = require('crypto');
const productsCollection = collection(db, 'products');

function isValidUUID(uuid) {
  const uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidRegex.test(uuid);
}

async function fetchProduct(category) {
  const q = query(productsCollection, where('category', '==', category));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

async function fetchProductDetails(id) {
  if (!isValidUUID(id)) {
    throw new Error('ID inválido: debe ser un UUID válido');
  }
  const productRef = doc(db, 'products', id);
  const productSnap = await getDoc(productRef);
  if (!productSnap.exists()) return null;
  return { id: productSnap.id, ...productSnap.data() };
}

async function createProduct(productData) {
  const id = crypto.randomUUID();
  if (!isValidUUID(id)) {
    throw new Error('ID inválido: debe ser un UUID válido');
  }
  const productRef = doc(db, 'products', id);
  await setDoc(productRef, { ...productData, id });
  return { ...productData, id };
}

async function updateProduct(id, productData) {
  if (!isValidUUID(id)) {
    throw new Error('ID inválido: debe ser un UUID válido');
  }
  const productRef = doc(db, 'products', id);
  await updateDoc(productRef, productData);
  return { id, ...productData };
}

async function deleteProduct(id) {
  if (!isValidUUID(id)) {
    throw new Error('ID inválido: debe ser un UUID válido');
  }
  const productRef = doc(db, 'products', id);
  await deleteDoc(productRef);
  return { message: 'Producto eliminado', id };
}

module.exports = {
  fetchProduct,
  fetchProductDetails,
  createProduct,
  updateProduct,
  deleteProduct,
};
