import '@fontsource/montserrat';
import Initial from '../Layouts/Initial.jsx';
import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Info = [
  {
      chat_id: 1,
      info: {
        'Escuela': {
        id: 1,
        name: 'Everardo Romero Arenas #1',
        type: 'Donación de libros',
        resumen: 'El proceso de donación que recibiremos en este caso será de libros. Esto lo usaremos para poder crear una pequeña biblioteca de la cual los niños puedan tomar libros para leerlos y aprender cosas nuevas.'
        },
        'Donador': {
        id: 2,
        name: 'Everardo Romero Arenas #1',
        type: 'Donación de libros',
        resumen: 'El proceso de donación que se realizará, será para aportar libros que ayuden a que los niños tengan material para aprender cosas extras o leer temas de interés.'
        }
      },
      type: 'Donación de libros',
      last_message: 'El proceso de donación que recibiremos en este caso será de libros. Esto lo usaremos para poder crear una pequeña biblioteca de la cual los niños puedan tomar libros para leerlos y aprender cosas nuevas.'
  },
  {
      chat_id: 1,
      info: {
        'Escuela': {
        id: 1,
        name: 'Everardo Romero Arenas #1',
        type: 'Donación de libros',
        resumen: 'El proceso de donación que recibiremos en este caso será de libros. Esto lo usaremos para poder crear una pequeña biblioteca de la cual los niños puedan tomar libros para leerlos y aprender cosas nuevas.'
        },
        'Donador': {
        id: 2,
        name: 'Everardo Romero Arenas #1',
        type: 'Donación de libros',
        resumen: 'El proceso de donación que se realizará, será para aportar libros que ayuden a que los niños tengan material para aprender cosas extras o leer temas de interés.'
        }
      },
      type: 'Donación de libros',
      last_message: 'El proceso de donación que recibiremos en este caso será de libros. Esto lo usaremos para poder crear una pequeña biblioteca de la cual los niños puedan tomar libros para leerlos y aprender cosas nuevas.'
  },
  {
      chat_id: 1,
      info: {
        'Escuela': {
        id: 1,
        name: 'Everardo Romero Arenas #1',
        type: 'Donación de libros',
        resumen: 'El proceso de donación que recibiremos en este caso será de libros. Esto lo usaremos para poder crear una pequeña biblioteca de la cual los niños puedan tomar libros para leerlos y aprender cosas nuevas.'
        },
        'Donador': {
        id: 2,
        name: 'Everardo Romero Arenas #1',
        type: 'Donación de libros',
        resumen: 'El proceso de donación que se realizará, será para aportar libros que ayuden a que los niños tengan material para aprender cosas extras o leer temas de interés.'
        }
      },
      type: 'Donación de libros',
      last_message: 'El proceso de donación que recibiremos en este caso será de libros. Esto lo usaremos para poder crear una pequeña biblioteca de la cual los niños puedan tomar libros para leerlos y aprender cosas nuevas.'
  },
  {
      chat_id: 1,
      info: {
        'Escuela': {
        id: 1,
        name: 'Everardo Romero Arenas #1',
        type: 'Donación de libros',
        resumen: 'El proceso de donación que recibiremos en este caso será de libros. Esto lo usaremos para poder crear una pequeña biblioteca de la cual los niños puedan tomar libros para leerlos y aprender cosas nuevas.'
        },
        'Donador': {
        id: 2,
        name: 'Everardo Romero Arenas #1',
        type: 'Donación de libros',
        resumen: 'El proceso de donación que se realizará, será para aportar libros que ayuden a que los niños tengan material para aprender cosas extras o leer temas de interés.'
        }
      },
      type: 'Donación de libros',
      last_message: 'El proceso de donación que recibiremos en este caso será de libros. Esto lo usaremos para poder crear una pequeña biblioteca de la cual los niños puedan tomar libros para leerlos y aprender cosas nuevas.'
  },
  {
      chat_id: 1,
      info: {
        'Escuela': {
        id: 1,
        name: 'Everardo Romero Arenas #1',
        type: 'Donación de libros',
        resumen: 'El proceso de donación que recibiremos en este caso será de libros. Esto lo usaremos para poder crear una pequeña biblioteca de la cual los niños puedan tomar libros para leerlos y aprender cosas nuevas.'
        },
        'Donador': {
        id: 2,
        name: 'Everardo Romero Arenas #1',
        type: 'Donación de libros',
        resumen: 'El proceso de donación que se realizará, será para aportar libros que ayuden a que los niños tengan material para aprender cosas extras o leer temas de interés.'
        }
      },
      type: 'Donación de libros',
      last_message: 'El proceso de donación que recibiremos en este caso será de libros. Esto lo usaremos para poder crear una pequeña biblioteca de la cual los niños puedan tomar libros para leerlos y aprender cosas nuevas.'
  }
    ]

const Tarjeta = ({chat_id, type, last_message, navigate, data}) => (
  <article className='p-[2%] w-[80%] h-auto font-bold font-montserrat flex justify-center items-start text-black font-montserrat border rounded-3xl m-[1%]'>
    <div className='w-[60%] h-[15vh] flex flex-col items-center justify-center'>
      <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>{type}</h2>
      <button className='border rounded-3xl text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl w-[80%] lg:w-[40%] xl:w-[40%] h-[5vh] mt-[1%] bg-[#009933] hover:scale-105 transition duration-300' onClick={() => navigate('/admin/apoyos/info', { state: data })}>
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
      {last_message}
      </span>
      <button className='w-[100%] xl:w-[50%] 2xl:w-[50%] h-[40%] flex justify-center items-center bg-[#009933] mt-[1%] rounded-3xl border font-bold font-montserrat hover:scale-105 transition duration-300 text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl' onClick={() => navigate('/admin/chat', { state: chat_id })}>
        Entrar al chat
      </button>
    </div>
  </article>
);

function Chats() {

    const [isActive, setIsActive] = useState(true);
    const navigate = useNavigate();

    return (
      <>
        <Initial>
          
          <section className="w-[80%] min-h-[57vh] lg:min-h-[50vh] xl:min-h-[50vh] mt-[2%] p-[1%] rounded-3xl border border-gray-500 bg-white flex flex-col justify-start items-center">
            <div className='w-full h-[20vh] text-black font-bold font-montserrat flex flex-col justify-center items-center'>
              <h1 className='text-6xl'>Mis chats</h1>
              <div className='w-full h-[30%] m-[1%] flex justify-center items-center'>
                <button className='flex justify-center items-center border rounded-3xl w-[30%] h-[100%] m-[1%] hover:scale-110 transition duration-300 bg-[#009933] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl' onClick={() => setIsActive(false)}>
                  Completados
                </button>
                <button className='flex justify-center items-center border rounded-3xl w-[30%] h-[100%] m-[1%] hover:scale-110 transition duration-300 bg-[#009933] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl' onClick={() => setIsActive(true)}>
                  Activos
                </button>
              </div>
            </div>
            {
              Info.length > 0 && isActive ? (
                Info.map((tarjeta) => (
                  <Tarjeta chat_id={tarjeta.chat_id} type={tarjeta.type} last_message={tarjeta.last_message} navigate={navigate} data={tarjeta.info} />
                ))
              ) : (
                <span className='font-bold font-montserrat text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl mt-[16%] mb-[2%]'>Sin chats disponibles.</span>
              )
            }
          </section>
        </Initial>
      </>
    )
  }
  
  export default Chats
