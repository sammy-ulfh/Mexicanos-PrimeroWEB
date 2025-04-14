import '@fontsource/montserrat';
import Initial from '../Layouts/Initial.jsx';


function PortalEspera() {


    return (
      <>
        <div className="min-h-screen min-w-screen z-0 font-montserrat flex flex-col justify-between" style={{ backgroundColor: '#FFFFFF' }}>
          <Initial>
          
            <section id="about" className="flex flex-wrap items-center justify-center w-[100%] xl:w-[100%] h-full mt-[5vh] mb-[5vh] xl:ml-[10px] center">
              <div className="border border-white bg-white w-[80%] rounded-3xl flex flex-col items-center justify-center max_width text-justify">
                <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-bold mt-[5vh] mb-[40px] w-full flex justify-center items-center text-center">
                  ¡Tus documentos se han recibido correctamente!
                </h1>
                <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl w-[95%] mt-[5vh]">
                  Tu cuenta se habilitará una vez un responsable de la institución haya aprobado tu información, te notificaremos por correo. 
                </span>
                <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl w-[95%] mt-[5vh]">
                  ¡En <span className='text-blue-700'>mexicanos primero</span> tu <span className='text-blue-700'>seguridad es primero</span>!
                </span>
                <div className="w-[80%] h-[20vh] mt-[9vh]">
                  <img src="/src/client/assets/pages/principal/happy_runing.jpg" alt="foto de ejemplo" className='h-full w-full object-cover object-top rounded-2xl'/>
                </div>
              </div> 
            </section>

          </Initial>
        </div>
      </>
    )
  }
 
  export default PortalEspera
 



