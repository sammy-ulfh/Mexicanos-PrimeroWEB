import '@fontsource/montserrat';
import Initial from '../Layouts/Initial.jsx';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';


const Tarjeta = ({ id, json }) => (
    <article id={id} className='border rounded-3xl w-[90%] mb-[2%] p-[2%]'>
      <span className='mt-[1%] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-bold flex justify-center items-center p-[1%]'>
        {id}: {json.name}
      </span>

      <span className='mt-[1%] pl-[1%] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl font-bold flex justify-start items-center pl-[2%]'>
        Tipo de apoyo: {json.type}
      </span>
      <div className='flex flex-col justify-center items-start p-[2%]'>
        <h2 className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl font-bold'>
          Resumen del apoyo:
        </h2>
        <p className='text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl pt-[1%]'>
          {json.resumen}
        </p>
      </div>
    </article>
);


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

          {
            <Tarjeta id={'Escuela'} json={data.Escuela} />
          }
          {
            <Tarjeta id={'Donador'} json={data.Donador} />
          }
              
          </section>
        </Initial>
 
    </>
  );
}

export default InfoApoyo
