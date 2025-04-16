import '@fontsource/montserrat';

function Chat() {
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
          {/* Título o indicador de página */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">
            Chat
          </h2>

          {/* Contenedor de conversación */}
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
            <div className="flex items-start justify-end">
              <div className="bg-green-50 p-3 rounded-lg max-w-[70%] text-right">
                <h4 className="font-bold">Pepe Pérez Hernández</h4>
                <p className="text-sm mt-1">
                  Perfecto. ¡Estamos en contacto!
                </p>
              </div>
            </div>
          </div>

          {/* Controles en la parte inferior */}
          <div className="w-full">
            <button
              className="w-full sm:w-auto px-8 py-2 mb-4 rounded-full text-white text-base sm:text-lg font-semibold"
              style={{ backgroundColor: '#009933' }}
            >
              Iniciar apoyo
            </button>

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
          </div>
        </section>
      </main>
    </div>
  );
}

export default Chat;