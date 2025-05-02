const TarjetaProcesos = () => (
  <article className='p-[2%] w-[80%] h-auto font-bold font-montserrat flex justify-center items-start text-black font-montserrat border rounded-3xl m-[1%]'>
    <div className='w-[60%] h-[15vh] flex flex-col items-center justify-center'>
      <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'></h2>
      <button className='border rounded-3xl text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl w-[80%] lg:w-[40%] xl:w-[40%] h-[5vh] mt-[1%] bg-[#009933] hover:scale-105 transition duration-300' >
        Ver información
      </button>
    </div>
    <div className='w-[40%] h-[15vh] flex flex-col items-center'>
      <span className='w-[100%] h-[60%] overflow-hidden p-2 flex justify-center items-center' style={{
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: 3,
        overflow: "hidden"
      }}>
      
      </span>
      <button className='w-[100%] xl:w-[50%] 2xl:w-[50%] h-[40%] flex justify-center items-center bg-[#009933] mt-[1%] rounded-3xl border font-bold font-montserrat hover:scale-105 transition duration-300 text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl' >
        Entrar al chat
      </button>
    </div>
  </article>
);

export default TarjetaProcesos
