import '@fontsource/montserrat';

function PortalMatchingCelular() {
  return (
    <div
      className="min-h-screen w-full font-montserrat flex flex-col"
      style={{ backgroundColor: '#F1F1F1' }}
    >
      {/* Encabezado */}
      <header className="w-full bg-white flex items-center justify-between px-6 h-[10vh] border-b border-gray-300">
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
      </header>

      {/* Contenedor principal */}
      <main className="flex-grow w-full flex flex-col items-center py-6 px-4">
        {/* Barra de búsqueda */}
        <div className="w-full max-w-[800px] mb-6">
          <input
            type="text"
            placeholder="Busca por alguna necesidad, nombre de institución o nombre de donador..."
            className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none text-sm"
          />
        </div>

        {/* Tarjeta 1 */}
        <section className="w-full max-w-[800px] bg-white border border-gray-300 rounded-2xl p-4 mb-6 flex flex-col md:flex-row items-start md:items-center justify-between">
          {/* Institución (izquierda) */}
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <img
              src="src/client/assets/other/tecnologico-de-monterrey-blue.png"
              alt="Tecnológico de Monterrey"
              className="w-20 h-auto object-cover"
            />
            <div className="flex flex-col">
              <h3 className="font-bold text-lg md:text-xl">
                Tecnológico de Monterrey
              </h3>
              <p className="text-sm text-gray-700">
                Institución con una visión para mejorar
                las instalaciones en las que los alumnos puedan estudiar.
              </p>
            </div>
          </div>

          {/* Donador (derecha) */}
          <div className="flex items-center space-x-4">
            <img
              src="src/client/assets/other/persona.jpg"
              alt="Donador"
              className="w-16 h-16 object-cover rounded-full border border-gray-300"
            />
            <div className="flex flex-col">
              <h4 className="font-bold text-lg md:text-xl">
                Pepe Pérez Hernández
              </h4>
              <p className="text-sm text-gray-700">
                Espero ayudar a escuelas mediante la donación de libros o materiales de clase.
              </p>
            </div>
          </div>
        </section>

        {/* Tarjeta 2 (idéntica estructura) */}
        <section className="w-full max-w-[800px] bg-white border border-gray-300 rounded-2xl p-4 flex flex-col md:flex-row items-start md:items-center justify-between">
          {/* Institución (izquierda) */}
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <img
              src="src/client/assets/other/tecnologico-de-monterrey-blue.png"
              alt="Tecnológico de Monterrey"
              className="w-20 h-auto object-cover"
            />
            <div className="flex flex-col">
              <h3 className="font-bold text-lg md:text-xl">
                Tecnológico de Monterrey
              </h3>
              <p className="text-sm text-gray-700">
                Institución con una visión para mejorar
                las instalaciones en las que los alumnos puedan estudiar.
              </p>
            </div>
          </div>

          {/* Donador (derecha) */}
          <div className="flex items-center space-x-4">
            <img
              src="src/client/assets/other/persona.jpg"
              alt="Donador"
              className="w-16 h-16 object-cover rounded-full border border-gray-300"
            />
            <div className="flex flex-col">
              <h4 className="font-bold text-lg md:text-xl">
                Pepe Pérez Hernández
              </h4>
              <p className="text-sm text-gray-700">
                Espero ayudar a escuelas mediante la donación de libros o materiales de clase.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default PortalMatchingCelular;