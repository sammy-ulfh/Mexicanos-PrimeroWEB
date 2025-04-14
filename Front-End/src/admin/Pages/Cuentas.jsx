import '@fontsource/montserrat';
import Initial from '../Layouts/Initial.jsx';
import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Info = [
    {
      user_id: 1,
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd2studios.net%2Fwp-content%2Fuploads%2Fblog%2F2015%2F04%2F6-Uses-for-a-Professional-Personal-Portrait-Photograph.jpg&f=1&nofb=1&ipt=b435886188f5ff09e69617267e30c9dc711e1f66928f676efe0137461590eddc',
      name: 'Marcos Castañeda García'
    },
    {
      user_id: 1,
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd2studios.net%2Fwp-content%2Fuploads%2Fblog%2F2015%2F04%2F6-Uses-for-a-Professional-Personal-Portrait-Photograph.jpg&f=1&nofb=1&ipt=b435886188f5ff09e69617267e30c9dc711e1f66928f676efe0137461590eddc',
      name: 'Marcos Castañeda García'
    }
  ]

const Tarjeta = ({name, image, navigate, data}) => (
  <article className='p-[2%] w-[80%] font-bold font-montserrat flex justify-center items-center text-black font-montserrat border rounded-3xl m-[1%]'>
    <div className='w-[30%] h-[10vh] flex justify-center items-center'>
      <img src={image} alt={name} className='h-full w-[30%] rounded-full object-cover scale-150' />
    </div>
    <div className='flex flex-col w-[70%] h-full justify-center items-center'>
      <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>{name}</h2>  
      <button className='border rounded-3xl text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl w-[50%] md:w-[40%] lg:w-[40%] xl:w-[40%] h-[5vh] mt-[1%] bg-[#009933] hover:scale-105 transition duration-300' onClick={() => navigate('/admin/cuentas/', { state: data })}>
        Ver información
      </button>
    </div>
  </article>
);

function Cuentas() {
 
    const navigate = useNavigate();
    const [isSchool, setIsSchool] = useState(false);
    const [isDonator, setIsDonator] = useState(false);

    return (
      <>
        <Initial>
          
          <section className="w-[80%] mt-[2%] p-[1%] rounded-3xl border border-gray-500 bg-white flex flex-col justify-start items-center">
            <div className='w-full h-[20vh] text-black font-bold font-montserrat flex flex-col justify-center items-center'>
              <h1 className='text-6xl'>Cuentas</h1>
              <div className='w-full h-[30%] m-[1%] flex justify-center items-center'>
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
                  <Tarjeta name={tarjeta.name} image={tarjeta.image} navigate={navigate} data={tarjeta}  />
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
  
  export default Cuentas
  
