const TarjetaChats = ({ user_id, chat_id, info, last_message, navigate, rol }) => (
  <article className='p-[2%] w-[80%] font-bold font-montserrat flex justify-center items-center text-black font-montserrat border rounded-3xl m-[1%]'>
    <div className='w-[20%] h-[7vh] flex justify-center items-center'>
      <img src={info.image} alt={info.name} className='h-full w-[30%] rounded-full object-cover scale-150' />
    </div>
    <div className='flex flex-col w-[40%] h-full justify-center items-center'>
      <h2 className='text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>{info.name}</h2>  
      <button className='border rounded-3xl text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl w-[50%] md:w-[40%] lg:w-[40%] xl:w-[40%] h-[5vh] mt-[1%] bg-[#009933] hover:scale-105 transition duration-300' onClick={() => navigate(rol !=  'admin' ? '/portal/perfil' : '/admin/public/perfil', { state: [info.type,info.id] })}>
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
      {last_message}
      </span>
      <button className='w-[100%] xl:w-[50%] 2xl:w-[50%] h-[40%] flex justify-center items-center bg-[#009933] mt-[1%] rounded-3xl border font-bold font-montserrat hover:scale-105 transition duration-300 text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl' onClick={() => navigate(rol != 'admin' ? '/portal/chat' : '/admin/chat', { state: chat_id })}>
        Entrar al chat
      </button>
    </div>

  </article>
);

export default TarjetaChats
