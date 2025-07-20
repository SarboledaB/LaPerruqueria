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
const commentsCollection = collection(db, 'clients_comments');

function isValidUUID(uuid) {
  const uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidRegex.test(uuid);
}

async function fetchComments(type) {
  const q = query(
    commentsCollection,
    where('type', '==', type),
    where('status', '!=', 'pending')
  );
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

async function fetchCommentDetails(id) {
  if (!isValidUUID(id)) {
    throw new Error('ID inválido: debe ser un UUID válido');
  }
  const commentRef = doc(db, 'clients_comments', id);
  const commentSnap = await getDoc(commentRef);
  if (!commentSnap.exists()) return null;
  return { id: commentSnap.id, ...commentSnap.data() };
}

async function createComment(commentData) {
  const id = crypto.randomUUID();
  if (!isValidUUID(id)) {
    throw new Error('Error al generar UUID válido');
  }

  const commentRef = doc(db, 'clients_comments', id);
  await setDoc(commentRef, { ...commentData, id, status: 'pending' });
  return { ...commentData, id, status: 'pending' };
}

async function updateComment(id, commentData) {
  if (!isValidUUID(id)) {
    throw new Error('ID inválido: debe ser un UUID válido');
  }
  const commentRef = doc(db, 'clients_comments', id);
  await updateDoc(commentRef, commentData);
  return { id, ...commentData };
}

async function deleteComment(id) {
  if (!isValidUUID(id)) {
    throw new Error('ID inválido: debe ser un UUID válido');
  }
  const commentRef = doc(db, 'clients_comments', id);
  await deleteDoc(commentRef);
  return { message: 'Comentario eliminado', id };
}

module.exports = {
  fetchComments,
  fetchCommentDetails,
  createComment,
  updateComment,
  deleteComment,
};
