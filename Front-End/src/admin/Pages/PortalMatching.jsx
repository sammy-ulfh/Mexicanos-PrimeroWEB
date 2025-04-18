import '@fontsource/montserrat';
import { useNavigate } from 'react-router-dom';
import Initial from '../Layouts/Initial';
import MiniPerfil from '../../GeneralComponents/MiniPerfil';
import SearchBar from '../../GeneralComponents/SearchBar';

const user_info = [ {
  user_id: 1,
  user_rol: 'donador',
  name: 'Miguel Hidalgo y Costilla de Sabrade Robles',
  email: 'miguelHidalgo@example.ext',
  image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.recreoviral.com%2Fwp-content%2Fuploads%2F2015%2F01%2Fmitad-2-personas-4.jpg&f=1&nofb=1&ipt=a7b13ff6fcf7dabb797806f3cb1aa6da660c7c25a92b157dd688336252bab819',
  resumen: `Responsable de la gestión de los apoyos a escuelas.`,
  info: {
    institution: 'true',
    institution_type: 'donadora',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-3.expansion.mx%2Fdims4%2Fdefault%2Fb0b4136%2F2147483647%2Fstrip%2Ftrue%2Fcrop%2F362x190%2B0%2B13%2Fresize%2F1200x630!%2Fquality%2F90%2F%3Furl%3Dhttps%3A%252F%252Fcherry-brightspot.s3.amazonaws.com%252Fmedia%252F2014%252F08%252F11%252Ftec-logo.jpg&f=1&nofb=1&ipt=f7911a2fc5c4bf91b0edf5182ec2677b69a9d93bb4944e2219e1622ab92d50a3',
    institution_name: 'Tec de Monterrey',
    institution_resumen: `Escuela privada con un proyecto de apoyo que  busca la mejora educativa para escuelas que requerían de apoyo para brindar una mejor calidad de estudio a sus alumnos.`,
    institution_dir: 'Av. Gral Ramón Corona No 2514, Colonia Nuevo México, 45201 Zapopan, Jal.'
  }
},
{
  user_id: 1,
  user_rol: 'donador',
  name: 'Miguel Hidalgo y Costilla de Sabrade Robles',
  email: 'miguelHidalgo@example.ext',
  image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.recreoviral.com%2Fwp-content%2Fuploads%2F2015%2F01%2Fmitad-2-personas-4.jpg&f=1&nofb=1&ipt=a7b13ff6fcf7dabb797806f3cb1aa6da660c7c25a92b157dd688336252bab819',
  resumen: `Responsable de la gestión de los apoyos a escuelas.`,
  info: {
    institution: 'false',
    institution_type: 'donadora',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-3.expansion.mx%2Fdims4%2Fdefault%2Fb0b4136%2F2147483647%2Fstrip%2Ftrue%2Fcrop%2F362x190%2B0%2B13%2Fresize%2F1200x630!%2Fquality%2F90%2F%3Furl%3Dhttps%3A%252F%252Fcherry-brightspot.s3.amazonaws.com%252Fmedia%252F2014%252F08%252F11%252Ftec-logo.jpg&f=1&nofb=1&ipt=f7911a2fc5c4bf91b0edf5182ec2677b69a9d93bb4944e2219e1622ab92d50a3',
    institution_name: 'Tec de Monterrey',
    institution_resumen: `Escuela privada con un proyecto de apoyo que  busca la mejora educativa para escuelas que requerían de apoyo para brindar una mejor calidad de estudio a sus alumnos.`,
    institution_dir: 'Av. Gral Ramón Corona No 2514, Colonia Nuevo México, 45201 Zapopan, Jal.'
  }
},
{
  user_id: 1,
  user_rol: 'donador',
  name: 'Miguel Hidalgo y Costilla de Sabrade Robles',
  email: 'miguelHidalgo@example.ext',
  image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.recreoviral.com%2Fwp-content%2Fuploads%2F2015%2F01%2Fmitad-2-personas-4.jpg&f=1&nofb=1&ipt=a7b13ff6fcf7dabb797806f3cb1aa6da660c7c25a92b157dd688336252bab819',
  resumen: `Responsable de la gestión de los apoyos a escuelas.`,
  info: {
    institution: 'false',
    institution_type: 'donadora',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-3.expansion.mx%2Fdims4%2Fdefault%2Fb0b4136%2F2147483647%2Fstrip%2Ftrue%2Fcrop%2F362x190%2B0%2B13%2Fresize%2F1200x630!%2Fquality%2F90%2F%3Furl%3Dhttps%3A%252F%252Fcherry-brightspot.s3.amazonaws.com%252Fmedia%252F2014%252F08%252F11%252Ftec-logo.jpg&f=1&nofb=1&ipt=f7911a2fc5c4bf91b0edf5182ec2677b69a9d93bb4944e2219e1622ab92d50a3',
    institution_name: 'Tec de Monterrey',
    institution_resumen: `Escuela privada con un proyecto de apoyo que  busca la mejora educativa para escuelas que requerían de apoyo para brindar una mejor calidad de estudio a sus alumnos.`,
    institution_dir: 'Av. Gral Ramón Corona No 2514, Colonia Nuevo México, 45201 Zapopan, Jal.'
  }
}, 
{
  user_id: 1,
  user_rol: 'donador',
  name: 'Miguel Hidalgo y Costilla de Sabrade Robles',
  email: 'miguelHidalgo@example.ext',
  image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.recreoviral.com%2Fwp-content%2Fuploads%2F2015%2F01%2Fmitad-2-personas-4.jpg&f=1&nofb=1&ipt=a7b13ff6fcf7dabb797806f3cb1aa6da660c7c25a92b157dd688336252bab819',
  resumen: `Responsable de la gestión de los apoyos a escuelas.`,
  info: {
    institution: 'true',
    institution_type: 'donadora',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-3.expansion.mx%2Fdims4%2Fdefault%2Fb0b4136%2F2147483647%2Fstrip%2Ftrue%2Fcrop%2F362x190%2B0%2B13%2Fresize%2F1200x630!%2Fquality%2F90%2F%3Furl%3Dhttps%3A%252F%252Fcherry-brightspot.s3.amazonaws.com%252Fmedia%252F2014%252F08%252F11%252Ftec-logo.jpg&f=1&nofb=1&ipt=f7911a2fc5c4bf91b0edf5182ec2677b69a9d93bb4944e2219e1622ab92d50a3',
    institution_name: 'Tec de Monterrey',
    institution_resumen: `Escuela privada con un proyecto de apoyo que  busca la mejora educativa para escuelas que requerían de apoyo para brindar una mejor calidad de estudio a sus alumnos.`,
    institution_dir: 'Av. Gral Ramón Corona No 2514, Colonia Nuevo México, 45201 Zapopan, Jal.'
  }
} 
]

function PortalMatching() {

    const navigate = useNavigate();

    return (
      <>
        <div className="min-h-screen min-w-screen z-0 font-montserrat flex flex-col justify-between" style={{ backgroundColor: '#FBFBE6' }}>
          <Initial>
            <section id="about" className="flex flex-col items-center justify-center w-[100%] h-full">
              <SearchBar/>
              <div className="border border-black bg-white w-[90%] min-h-[50vh] mt-[3vh] mb-[5vh] rounded-3xl flex flex-row justify-center flex-wrap items-start justify-center max_width"> 
                {user_info.length > 0 &&(
                    user_info.map((tarjeta) => (
                      <MiniPerfil 
                        id={tarjeta.id}
                        name={tarjeta.name}
                        image={tarjeta.image}
                        resumen={tarjeta.resumen}
                        info={tarjeta.info}
                        navigate={navigate}
                        route='/admin/public/perfil'
                      />
                    )
                    )
                  )
                }

              </div>
            </section>
          </Initial>
        </div>
      </>
    )
  }
 
  export default PortalMatching
