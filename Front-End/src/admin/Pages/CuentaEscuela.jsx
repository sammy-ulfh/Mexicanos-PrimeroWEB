import '@fontsource/montserrat';
import Initial from '../Layouts/Initial.jsx';
import SubirArchivo from '../../GeneralComponents/SubirArchivo.jsx';

function CuentaEscuela() {


    return (
      <>
        <div className="min-h-screen min-w-screen z-0 font-montserrat flex flex-col justify-between" style={{ backgroundColor: '#FBFBE6' }}>
          <Initial>
          <section id="about" className="flex flex-wrap items-center justify-center w-[100%] xl:w-[100%] h-full mt-[5vh] mb-[5vh] xl:ml-[10px] center">
            <div className="border border-black bg-white w-[80%] rounded-3xl flex flex-col items-center max_width">
            <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-bold mt-[20px] mt-[100px] mb-[40px] w-[80%] flex justify-center">
                Mi escuela
            </h2>
                
                <article className='font-montserrat text-xl mt-[20px] w-[60%] flex items-center flex-col justify-center'>
                    <p className='flex font-bold self-start w-[100%]'>Turno:</p>
                    <select className="mt-2 pl-[10px] w-full h-[5.5vh] border border-black rounded-xl bg-white text-black">
                        <option value="">Selecciona una opción</option>
                        <option value="Matutino">Matutino</option>
                        <option value="Vespertino">Vespertino</option>
                        <option value="Ambos">Ambos</option>
                    </select>                    
                </article>

                <article className='font-montserrat font-bold text-xl mt-[20px] w-[60%] flex items-center flex-col justify-center'>
                    <p className='flex self-start w-[100%] '>Nombre de la escuela</p>
                    <input className='mt-[5px] w-[100%] h-[5.5vh] border border-black rounded-xl pl-[20px]'/>
                </article>

                <article className='font-montserrat font-bold text-xl mt-[20px] w-[60%] flex items-center flex-col justify-center'>
                    <p className='flex self-start w-[100%] '>Correo Institucional</p>
                    <input className='mt-[5px] w-[100%] h-[5.5vh] border border-black rounded-xl pl-[20px]'/>
                </article>

                <article className='font-montserrat font-bold text-xl mt-[20px] w-[60%] flex items-center flex-col items-center'>
                    <p className='flex self-start w-[100%] '>Nombre del director en turno Matutino</p>
                    <input className='mt-[5px] w-[100%] h-[5.5vh] border border-black rounded-xl pl-[20px]'/>
                </article>

                <article className='font-montserrat font-bold text-xl mt-[20px] w-[60%] flex items-center flex-col items-center'>
                    <p className='flex self-start w-[100%] '>Nombre del director en turno Vespertino</p>
                    <input className='mt-[5px] w-[100%] h-[5.5vh] border border-black rounded-xl pl-[20px]'/>
                </article>

                <article className='font-montserrat font-bold text-xl mt-[20px] w-[60%] flex items-center flex-col items-center'>
                    <p className='flex self-start w-[100%] '>Dirección de la escuela</p>
                    <input className='mt-[5px] w-[100%] h-[5.5vh] border border-black rounded-xl pl-[20px]'/>
                </article>
                
                <p className='font-montserrat flex flex-start w-[60%] mt-[40px] '>Reporte que avale la solicitud de registro por parte del director con usted como responsable (firmado)</p>
                <SubirArchivo></SubirArchivo>

                <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-bold mt-[20px] mt-[100px] mb-[40px] w-[80%] flex justify-center">
                    Mi responsable
                </h2>

                <article className='font-montserrat font-bold text-xl mt-[20px] w-[60%] flex items-center flex-col items-center'>
                    <p className='flex self-start w-[100%] '>Nombre del responsable</p>
                    <input className='mt-[5px] w-[100%] h-[5.5vh] border border-black rounded-xl pl-[20px]'/>
                </article>

                <article className='font-montserrat font-bold text-xl mt-[20px] w-[60%] flex items-center flex-col items-center'>
                    <p className='flex self-start w-[100%] '>Correo del responsable</p>
                    <input className='mt-[5px] w-[100%] h-[5.5vh] border border-black rounded-xl pl-[20px]'/>
                </article>

                <article className='font-montserrat font-bold text-xl mt-[20px] w-[60%] flex items-center flex-col items-center'>
                    <p className='flex self-start w-[100%] '>Edad del responsable</p>
                    <input className='mt-[5px] w-[100%] h-[5.5vh] border border-black rounded-xl pl-[20px]'/>
                </article>

                <div className='flex justify-center items-center w-[100%]'>
                  <button className='flex justify-center items-center w-[30%] h-[10vh] mt-[50px] mb-[20px] rounded-4xl text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold border-4 border-solid hover:scale-105 transition duration-300 mr-[2vw]' style={{ backgroundColor: '#009933' }}>
                    Rechazar
                  </button>
                  <button className='flex justify-center items-center w-[30%] h-[10vh] mt-[50px] mb-[20px] rounded-4xl text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold border-4 border-solid hover:scale-105 transition duration-300' style={{ backgroundColor: '#009933' }}>
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
 
  export default CuentaEscuela
