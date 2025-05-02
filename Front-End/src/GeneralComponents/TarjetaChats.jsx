const TarjetaChats = ( { user_id, info, rol, navigate } ) => (
  <article className='p-[2%] w-[80%] font-bold font-montserrat flex justify-center items-center text-black font-montserrat border rounded-3xl m-[1%]'>
    <div className='w-[20%] h-[7vh] flex justify-center items-center'>
      <img src={rol == 2 && (info.img_donante || info.img_admin) || rol == 3 && (info.img_escuela || info.img_admin) || rol == 1 && (info.img_escuela || info.img_donante)} alt='' className='h-full w-[30%] rounded-full object-cover scale-150' />
    </div>
    <div className='flex flex-col w-[40%] h-full justify-center items-center'>
      <h2 className='text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>{rol == 2 && (info.nombre_donante || info.nombre_admin) || rol == 3 && (info.nombre_escuela || info.nombre_admin) || rol == 1 && (info.nombre_escuela || info.nombre_donante)}</h2>  
      <button className='border rounded-3xl text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl w-[50%] md:w-[40%] lg:w-[40%] xl:w-[40%] h-[5vh] mt-[1%] bg-[#009933] hover:scale-105 transition duration-300'
      onClick={() => navigate('/portal/perfil', { state: {id: rol == 2 && (info.id_donante || info.id_admin) || rol == 3 && (info.id_escuela || info.id_admin) || rol == 1 && (info.id_escuela || info.id_donante) }})}>
        Ver perfil
      </button>
    </div>
    <div className='w-[40%] h-[15vh] flex flex-col items-center'>
      <span className='w-[100%] h-[60%] overflow-hidden p-2 flex justify-center items-center' style={{
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: 3,
        overflow: "hidden"
      }}>
      {info.ultimo_mensaje}
      </span>
      <button className='w-[100%] xl:w-[50%] 2xl:w-[50%] h-[40%] flex justify-center items-center bg-[#009933] mt-[1%] rounded-3xl border font-bold font-montserrat hover:scale-105 transition duration-300 text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl' 
      onClick={() => navigate('/portal/chat', { state: {id_chat: info.id_chat} })}>
        Entrar al chat
      </button>
    </div>

  </article>
);

export default TarjetaChats
