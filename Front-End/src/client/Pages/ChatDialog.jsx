import '@fontsource/montserrat';

function ChatDialog() {
  return (
    <div
      className="min-h-screen w-full font-montserrat flex flex-col"
      style={{ backgroundColor: '#F1F1F1' }}
    >
      {/* Encabezado superior */}
      <header className="w-full bg-white h-[10vh] flex items-center justify-between px-6 border-b border-gray-300">
        <div className="flex items-center space-x-2">
          <img
            src="/src/client/assets/logos/MiEscuelaPrimeroCuadrado.png"
            alt="Logo Mexicanos Primero"
            className="h-10 w-10 object-cover"
          />
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Aprender importa
          </h1>
        </div>

        <nav className="hidden sm:flex space-x-6 font-semibold text-gray-700">
          <a href="#" className="hover:text-green-600">
            Mis chats
          </a>
          <a href="#" className="hover:text-green-600">
            Mi perfil
          </a>
          <a href="#" className="hover:text-green-600">
            Configuración
          </a>
        </nav>
      </header>

      {/* Contenedor principal */}
      <main className="flex-grow flex items-center justify-center w-full py-8">
        <section
          className="bg-white border border-gray-300 rounded-3xl w-[90%] max-w-[1000px] flex flex-col p-6"
        >
          {/* Título de la página */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">
            Chat
          </h2>

          {/* Contenedor de conversación (mensajes) */}
          <div className="flex flex-col space-y-4 mb-6">
            {/* Mensaje izquierda */}
            <div className="flex items-start">
              <img
                src="src/client/assets/other/persona.jpg"
                alt="Avatar usuario"
                className="w-12 h-12 object-cover rounded-full border border-gray-300 mr-3"
              />
              <div className="bg-gray-100 p-3 rounded-lg max-w-[70%]">
                <h4 className="font-bold">Pepe Pérez Hernández</h4>
                <p className="text-sm mt-1">
                  Claro, entonces ya solo cargamos los documentos
                  para iniciar con el proceso.
                </p>
              </div>
            </div>

            {/* Mensaje derecha */}
            <div className="flex items-start justify-end relative">
              <div className="bg-green-50 p-3 rounded-lg max-w-[70%] text-right">
                <h4 className="font-bold">Pepe Pérez Hernández</h4>
                <p className="text-sm mt-1">
                  Perfecto. ¡Estamos en contacto!
                </p>
              </div>
              {/* Ícono adicional para mostrar menú/acciones */}
              <div className="absolute top-0 right-[-30px] text-gray-500 text-2xl">
                ...
              </div>
            </div>
          </div>

          {/* Sección de Inicialización de apoyo */}
          <div className="border border-gray-300 rounded-lg p-4 bg-gray-50 mb-6">
            <h3 className="font-bold text-lg mb-2">
              Inicialización de apoyo
            </h3>
            <p className="text-sm text-gray-700 mb-4">
              Una persona en el chat ha inicializado un apoyo.  
              Para comenzar con el registro de un apoyo, ambas partes tendrían 
              que estar de acuerdo en iniciarlo; una vez hecho esto, se 
              escogerán los recursos que se enviarán y cómo se entregarán. 
              Así, un responsable revisará toda la información para garantizar 
              que el proceso sea confiable y seguro.  
              <br />
              En caso de no estar de acuerdo con compartir paquetes o documentos,
              puedes rechazarlo. Tu aprobación no será procesada hasta que 
              aceptes.
            </p>

            {/* Botones Aceptar / Rechazar */}
            <div className="flex space-x-4">
              <button
                className="px-6 py-2 rounded-full text-white bg-green-600 font-semibold text-sm hover:scale-105 transition-transform duration-300"
              >
                Aceptar
              </button>
              <button
                className="px-6 py-2 rounded-full text-black border border-black bg-white font-semibold text-sm hover:scale-105 transition-transform duration-300"
              >
                Rechazar
              </button>
            </div>
          </div>

          {/* Botón Iniciar apoyo */}
          <div className="w-full mb-4">
            <button
              className="w-full sm:w-auto px-8 py-2 mb-4 rounded-full text-white text-base sm:text-lg font-semibold"
              style={{ backgroundColor: '#009933' }}
            >
              Iniciar apoyo
            </button>
          </div>

          {/* Barra para escribir un mensaje */}
          <div className="flex items-center w-full">
            <input
              type="text"
              placeholder="Escribe un mensaje..."
              className="flex-grow border border-gray-300 rounded-l-full px-4 py-2 text-sm focus:outline-none"
            />
            <button
              className="bg-green-600 text-white rounded-r-full px-6 py-2 text-sm font-semibold hover:scale-105 transition-transform duration-300"
            >
              Enviar
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ChatDialog;