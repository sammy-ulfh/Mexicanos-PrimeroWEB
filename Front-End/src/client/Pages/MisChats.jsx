import '@fontsource/montserrat';

function MisChats() {
  return (
    <div 
      className="min-h-screen w-full font-montserrat flex flex-col items-center" 
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
            Inicio
          </a>
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
        {/* Tarjeta contenedora de los chats */}
        <section 
          className="bg-white border border-gray-300 rounded-3xl w-[90%] max-w-[900px] flex flex-col items-center p-6"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">
            Mis chats
          </h2>

          {/* Lista de chats */}
          {[1, 2, 3, 4].map((item) => (
            <div 
              key={item} 
              className="w-full flex flex-col md:flex-row items-center md:justify-between border-b border-gray-300 last:border-0 py-4"
            >
              {/* Perfil e información */}
              <div className="flex items-center w-full md:w-[65%]">
                <img
                  src="src/client/assets/other/persona.jpg"
                  alt="Imagen del usuario"
                  className="w-14 h-14 object-cover rounded-full border border-gray-300 mr-4"
                />
                <div className="flex flex-col">
                  <h3 className="font-bold text-lg sm:text-xl">
                    Pepe Pérez Hernández
                  </h3>
                  <p className="text-sm text-gray-700 mt-1">
                    Claro, entonces ya solo cargamos los documentos para iniciar con el proceso.
                  </p>
                </div>
              </div>

              {/* Botones */}
              <div className="mt-4 md:mt-0 flex space-x-3 w-full md:w-auto justify-center md:justify-end">
                <button
                  className="px-4 py-2 rounded-full text-white bg-green-600 font-semibold text-sm hover:scale-105 transition-transform duration-300"
                >
                  Ver perfil
                </button>
                <button
                  className="px-4 py-2 rounded-full text-black border border-black bg-white font-semibold text-sm hover:scale-105 transition-transform duration-300"
                >
                  Entrar al chat
                </button>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

export default MisChats;