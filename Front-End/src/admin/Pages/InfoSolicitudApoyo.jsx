import '@fontsource/montserrat';
import Initial from '../Layouts/Initial.jsx';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';


const Tarjeta = ({ id, json }) => (
    <article id={id} className='border rounded-3xl w-[90%] mb-[2%] p-[2%]'>
      <span className='mt-[1%] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-bold flex justify-center items-center p-[1%]'>
        {id}: {json.name}
      </span>

      <span className='mt-[1%] pl-[1%] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl font-bold flex justify-start items-center pl-[2%]'>
        Tipo de apoyo: {json.type}
      </span>
      <div className='flex flex-col justify-center items-start p-[2%]'>
        <h2 className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl font-bold'>
          Resumen del apoyo:
        </h2>
        <p className='text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl pt-[1%]'>
          {json.resumen}
        </p>
      </div>
    </article>
);


function InfoSolicitudApoyo(){

  const loca = useLocation();
  const data = loca.state;
  console.log(data);

  const [isAccepted, setIsAccepted] = useState(false);
  const [isRejected, setIsRejected] = useState(false);

  return(
    <>
      <Initial>
          
          <section className="relative w-[80%] min-h-[57vh] font-montserrat lg:min-h-[50vh] xl:min-h-[50vh] p-[1%] rounded-3xl border border-gray-500 bg-white flex flex-col justify-start items-center">
            <div className='w-[90%] h-[20vh] text-black font-bold font-montserrat flex flex-col justify-center items-center'>
              <h1 className='text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-6xl'>{data.Escuela.type}</h1>
            </div>

          {
            <Tarjeta id={'Escuela'} json={data.Escuela} />
          }
          {
            <Tarjeta id={'Donador'} json={data.Donador} />
          }

          <div id='Buttons' className='w-[100%] h-[10vh] flex justify-center items-center'>
            <button className='rounded-full m-[1%] w-[30%] bg-[#009933] h-[80%] border hover:scale-110 transition duration-300 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-bold' onClick={() => setIsAccepted(true)}>
              Aceptar
            </button>
            <button className='rounded-full w-[30%] m-[1%] bg-[#009933] h-[80%] border hover:scale-110 transition duration-300 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-bold' onClick={() => setIsRejected(true)}>
              Rechazar
            </button> 
          </div>

          {isRejected && (
            <div className='absolute z-1 bottom-5 w-[88%] h-[60%] bg-[#D9D9D9] rounded-3xl border border-black flex flex-col justify-start items-center'>
              <section className='w-[100%] h-[20%] flex justify-between items-center'>
                <h2 className='font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl w-[90%] h-full flex justify-start items-center pt-[1%] pl-[5%]'>Rechazo de solicitud</h2>
                <button className="bg-white w-[15%] sm:w-[10%] md:w-[8%] lg:w-[7%] xl:w-[7%] 2xl:w-[7%] h-[60%] mr-[4%] rounded-4xl hover:scale-110 transition duration-300 bg-[url('/src/admin/assets/pages/infoApoyo/cancel.png')] bg-cover bg-center bg-no-repeat" style={{ backgroundSize: '50%' }} onClick={() => setIsRejected(false)}>
                </button>
              </section>
              <section className='mt-[2%] w-[90%] h-[80%] flex flex-col justify-start items-center p-[2%]'>
                <h3 className='font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl w-[100%] h-[10%] m-[1%] pl-[1%] '>Razon de rechazo</h3>
                <textarea rows="200" placeholder='Razon de rechazo...' className='bg-white w-[100%] min-h-[60%] max-h-[60%] resize-none border rounded-3xl p-[2%]' />
                <div className='w-[100%] h-[30%] flex justify-center items-end'>
                  <button className='w-[50%] sm:w-45%] md:w-[40%] lg:w-[35%] xl:w-[30%] 2xl:w-[30%] h-[80%] bg-[#009933] rounded-full border hover:scale-110 transition duration-300 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl'>
                    Notificar
                  </button>
                </div>
              </section>
            </div>
            )
            }

          {isAccepted && (
            <div className='absolute z-1 bottom-5 w-[88%] h-[60%] bg-[#D9D9D9] rounded-3xl border border-black flex flex-col justify-start items-center'>
              <section className='w-[100%] h-[20%] flex justify-between items-center'>
                <h2 className='font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl w-[90%] h-full flex justify-start items-center pt-[1%] pl-[5%]'>Inicialización de solicitud de apoyo</h2>
                <button className="bg-white w-[15%] sm:w-[10%] md:w-[8%] lg:w-[7%] xl:w-[7%] 2xl:w-[7%] h-[60%] mr-[4%] rounded-4xl hover:scale-110 transition duration-300 bg-[url('/src/admin/assets/pages/infoApoyo/cancel.png')] bg-cover bg-center bg-no-repeat" style={{ backgroundSize: '50%' }} onClick={() => setIsAccepted(false)}>
                </button>
              </section>
              <section className='mt-[2%] w-[90%] h-[80%] flex flex-col justify-start items-start'>
                <p className='flex justify-start items-center p-[1%] w-[100%] h-[30%] text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl'>
                  Al dar seguimiento estaría inicializando una solicitud de apoyo  donador-escuela. En todo momento usted se encontrará como mediador  dentro del chat, dando las indicaciones de qué documentos tendrán que  proporcionar para llevar el proceso correctamente.
                </p>
                <p className='flex justify-start items-center p-[1%] w-[100%] h-[30%] mt-[10%] sm:mt-[7%] md:mt-[6%] lg:mt-[5%] xl:mt-[4%] 2xl:mt-[4%] text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl'>
                  Al dar seguimiento será redirigido al chat de forma automática y usted  podrá dar indicaciones y solicitar los documentos necesarios, así como  una fecha estimada de inicio y final, en el momento que usted lo vea  oportuno.
                </p>
                <div className='w-[100%] h-[28%] mb-[1%] flex justify-center items-end'>
                  <button className='w-[50%] sm:w-45%] md:w-[40%] lg:w-[35%] xl:w-[30%] 2xl:w-[30%] h-[80%] bg-[#009933] rounded-full border hover:scale-110 transition duration-300 font-bold text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl'>
                    Dar seguimiento
                  </button>
                </div>
              </section>
            </div>
            )
            }
    
          </section>
        </Initial>
 
    </>
  );
}

export default InfoSolicitudApoyo
