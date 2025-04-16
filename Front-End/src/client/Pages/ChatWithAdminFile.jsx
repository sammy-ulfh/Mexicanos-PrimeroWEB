import '@fontsource/montserrat';

function ChatWithAdminFile() {
  return (
    <div
      className="min-h-screen w-full font-montserrat flex flex-col"
      style={{ backgroundColor: '#F1F1F1' }}
    >
      {/* Encabezado */}
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
          className="relative bg-white border border-gray-300 rounded-3xl w-[90%] max-w-[1000px] flex flex-col p-6"
        >
          {/* Título interno */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">
            Chat
          </h2>

          {/* Avatares en la esquina superior derecha */}
          <div className="absolute top-6 right-6 flex -space-x-4">
            <img
              src="src/client/assets/other/persona.jpg"
              alt="Avatar 1"
              className="w-10 h-10 rounded-full border border-white"
              style={{ boxShadow: '0 0 0 2px #ccc' }}
            />
            <img
              src="src/client/assets/other/persona.jpg"
              alt="Avatar 2"
              className="w-10 h-10 rounded-full border border-white"
              style={{ boxShadow: '0 0 0 2px #ccc' }}
            />
            <img
              src="src/client/assets/other/persona.jpg"
              alt="Avatar 3"
              className="w-10 h-10 rounded-full border border-white"
              style={{ boxShadow: '0 0 0 2px #ccc' }}
            />
          </div>

          {/* Mensajes de chat */}
          <div className="flex flex-col space-y-4 mb-6">
            {/* Mensaje 1 (izquierda) */}
            <div className="flex items-start">
              <img
                src="src/client/assets/other/persona.jpg"
                alt="Avatar usuario"
                className="w-12 h-12 object-cover rounded-full border border-gray-300 mr-3"
              />
              <div className="bg-gray-100 p-3 rounded-lg max-w-[70%]">
                <h4 className="font-bold">Pepe Pérez Hernández</h4>
                <p className="text-sm mt-1">
                  Claro, entonces ya solo cargamos los documentos para iniciar con el proceso.
                </p>
              </div>
            </div>

            {/* Mensaje 2 (derecha) */}
            <div className="flex items-start justify-end relative">
              <div className="bg-green-50 p-3 rounded-lg max-w-[70%] text-right">
                <h4 className="font-bold">Pepe Pérez Hernández</h4>
                <p className="text-sm mt-1">
                  Perfecto. ¡Estamos en contacto!
                </p>
              </div>
              {/* Ícono de opciones */}
              <div className="absolute top-0 right-[-30px] text-gray-500 text-2xl">
                ...
              </div>
            </div>

            {/* Notificación: Mediador se ha unido */}
            <div className="flex justify-center">
              <span className="text-sm font-semibold text-gray-600 bg-gray-100 py-1 px-3 rounded-full">
                El mediador <strong>pepe027</strong> se ha unido al chat.
              </span>
            </div>

            {/* Mensaje 3 (del mediador, izquierda) */}
            <div className="flex items-start">
              <img
                src="src/client/assets/other/persona.jpg"
                alt="Avatar mediador"
                className="w-12 h-12 object-cover rounded-full border border-gray-300 mr-3"
              />
              <div className="bg-gray-100 p-3 rounded-lg max-w-[70%]">
                <h4 className="font-bold">pepe027</h4>
                <p className="text-sm mt-1">
                  Ya he solicitado el contrato de responsabilidad, lo subí acá.
                </p>
              </div>
            </div>

            {/* Mensaje 4 (del mediador, izquierda, con archivos) */}
            <div className="flex items-start">
              <img
                src="src/client/assets/other/persona.jpg"
                alt="Avatar mediador"
                className="w-12 h-12 object-cover rounded-full border border-gray-300 mr-3"
              />
              <div className="bg-gray-100 p-3 rounded-lg max-w-[70%]">
                <h4 className="font-bold">pepe027</h4>
                <p className="text-sm mt-1">
                  Subir tu archivo: <strong>Contrato de responsabilidad.pdf</strong>
                </p>
                {/* Botones de ejemplo y subir */}
                <div className="flex flex-wrap gap-3 mt-3">
                  <button
                    className="px-4 py-2 bg-green-600 text-white rounded-full text-sm font-semibold hover:scale-105 transition-transform duration-300"
                  >
                    Descargar ejemplo
                  </button>
                  <button
                    className="px-4 py-2 bg-white text-black border border-black rounded-full text-sm font-semibold hover:scale-105 transition-transform duration-300"
                  >
                    Subir desde el dispositivo
                  </button>
                </div>
                {/* Botón Enviar, relacionado a la subida del archivo */}
                <button
                  className="mt-3 px-6 py-2 bg-green-600 text-white rounded-full text-sm font-semibold hover:scale-105 transition-transform duration-300"
                >
                  Enviar
                </button>
              </div>
            </div>
          </div>

          {/* Barra de mensaje inferior */}
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

export default ChatWithAdminFile;