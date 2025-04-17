import '@fontsource/montserrat';
import MainLayout from '../Layouts/MainLayout.jsx';
import Profile from '/src/GeneralComponents/PublicProfile';

const user_info = {
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

function ClientProfile() {


    return (
      <>
        <div className="min-h-screen min-w-screen z-0 font-montserrat flex flex-col justify-between" style={{ backgroundColor: '#FBFBE6' }}>
          <MainLayout>
            <section id="about" className="w-[80%] min-h-[57vh] lg:min-h-[50vh] xl:min-h-[50vh] p-[1%] rounded-3xl border border-gray-500 bg-white flex flex-col justify-start items-center">
              <Profile 
              id={user_info.user_id}
              name={user_info.name}
              email={user_info.email}
              image={user_info.image}
              resumen={user_info.resumen}
              info={user_info.info}/>
            </section>
          </MainLayout>
        </div>
      </>
    )
  }
 
  export default ClientProfile
 



