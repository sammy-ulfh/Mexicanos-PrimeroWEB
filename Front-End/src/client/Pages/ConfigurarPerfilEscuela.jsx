import '@fontsource/montserrat';
import MainLayout from '../Layouts/MainLayout';
import MostrarOpcion from '../../GeneralComponents/MostrarOpcion';
import { useRef, useState } from 'react';
import uploadProfileImage from '/src/client/Peticiones/peticionImagen/setImagen.jsx';
import getProfileImage from '/src/client/Peticiones/peticionImagen/getImagen.jsx';


function ConfigurarPerfilEscuela() {
    const [fotoPerfil, setFotoPerfil] = useState("../../client/assets/other/persona.jpg");
    const [urlImagen, setUrlImagen] = useState("https://mexicanosprimero.s3.mx-central-1.amazonaws.com/documentos/Carlos Monje.jpg");
    const inputFileRef = useRef();

    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const formData = new FormData();
        formData.append('archivo', file);
        
        const localUrl = URL.createObjectURL(file);
        setUrlImagen(localUrl);

        try{
            const url = await uploadProfileImage(formData);
            setFotoPerfil(url);
        } catch (error) {
            alert("Error al subir la imagen. Por favor, inténtalo de nuevo.");
        }
    };

    const handleClickCambiar = () => {
        inputFileRef.current.click();
    };

    return (
      <>
        <div className="min-h-screen min-w-screen z-0 font-montserrat flex flex-col justify-between" style={{ backgroundColor: '#FBFBE6' }}>
          <MainLayout>
          <section id="about" className="flex flex-wrap items-center justify-center w-[100%] h-full mb-[5vh]">
            <div className="border border-black bg-white w-[80%] rounded-3xl flex flex-col items-center max_width">
            <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-bold mt-[20px] mt-[100px] mb-[40px] w-[80%] flex justify-center">
                Mi perfil 
            </h2>

            <span className='font-montserrat font-bold text-xl mt-[10px] w-[60%] xl:w-[40vw] '>
                <p className='flex self-start w-[auto] '>Imagen del responsable</p>
            </span>

            <section className='font-montserrat text-xl mt-[10px] w-[60%] flex flex-row flex-wrap items-center justify-between'>
                <div className="w-[50%] h-[50%] mt-[2vh]">
                    <img src={urlImagen} alt="foto de ejemplo persona" className='w-4/6 max-w-[200px] aspect-square object-cover rounded-full border-3 border-solid'/>
                </div>
                <input type="file" ref={inputFileRef} onChange={handleFileChange}  accept="image/*" style={{display: "none"}}/>
                <button onClick={handleClickCambiar} className='flex justify-center items-center w-[40%] h-[10vh] mt-[20px] mb-[20px] rounded-4xl text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold border-3 border-solid hover:scale-105 transition duration-300' style={{ backgroundColor: '#009933' }}>
                    Cambiar
                </button>
            </section>
                
                <article className='font-montserrat text-xl mt-[10px] w-[60%] xl:w-[40vw] flex flex-col justify-around'>
                    <section className='font-montserrat text-xl mt-[20px] w-[auto%] flex items-center justify-between'>
                        <p className='flex self-auto font-bold  w-[auto] '>Correo de contacto</p>
                        <MostrarOpcion></MostrarOpcion> 
                    </section>
                    <input placeholder='example@gmail.com' className='flex self-center mt-[5px] w-[100%] h-[5.5vh] border border-black rounded-xl pl-[20px]'/>
                </article>

                <article className='font-montserrat text-xl mt-[20px] w-[60%] xl:w-[40vw] flex items-center flex-col items-center'>
                    <p className='flex self-start font-bold  w-[auto] '>Genero</p>
                    <input className='mt-[5px] w-[100%] h-[5.5vh] border border-black rounded-xl pl-[20px]'/>
                </article>

                <article className='font-montserrat text-xl mt-[20px] w-[60%] xl:w-[40vw] flex items-center flex-col items-center'>
                    <p className='flex self-start font-bold  w-[auto] '>Resumen público</p>
                    <input className='mt-[5px] w-[100%] h-[30vh] border border-black rounded-xl pl-[20px]'/>
                </article>

                <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-bold mt-[20px] mt-[100px] mb-[40px] w-[80%] flex justify-center">
                    Escuela
                </h2>


            <span className='font-montserrat font-bold text-xl mt-[10px] w-[60%] xl:w-[40vw] '>
                <p className='flex self-start w-[auto] '>Imagen</p>
            </span>
            <section className='font-montserrat text-xl mt-[10px] w-[80%] flex flex-row flex-wrap items-center '>
                <div className="w-[60%] h-[100%] mt-[2vh]">
                    <img src="/src/client/assets/other/escuela.jpeg" alt="foto de ejemplo escuela" className='w-[90%] h-[200px] object-cover rounded-xl border-2 border-solid'/>
                </div>
                <button className='flex justify-center items-center w-[40%] h-[10vh] mt-[20px] mb-[20px] rounded-4xl text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold border-3 border-solid hover:scale-105 transition duration-300' style={{ backgroundColor: '#009933' }}>
                    Cambiar
                </button>
            </section>
                
                <article className='font-montserrat text-xl mt-[10px] w-[60%] xl:w-[40vw] flex flex-col justify-around'>
                    <section className='font-montserrat text-xl mt-[20px] w-[auto%] flex items-center justify-between'>
                        <p className='flex self-auto font-bold  w-[auto] '>Correo de contacto</p>
                        <MostrarOpcion></MostrarOpcion> 
                    </section>
                    <input placeholder='example@gmail.com' className='flex self-center mt-[5px] w-[100%]  h-[5.5vh] border border-black rounded-xl pl-[20px]'/>
                </article>

                <article className='font-montserrat text-xl mt-[20px] w-[60%] xl:w-[40vw] flex items-center flex-col items-center'>
                    <p className='flex self-start font-bold  w-[auto] '>Necesidades de la escuela (separado por comas)</p>
                    <input className='mt-[5px] w-[100%] h-[30vh] border border-black rounded-xl pl-[20px]'/>
                </article>

                <article className='font-montserrat text-xl mt-[20px] w-[60%] xl:w-[40vw] flex items-center flex-col items-center'>
                    <p className='flex self-start font-bold  w-[auto] '>Resumen público de la escuela</p>
                    <input className='mt-[5px] w-[100%] h-[30vh] border border-black rounded-xl pl-[20px]'/>
                </article>

                <button className='flex justify-center items-center w-[40%] h-[10vh] mt-[50px] mb-[20px] rounded-4xl text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold border-4 border-solid hover:scale-105 transition duration-300' style={{ backgroundColor: '#009933' }}>
                    Guardar
                </button>
                </div>
            </section>
          </MainLayout>
        </div>
      </>
    )
  }
 
  export default ConfigurarPerfilEscuela
