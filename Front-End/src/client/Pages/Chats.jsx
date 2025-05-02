import '@fontsource/montserrat';
import MainLayout from '../Layouts/MainLayout';
import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TarjetaProcesos from '../../GeneralComponents/TarjetaProcesos';
import TarjetaChats from '../../GeneralComponents/TarjetaChats';
import getChats from '../Peticiones/chats/getChats';
import getProcesosActivos from '../Peticiones/procesos/getProcesosActivos';

function ClientChats() {

    const [isProcess, setIsProcess] = useState(true);
    const [Chats, setChats] = useState([]);
    const [Procesos, setProcesos] = useState([]);

    const navigate = useNavigate();

    const id = Number(localStorage.getItem('id'));
    const type = Number(localStorage.getItem('type'));
    console.log(Procesos);

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
                      user_id={id}
                      info={tarjeta}
                      rol={type}
                      navigate={navigate}
                    />
                  ))
                ) : Chats.length > 0 && !isProcess ? (
                  Chats.map((tarjeta) => {
                    return (
                      <TarjetaChats
                        user_id={id}
                        info={tarjeta}
                        rol={type}
                        navigate={navigate}
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
