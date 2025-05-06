//const API_BASE = import.meta.env.VITE_API_URL
import fetchAuth from "/src/utils/fetchAuth.jsx";

export async function getMessages(id_chat) {
  try{
  const res = await fetchAuth(`http://localhost:3000/mensajes/get/${id_chat}`);
  if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);
  const json = await res.json();
  console.log("json", json);
  return json.response;
  }catch (error) {
    console.error('Error fetching messages:', error);
    throw error; // Re-throw the error for further handling if needed
  }
}

export async function saveMessage(id_chat, contenido) {
  try{
  const res = await fetchAuth(`http://localhost:3000/mensajes/save/chat`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id_chat: id_chat, texto: contenido }),
  });
  if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);
  console.log("respuesta", res);
  return res.json();
  }catch (error) {
    console.error('Error saving message:', error);
    throw error; // Re-throw the error for further handling if needed
  }
}