import '@fontsource/montserrat';
import Initial from '../Layouts/Initial.jsx';
import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import infoApoyos from '../Peticiones/Apoyos/infoApoyos.jsx';

const Tarjeta = ({type, navigate, data}) => (
  <article className='p-[2%] w-[80%] font-bold font-montserrat flex flex-col justify-center items-center text-black font-montserrat border rounded-3xl m-[1%]'>
    <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>{type}</h2>
    <button className='border rounded-3xl text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl w-[50%] md:w-[40%] lg:w-[40%] xl:w-[40%] h-[5vh] mt-[1%] bg-[#009933] hover:scale-105 transition duration-300' onClick={() => navigate('/admin/solicitudes/apoyos/info', { state: data })}>
      Ver información
    </button>
  </article>
);


function Apoyos() {
 
    const navigate = useNavigate();

    const [infoSupport, setInfoSupport] = useState([]);


    useEffect(() => {
      const fetchInfo = async () => {
        const data_apoyos = await infoApoyos();
        if(!data_apoyos){
          setInfoSupport([]);
        }else{
        setInfoSupport(data_apoyos);
        }
      };
      fetchInfo();
    }, []);
    

    return (
      <>
        <Initial>
          
          <section className="w-[80%] p-[1%] rounded-3xl border border-gray-500 bg-white flex flex-col justify-start items-center">
            <div className='w-full h-[20vh] text-black font-bold font-montserrat flex flex-col justify-center items-center'>
              <h1 className='text-6xl'>Apoyos</h1>
            </div>
           
            {
              infoSupport.length > 0 ? (
                infoSupport.map((tarjeta) => (         
                  <Tarjeta key={tarjeta.id_apoyo} type={tarjeta.tipo_apoyo_escuela} navigate={navigate} data={tarjeta}  />
                ))
              ) : (
                <p>Sin tarjeta disponibles.</p>
              )
            }
          </section>
        </Initial>
      </>
    )
  }
  
  export default Apoyos
  
