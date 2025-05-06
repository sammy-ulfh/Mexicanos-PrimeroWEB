const MiniPerfil = ({info, navigate, route}) => {
    return (
        <button  className="border border-black bg-white w-[40%] lg:w-[30%] min-h-[30vh] rounded-3xl flex flex-col items-center justify-center m-[20px] hover:scale-103 transition duration-300 hover:bg-gray-100" onClick={() => navigate(route, {state: 1})}>
          <div className={`relative flex justify-center ${info?.nombre_institution ? 'items-end' : 'items-center'} w-full ${info?.nombre_institucion ? 'h-[25vh]' : 'h-auto'}`}>
            {info?.nombre_institution &&(  
                <img src={info?.imagen_institucion} className='absolute w-full h-full object-cover rounded-4xl z-0' />
              )
            }
            <img src={info?.imagen_responsable} alt="foto de una persona" className='w-20 lg:w-30 aspect-square object-cover rounded-full border-3 border-solid mt-[2px] z-10'/>
          </div>
          <span className="text-base font-bold sm:text-xl md:text-xl lg:text-xl xl:text-xl w-[90%] flex justify-center mb-[1vh]">
            {info?.nombre_responsable}
          </span>

          <span className="text-base sm:text-base md:text-base lg:text-base xl:text-base w-[90%] mb-[1vh]">
            {info?.resumen_responsable}
          </span>
        </button>
    );
  };
  
  export default MiniPerfil;
