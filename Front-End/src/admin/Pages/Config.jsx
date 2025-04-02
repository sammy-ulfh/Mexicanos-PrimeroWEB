import '@fontsource/montserrat';
import Initial from '../Layouts/Initial.jsx';
import { useState } from 'react';

function Config() {
  
    const [isPass, setIsPass] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    return (
      <>
        <Initial>
          
          <section className="w-[80%] min-h-[60vh] p-[1%] rounded-3xl border border-gray-500 bg-white flex flex-col justify-start items-center">
            <div className='w-full h-[20vh] text-black font-bold font-montserrat flex flex-col justify-center items-center'>
              <h1 className='text-5xl lg:text-5xl xl:text-6xl 2xl:text-6xl'>Configuración</h1> 
            </div>

              <div className='w-[80%] h-[15vh] z-1 bg-gray-300 rounded-3xl flex justify-center items-center font-bold font-montserrat'>
                <h2 className='w-[70%] flex justify-center items-center text-xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl'>Cambiar contraseña</h2>
                <div className='w-[30%] h-[100%] z-2 flex justify-center items-center'>
                { isPass ? (
                  <button id='triangle' className="w-[60%] xl:w-[30%] 2xl:w-[30%] h-[50%] z-2 rounded-full border hover:scale-105 transition duration-300 bg-[url('/src/admin/assets/pages/config/triangle.png')] bg-cover bg-no-repeat bg-center bg-white" style={{ backgroundSize: '50%'}} onClick={isPass ? () => setIsPass(false) : () => setIsPass(true)} />
                  ) : (
                  <button id='triangle' className="w-[60%] xl:w-[30%] 2xl:w-[30%] h-[50%] z-2 rounded-full border hover:scale-105 transition duration-300 bg-[url('/src/admin/assets/pages/config/triangle.png')] bg-cover bg-no-repeat bg-center bg-white scale-y-[-1] hover:scale-y-[-1]" style={{ backgroundSize: '50%'}} onClick={isPass ? () => setIsPass(false) : () => setIsPass(true)} />
                )} 
                </div>
              </div>

              { isPass && (
              <article id='modal1' className='mt-[-2%] pb-[3%] pt-[4%] w-[75%] bg-white border rounded-3xl font-bold font-motserrat flex flex-col'>
                <div className='w-[80%] ml-[4%]'>
                  <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl'>Contraseña actual</h2>
                  <input className='w-[113%] h-[45px] pl-[5%] border rounded-full bg-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl' placeholder='*****' />
                </div>

                <div className='w-[80%] ml-[4%] mt-[3%]'>
                  <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl'>Nueva contraseña</h2>
                  <input className='w-[113%] h-[45px] pl-[5%] border rounded-full bg-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl' placeholder='*****' />
                </div>

                <div className='w-[80%] ml-[4%] mt-[3%]'>
                  <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl'>Nueva contraseña</h2>
                  <input className='w-[113%] h-[45px] pl-[5%] border rounded-full bg-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl' placeholder='*****' />
                </div>

                <div className='w-[100%] mt-[5%] flex justify-center items-center'>
                <button className='bg-[#009933] border rounded-3xl text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl w-[70%] xl:w-[40%] 2xl:w-[40%] p-[1.5%] hover:scale-110 transition duration-500'>
                Cambiar
                </button>
                </div>
              </article>
                )
              }
              
              <div className='w-[80%] mt-[1%] h-[15vh] z-1 bg-gray-300 rounded-3xl flex justify-center items-center font-bold font-montserrat'>
                <h2 className='w-[70%] flex justify-center items-center text-xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl'>Agregar administrador</h2>
                <div className='w-[30%] h-[100%] z-2 flex justify-center items-center'>
                { isAdmin ? (
                  <button id='triangle' className="w-[60%] xl:w-[30%] 2xl:w-[30%] h-[50%] z-2 rounded-full border hover:scale-105 transition duration-300 bg-[url('/src/admin/assets/pages/config/triangle.png')] bg-cover bg-no-repeat bg-center bg-white" style={{ backgroundSize: '50%'}} onClick={isAdmin ? () => setIsAdmin(false) : () => setIsAdmin(true)} />
                  ) : (
                  <button id='triangle' className="w-[60%] xl:w-[30%] 2xl:w-[30%] h-[50%] z-2 rounded-full border hover:scale-105 transition duration-300 bg-[url('/src/admin/assets/pages/config/triangle.png')] bg-cover bg-no-repeat bg-center bg-white scale-y-[-1] hover:scale-y-[-1]" style={{ backgroundSize: '50%'}} onClick={isAdmin ? () => setIsAdmin(false) : () => setIsAdmin(true)} />
                )} 
                </div>
              </div>


              { isAdmin && (
              <article id='modal1' className='mt-[-2%] pb-[3%] pt-[4%] w-[75%] bg-white border rounded-3xl font-bold font-motserrat flex flex-col'> 
                <div className='w-[100%] mt-[5%] flex justify-center items-center'>
                <button className='bg-[#009933] border rounded-3xl text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl w-[70%] xl:w-[40%] 2xl:w-[40%] p-[1.5%] hover:scale-110 transition duration-500'>
                Agregar usuario administrador
                </button>
                </div>
              </article>
                )
              }
          </section>
        </Initial>
      </>
    )
  }
  
  export default Config
