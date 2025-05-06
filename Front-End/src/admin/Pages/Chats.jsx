import '@fontsource/montserrat';
import Initial from '../Layouts/Initial.jsx';
import { React, useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import TarjetaProcesos from '/src/GeneralComponents/TarjetaProcesos';
import TarjetaChats from '/src/GeneralComponents/TarjetaChats';
import getChats from '/src/client/Peticiones/chats/getChats.jsx';
import getProcesosActivos from '/src/client/Peticiones/procesos/getProcesosActivos';


function Chats() {

    const [Chats, setChats] = useState([]);
    const [Procesos, setProcesos] = useState([]);
    const [isActive, setIsActive] = useState(true);
    const [isChat, setIsChat] = useState(false);
    const [isProcess, setIsProcess] = useState(true);
    const navigate = useNavigate();

    const id = Number(localStorage.getItem('id'));
    const type = Number(localStorage.getItem('type'));

    useEffect(() => {
      async function fetchChats() {
        try {
          const data = await getChats();
          setChats(data);

          const data1 = await getProcesosActivos();
          setProcesos(data1);
        } catch (error) {
          console.error("Error loading chats", error);
        } finally {
          setIsProcess(false);
        }
      }
  
      fetchChats();
    }, []);


    return (
      <>
        <Initial>
          
          <section className="w-[80%] min-h-[57vh] lg:min-h-[50vh] xl:min-h-[50vh] p-[1%] rounded-3xl border border-gray-500 bg-white flex flex-col justify-start items-center">
            <div className='w-full h-[20vh] text-black font-bold font-montserrat flex flex-col justify-center items-center'>
              <h1 className='text-6xl'>Mis chats</h1>
              <div className='w-full h-[30%] m-[1%] flex justify-center items-center'>
                <button className='flex justify-center items-center border rounded-3xl w-[30%] h-[100%] m-[1%] hover:scale-110 transition duration-300 bg-[#009933] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl' onClick={() => {setIsChat(true); setIsProcess(false);}}>
                  Chats
                </button>
                <button className='flex justify-center items-center border rounded-3xl w-[30%] h-[100%] m-[1%] hover:scale-110 transition duration-300 bg-[#009933] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl' onClick={() => {setIsProcess(true); setIsChat(false);}}>
                  Procesos
                </button>
              </div>
            </div>
            {
              isProcess && (
                <>
                  <h2 className='font-bold text-4xl'>Procesos</h2>
                  <div className='w-full h-[6vh] m-[1%] flex justify-center items-center'>
                  <button className='flex justify-center items-center border rounded-3xl w-[20%] h-[100%] m-[1%] hover:scale-110 transition duration-300 bg-[#009933] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl' onClick={() => setIsActive(false)}>
                    Completados
                  </button>
                  <button className='flex justify-center items-center border rounded-3xl w-[20%] h-[100%] m-[1%] hover:scale-110 transition duration-300 bg-[#009933] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl' onClick={() => setIsActive(true)}>
                    Activos
                  </button>
                  </div>
                { 
                  isActive ? (
                  Procesos.length > 0 ? (
                  Procesos.map((tarjeta) => (
                    <TarjetaProcesos
                      user_id={id}
                      info={tarjeta}
                      rol={type}
                      navigate={navigate}
                    />
                  ) )) : (
                    <p>Sin procesos</p>
                  )
                  ) : (
                    <p>Procesos completados</p>
                  )
                }
                </>
              )
            }

            {
              isChat && (
                <>

                  <h2 className='font-bold text-4xl'>Chats</h2>
                { 
                  Chats.length > 0 ? (
                  Chats.map((tarjeta) => { 
                      return (
                        <TarjetaChats
                        user_id={id}
                        info={tarjeta}
                        rol={type}
                        navigate={navigate}
                        route='/admin/chat'
                        perfilRoute='/admin/public/perfil'
                        />
                      );
                    })
                  ) : (
                    <p>Sin chats</p>
                  )
                }
                </>
              )
            }
          </section>
        </Initial>
      </>
    )
  }
  
  export default Chats
