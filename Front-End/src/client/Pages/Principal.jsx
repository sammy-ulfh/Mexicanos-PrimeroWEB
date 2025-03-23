import '@fontsource/montserrat';
import Initial from '../Layouts/Initial.jsx';

function Principal() {

    return (
      <>
        <div className="min-h-screen min-w-screen z-0 font-montserrat flex flex-col justify-between" style={{ backgroundColor: '#FBFBE6' }}>
          <Initial>
          
            <section id="about" className="flex flex-wrap items-center justify-center xl:justify-between w-[100%] xl:w-[100%] h-full mt-[5vh] mb-[5vh] xl:ml-[10px] center">
              <div className="border border-black bg-white w-[90%] xl:w-[820px] rounded-3xl flex flex-col items-center max_width">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mt-[20px] mb-[40px] w-[80%] flex justify-center">
                  ¡Mi escuela primero!
                </h2>
                <span className="text-base sm:text-base md:text-base lg:text-lg xl:text-xl w-[80%]">
                Esta es una plataforma pensada para facilitarte la comunicación
                donador-escuela con nosotros como intermediarios. Procuramos mantener  
                una seguridad para ambas partes durante el proceso.<br/><br/>
                ¡Si te interesa, únete y crea tu cuenta como donador (aliado) o como escuela!
                </span>
                <div className="w-[80%] h-[15vh] mt-[2vh]">
                  <img src="src/client/assets/pages/principal/happy_runing.jpg" alt="foto de ejemplo" className='h-full w-full object-cover object-top rounded-2xl'/>
                </div>
              </div> 
    
              <div className='w-[90%] xl:w-[49%] flex flex-col items-center mt-[4.5vh] xl:mr-[1.5vw] xl:mt-[0vh] margin_right max_width margin_top'>
                <div className="h-[13vh] w-full rounded-2xl flex items-center bg-white mb-[20px] justify-center border border-black">
                  <h2 className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold'>
                  ¿Cómo te identificas?
                  </h2>
                </div>
    
                <div className="w-[100%] xl:w-[50vw] flex flex-wrap justify-center xl:justify-between items-center">
                  <a href='/login?type=donador' className='w-[100%] xl:w-[425px] hover:scale-105 transition-transform duration-300 relative width_image'>
                      <span className='absolute top-1/2 left-1/2 w-[60%] h-[30%] bg-white/50 flex items-center justify-center -translate-x-1/2 -translate-y-1/2 rounded-3xl text-3xl sm:text-4xl mb:text-4xl lg:text-4xl xl:text-3xl'>
                          Soy donador
                      </span>
                      <img src="src/client/assets/pages/principal/people.jpg" alt="donador" />
                  </a>
                  <a href='/login?type=escuela' className='w-[100%] xl:w-[425px] hover:scale-105 transition-transform duration-300 relative width_image'>
                      <span className="absolute top-1/2 left-1/2 w-[60%] h-[30%] bg-white/50 flex items-center justify-center -translate-x-1/2 -translate-y-1/2 rounded-3xl text-3xl sm:text-4xl mb:text-4xl lg:text-4xl xl:text-3xl">
                          Soy una escuela
                      </span>
                      <img src="src/client/assets/pages/principal/escuela.jpg" alt="escuela" />
                  </a>
                </div>
              </div>
            </section>

          </Initial>
        </div>
      </>
    )
  }
  
  export default Principal
  
