const Profile = ({id, name, email, image, resumen, info, navigate}) => (
  <div className="flex flex-col justify-center items-start w-full h-full mt-[5vh] font-montserrat">
    <div className='flex w-full h-full flex-col justify-center items-center mb-[5vh]'>
      <div className='w-full h-full flex flex-col lg:flex-row justify-center items-center'>
        <div className='lg:w-[50%] h-[100%] w-[100%] flex flex-col justify-between items-start p-[2vw]'>
          <img src={image} className='w-[33%] h-50 rounded-full object-cover' />
          <article className='mb-[2vh] mt-[2vh]'>
            {info.institution == 'true' &&(  
                <h1 className='text-3xl font-bold'>Responsable</h1>
              )
            }
            <p className='text-2xl'>{name}</p>
          </article>
          
          <article className='mb-[2vh]'>
            <h2 className='text-3xl font-bold'>Resumen</h2>
            <p className='text-2xl'>{resumen}</p>
          </article>      

          <article className='mb-[2vh]'>
            <h2 className='text-3xl font-bold'>Contacto</h2>
            <p className='text-2xl text-blue-600' >{email}</p>
          </article>
        </div> 

        <div className='lg:w-[50%] h-[100%] w-[100%] flex flex-col justify-between items-start p-[2vw]'>
          
           {info.institution == 'true' &&(  
              <img src={info.image} className='w-[80%] h-50 rounded-xl border object-cover' />
              )
            }
          {info.institution === 'true' &&(
            <>
              <article className='mb-[2vh] mt-[2vh]'>
                <h1 className='text-3xl font-bold'>Institución {info.institution_type}</h1>
                <span className='text-3xl'>{info.institution_name}</span>
              </article>
               
              <article className='mb-[2vh]'>
                <h2 className='text-3xl font-bold'>Resumen público de la institución</h2>
                <p className='text-2xl'>{info.institution_resumen}</p>
              </article>
            </>
            )
          }

          {info.institution === 'true' && info.institution_type === 'escolar' && (  
            <>
              <h2 className='text-3xl font-bold'>Necesidades</h2>
              <p className='text-2xl'>{info.institution_necesidades}</p>
            </>
            )
          }
        </div>

      </div>
      
      <div className='w-full h-[15vh] flex justify-center items-center'>
        <button className='flex justify-center items-center w-[40%] h-[60%] rounded-4xl bg-[#009933] border hover:scale-105 transition duration-300 font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>
          Enviar mensaje
        </button>
      </div>
    </div>
  </div>
);

export default Profile
