import '@fontsource/montserrat';
import Initial from '../Layouts/Initial.jsx';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

import TarjetaApoyos from '/src/GeneralComponents/TarjetaApoyos';

function InfoApoyo(){

  const loca = useLocation();
  const data = loca.state;
  console.log(data);
  

  return(
    <>
      <Initial>
          
          <section className="relative w-[80%] min-h-[57vh] font-montserrat lg:min-h-[50vh] xl:min-h-[50vh] p-[1%] rounded-3xl border border-gray-500 bg-white flex flex-col justify-start items-center">
            <div className='w-[100%] h-[20vh] text-black font-bold font-montserrat flex flex-col justify-center items-center'>
              <h1 className='text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-6xl'>{data.Escuela.type}</h1>
            </div>

            {data?.tipo_apoyo_escuela && <TarjetaApoyos type={2} json={data} />}
            {data?.tipo_apoyo_donador && <TarjetaApoyos type={3} json={data} />}
              
          </section>
        </Initial>
 
    </>
  );
}

export default InfoApoyo
