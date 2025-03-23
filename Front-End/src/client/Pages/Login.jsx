import '@fontsource/montserrat';
import { useSearchParams } from 'react-router-dom';

window.image = '';

function getType(){
  let params = new URLSearchParams(window.location.search);
  let type = params.get('type');
  
  if(type == 'donador'){
    image = '/src/client/assets/pages/login/donantes-login.jpg';
  }
  else if(type == 'escuela'){
    image = '/src/client/assets/pages/login/escuela-alumnos.jpg';
  }
}

function Login() {
  getType();
  return (
    <>
      <div className="h-[100%] w-[100%] z-0 font-montserrat bg-white">
        <section className="w-[100vw] h-[100vh] flex flex-col xl:flex-row items-center justify-between">
          <div className="flex justify-start w-[100%] xl:w-[50%] h-[30%] xl:h-[100%]">
            <img src={image} alt='Imagen login' className='w-[100%] object-cover w-full  h-full xl:rounded-e-full'/>
          </div>
          
          <div className='flex flex-col w-[100%] xl:w-[50vw] xl:h-[100vh] font-montserrat items-center justify-center font-bold text-4xl lg:text-5xl xl:text-6xl'>
            <section className='flex flex-col items-center'>
              <img src='/src/client/assets/logos/MiEscuelaPrimeroCuadrado.png' alt='Logo' className='w-[25%]'/>
              <h1>Inicio de sesión</h1>
              <p className='font-montserrat font-bold text-base lg:text-lg xl:text-xl'>¿No tienes cuenta? <a href='/new/account' className='text-blue-600'>
                ¡Crea tu cuenta!</a>
              </p>

              <article className='font-montserrat font-bold text-xl mt-[40px] w-[100%] flex flex-col items-center'>
                <p className='flex flex-start w-[60%]'>Correo electrónico</p>
                <input placeholder='example@gmail.com' className='mt-[5px] w-[60%] xl:w-[30vw] h-[5.5vh] border border-black rounded-xl pl-[20px]'/>
              </article>
              <article className='font-montserrat font-bold text-xl mt-[10px] w-[100%] flex flex-col items-center'>
                <p className='flex flex-start w-[60%]'>Contraseña</p>
                <input placeholder='********' className='mt-[5px] w-[60%] xl:w-[30vw] h-[5.5vh] border border-black rounded-xl pl-[20px]' />
                <a href='/new/account' className='text-blue-600 text-base lg:text-lg xl:text-xl flex flex-start w-[60%]'>
                  <p>¿Olvidaste tu contraseña?</p>
                </a>
              </article>

              <button className='flex justify-center items-start w-[40%] xl:w-[20vw] h-full py-[3%] mt-[50px] rounded-full text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold' style={{ backgroundColor: '#009933' }}>
                Ingresar
              </button>
            </section>
          </div>
        </section>
      </div>
    </>
  )
}

export default Login
