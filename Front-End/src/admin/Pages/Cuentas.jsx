import '@fontsource/montserrat';
import Initial from '../Layouts/Initial.jsx';
import { React, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const InfoDonator = [
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

const InfoSchool = [
    {
      user_id: 1,
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsquizserverpp-5042.kxcdn.com%2F__data%2Fassets%2Fimage%2F0034%2F74869%2Fyoung-lady-smiling-outside.jpg&f=1&nofb=1&ipt=094dc640a92ac2e49f32da552a2d4f39920fa43344d9750fa90c83ce1ebfe98e',
      name: 'Marcos Castañeda García'
    },
    {
      user_id: 1,
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsquizserverpp-5042.kxcdn.com%2F__data%2Fassets%2Fimage%2F0034%2F74869%2Fyoung-lady-smiling-outside.jpg&f=1&nofb=1&ipt=094dc640a92ac2e49f32da552a2d4f39920fa43344d9750fa90c83ce1ebfe98e',
      name: 'Marcos Castañeda García'
    }
  ]

const Tarjeta = ({ user_id, name, image, navigate, data, dir, type }) => (
  <article className='p-[2%] w-[80%] font-bold font-montserrat flex justify-center items-center text-black font-montserrat border rounded-3xl m-[1%]'>
    <div className='w-[30%] h-[10vh] flex justify-center items-center'>
      <img src={image} alt={name} className='h-full w-[30%] rounded-full object-cover scale-150' />
    </div>
    <div className='flex flex-col w-[70%] h-full justify-center items-center'>
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
                  InfoDonator.length > 0 ? (
                    InfoDonator.map((tarjeta) => (
                      <Tarjeta
                        user_id={tarjeta.user_id}
                        name={tarjeta.name}
                        image={tarjeta.image}
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
                  InfoSchool.length > 0 ? (
                    InfoSchool.map((tarjeta) => (
                      <Tarjeta
                        user_id={tarjeta.user_id}
                        name={tarjeta.name}
                        image={tarjeta.image}
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
  
