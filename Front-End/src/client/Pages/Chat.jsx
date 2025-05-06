import '@fontsource/montserrat';
import MainLayout from '../Layouts/MainLayout.jsx';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TarjetaMensajes from '/src/GeneralComponents/TarjetaMensajes.jsx';
import { getMessages, saveMessage } from '../services/chatService.js';


function ClientChat() {
  const location = useLocation();
  const id = localStorage.getItem('id');
  const type = localStorage.getItem('type');

  const { chatId, userId } = location.state || {};
  const [mensajes, setMensajes] = useState([]);
  const [texto, setTexto] = useState('');
  const [cargando, setCargando] = useState(false);
  const [iniciarApoyo, setiniciarApoyo] = useState(false);
  const name = localStorage.getItem('name');

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
      const resp = await saveMessage(1, texto);
      // Se añade al estado para no recargar toda la lista
      setMensajes((prev) => [
        ...prev,
        {
          id_mensaje: resp.idMensaje,
          idChat: 1,
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
                type={type == 2 && 'Escuela' || type == 3 && 'Donador' || type == 1 && 'Administrador'}
                info={{
                  users_info: {
                    images: {
                      // Mapear aquí IDs a URLs, p.ej.:
                      [userId]: '/src/client/assets/other/persona.jpg',
                      /* ...otros usuarios */
                    },
                    names: {
                      [userId]: name,
                      /* ...otros usuarios */
                    },
                  },
                }}
              />
            ))}
        </div>

        {/* Área de envío */}
        <section className='w-[100%] h-[20%] flex items-center'>
        <button className='rounded-full w-[30%] m-[1%] bg-[#009933] h-[80%] border hover:scale-110 transition duration-300 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-bold' onClick={() =>{setiniciarApoyo(true)}}>
          Iniciar apoyo
        </button> 
        </section>
        <div id="sendArea" className="w-full flex mt-4 flex items-center">
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
            className="w-1/4 h-[100%] bg-green-600 text-white font-bold rounded-r-3xl hover:scale-105 transition disabled:opacity-50"
          >
            Enviar
          </button>
        </div>

        {iniciarApoyo && (
            <div className='absolute z-1 bottom-5 w-[88%] h-[60%] bg-[#D9D9D9] rounded-3xl border border-black flex flex-col justify-start items-center'>
              <section className='w-[100%] h-[20%] flex justify-between items-center'>
                <h2 className='font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl w-[90%] h-full flex justify-start items-center pt-[1%] pl-[5%]'>Rechazo de solicitud</h2>
                <textarea rows='1' className="bg-white w-[15%] sm:w-[10%] md:w-[8%] lg:w-[7%] xl:w-[7%] 2xl:w-[7%] h-[60%] mr-[4%] rounded-4xl hover:scale-110 transition duration-300 bg-[url('/src/admin/assets/pages/infoApoyo/cancel.png')] bg-cover bg-center bg-no-repeat" style={{ backgroundSize: '50%' }}/>
              </section>
              <section className='mt-[2%] w-[90%] h-[80%] flex flex-col justify-start items-center p-[2%]'>
                <h3 className='font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl w-[100%] h-[10%] m-[1%] pl-[1%] '>Razon de rechazo</h3>
                <textarea rows="200" placeholder='Razon de rechazo...' className='bg-white w-[100%] min-h-[60%] max-h-[60%] resize-none border rounded-3xl p-[2%]' name="razon_rechazo" onChange={handleChange} value={formData.razon_rechazo}/>
                <div className='w-[100%] h-[30%] flex justify-center items-end'>
                  <button className='w-[50%] sm:w-[45%] md:w-[40%] lg:w-[35%] xl:w-[30%] 2xl:w-[30%] h-[80%] bg-[#009933] rounded-full border hover:scale-110 transition duration-300 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl'>
                    Notificar
                  </button>
                </div>
              </section>
            </div>
            )}
      </section>
    </MainLayout>
  );
}

export default ClientChat;