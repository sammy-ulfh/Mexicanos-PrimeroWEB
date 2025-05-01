import '@fontsource/montserrat';
import Initial from '../Layouts/Initial.jsx';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import createAccount from '/src/client/Peticiones/createAccount/createAccount';
import createAccountValidation from '/src/client/Peticiones/createAccount/createAccountValidation';
import ErrorMessage from '/src/GeneralComponents/ErrorMessage';

import hidePasswordIcon from '/src/GeneralAssets/hide-password.png';
import showPasswordIcon from '/src/GeneralAssets/show-password.png';

const MessageComplete = ({ message, buttonMessage, route, navigate, type }) => (
  <div className='mt-[3vh] w-[60%] min-h-[10vh] flex flex-col p-[2vh] justify-center items-center bg-green-400 rounded-xl font-bold font-montserrat text-2xl'>
    {message}
    <button className='w-[50%] h-[30%] hover:scale-105 transition duration-300 border rounded-4xl mt-[1vh] p-[1vh] bg-gray-200' onClick={() => navigate(route, {state: { type: type }})}>
      {buttonMessage}
    </button>
  </div>
);

function FormularioCrearCuenta() {
    const navigate = useNavigate();

    const [tipoCuenta, setTipoCuenta] = useState("");
    const type = Number(tipoCuenta);


    const handleChange = (event) => {
      setTipoCuenta(event.target.value);
    };
  
    const [estatus, setEstatus] = useState([]);

    const [isHidden, setIsHidden] = useState(true);
    const [isHiddenConfirm, setIsHiddenConfirm] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    console.log(estatus);

    return (
      <>
        <div className="min-h-screen min-w-screen z-0 font-montserrat flex flex-col justify-between" style={{ backgroundColor: '#FBFBE6' }}>
          <Initial>
            <section id="about" className="flex flex-wrap items-center justify-center w-[100%] h-full mt-[5vh] mb-[5vh] xl:ml-[10px] center">
              <div className="border border-black bg-white w-[80%] rounded-3xl flex flex-col items-center max_width">

                <article className='font-montserrat text-xl mt-[8vh] w-[60%] flex items-center flex-col justify-center'>
                      <p className='flex font-bold self-start w-[100%]'>Tipo de cuenta:</p>
                      <select name="type"
                      value={tipoCuenta}
                      onChange={handleChange}
                      className="pl-[10px] w-full h-[5.5vh] border border-black rounded-xl bg-white text-black">
                          <option value="0">Selecciona una opción</option>
                          <option value="2">Escuela</option>
                          <option value="3">Donante</option>
                      </select>                    
                </article>

                  <article className='font-montserrat font-bold text-xl mt-[20px] w-[60%] flex flex-col justify-center items-center'>
                      <p className='flex self-start w-[100%] '>Correo electrónico</p>
                      <input type='text' placeholder='example@gmail.com' className='mt-[5px] w-[100%] h-[5.5vh] border border-black rounded-xl pl-[20px]' onChange={(e) => setEmail(e.target?.value)} />
                  </article>

                  <article className='relative font-montserrat font-bold text-xl mt-[20px] w-[60%] flex flex-col justify-center items-center'>
                      <p className='flex self-start w-[100%] '>Contraseña</p>
                      <input type={isHidden ? 'password' : 'text'} placeholder='Escribe tu contraseña...' className='mt-[5px] w-[100%] h-[5.5vh] border border-black rounded-xl pl-[20px]' onChange={(e) => setPassword(e.target?.value)} />
                  <button
                    type="submit"
                    aria-label="HidePassword"
                    className={`absolute right-4 bottom-3.5 w-5 bg-white h-5 hover:bg-gray-200 scale-230 rounded-r-sm`}
                    style={{
                        backgroundImage: `url(${isHidden ? hidePasswordIcon : showPasswordIcon})`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                      }}
                    onClick={() => {isHidden ? setIsHidden(false) : setIsHidden(true)}}
                  >
                  </button>
                  </article>

                  <article className='relative font-montserrat font-bold text-xl mt-[20px] w-[60%] flex flex-col items-center justify-center items-center'>
                      <p className='flex self-start w-[100%] '>Confirmación de contraseña</p>
                      <input type={isHiddenConfirm ? 'password' : 'text'} placeholder='Escribe nuevamente tu contraseña...' className='mt-[5px] w-[100%] h-[5.5vh] border border-black rounded-xl pl-[20px]' onChange={(e) => setConfirmPassword(e.target?.value)} />

                  <button
                    type="submit"
                    aria-label="HidePassword"
                    className={`absolute right-4 bg-white bottom-3.5 w-5 h-5 hover:bg-gray-200 scale-230 rounded-r-sm`}
                    style={{
                        backgroundImage: `url(${isHiddenConfirm ? hidePasswordIcon : showPasswordIcon})`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                      }}
                    onClick={() => {isHiddenConfirm ? setIsHiddenConfirm(false) : setIsHiddenConfirm(true)}}
                  >
                  </button>
                  </article>
  
                  {estatus.length == 1 && estatus[0] == 'empty' &&(
                    <ErrorMessage
                      message="Todos los campos son obligatorios."
                    />
                  )
                  }

                  {estatus.length == 1 && estatus[0] == 'different' &&(
                    <ErrorMessage
                      message="Las contraseñas introducidas no coinciden."
                    />
                  )
                  }

                  {estatus.length == 1 && estatus[0] == 'password too long' &&(
                    <ErrorMessage 
                      message="La contraseña es demasiado grande, debe ser menor a 50 caracteres."
                    />
                  )
                  }

                  {estatus.length == 1 && estatus[0] == 'email too long' &&(
                    <ErrorMessage
                      message="Correo demasiado largo, introduce un correo electrónico correcto."
                    />
                  )
                  }

                  {estatus.length == 2 && estatus[0] == 'correct' &&(
                    <MessageComplete 
                      message="Cuenta registrada correctamente, puede iniciar sesión."
                      buttonMessage="ir al Login"
                      route='/login'
                      navigate={navigate}
                      type={type}
                    />
                  )
                  }

                  <button className='flex justify-center items-center w-[40%] xl:w-[20vw] 2xl:w-[20vw] h-[6vh] xl:h-[10vh] 2xl:h-[10vh] mt-[50px] mb-[20px] rounded-full border-3 border-solid text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-bold hover:scale-105 transition duration-300' style={{ backgroundColor: '#009933' }} onClick={() => setEstatus(createAccountValidation(email, password, confirmPassword, type))}>
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
 



