import '@fontsource/montserrat';
import Initial from '../Layouts/Initial.jsx';


function PortalInicial() {


    return (
      <>
        <div className="min-h-screen min-w-screen z-0 font-montserrat flex flex-col justify-between" style={{ backgroundColor: '#FFFFFF' }}>
          <Initial>
          
            <section id="about" className="flex flex-wrap items-center justify-center xl:justify-between w-[100%] xl:w-[100%] h-full mt-[5vh] mb-[5vh] xl:ml-[10px] center">
              <div className="border border-white bg-white w-[90%] xl:w-[820px] rounded-3xl flex flex-col items-center max_width">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mt-[20px] mb-[40px] w-[80%] flex justify-center">
                  ¡Mi escuela primero!
                </h2>
                <span className="text-base sm:text-base md:text-base lg:text-lg xl:text-xl w-[80%]">
                Para habilitar el acceso total al portal tendrá que cargar la información obligatoria.<br/><br/>
                ¡En mexicanos primero tu seguridad es primero!
                </span>
                <button className='flex justify-center items-start w-[40%] xl:w-[20vw] h-full py-[3%] mt-[50px] rounded-full border-3 border-solid text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold' style={{ backgroundColor: '#009933' }}>
                Subir información
                </button>

                <div className="w-[80%] h-[20vh] mt-[2vh]">
                  <img src="src/client/assets/pages/principal/happy_runing.jpg" alt="foto de ejemplo" className='h-full w-full object-cover object-top rounded-2xl'/>
                </div>
              </div> 
            </section>

          </Initial>
        </div>
      </>
    )
  }
 
  export default PortalInicial
 



