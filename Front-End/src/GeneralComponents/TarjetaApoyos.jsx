const TarjetaApoyos = ({ type, json }) => {
  const tipo = type === 2 ? json.tipo_apoyo_escuela : json.tipo_apoyo_donador;
  const descripcion = type === 2 ? json.descripcion_escuela : json.descripcion_donador;

  return (
    <article className='border rounded-3xl w-[90%] mb-[2%] p-[2%]'>
      <span className='mt-[1%] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl font-bold flex justify-start items-center pl-[2%]'>
        Tipo de apoyo: {tipo}
      </span>
      <div className='flex flex-col justify-center items-start p-[2%]'>
        <h2 className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl font-bold'>
          Resumen del apoyo:
        </h2>
        <p className='text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl pt-[1%]'>
          {descripcion}
        </p>
      </div>
    </article>
  );
};

export default TarjetaApoyos