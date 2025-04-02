import '@fontsource/montserrat';
import Initial from '../Layouts/Initial.jsx';
import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Info = [
  {
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
  {
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
  {
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
  {
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
  }
  ]

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
    const [isSchool, setIsSchool] = useState(false);
    const [isDonator, setIsDonator] = useState(false);

    return (
      <>
        <Initial>
          
          <section className="w-[80%] mt-[2%] p-[1%] rounded-3xl border border-gray-500 bg-white flex flex-col justify-start items-center">
            <div className='w-full h-[20vh] text-black font-bold font-montserrat flex flex-col justify-center items-center'>
              <h1 className='text-6xl'>Apoyos</h1>
              <div className='hidden w-full h-[30%] m-[1%] flex justify-center items-center'>
                <button className='flex justify-center items-center border rounded-3xl w-[30%] h-[100%] m-[1%] hover:scale-110 transition duration-300 bg-[#009933] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>
                  Clientes
                </button>
                <button className='flex justify-center items-center border rounded-3xl w-[30%] h-[100%] m-[1%] hover:scale-110 transition duration-300 bg-[#009933] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>
                  Donadores
                </button>
              </div>
            </div>
            {
              Info.length > 0 ? (
                Info.map((tarjeta) => (
                  <Tarjeta type={tarjeta['Escuela'].type} navigate={navigate} data={tarjeta}  />
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
  
