import '@fontsource/montserrat';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {

  const navigate = useNavigate();

  return (
    <>
      <div className="h-[100%] w-[100%] z-0 font-montserrat bg-white">
        <section className="w-[100vw] h-[100vh] flex items-center justify-center bg-[#FBFBE6]"> 
          
          <div className='flex flex-col w-[100%] xl:w-[50vw] xl:h-[100vh] font-montserrat items-center justify-center font-bold text-4xl lg:text-5xl xl:text-6xl'>
            <section className='flex flex-col items-center justify-center border h-full bg-white'>
              <img src='/src/client/assets/logos/MiEscuelaPrimeroCuadrado.png' alt='Logo' className='w-[25%]'/>
              <h1>Inicio de sesión</h1>

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

              <button className='flex justify-center items-center w-[40%] xl:w-[20vw] h-[12%] py-[3%] mt-[50px] rounded-full text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold hover:scale-105 transition duration-300 border' onClick={() => navigate('/admin/matching')} style={{ backgroundColor: '#009933' }}>
                Ingresar
              </button>
            </section>
          </div>
        </section>
      </div>
    </>
  )
}

export default AdminLogin
