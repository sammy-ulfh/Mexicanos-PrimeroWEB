import '@fontsource/montserrat';
import Initial from '../Layouts/Initial.jsx';
import getRejected from '../Peticiones/razonRechazo/getRejected';
import { useEffect, useState } from 'react';

function PortalRechazo() {

  const [data, setData] = useState('');

  useEffect(() => {
    getRejected().then((res) =>setData(res));   
}, [])

    return (
      <>
        <div className="min-h-screen min-w-screen z-0 font-montserrat flex flex-col justify-between" style={{ backgroundColor: '#FFFFFF' }}>
          <Initial>
          
            <section id="about" className="flex flex-wrap items-center justify-center w-[100%] xl:w-[100%] h-full mt-[5vh] mb-[5vh] xl:ml-[10px] center">
              <div className="border border-white bg-white w-[80%] rounded-3xl flex flex-col items-center justify-center max_width">
                <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-bold mt-[5vh] mb-[40px] w-full flex justify-center items-center text-center">
                  ¡Tus documentos se han rechazado!
                </h1>
                <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl w-[95%] font-bold">
                  Razón de rechazo:
                </span>

                <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl w-[95%] mt-[3vh]">
                {data}
                </span>

                <button className='flex justify-center items-center w-[40%] h-[10vh] mt-[50px] rounded-full border-3 border-solid text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold hover:scale-105 transition duration-300' style={{ backgroundColor: '#009933' }}>
                Subir información
                </button>

                <div className="w-[80%] h-[20vh] mt-[2vh]">
                  <img src="/src/client/assets/pages/principal/happy_runing.jpg" alt="foto de ejemplo" className='h-full w-full object-cover object-top rounded-2xl'/>
                </div>
              </div> 
            </section>

          </Initial>
        </div>
      </>
    )
  }
 
  export default PortalRechazo
 



