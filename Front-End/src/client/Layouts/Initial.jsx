import '@fontsource/montserrat';
import React from 'react';

const Initial = ({ children }) => {

    return (
      <>
          <header className="flex w-full bg-white h-[20vh] z-1 flex items-center border border-gray-300">
            <div className="w-[20vw] flex justify-end">
    <img src="/src/client/assets/logos/Logo.png" alt='Logo'className="w-[12.5vw]"/>
    </div>
            <div className="w-[80vw] flex justify-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              <h1>Aprender importa</h1>
            </div>
          </header>
          <main>
            {children}
          </main>
          <footer className='relative bg-white w-[100vw] h-[25vh] border border-black mt-[20px]'>

          </footer>
      </>
    )
  }
  
  export default Initial  
