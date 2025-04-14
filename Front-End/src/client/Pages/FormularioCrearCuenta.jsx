import '@fontsource/montserrat';
import Initial from '../Layouts/Initial.jsx';


function FormularioCrearCuenta() {


    return (
      <>
        <div className="min-h-screen min-w-screen z-0 font-montserrat flex flex-col justify-between" style={{ backgroundColor: '#FBFBE6' }}>
          <Initial>
            <section id="about" className="flex flex-wrap items-center justify-center w-[100%] h-full mt-[5vh] mb-[5vh] xl:ml-[10px] center">
              <div className="border border-black bg-white w-[80%] rounded-3xl flex flex-col items-center max_width">
                  <article className='font-montserrat font-bold text-xl mt-[8vh] w-[60%] flex flex-col justify-center items-center'>
                      <p className='flex self-start w-[100%] '>Correo electrónico</p>
                      <input placeholder='example@gmail.com' className='mt-[5px] w-[100%] h-[5.5vh] border border-black rounded-xl pl-[20px]'/>
                  </article>

                  <article className='font-montserrat font-bold text-xl mt-[20px] w-[60%] flex flex-col justify-center items-center'>
                      <p className='flex self-start w-[100%] '>Contraseña</p>
                      <input placeholder='********' className='mt-[5px] w-[100%] h-[5.5vh] border border-black rounded-xl pl-[20px]'/>
                  </article>

                  <article className='font-montserrat font-bold text-xl mt-[20px] w-[60%] flex flex-col items-center justify-center items-center'>
                      <p className='flex self-start w-[100%] '>Confirmación de contraseña</p>
                      <input placeholder='********' className='mt-[5px] w-[100%] h-[5.5vh] border border-black rounded-xl pl-[20px]'/>
                  </article>

                  <button className='flex justify-center items-center w-[40%] xl:w-[20vw] 2xl:w-[20vw] h-[6vh] xl:h-[10vh] 2xl:h-[10vh] mt-[50px] mb-[20px] rounded-full border-3 border-solid text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-bold hover:scale-105 transition duration-300' style={{ backgroundColor: '#009933' }}>
                      Crear cuenta
                  </button>
              </div>
              </section>
          </Initial>
        </div>
      </>
    )
  }
 
  export default FormularioCrearCuenta
 



