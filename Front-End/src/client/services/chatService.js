const API_BASE = import.meta.env.VITE_API_URL

export async function getMessages(chatId) {
  const res = await fetch(`${API_BASE}/get/chat?idChat=${chatId}`);
  if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);
  const json = await res.json();
  return json.mensajes;
}

export async function saveMessage(chatId, senderId, contenido) {
  const res = await fetch(`${API_BASE}/save/chat`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ idChat: chatId, idSender: senderId, contenido }),
  });
  if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);
  return res.json();
}