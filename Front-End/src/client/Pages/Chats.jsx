import '@fontsource/montserrat';
import MainLayout from '../Layouts/MainLayout';
import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TarjetaProcesos from '../../GeneralComponents/TarjetaProcesos';
import TarjetaChats from '../../GeneralComponents/TarjetaChats';

const Chats = [
  {
      chat_id: 1,
      user_id: 2,
      rol: 'school',
      info: {
        'Escuela': {
        id: 1,
        name: 'Miguel Hidalgo y Costilla de Sabrade Robles',
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.recreoviral.com%2Fwp-content%2Fuploads%2F2015%2F01%2Fmitad-2-personas-4.jpg&f=1&nofb=1&ipt=a7b13ff6fcf7dabb797806f3cb1aa6da660c7c25a92b157dd688336252bab819',
        type: 'school'
        },
        'Donador': {
        id: 2,
        name: 'Jose Pepe',
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcovalto.com%2Fstatic%2F78498ccda70933a5f1e3edc3e40d3cbe%2F34aca%2FHero_Mobile_Cuenta_Personas_V1_1_8046e424ea.webp&f=1&nofb=1&ipt=59a7bca374102c037d0917182ea9914e652a59f006a6afe653ad45790c6088da',
        type: 'donator'
        }
      },
      last_message: 'El proceso de donación que recibiremos en este caso será de libros. Esto lo usaremos para poder crear una pequeña biblioteca de la cual los niños puedan tomar libros para leerlos y aprender cosas nuevas.'
  }
    ]


const Procesos = [
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

function ClientChats() {

    const [isProcess, setIsProcess] = useState(true);
    const navigate = useNavigate();

    const user_rol = 'school';

    return (
      <>
        <MainLayout>
          
          <section className="w-[80%] min-h-[57vh] lg:min-h-[50vh] xl:min-h-[50vh] p-[1%] rounded-3xl border border-gray-500 bg-white flex flex-col justify-start items-center">
            <div className='w-full h-[20vh] text-black font-bold font-montserrat flex flex-col justify-center items-center'>
              <h1 className='text-6xl'>Mis chats</h1>
              <div className='w-full h-[30%] m-[1%] flex justify-center items-center'>
                <button className='flex justify-center items-center border rounded-3xl w-[30%] h-[100%] m-[1%] hover:scale-110 transition duration-300 bg-[#009933] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl' onClick={() => setIsProcess(false)}>
                  Chats
                </button>
                <button className='flex justify-center items-center border rounded-3xl w-[30%] h-[100%] m-[1%] hover:scale-110 transition duration-300 bg-[#009933] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl' onClick={() => setIsProcess(true)}>
                  Procesos
                </button>
              </div>
            </div>              
              {
                Procesos.length > 0 && isProcess ? (
                  Procesos.map((tarjeta) => (
                    <TarjetaProcesos
                      chat_id={tarjeta.chat_id}
                      type={tarjeta.type}
                      last_message={tarjeta.last_message}
                      navigate={navigate}
                      data={tarjeta.info}
                      user_rol={user_rol}
                    />
                  ))
                ) : Chats.length > 0 && !isProcess ? (
                  Chats.map((tarjeta) => {
                    const esEscuela = tarjeta.user_id !== tarjeta.info.Escuela.id;
                    const info = esEscuela ? tarjeta.info['Escuela'] : tarjeta.info['Donador'];
                    return (
                      <TarjetaChats
                        user_id={tarjeta.user_id}
                        chat_id={tarjeta.chat_id}
                        info={info}
                        last_message={tarjeta.last_message}
                        navigate={navigate}
                        rol={tarjeta.rol}
                      />
                    );
                  })
                ) : (
                  <div>Sin chats disponibles.</div>
                )
              }
          </section>
        </MainLayout>
      </>
    )
  }
  
  export default ClientChats
