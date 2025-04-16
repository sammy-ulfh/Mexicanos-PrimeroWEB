const TarjetaMensajes = ({id, key, info, message, hour, day, user_message_id, type}) => (
  <div className={`w-full h-auto flex justify-center ${id == user_message_id ? ('justify-end') : ('justify-start')} items-center`}>
    <article className='p-[2%] w-[50%] h-auto font-bold font-montserrat flex flex-col justify-center items-start text-black font-montserrat border rounded-3xl m-[1%] bg-white'>
      <header className='w-[100%] p-[1%] flex justify-start items-center'>
        <img src={info.users_info.images[user_message_id]} alt={info.users_info.images[user_message_id]} className='w-[20%] rounded-full'/>
        <div className='w-full flex flex-col'>
          <h3 className='ml-[5%] text-2xl'>{info.users_info.names[user_message_id]}</h3>
          <span className='ml-[5%] w-[25%] p-[0.5%] bg-[#009933] rounded-3xl flex justify-center items-center'>{type}</span>
        </div>
      </header>
      <span className='w-[90%] p-[2%]'>
        {message}
      </span>
      <span className='w-[90%] flex justify-start'>
        <p>{hour} ~ </p>
        <p>{day}</p>
      </span>
    </article>
  </div>
);

export default TarjetaMensajes
