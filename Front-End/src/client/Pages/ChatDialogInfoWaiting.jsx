import '@fontsource/montserrat';

function ChatDialogInfoWaiting() {
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
          className="bg-white border border-gray-300 rounded-3xl w-[90%] max-w-[1000px] flex flex-col p-6"
        >
          {/* Encabezado interno */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">
            Chat
          </h2>

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
              {/* Ícono extra (menú u opciones) */}
              <div className="absolute top-0 right-[-30px] text-gray-500 text-2xl">
                ...
              </div>
            </div>
          </div>

          {/* Sección: Resumen del apoyo */}
          <div className="border border-gray-300 rounded-lg p-4 bg-gray-50 mb-6">
            <h3 className="font-bold text-lg mb-4">
              Resumen del apoyo
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center mb-4">
              {/* Campo: Tipo de apoyo */}
              <div>
                <label
                  className="block font-semibold text-sm mb-1"
                  htmlFor="tipoApoyo"
                >
                  Tipo de apoyo
                </label>
                <input
                  id="tipoApoyo"
                  type="text"
                  placeholder="Ej. Donación de libros"
                  className="w-full p-2 border border-gray-300 rounded text-sm"
                />
              </div>

              {/* Campo: Resumen */}
              <div>
                <label
                  className="block font-semibold text-sm mb-1"
                  htmlFor="resumenApoyo"
                >
                  Resumen
                </label>
                <input
                  id="resumenApoyo"
                  type="text"
                  placeholder="Descripción breve del proceso"
                  className="w-full p-2 border border-gray-300 rounded text-sm"
                />
              </div>
            </div>

            {/* Subtítulo: Proceso en espera */}
            <h4 className="text-base sm:text-lg font-bold mb-2">
              Proceso en espera
            </h4>
            <p className="text-sm text-gray-700 mb-4">
              Se ha enviado una solicitud para iniciar un proceso de apoyo, para ello
              tendrá que ser aceptado por un mediador, el cual será directamente agregado
              al chat una vez acepte la solicitud. Luego compartirá las indicaciones
              a seguir.
            </p>

            {/* Botón Aceptar */}
            <button
              className="px-6 py-2 rounded-full text-white bg-green-600 font-semibold text-sm hover:scale-105 transition-transform duration-300"
            >
              Aceptar
            </button>
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

export default ChatDialogInfoWaiting;