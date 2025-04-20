import '@fontsource/montserrat';
import Initial from '../Layouts/Initial.jsx';
import SubirArchivo from '../../GeneralComponents/SubirArchivo.jsx';
import { useState } from 'react';
import submit from '/src/client/Peticiones/PeticionesInicialForm/newInfoSubmit.jsx';


function FormularioDonador() {
     const userId = localStorage.getItem("id_usuario");
     const Type = localStorage.getItem("tipo");
    
    const [formData, setFormData] = useState({
        rfc_resp: '',
        correo_responsable: '', 
        id_usuario: userId,
        type: Type, 
        inst: '', 
        nombre_responsable: '', 
        correo_institucion: '', 
        rfc: '', 
        edad_responsable: '', 
        nombre_institucion: '', 
        ine: '', 
        reporte: ''
    });

    const handleChange = (e) => {

        const { name, value } = e.target;

    let parsedValue = value;

    if (name === 'inst') {
        parsedValue = value === "true"; // "true" → true, "false" → false
    }

    setFormData({
        ...formData,
        [name]: parsedValue
    });
    };



    return (
      <>
        <div className="min-h-screen min-w-screen z-0 font-montserrat flex flex-col justify-between" style={{ backgroundColor: '#FBFBE6' }}>
          <Initial>
          <section id="about" className="flex flex-col items-center justify-center w-[100%] xl:w-[100%] h-full mt-[5vh] mb-[5vh] xl:ml-[10px] center">
            <div className="border border-black bg-white w-[80%] rounded-3xl flex flex-col items-center max_width">
            <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-bold mt-[20px] mt-[100px] mb-[40px] w-[80%] flex justify-center">
                Mis donaciones
            </h2>
                
                <article className='font-montserrat text-xl mt-[20px] w-[60%] flex items-center flex-col justify-center'>
                    <p className='flex font-bold self-start w-[100%]'>¿Se registrará a una institución?</p>
                    <select name="inst" onChange={handleChange} value={formData.inst} className="mt-2 pl-[10px] w-[100%] h-[5.5vh] border border-black rounded-xl bg-white text-black">
                        <option value="">Selecciona una opción</option>
                        <option value= "true">Si</option>
                        <option value="false">No</option>
                    </select>                    
                </article>

                <article className='font-montserrat font-bold text-xl mt-[20px] w-[60%] flex items-center flex-col items-center'>
                    <p className='flex self-start w-[100%] '>Nombre del responsable</p>
                    <input name="nombre_responsable" onChange={handleChange} value={formData.nombre_responsable} className='mt-[5px] w-[100%] h-[5.5vh] border border-black rounded-xl pl-[20px]'/>
                </article>

                <article className='font-montserrat font-bold text-xl mt-[20px] w-[60%] flex items-center flex-col items-center'>
                    <p className='flex self-start w-[100%] '>Correo del responsable</p>
                    <input name="correo_responsable" onChange={handleChange} value={formData.correo_responsable} className='mt-[5px] w-[100%] h-[5.5vh] border border-black rounded-xl pl-[20px]'/>
                </article>

                <article className='font-montserrat font-bold text-xl mt-[20px] w-[60%] flex items-center flex-col items-center'>
                    <p className='flex self-start w-[100%] '>RFC</p>
                    <input name="rfc_resp" onChange={handleChange} value={formData.rfc_resp} className='mt-[5px] w-[100%] h-[5.5vh] border border-black rounded-xl pl-[20px]'/>
                </article>

                <article className='font-montserrat font-bold text-xl mt-[20px] w-[60%] flex items-center flex-col items-center'>
                    <p className='flex self-start w-[100%] '>Edad del responsable</p>
                    <input name="edad_responsable" onChange={handleChange} value={formData.edad_responsable} className='mt-[5px] w-[100%] h-[5.5vh] border border-black rounded-xl pl-[20px]'/>
                </article>
                
                <p className='font-montserrat flex flex-start w-[60%] mt-[40px] '>INE/IFE</p>
                <SubirArchivo onUpload={(url) => setFormData({ ...formData, ine: url })} />

                <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-bold mt-[20px] mt-[100px] mb-[40px] w-[80%] flex justify-center">
                    De ser una insitución
                </h2>

                <article className='font-montserrat font-bold text-xl mt-[20px] w-[60%] flex items-center flex-col items-center'>
                    <p className='flex self-start w-[100%] '>Nombre de la institución</p>
                    <input name="nombre_institucion" onChange={handleChange} value={formData.nombre_institucion} className='mt-[5px] w-[100%] h-[5.5vh] border border-black rounded-xl pl-[20px]'/>
                </article>

                <article className='font-montserrat font-bold text-xl mt-[20px] w-[60%] flex items-center flex-col items-center'>
                    <p className='flex self-start w-[100%] '>RFC de la institución</p>
                    <input name="rfc" onChange={handleChange} value={formData.rfc} className='mt-[5px] w-[100%] h-[5.5vh] border border-black rounded-xl pl-[20px]'/>
                </article>

                <article className='font-montserrat font-bold text-xl mt-[20px] w-[60%] flex items-center flex-col items-center'>
                    <p className='flex self-start w-[100%] '>Correo de la institución</p>
                    <input name="correo_institucion" onChange={handleChange} value={formData.correo_institucion} className='mt-[5px] w-[100%] h-[5.5vh] border border-black rounded-xl pl-[20px]'/>
                </article>

                <p className='font-montserrat flex flex-start w-[60%] mt-[40px] '>Reporte que avale la solicitud de registro por parte de la institución con usted como responsable (firmado)</p>
                <SubirArchivo onUpload={(url) => setFormData({ ...formData, reporte: url })} />

                <button onClick={() => submit(formData).catch(console.error)}  className='flex justify-center items-center w-[50%] h-[8vh] py-[3%] mt-[50px] mb-[20px] rounded-full border-3 border-solid text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold hover:scale-105 transition durantion-300' style={{ backgroundColor: '#009933' }}>
                    Enviar información
                </button>
                </div>
            </section>
          </Initial>
        </div>
      </>
    )
  }
 
  export default FormularioDonador
