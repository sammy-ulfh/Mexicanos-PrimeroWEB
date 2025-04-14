import '@fontsource/montserrat';
import React from 'react';
import SearchBar from './SearchBar';

const PortalMatchingLayout = ({ children }) => {

    return (
      <>
      <div className="flex flex-nowrap flex-col">
          <header className="flex w-full bg-white h-[20vh] z-1 flex items-center border border-gray-300">
            <div className="w-[20vw] flex justify-end">
              <img src="/src/client/assets/logos/Logo.png" alt='Logo'className="w-[12.5vw]"/>
            </div>
            <div className="w-[80vw] flex justify-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              <h1>Aprender importa</h1>
            </div>
          </header>
          
          <div className="w-full h-[5.5vh] bg-gray-300 flex items-center justify-center border border-gray-300">
          <section className="w-[70%] h-full flex  justify-center items-center">
            <button className='flex justify-center items-center w-[140px] h-full rounded-full border-2 border-solid mr-[5.5vw]' style={{ backgroundColor: '#009933' }}>
                <img src="/src/client/assets/other/home_icon.png" alt='Logo' className="w-[40px]"/>
            </button>
            <button className='flex justify-center items-center w-[140px] h-full rounded-full text-md font-bold border-2 border-solid ' style={{ backgroundColor: '#009933' }}>
                Mis chats
            </button>
            <button className='flex justify-center items-center w-[140px] h-[100%] rounded-full text-md font-bold border-2 border-solid ml-[5.5vw]' style={{ backgroundColor: '#009933' }}>
                Mi perfil
            </button>
            <button className='flex justify-center items-center w-[140px]  h-[100%] rounded-full text-md font-bold border-2 border-solid ml-[5.5vw]' style={{ backgroundColor: '#009933' }}>
                Configuración
            </button>
          </section>
          </div>
          <article className='font-montserrat font-bold text-xl bg-white w-[100%] h-[10vh]  flex flex-col items-center justify-center'>
            <SearchBar/>
          </article>
      </div>  
          
          <main>
            {children}
          </main>
          <footer className='relative bg-white w-[100vw] h-[25vh] border border-black mt-[20px]'>

          </footer>
      </>
    )
  }
  
  export default PortalMatchingLayout  
