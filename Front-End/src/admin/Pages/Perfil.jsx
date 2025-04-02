import '@fontsource/montserrat';
import Initial from '../Layouts/Initial.jsx';
import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Info = [
  {
    user_id: 1,
    name: 'Juan Pablo',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.xT7Z1IcYfCP6ifEnqLWD_QHaIJ%26pid%3DApi&f=1&ipt=4e962b8f25724dcde8b0c49d31fe3df57ce9c19b4f769abd1805b7a577ce7697&ipo=images',
    email: 'ece',
    genero: 'fefe',
    resumen_publico: `
fefeefeffe
    `
  }
  ]

function Perfil() {

      return (
      <>
        <Initial>
          <section className="w-[80%] mt-[2%] p-[1%] rounded-3xl border border-gray-500 bg-white flex flex-col justify-start items-center">
            <div className='w-full h-[20vh] text-black font-bold font-montserrat flex flex-col justify-center items-center'>
              <h1 className='text-6xl'>Perfil</h1>
            </div>
            <div className='w-[80%] h-auto font-bold font-montserrat flex flex-col justify-start items-center'>
              <span className='w-full flex justify-start items-center text-2xl pl-[2%]'>Imagen del administrador</span>        
              <section className='w-full h-[15vh] flex justify-center items-center mt-[2%]'>
                <div className='h-full flex justify-center items-center'>
                  <img src={Info[0].image} alt='Imagen de perfil' className='rounded-full w-[30%] border'/>
                </div>
                <div className='w-[70%] h-full flex justify-center items-center'>
                  <button className='w-[30%] bg-[#009933] flex justify-center h-[50%] rounded-3xl items-center border hover:scale-105 transition duration-300'>
        Cambiar
                  </button>
                </div>
              </section>
            </div>
            <section className='w-[80%] h-auto font-bold font-montserrat flex flex-col justify-start items-center mt-[2%]'>
              <div className='w-full h-[15vh] flex flex-col justify-center items-center'>
                <div className='w-full h-[20%] flex justify-between items-center p-[3%] text-2xl'>
                  <span className='w-[90%]'>Correo de contacto</span>
                  <div className='w-[10%] flex justify-center items-center'>
                    <span className='mr-[5%]'>Mostrar</span>
                    <input type='checkbox' />
                  </div>
                </div>
                <input type='text' className='w-[95%] h-[80%] bg-white border rounded-3xl pl-[3%]' />
              </div>

              <div className='w-full h-[15vh] flex flex-col justify-center items-center'>
                <div className='w-full h-[20%] flex justify-start items-center p-[3%] text-2xl'>
                  <span className='w-[100%]'>Genero</span>
                </div>
                <input type='text' className='w-[95%] h-[80%] bg-white border rounded-3xl pl-[3%]' />
              </div>

              <div className='w-full h-[30vh] flex flex-col justify-center items-center'>
                <div className='w-full h-[20%] flex justify-start items-center p-[3%] text-2xl'>
                  <span className='w-[100%]'>Resumen público</span>
                </div>
                <textarea rows='200' className='w-[95%] h-[80%] bg-white resize-none border rounded-3xl pl-[3%] pt-[3%]' />
              </div>

              <div className='w-full h-[15vh] mt-[2%] flex justify-center items-center'>
                <button className='w-[30%] h-[70%] bg-[#009933] border rounded-4xl hover:scale-105 transition duration-300 text-5xl flez justify-center items-center'>
                  Guardar
                </button>
              </div>

            </section>
          </section>
        </Initial>
      </>
    )
  }

export default Perfil
