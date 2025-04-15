const MiniPerfil = () => {
    return (
        <a  className="border border-black bg-white w-[25%] rounded-3xl flex flex-wrap flex-col items-center m-[20px] ">
            {/*get img profile */}
            
            <img src="\src\client\assets\other\persona.jpg" alt="foto de ejemplo persona" className='w-4/6 max-w-[100px] aspect-square object-cover rounded-full border-3 border-solid mt-[2px]'/>

            {/*get nombre del donante */}
            <span className="text-base font-bold sm:text-xl md:text-xl lg:text-xl xl:text-xl w-[90%] flex justify-center">
                Pepe Pérez Hernández<br/>
            </span>

             {/*get descripción */}
            <span className="text-base sm:text-base md:text-base lg:text-base xl:text-base w-[90%]">
                Espero ayudar a escuelas mediante la donación de libros o materiales de clase.<br/>
            </span>

        </a>
    );
  };
  
  export default MiniPerfil;