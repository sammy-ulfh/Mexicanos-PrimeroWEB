const MiniPerfil = ({id, name, image, resumen, info, navigate}) => {
    return (
        <button  className="border border-black bg-white w-[40%] lg:w-[30%] h-[30vh] rounded-3xl flex flex-col items-center justify-center m-[20px] hover:scale-103 transition duration-300 hover:bg-gray-100" onClick={() => navigate('/portal/perfil', {state: id})}>
          <div className={`relative flex justify-center ${info.institution == 'true' ? 'items-end' : 'items-center'} w-full ${info.institution == 'true' ? 'h-[25vh]' : 'h-auto'}`}>
            {info.institution == 'true' &&(  
                <img src={info.image} className='absolute w-full h-full object-cover rounded-4xl z-0' />
              )
            }
            <img src={image} alt="foto de una persona" className='w-20 lg:w-30 aspect-square object-cover rounded-full border-3 border-solid mt-[2px] z-10'/>
          </div>
          <span className="text-base font-bold sm:text-xl md:text-xl lg:text-xl xl:text-xl w-[90%] flex justify-center mb-[1vh]">
            {name}
          </span>

          <span className="text-base sm:text-base md:text-base lg:text-base xl:text-base w-[90%] mb-[1vh]">
            {resumen}
          </span>
        </button>
    );
  };
  
  export default MiniPerfil;
