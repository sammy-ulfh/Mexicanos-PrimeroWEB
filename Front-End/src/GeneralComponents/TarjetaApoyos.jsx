const TarjetaApoyos = ({ id, json }) => (
    <article id={id} className='border rounded-3xl w-[90%] mb-[2%] p-[2%]'>
      <span className='mt-[1%] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-bold flex justify-center items-center p-[1%]'>
        {id}: {json.name}
      </span>

      <span className='mt-[1%] pl-[1%] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl font-bold flex justify-start items-center pl-[2%]'>
        Tipo de apoyo: {json.type}
      </span>
      <div className='flex flex-col justify-center items-start p-[2%]'>
        <h2 className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl font-bold'>
          Resumen del apoyo:
        </h2>
        <p className='text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl pt-[1%]'>
          {json.resumen}
        </p>
      </div>
    </article>
);

export default TarjetaApoyos
