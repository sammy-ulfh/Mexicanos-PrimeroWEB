import '@fontsource/montserrat';
import Initial from '../Layouts/Initial.jsx';
import DescargarArchivo from '../../GeneralComponents/DescargarArchivo.jsx';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import changeStatus from '../Peticiones/changeStatus/changeStatus.jsx';

function CuentaDonador() {
    
    const locate = useLocation();
    const InfoDonante = locate.state?.data;
    const type = locate.state?.type;
    const id = 1;

    const [isRejected, setIsRejected] = useState(false);
    const [razonRechazo, setRazonRechazo] = useState(false);

    const navigate = useNavigate();

    return (
      <>
        <div className="min-h-screen min-w-screen z-0 font-montserrat flex flex-col justify-between" style={{ backgroundColor: '#FBFBE6' }}>
          <Initial>
            <section id="about" className="flex flex-col items-center justify-center w-[100%] xl:w-[100%] h-full mb-[5vh] xl:ml-[10px] center">
              <div className="relative border border-black bg-white w-[80%] rounded-3xl flex flex-col items-center max_width">
              <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-bold mt-[20px] mt-[100px] mb-[40px] w-[80%] flex justify-center">
                Mis donaciones
              </h2>
                
                <article className='font-montserrat text-xl mt-[20px] w-[60%] flex items-center flex-col justify-center'>
                    <p className='flex font-bold self-start w-[100%]'>¿Es una institución?</p>
                    <input type='text' value={InfoDonante.inst == 1 ? 'Si' : 'No'} className="pointer-events-none mt-2 pl-[10px] w-[100%] h-[5.5vh] border border-black rounded-xl bg-white text-black" />                
                </article>

                <article className='font-montserrat font-bold text-xl mt-[20px] w-[60%] flex items-center flex-col items-center'>
                    <p className='flex self-start w-[100%] '>Nombre del responsable</p>
                    <input type='text' value={InfoDonante.nombre_responsable} className='pointer-events-none mt-[5px] w-[100%] h-[5.5vh] border border-black rounded-xl pl-[20px]'/>
                </article>

                <article className='font-montserrat font-bold text-xl mt-[20px] w-[60%] flex items-center flex-col items-center'>
                    <p className='flex self-start w-[100%] '>Correo del responsable</p>
                    <input type='text' value={InfoDonante.correo_responsable} className='pointer-events-none mt-[5px] w-[100%] h-[5.5vh] border border-black rounded-xl pl-[20px]'/>
                </article>

                <article className='font-montserrat font-bold text-xl mt-[20px] w-[60%] flex items-center flex-col items-center'>
                    <p className='flex self-start w-[100%] '>RFC</p>
                    <input type='text' value={InfoDonante.rfc_responsable} className='pointer-events-none mt-[5px] w-[100%] h-[5.5vh] border border-black rounded-xl pl-[20px]'/>
                </article>

                <article className='font-montserrat font-bold text-xl mt-[20px] w-[60%] flex items-center flex-col items-center'>
                    <p className='flex self-start w-[100%] '>Edad del responsable</p>
                    <input type='text' value={InfoDonante.edad_responsable} className='pointer-events-none mt-[5px] w-[100%] h-[5.5vh] border border-black rounded-xl pl-[20px]'/>
                </article>
                
                <p className='font-montserrat flex flex-start w-[60%] mt-[40px] '>INE/IFE</p>
                <DescargarArchivo path={InfoDonante.ine} />
                
                { InfoDonante.inst == 1 && (
                  <>
                    <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-bold mt-[20px] mt-[100px] mb-[40px] w-[80%] flex justify-center">
                        Información de la insitución
                    </h2>

                    <article className='font-montserrat font-bold text-xl mt-[20px] w-[60%] flex items-center flex-col items-center'>
                        <p className='flex self-start w-[100%] '>Nombre de la institución</p>
                        <input type='text' value={InfoDonante.nombre_identificacion} className='pointer-events-none mt-[5px] w-[100%] h-[5.5vh] border border-black rounded-xl pl-[20px]'/>
                    </article>

                    <article className='font-montserrat font-bold text-xl mt-[20px] w-[60%] flex items-center flex-col items-center'>
                        <p className='flex self-start w-[100%] '>RFC de la institución</p>
                        <input type='text' value={InfoDonante.rfc} className='pointer-events-none mt-[5px] w-[100%] h-[5.5vh] border border-black rounded-xl pl-[20px]'/>
                    </article>

                    <article className='font-montserrat font-bold text-xl mt-[20px] w-[60%] flex items-center flex-col items-center'>
                        <p className='flex self-start w-[100%] '>Correo de la institución</p>
                        <input type='text' value={InfoDonante.correo_institucion}  className='pointer-events-none mt-[5px] w-[100%] h-[5.5vh] border border-black rounded-xl pl-[20px]'/>
                    </article>

                    <p className='font-montserrat flex flex-start w-[60%] mt-[40px] '>Reporte que avale la solicitud de registro por parte de la institución con el responsable</p>
                    <DescargarArchivo path={InfoDonante.reporte} />
                  </>
                )
                }

            {isRejected && (
            <div className='absolute z-1 bottom-5 w-[88%] h-[40%] bg-[#D9D9D9] rounded-3xl border border-black flex flex-col justify-start items-center'>
              <section className='w-[100%] h-[20%] flex justify-between items-center'>
                <h2 className='font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl w-[90%] h-full flex justify-start items-center pt-[1%] pl-[5%]'>Rechazo de solicitud</h2>
                <button className="bg-white w-[15%] sm:w-[10%] md:w-[8%] lg:w-[7%] xl:w-[7%] 2xl:w-[7%] h-[60%] mr-[4%] rounded-4xl hover:scale-110 transition duration-300 bg-[url('/src/admin/assets/pages/infoApoyo/cancel.png')] bg-cover bg-center bg-no-repeat" style={{ backgroundSize: '50%' }} onClick={() => setIsRejected(false)}>
                </button>
              </section>
              <section className='mt-[2%] w-[90%] h-[80%] flex flex-col justify-start items-center p-[2%]'>
                <h3 className='font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl w-[100%] h-[10%] m-[1%] pl-[1%] '>Razon de rechazo</h3>
                <textarea rows="200" placeholder='Razon de rechazo...' className='bg-white w-[100%] min-h-[60%] max-h-[60%] resize-none border rounded-3xl p-[2%]' onChange={(e) => setRazonRechazo(e.target?.value)} />
                <div className='w-[100%] h-[30%] flex justify-center items-end'>
                  <button className='w-[50%] sm:w-45%] md:w-[40%] lg:w-[35%] xl:w-[30%] 2xl:w-[30%] h-[80%] bg-[#009933] rounded-full border hover:scale-110 transition duration-300 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl' onClick={() => changeStatus(id, type, null, 3, razonRechazo, InfoDonante.id_usuario) ? navigate('/admin/solicitudes/cuentas', { state: { type: type, id: id } }) : navigate('/admin/solicitudes/cuentas', { state: { type: type, id: id } })} >
                    Notificar
                  </button>
                </div>
              </section>
            </div>
            )
            }

                <div className='flex justify-center items-center w-[100%]'>
                  <button className='flex justify-center items-center w-[30%] h-[10vh] mt-[50px] mb-[20px] rounded-4xl text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold border-4 border-solid hover:scale-105 transition duration-300 mr-[2vw]' style={{ backgroundColor: '#009933' }} onClick={() => setIsRejected(true)} >
                    Rechazar
                  </button>
                  <button className='flex justify-center items-center w-[30%] h-[10vh] mt-[50px] mb-[20px] rounded-4xl text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold border-4 border-solid hover:scale-105 transition duration-300' style={{ backgroundColor: '#009933' }} onClick={() => changeStatus(id, type, null, 2, razonRechazo, InfoDonante.id_usuario) ? navigate('/admin/solicitudes/cuentas', { state: { type: type, id: id } }) : navigate('/admin/solicitudes/cuentas', { state: { type: type, id: id } }) } >
                    Aceptar
                  </button>
                </div> 
                </div>
            </section>
          </Initial>
        </div>
      </>
    )
  }
 
  export default CuentaDonador
