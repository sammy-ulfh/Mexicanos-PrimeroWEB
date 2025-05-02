//const API_BASE = import.meta.env.VITE_API_URL
import fetchAuth from "/src/utils/fetchAuth.jsx";

export async function getMessages(chatId) {
  const res = await fetch(`http://localhost:3000/mensajes/get/chat?idChat=${chatId}`);
  if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);
  const json = await res.json();
  return json.mensajes;
}

export async function saveMessage(chatId, contenido) {
  const res = await fetchAuth(`http://localhost:3000/mensajes/save/chat`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ idChat: chatId, contenido: contenido }),
  });
  if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);
  return res.json();
}