import '@fontsource/montserrat';
import Initial from '../Layouts/Initial.jsx';
import SubirArchivo from '../../GeneralComponents/SubirArchivo.jsx';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import submit from '/src/client/Peticiones/PeticionesInicialForm/newInfoSubmit.jsx';

function FormularioEscuela() {

    //const userId = localStorage.getItem("id_usuario");
    //const Type = localStorage.getItem("tipo");

    const locate = useLocation();
    const Type = locate.state?.type;
    const userId = locate.state?.id;
    const navigate = useNavigate(); 

    const [formData, setFormData] = useState({
        //correo_escuela, id_usuario, nombre_escuela, dir_matutino, dir_vespertino, direccion, necesidades, reporte, nombre, correo, edad,
        correo_escuela: '',
        turn: 0,
        nombre_escuela: '',
        dir_matutino: '',
        dir_vespertino: '',
        direccion: '',
        archivo: '', // si es un archivo se maneja diferente
        nombre: '',
        correo: '',
        edad: 0,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

    let parsedValue = value;

    if (name === 'turn') {
        parsedValue = parseInt(value);
    }
    else if (name === 'edad') {
        parsedValue = parseInt(value);
    }

    setFormData({
        ...formData,
        [name]: parsedValue
    });
    };

    const handleFileSelect = (name, file) => {
        setFormData({...formData, [name]: file});
      };
      
       
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
                    <select name="turn" onChange={handleChange} value={formData.turn} className="mt-2 pl-[10px] w-full h-[5.5vh] border border-black rounded-xl bg-white text-black">
                        <option value="">Selecciona una opción</option>
                        <option value= "1">Matutino</option>
                        <option value="2">Vespertino</option>
                        <option value="3">Ambos</option>
                    </select>                    
                </article>

                <article className='font-montserrat font-bold text-xl mt-[20px] w-[60%] flex items-center flex-col justify-center'>
                    <p className='flex self-start w-[100%] '>Nombre de la escuela</p>
                    <input name= "nombre_escuela" onChange={handleChange} value={formData.name_school} className='mt-[5px] w-[100%] h-[5.5vh] border border-black rounded-xl pl-[20px]'/>
                </article>

                <article className='font-montserrat font-bold text-xl mt-[20px] w-[60%] flex items-center flex-col justify-center'>
                    <p className='flex self-start w-[100%] '>Correo Institucional</p>
                    <input name= "correo_escuela" onChange={handleChange} value={formData.correo_institucional} className='mt-[5px] w-[100%] h-[5.5vh] border border-black rounded-xl pl-[20px]'/>
                </article>

                <article className='font-montserrat font-bold text-xl mt-[20px] w-[60%] flex items-center flex-col items-center'>
                    <p className='flex self-start w-[100%] '>Nombre del director en turno Matutino</p>
                    <input name= "dir_matutino" onChange={handleChange} value={formData.dir_mat} className='mt-[5px] w-[100%] h-[5.5vh] border border-black rounded-xl pl-[20px]'/>
                </article>

                <article className='font-montserrat font-bold text-xl mt-[20px] w-[60%] flex items-center flex-col items-center'>
                    <p className='flex self-start w-[100%] '>Nombre del director en turno Vespertino</p>
                    <input name= "dir_vespertino" onChange={handleChange} value={formData.dir_ves} className='mt-[5px] w-[100%] h-[5.5vh] border border-black rounded-xl pl-[20px]'/>
                </article>

                <article className='font-montserrat font-bold text-xl mt-[20px] w-[60%] flex items-center flex-col items-center'>
                    <p className='flex self-start w-[100%] '>Dirección de la escuela</p>
                    <input name= "direccion" onChange={handleChange} value={formData.direction} className='mt-[5px] w-[100%] h-[5.5vh] border border-black rounded-xl pl-[20px]'/>
                </article>
                
                <p className='font-montserrat flex flex-start w-[60%] mt-[40px] '>Reporte que avale la solicitud de registro por parte del director con usted como responsable (firmado)</p>
                <SubirArchivo name="archivo" onFileSelect={handleFileSelect}/>


                <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-bold mt-[20px] mt-[100px] mb-[40px] w-[80%] flex justify-center">
                    Mi responsable
                </h2>

                <article className='font-montserrat font-bold text-xl mt-[20px] w-[60%] flex items-center flex-col items-center'>
                    <p className='flex self-start w-[100%] '>Nombre del responsable</p>
                    <input name= "nombre" onChange={handleChange} value={formData.name_resp} className='mt-[5px] w-[100%] h-[5.5vh] border border-black rounded-xl pl-[20px]'/>
                </article>

                <article className='font-montserrat font-bold text-xl mt-[20px] w-[60%] flex items-center flex-col items-center'>
                    <p className='flex self-start w-[100%] '>Correo del responsable</p>
                    <input name= "correo" onChange={handleChange} value={formData.email_resp} className='mt-[5px] w-[100%] h-[5.5vh] border border-black rounded-xl pl-[20px]'/>
                </article>

                <article className='font-montserrat font-bold text-xl mt-[20px] w-[60%] flex items-center flex-col items-center'>
                    <p className='flex self-start w-[100%] '>Edad del responsable</p>
                    <input name= "edad" onChange={handleChange} value={formData.edad_resp} className='mt-[5px] w-[100%] h-[5.5vh] border border-black rounded-xl pl-[20px]'/>
                </article>
                

                <button onClick={() => submit(formData).catch(console.error)} className='flex justify-center items-center w-[50%] h-[8vh] py-[3%] mt-[50px] mb-[20px] rounded-full border-3 border-solid text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold hover:scale-105 transition durantion-300' style={{ backgroundColor: '#009933' }}>
                    Enviar información
                </button>
                </div>
            </section>
          </Initial>
        </div>
      </>
    )
  }
 
  export default FormularioEscuela
