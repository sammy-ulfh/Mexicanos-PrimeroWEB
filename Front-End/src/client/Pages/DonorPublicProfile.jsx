import '@fontsource/montserrat';

function DonorPublicProfile() {
  return (
    <div 
      className="min-h-screen w-full font-montserrat flex flex-col items-center"
      style={{ backgroundColor: '#F1F1F1' }}
    >
      {/* Encabezado superior */}
      <header className="w-full bg-white h-[10vh] flex items-center justify-between px-6 border-b border-gray-300">
        {/* Logo / Marca */}
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

        {/* Menú de usuario */}
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
        {/* Tarjeta que muestra la información del donador */}
        <section 
          className="bg-white border border-gray-300 rounded-3xl w-[90%] max-w-[800px] flex flex-col items-center p-6"
        >
          {/* Nombre y datos de la persona */}
          <div className="w-full flex flex-col items-center">
            <img
              src="src/client/assets/other/persona.jpg"
              alt="Imagen de la persona"
              className="w-24 h-24 object-cover rounded-full border border-gray-300 mb-4"
            />
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
              Pepe Pérez Hernández
            </h2>
            <p className="mt-2 text-sm sm:text-base text-center max-w-[80%]">
              Espero ayudar a escuelas mediante la donación de libros 
              o materiales de clase.
            </p>
            <a
              href="mailto:example@correo.ext"
              className="mt-2 text-blue-600 text-sm sm:text-base hover:underline"
            >
              example@correo.ext
            </a>
          </div>

          {/* Botón de solicitar apoyo */}
          <button
            className="mt-6 px-8 py-2 rounded-full text-white text-base sm:text-lg font-semibold"
            style={{ backgroundColor: '#009933' }}
          >
            Solicitar apoyo
          </button>

          {/* Imagen inferior (niños corriendo) */}
          <div className="w-full mt-6">
            <img
              src="src/client/assets/pages/principal/happy_runing.jpg"
              alt="Niños corriendo felizmente"
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default DonorPublicProfile;