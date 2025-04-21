import '@fontsource/montserrat';
import Initial from '../Layouts/Initial.jsx';
import { React, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import infoEscuelas from '../Peticiones/infoCuentas/infoEsuelas.jsx';
import infoDonantes from '../Peticiones/infoCuentas/infoDonantes.jsx';

const Tarjeta = ({ user_id, name, navigate, data, dir, type }) => (
  <article className='p-[2%] w-[80%] font-bold font-montserrat flex justify-center items-center text-black font-montserrat border rounded-3xl m-[1%]'>
    <div className='flex flex-col w-[90%] h-full justify-center items-center'>
      <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>{name}</h2>  
      <button className='border rounded-3xl text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl w-[50%] md:w-[40%] lg:w-[40%] xl:w-[40%] h-[5vh] mt-[1%] bg-[#009933] hover:scale-105 transition duration-300' onClick={() => navigate(dir, { state: { data: data, type: type } })}>
        Ver información
      </button>
    </div>
  </article>
);

function Cuentas() {
 
    const navigate = useNavigate();
    const locate = useLocation();
    const type = locate.state?.type;

    const [isSchool, setIsSchool] = useState(false);
    const [isDonator, setIsDonator] = useState(true);


    const [infoSchool, setInfoSchool] = useState([]);
    const [infoDonator, setInfoDonator] = useState([]);

    useEffect(() => {
      const fetchInfo = async () => {
        const data_school = await infoEscuelas();
        setInfoSchool(data_school);

        const data_donator = await infoDonantes();
        setInfoDonator(data_donator);
      };
      fetchInfo();
    }, []);

    return (
      <>
        <Initial>
          
          <section className="w-[80%] min-h-[65vh] p-[1%] rounded-3xl border border-gray-500 bg-white flex flex-col justify-start items-center">
            <div className='w-full h-[20vh] text-black font-bold font-montserrat flex flex-col justify-center items-center'>
              <h1 className='text-6xl'>Cuentas</h1>
              <div className='w-full h-[30%] m-[1%] flex justify-center items-center'>
                <button className='flex justify-center items-center border rounded-3xl w-[30%] h-[100%] m-[1%] hover:scale-110 transition duration-300 bg-[#009933] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl' onClick={() => {setIsSchool(true); setIsDonator(false)}}>
                  Escuelas
                </button>
                <button className='flex justify-center items-center border rounded-3xl w-[30%] h-[100%] m-[1%] hover:scale-110 transition duration-300 bg-[#009933] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl' onClick={() => {setIsSchool(false); setIsDonator(true)}}>
                  Donadores
                </button>
              </div>
            </div>
            
              
            {
              isDonator && (
                <>

                  <h2 className='font-bold text-4xl'>Donadores</h2>
                { 
                  infoDonator.length > 0 ? (
                    infoDonator.map((tarjeta) => (
                      <Tarjeta
                        user_id={tarjeta.id_usuario}
                        name={tarjeta.nombre_responsable}
                        navigate={navigate}
                        data={tarjeta}
                        dir="/admin/cuentas/donadores"
                        type={type}
                      />
                    ))
                  ) : (
                    <p>Sin solicitudes de cuentas para donadores</p>
                  )
                }
                </>
              )
            }

            {
              isSchool && (
                <>

                  <h2 className='font-bold text-4xl'>Escuelas</h2>
                { 
                  infoSchool.length > 0 ? (
                    infoSchool.map((tarjeta) => (
                      <Tarjeta
                        user_id={tarjeta.id_usuario}
                        name={tarjeta.nombre_responsable}
                        navigate={navigate}
                        data={tarjeta}
                        dir="/admin/cuentas/escuelas"
                        type={type}
                      />
                    ))
                  ) : (
                    <p>Sin solicitudes de cuentas para escuelas</p>
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
  
  export default Cuentas
  
