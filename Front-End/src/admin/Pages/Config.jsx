import '@fontsource/montserrat';
import Initial from '../Layouts/Initial.jsx';
import { useState } from 'react';
import changePassword from '/src/client/Peticiones/createAccount/changePassword';

function Config() {
  
    const [isPass, setIsPass] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const validatePasswords = () => {
          const newErrors = {};
          if (!currentPassword) newErrors.current = 'La contraseña actual es requerida';
          if (newPassword.length < 6) newErrors.new = 'La nueva contraseña es muy corta (mínimo 6 caracteres)';
          if (newPassword.length > 30) newErrors.new = 'La nueva contraseña es muy larga (máximo 30 caracteres)';
          if (newPassword !== confirmPassword) newErrors.confirm = 'Las contraseñas no coinciden';
          setErrors(newErrors);
          return Object.keys(newErrors).length === 0;
        };
    
    const handleChangePassword = async () => {
      console.log('Contraseña actual:', currentPassword);
      if (validatePasswords()) {
        try {
          await changePassword(newPassword);
          console.log('Contraseña cambiada');
          setSuccessMessage('¡Contraseña cambiada con éxito!');
          setCurrentPassword('');
          setNewPassword('');
          setConfirmPassword('');
          setErrors({});
        } catch (error) {
          console.error('Error al cambiar la contraseña:', error);
          setSuccessMessage('Hubo un error al cambiar la contraseña');
        }
      }
    };

    return (
      <>
        <Initial>
          
          <section className="w-[80%] min-h-[60vh] p-[1%] rounded-3xl border border-gray-500 bg-white flex flex-col justify-start items-center">
            <div className='w-full h-[20vh] text-black font-bold font-montserrat flex flex-col justify-center items-center'>
              <h1 className='text-5xl lg:text-5xl xl:text-6xl 2xl:text-6xl'>Configuración</h1> 
            </div>

              <div className='w-[80%] h-[15vh] z-1 bg-gray-300 rounded-3xl flex justify-center items-center font-bold font-montserrat'>
                <h2 className='w-[70%] flex justify-center items-center text-xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl'>Cambiar contraseña</h2>
                <div className='w-[30%] h-[100%] z-2 flex justify-center items-center'>
                { isPass ? (
                  <button id='triangle' className="w-[60%] xl:w-[30%] 2xl:w-[30%] h-[50%] z-2 rounded-full border hover:scale-105 transition duration-300 bg-[url('/src/admin/assets/pages/config/triangle.png')] bg-cover bg-no-repeat bg-center bg-white" style={{ backgroundSize: '50%'}} onClick={isPass ? () => setIsPass(false) : () => setIsPass(true)} />
                  ) : (
                  <button id='triangle' className="w-[60%] xl:w-[30%] 2xl:w-[30%] h-[50%] z-2 rounded-full border hover:scale-105 transition duration-300 bg-[url('/src/admin/assets/pages/config/triangle.png')] bg-cover bg-no-repeat bg-center bg-white scale-y-[-1] hover:scale-y-[-1]" style={{ backgroundSize: '50%'}} onClick={isPass ? () => setIsPass(false) : () => setIsPass(true)} />
                )} 
                </div>
              </div>

              { isPass && (
                <article className='mt-[-2%] pb-[3%] pt-[4%] w-[75%] bg-white border rounded-xl font-bold font-montserrat flex flex-col'>
              <div className='w-[80%] ml-[4%]'>
                <h2 className='text-3xl'>Contraseña actual</h2>
                <input
                  type='password'
                  className='w-[113%] h-[45px] pl-[5%] border rounded-xl text-xl'
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder='*****'
                />
                {errors.current && <p className="text-red-600 mt-1">{errors.current}</p>}
              </div>
  
              <div className='w-[80%] ml-[4%] mt-[3%]'>
                <h2 className='text-3xl'>Nueva contraseña</h2>
                <input
                  type='password'
                  className='w-[113%] h-[45px] pl-[5%] border rounded-xl text-xl'
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder='*****'
                />
                {errors.new && <p className="text-red-600 mt-1">{errors.new}</p>}
              </div>
  
              <div className='w-[80%] ml-[4%] mt-[3%]'>
                <h2 className='text-3xl'>Confirmar nueva contraseña</h2>
                <input
                  type='password'
                  className='w-[113%] h-[45px] pl-[5%] border rounded-xl text-xl'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder='*****'
                />
                {errors.confirm && <p className="text-red-600 mt-1">{errors.confirm}</p>}
              </div>
  
              <div className='w-[100%] mt-[5%] flex justify-center items-center'>
              {successMessage && (
                <p className="text-green-600 font-bold text-xl text-center mb-4">
                  {successMessage}
                </p>
              )}
                <button
                  onClick={handleChangePassword}
                  className='bg-[#009933] border rounded-3xl text-4xl w-[70%] xl:w-[40%] p-[1.5%] hover:scale-110 transition duration-500'
                >
                  Cambiar
                </button>
              </div>
            </article>
                )
              }
              
              <div className='w-[80%] mt-[1%] h-[15vh] z-1 bg-gray-300 rounded-3xl flex justify-center items-center font-bold font-montserrat'>
                <h2 className='w-[70%] flex justify-center items-center text-xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl'>Agregar administrador</h2>
                <div className='w-[30%] h-[100%] z-2 flex justify-center items-center'>
                { isAdmin ? (
                  <button id='triangle' className="w-[60%] xl:w-[30%] 2xl:w-[30%] h-[50%] z-2 rounded-full border hover:scale-105 transition duration-300 bg-[url('/src/admin/assets/pages/config/triangle.png')] bg-cover bg-no-repeat bg-center bg-white" style={{ backgroundSize: '50%'}} onClick={isAdmin ? () => setIsAdmin(false) : () => setIsAdmin(true)} />
                  ) : (
                  <button id='triangle' className="w-[60%] xl:w-[30%] 2xl:w-[30%] h-[50%] z-2 rounded-full border hover:scale-105 transition duration-300 bg-[url('/src/admin/assets/pages/config/triangle.png')] bg-cover bg-no-repeat bg-center bg-white scale-y-[-1] hover:scale-y-[-1]" style={{ backgroundSize: '50%'}} onClick={isAdmin ? () => setIsAdmin(false) : () => setIsAdmin(true)} />
                )} 
                </div>
              </div>


              { isAdmin && (
              <article id='modal1' className='mt-[-2%] pb-[3%] pt-[4%] w-[75%] bg-white border rounded-3xl font-bold font-motserrat flex flex-col'> 
                <div className='w-[100%] mt-[5%] flex justify-center items-center'>
                <button className='bg-[#009933] border rounded-3xl text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl w-[70%] xl:w-[40%] 2xl:w-[40%] p-[1.5%] hover:scale-110 transition duration-500'>
                Agregar usuario administrador
                </button>
                </div>
              </article>
                )
              }
          </section>
        </Initial>
      </>
    )
  }
  
  export default Config
