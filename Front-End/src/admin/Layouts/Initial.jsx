import '@fontsource/montserrat';
import React from 'react';
import { useState } from 'react';

const Initial = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
          <header className='bg-white flex flex-col justify-center items-center w-[100vw] h-[15vh] lg:h-[23vh] xl:h-[23vh]'>
            <div className="w-[100%] h-[100%] lg:h-[70%] xl:h-[70%] flex justify-center items-center border border-gray-300">
              <img src="/src/client/assets/logos/Logo.png" alt='Logo'className="h-[70%] sm:h-[80%] md:h-[80%] lg:h-[90%] xl:h-[100%]"/>
              <h1 className='w-[62%] lg:w-[70%] xl:w-[70%] flex items-center justify-center font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl'>Aprender importa</h1>
              <button className='w-[8%] h-[40%] block lg:hidden xl:hidden bg-[url(/src/admin/assets/layouts/main/options_button.png)] bg-cover bg-no-repeat bg-center border rounded-xl hover:scale-103' onClick={() => isOpen ? setIsOpen(false) : setIsOpen(true)}>
              </button>

            </div>

          {isOpen && (
            <div className='fixed right-0 top-0 z-2 flex flex-col mt-[15vh] items-center justify-start h-[85vh] w-[30vw] lg:hidden xl:hidden bg-white border border-gray-100'>

                <nav className='w-[100%] h-[90%] lg:hidden xl:hidden'>
                  <ul className='w-full h-full flex flex-col justify-start items-center mt-[15%] text-xs sm:text-sm md:text-base'>
                    <li className='hover:scale-110 transition duration-300 border border-black rounded-3xl m-[1%] bg-[#39A945] flex justify-center items-center w-[80%] h-[7%] font-bold font-montserrat'>
                      <a href=''>
                        Cuentas
                      </a>
                    </li>
                    <li className='hover:scale-110 transition duration-300 border border-black rounded-3xl m-[1%] bg-[#39A945] flex justify-center items-center w-[80%] h-[7%] font-bold font-montserrat'>
                      <a href=''>
                        Apoyos
                      </a>
                    </li>
                    <li className='hover:scale-110 transition duration-300 border border-black rounded-3xl m-[1%] bg-[#39A945] flex justify-center items-center w-[80%] h-[7%] font-bold font-montserrat'>
                      <a href=''>
                        Mis chats
                      </a>
                    </li>
                    <li className='hover:scale-110 transition duration-300 border border-black rounded-3xl m-[1%] bg-[#39A945] flex justify-center items-center w-[80%] h-[7%] font-bold font-montserrat'>
                      <a href=''>
                        Mi perfil
                      </a>
                    </li>
                    <li className='hover:scale-110 transition duration-300 border border-black rounded-3xl m-[1%] bg-[#39A945] flex justify-center items-center w-[80%] h-[7%] font-bold font-montserrat'>
                      <a href=''>
                        Configuración
                      </a>
                    </li>
                  </ul>
                </nav>


            </div>
          )
          }


            <nav className='w-[100%] h-[30%] bg-[#D9D9D9] hidden lg:block xl:block'>
              <ul className='w-full h-full flex justify-center items-center'>
                <li className='hover:scale-110 transition duration-300 border border-black rounded-3xl m-[0.5%] bg-[#39A945] flex justify-center items-center w-[13%] h-[70%] font-bold font-montserrat'>
                  <a href=''>
                    Cuentas
                  </a>
                </li>
                <li className='hover:scale-110 transition duration-300 border border-black rounded-3xl m-[0.5%] bg-[#39A945] flex justify-center items-center w-[13%] h-[70%] font-bold font-montserrat'>
                  <a href=''>
                    Apoyos
                  </a>
                </li>
                <li className='hover:scale-110 transition duration-300 border border-black rounded-3xl m-[0.5%] bg-[#39A945] flex justify-center items-center w-[13%] h-[70%] font-bold font-montserrat'>
                  <a href=''>
                    Mis chats
                  </a>
                </li>
                <li className='hover:scale-110 transition duration-300 border border-black rounded-3xl m-[0.5%] bg-[#39A945] flex justify-center items-center w-[13%] h-[70%] font-bold font-montserrat'>
                  <a href=''>
                    Mi perfil
                  </a>
                </li>
                <li className='hover:scale-110 transition duration-300 border border-black rounded-3xl m-[0.5%] bg-[#39A945] flex justify-center items-center w-[13%] h-[70%] font-bold font-montserrat'>
                  <a href=''>
                    Configuración
                  </a>
                </li>
              </ul>
            </nav>
          </header>
          <main className='w-[100vw] bg-[#FBFBE6]'>
            {children}
          </main>
      </>
    )
  }
  
  export default Initial  
