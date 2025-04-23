import '@fontsource/montserrat';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ErrorMessage from '/src/GeneralComponents/ErrorMessage';

function useImageFromType(type){
  const [image, setImage] = useState('');
  
  useEffect(() => {
  
  if(type == 3){
    setImage('/src/client/assets/pages/login/donantes-login.jpg');
  }
  else if(type == 2){
    setImage('/src/client/assets/pages/login/escuela-alumnos.jpg');
  }
  }, [type]);

  return image;
}

function Login() {
  const navigate = useNavigate();
  const locate = useLocation();
  const type = locate.state?.type;

  const image = useImageFromType(type);
  
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
              <p className='font-montserrat font-bold text-base lg:text-lg xl:text-xl'>¿No tienes cuenta? <button className='text-blue-600' onClick={() => navigate('/new/account', { state: { type: type } })}> 
                ¡Crea tu cuenta!</button>
              </p>

              <article className='font-montserrat font-bold text-xl mt-[40px] w-[100%] flex flex-col items-center'>
                <p className='flex flex-start w-[60%]'>Correo electrónico</p>
                <input id="username" placeholder='example@gmail.com' className='mt-[5px] w-[60%] xl:w-[30vw] h-[5.5vh] border border-black rounded-xl pl-[20px]'/>
              </article>
              <article className='font-montserrat font-bold text-xl mt-[10px] w-[100%] flex flex-col items-center'>
                <p className='flex flex-start w-[60%]'>Contraseña</p>

                <input id="password" placeholder='********' className='mt-[5px] w-[60%] xl:w-[30vw] h-[5.5vh] border border-black rounded-xl pl-[20px]' />

                <input type='password' placeholder='********' className='mt-[5px] w-[60%] xl:w-[30vw] h-[5.5vh] border border-black rounded-xl pl-[20px]' />

                <a href='/new/account' className='text-blue-600 text-base lg:text-lg xl:text-xl flex flex-start w-[60%]'>
                  <p>¿Olvidaste tu contraseña?</p>
                </a>
              </article>

              <button id='login' className='flex justify-center items-start w-[40%] xl:w-[20vw] h-full py-[3%] mt-[50px] rounded-full text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold' style={{ backgroundColor: '#009933' }} onClick={() => navigate('/new/account/school', { state: { type: type, id: 2 } })}>
                Ingresar
              </button>
            </section>
          </div>
        </section>
      </div>
    </>
  )
}

document.getElementById('login').addEventListener('submit', async (event) => {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  try {
      console.log("aqui2");
      const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
      });
      const data = await response.json();

      if (response.ok && data.token) {
     
     //localStorage.setItem('jwtToken', data.token);
     document.cookie = `jwtToken=${data.token};`;
     alert('Fine');
   } else if (data.message) {
     alert(`Error al iniciar sesión: ${data.mensaje}`);
   } else {
     alert('tro tipo de error');
   }

      console.log(data);
  } catch (error) {
    console.error('El sistema ha colapsado por culpa de ...', error);
  }
});

export default Login
