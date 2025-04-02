import '@fontsource/montserrat';
import Initial from '../Layouts/Initial.jsx';
import { React, useState } from 'react';
import { useLocation } from 'react-router-dom';


const Info = [
  {
    id: 1,
    user_id: 6,
    messages: {
      1: [ `Hola, que tal?

Soy el administrador que estará como mediador en su caso, primeramente vamos a empezar conversando un poco más a fondo sobre como tienen en mente este apoyo y después les solicitaré de forma individual la carta de compromiso firmada por ustedes y en caso de ser por parte de una institución (escuela o empresa donadora) por un directivo.`, '10/10/2024', '18:10', { 'Admin': 6}],
      2: [ `Perfecto, yo estoy como representante de la escuela Everardo Romero Arenas.

En este caso, por lo que he platicado con el donador es que podría apoyarnos con una donación de libros, ya que estamos pensando en poder tener un espacio donde los chicos puedan leer temas de su interés y además para que puedan aprender aún más de las cosas que se les enseñan en clase.`, '11/10/2024', '10:30', { 'Cliente': 1 }],
      3: [ `Así es, incluso si estuviese dentro de mi presupuesto, podría ayudar con la construcción o diseño para la asignación de este espacio para los niños de la escuela.`, '11/10/2024', '11:30', { 'Donador': 3 }]
    },
    files: {
      1: [ 'file_title', 'file', '10/10/2024', '18:10', { 'Admin': 6}],
      2: [ 'filefile_title', 'file', '11/10/2024', '10:30', { 'Cliente': 1 }],
      3: [ 'file_title', 'file', '11/10/2024', '11:30', { 'Donador': 3 }]
    },
    users_info: {
      images: {
      6 : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F2b%2Ff0%2F58%2F2bf0589187b658af1258ba7e23a115b8.jpg&f=1&nofb=1&ipt=e529dd3757e6a02954d3108a779d56c01c68682f52941319d2ac21e5c76bb1c8&ipo=images',
      1 : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic1.thegamerimages.com%2Fwordpress%2Fwp-content%2Fuploads%2F2022%2F01%2FMonkey.png&f=1&nofb=1&ipt=0e46cf4d8451bff3035d35581bdbcccff1955abcb1742dc36e4a4e989ce83413&ipo=images',
      3 : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fi.redd.it%2Fcm7v4jwetbt21.png&f=1&nofb=1&ipt=848b3f26651994eefb825d07812e4a8cf6d6865eb801283b4767755a4149d8f8&ipo=images'
      },
      names: {
        6 : 'Juan Pablo López Enríquez',
        1 : 'Leonardo Mario Alberto Guillen Soriana',
        3 : 'José María de la Cruz Pérez Hernández'
      }
    }
  }
]

const Tarjeta = ({id, key, info, message, hour, day, user_message_id, type}) => (
  <div className={`w-full h-auto flex justify-center ${id == user_message_id ? ('justify-end') : ('justify-start')} items-center`}>
    <article className='p-[2%] w-[50%] h-auto font-bold font-montserrat flex flex-col justify-center items-start text-black font-montserrat border rounded-3xl m-[1%] bg-white'>
      <header className='w-[100%] p-[1%] flex justify-start items-center'>
        <img src={info.users_info.images[user_message_id]} alt={info.users_info.images[user_message_id]} className='w-[20%] rounded-full'/>
        <div className='w-full flex flex-col'>
          <h3 className='ml-[5%] text-2xl'>{info.users_info.names[user_message_id]}</h3>
          <span className='ml-[5%] w-[25%] p-[0.5%] bg-[#009933] rounded-3xl flex justify-center items-center'>{type}</span>
        </div>
      </header>
      <span className='w-[90%] p-[2%]'>
        {message}
      </span>
      <span className='w-[90%] flex justify-start'>
        <p>{hour} ~ </p>
        <p>{day}</p>
      </span>
    </article>
  </div>
);

const TarjetaArchivos = ({id, key, title, day, hour, user_file_id, type, info}) => (
  <article className='p-[2%] w-[80%] h-auto font-bold font-montserrat flex flex-col justify-center items-start text-black font-montserrat border rounded-xl m-[1%] bg-white'>
    <header className='w-[100%] p-[1%] flex justify-start items-center'>
      <img src={info.users_info.images[user_file_id]} alt={info.users_info.images[user_file_id]} className='w-[10%] rounded-full'/>
      <div className='w-full flex flex-col'>
        <h3 className='ml-[5%] text-2xl'>{info.users_info.names[user_file_id]}</h3>
        <span className='ml-[5%] w-[25%] p-[0.5%] bg-[#009933] rounded-3xl flex justify-center items-center'>{type}</span>
      </div>
    </header>
    <div className='w-[100%] flex justify-center items-center p-[2%]'>
      <span className='w-[60%] text-xl'>File: {title}</span>
      <button className='w-[25%] bg-[#009933] text-xl h-full border hover:scale-105 transition duration-300 rounded-3xl'>
        Descargar
      </button>
    </div>
    <span className='w-[90%] flex justify-start'>
      <p>{hour} ~ </p>
      <p>{day}</p>
    </span>
  </article>
);

function Chats() {

    const [isSending, setIsSending] = useState(false);
    const [isDocument, setIsDocument] = useState(false);
    const loca = useLocation();
    const chat_id = loca.state;

    return (
      <>
        <Initial>
          
          <section className="w-[90%] min-h-[60vh] lg:min-h-[50vh] xl:min-h-[50vh] p-[1%] rounded-3xl border border-gray-500 bg-white flex flex-col justify-start items-center">
            <section id='messageArea' className='relative w-[95%] min-h-[60vh] h-[60vh] xl:h-[52vh] 2xl:h-[52vh] text-black font-bold font-montserrat flex flex-col justify-start items-center bg-white border border-black rounded-3xl'>

              <div className='w-full bg-[#D9D9D9] rounded-t-3xl min-h-[10%] h-[10%] flex items-center justify-center'>
                <div className='w-[40%] h-full flex justify-center items-center'>
                  <button className='w-[60%] h-[80%] font-bold text-2xl rounded-3xl bg-[#009933] hover:scale-105 transition duration-300' onClick={() => setIsDocument(true)}>
                    Ver documentos
                  </button>
                </div>
                <div className='w-[60%] h-full flex justify-end items-center pr-[5%]'>
                  { Info.length > 0 && Object.entries(Info[0].users_info.images).length > 0 ? (
                    Object.entries(Info[0].users_info.images).map(([key, url]) => (
                      <img src={url} className='h-[90%] m-[2%] rounded-full'/>
                  
                  ))) : (
                      <p>No hay usuarios en el chat...</p>
                    )
                  }
                </div>
              </div>

              <div className='w-full min-h-[80%] h-[80%] max-h-[80%] overflow-y-auto flex flex-col justify-start items-center'>  
                { Info.length > 0 && Object.entries(Info[0].messages).length > 0 ? (
                  Object.entries(Info[0].messages).map(([key, tarjeta]) => (
                    <Tarjeta 
                      key={key} 
                      id={Info[0].user_id} 
                      info={Info[0]} 
                      message={tarjeta[0]} 
                      hour={tarjeta[2]} 
                      day={tarjeta[1]} 
                      user_message_id={Object.values(tarjeta[3])[0]}
                      type={Object.keys(tarjeta[3])[0]}
                    />
                  ))
                ) : ( 
                  <p>Hola...</p> 
                )}
              </div>
              
              <div className='w-full min-h-[10%] bg-[#D9D9D9] rounded-b-3xl flex justify-center items-center'>
                <button className='w-[30%] h-[80%] bg-[#009933] rounded-3xl border hover:scale-105 transition duration-300' onClick={() => setIsSending(true)}>
                  Solicitar documento
                </button>
              </div>

              { isSending && (
                <div className='absolute z-1 bottom-0 w-full h-full bg-[#D9D9D9] rounded-3xl border border-black flex flex-col justify-start items-center'>
              <section className='w-[100%] h-[20%] flex justify-between items-center'>
                <h2 className='font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl w-[90%] h-full flex justify-start items-center pt-[1%] pl-[5%]'>Solicitud de documento</h2>
                <button className="bg-white w-[15%] sm:w-[9%] md:w-[7%] lg:w-[5%] xl:w-[5%] 2xl:w-[5%] h-[60%] mr-[4%] rounded-4xl hover:scale-110 transition duration-300 bg-[url('/src/admin/assets/pages/infoApoyo/cancel.png')] bg-cover bg-center bg-no-repeat" style={{ backgroundSize: '50%' }} onClick={() => setIsSending(false)}>
                </button>
              </section>
              <section className='w-[95%] h-[80%] flex flex-col justify-start items-center p-[2%]'>
                <div className='w-full h-[15%] flex flex-col justify-center items-center mb-[3%]'>
                  <h3 className='font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl w-[100%] h-[30%] mb-[2%] pl-[1%] '>Titulo de la solicitud</h3>
                <input placeholder='* Ingrese un titulo...' className='bg-white w-[100%] min-h-[70%] border rounded-3xl pl-[2%]' />
                </div>
                <div className='w-full h-[15%] flex flex-col justify-center items-center mb-[3%]'>
                  <h3 className='font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl w-[100%] h-[30%] mb-[2%] pl-[1%] '>Tipo de archivo</h3>
                  <input placeholder='* Tipo: imagen/documento' className='pointer-events-none bg-white w-[100%] min-h-[70%] border rounded-3xl pl-[2%]' />
                </div>
                <div className='w-full h-[15%] flex flex-col justify-center items-center mb-[3%]'>
                  <h3 className='font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl w-[100%] h-[30%] mb-[2%] pl-[1%] '>Tipo de archivo</h3>
                  <button className='bg-white w-[50%] min-h-[70%] border rounded-3xl hover:scale-105 trnsition duration-300'>Subir archivo de ejemplo</button>
                </div>
                


                <div className='w-[100%] h-[30%] flex justify-center items-end'>
                  <button className='w-[50%] sm:w-45%] md:w-[40%] lg:w-[35%] xl:w-[30%] 2xl:w-[30%] h-[100%] bg-[#009933] rounded-full border hover:scale-110 transition duration-300 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl'>
                    Notificar
                  </button>
                </div>
              </section>
            </div>

              )
              }

              { isDocument && (
                <div className='absolute z-1 bottom-0 w-full h-full bg-[#D9D9D9] rounded-3xl border border-black flex flex-col justify-start items-center'>
                  <section className='w-[100%] h-[20%] flex justify-between items-center'>
                    <h2 className='font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl w-[90%] h-full flex justify-start items-center pt-[1%] pl-[5%]'>Documentos cargados</h2>
                    <button className="bg-white w-[15%] sm:w-[9%] md:w-[7%] lg:w-[5%] xl:w-[5%] 2xl:w-[5%] h-[60%] mr-[4%] rounded-4xl hover:scale-110 transition duration-300 bg-[url('/src/admin/assets/pages/infoApoyo/cancel.png')] bg-cover bg-center bg-no-repeat" style={{ backgroundSize: '50%' }} onClick={() => setIsDocument(false)}>
                    </button>
                  </section>

                  <section className='w-full h-[80%] overflow-y-auto flex flex-col justify-start items-center'>
                    { Info.length > 0 && Object.entries(Info[0].files).length > 0 ? (
                        Object.entries(Info[0].files).map(([key, tarjeta]) => (
                      <TarjetaArchivos 
                      key={key} 
                      id={Info[0].user_id} 
                      info={Info[0]} 
                      title={tarjeta[0]} 
                      hour={tarjeta[3]} 
                      day={tarjeta[2]} 
                      user_file_id={Object.values(tarjeta[4])[0]}
                      type={Object.keys(tarjeta[4])[0]}
                      />
                        ))
                    ) : (
                        <p>No hay archivos...</p>
                    )
                    }
                  </section>
                </div>
              )
              }

            </section>
              
            <section id='sendArea' className='w-[95%] h-[10vh] mt-[1%] bg-white border border-black rounded-3xl flex justify-center items-center'>  
              <div className='w-[70%] h-full scale-y-98 bg-white rounded-3xl'>
                <textarea placeholder='Escribe un mensaje...' className='flex justify-center items-center w-full h-full resize-none rounded-l-3xl pl-[3%] pt-[3%] text-xl ' />
              </div>
              <div className='w-[30%] h-full bg-[#D9D9D9] rounded-e-3xl flex justify-center items-center'>
                <button className='w-[50%] h-[60%] bg-[#009933] rounded-3xl text-4xl font-bold border hover:scale-105 transition duration-300'>
                  Enviar
                </button>
              </div>
            </section>
          </section>
        </Initial>
      </>
    )
  }
  
  export default Chats
