import '@fontsource/montserrat';
import MainLayout from '../Layouts/MainLayout.jsx';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TarjetaMensajes from '../GeneralComponents/TarjetaMensajes.jsx';
import { getMessages, saveMessage } from '../services/chatService.js';

function ClientChat() {
  const location = useLocation();
  const { chatId, userId } = location.state || {};
  const [mensajes, setMensajes] = useState([]);
  const [texto, setTexto] = useState('');
  const [cargando, setCargando] = useState(false);

  // Carga inicial de mensajes
  useEffect(() => {
    if (!chatId) return;
    setCargando(true);
    getMessages(chatId)
      .then(setMensajes)
      .catch((e) => console.error('Error cargando mensajes:', e))
      .finally(() => setCargando(false));
  }, [chatId]);

  // Al enviar un mensaje
  const handleEnviar = async () => {
    if (!texto.trim()) return;
    try {
      setCargando(true);
      const resp = await saveMessage(chatId, userId, texto);
      // Se añade al estado para no recargar toda la lista
      setMensajes((prev) => [
        ...prev,
        {
          id_mensaje: resp.idMensaje,
          id_chat: chatId,
          id_sender: userId,
          contenido: texto,
          fecha_envio: new Date().toISOString(),
        },
      ]);
      setTexto('');
    } catch (e) {
      console.error('Error enviando mensaje:', e);
    } finally {
      setCargando(false);
    }
  };

  return (
    <MainLayout>
      <section className="w-[90%] min-h-[60vh] p-4 rounded-3xl border bg-white mx-auto mt-4">
        {/* Área de mensajes */}
        <div
          id="messageArea"
          className="relative w-full h-[60vh] overflow-y-auto flex flex-col space-y-4 p-2"
        >
          {cargando && <p className="text-center">Cargando mensajes...</p>}
          {!cargando && mensajes.length === 0 && (
            <p className="text-center">No hay mensajes aún.</p>
          )}
          {!cargando &&
            mensajes.map((m) => (
              <TarjetaMensajes
                key={m.id_mensaje}
                message={m.contenido}
                day={new Date(m.fecha_envio).toLocaleDateString()}
                hour={new Date(m.fecha_envio).toLocaleTimeString()}
                user_message_id={m.id_sender}
                type={m.id_sender === userId ? 'Cliente' : 'Admin'}
                info={{
                  users_info: {
                    images: {
                      // Mapear aquí IDs a URLs, p.ej.:
                      [userId]: '/src/client/assets/other/persona.jpg',
                      /* ...otros usuarios */
                    },
                    names: {
                      [userId]: 'Nombre',
                      /* ...otros usuarios */
                    },
                  },
                }}
              />
            ))}
        </div>

        {/* Área de envío */}
        <div id="sendArea" className="w-full flex mt-4">
          <textarea
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            placeholder="Escribe un mensaje..."
            className="flex-grow border border-gray-300 rounded-l-3xl px-4 py-2 resize-none"
            rows={2}
            disabled={cargando}
          />
          <button
            onClick={handleEnviar}
            disabled={cargando}
            className="w-1/4 bg-green-600 text-white font-bold rounded-r-3xl hover:scale-105 transition disabled:opacity-50"
          >
            Enviar
          </button>
        </div>
      </section>
    </MainLayout>
  );
}

export default ClientChat;