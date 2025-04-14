import '@fontsource/montserrat';
import PortalMatchingLayout from '../Layouts/PortalMatchingLayout.jsx';
import MiniPerfil from '../Layouts/MiniPerfil.jsx';


function PortalMatchingEscuela() {


    return (
      <>
        <div className="min-h-screen min-w-screen z-0 font-montserrat flex flex-col justify-between" style={{ backgroundColor: '#FBFBE6' }}>
          <PortalMatchingLayout>
          <section id="about" className="flex flex-wrap items-center justify-center w-[100%] h-full mt-[5vh] mb-[5vh] xl:ml-[10px] center">
            <div className="border border-black bg-white w-[80%] xl:w-[820px] rounded-3xl flex flex-row justify-around flex-wrap flex-col items-center max_width">
              <MiniPerfil/>
              <MiniPerfil/>
              <MiniPerfil/>
              <MiniPerfil/>
              {
                /*Falta de aplicar correcciones sobre el layout y escalabilidad en la insersion de perfiles.*/
              }

            </div>
          </section>
          </PortalMatchingLayout>
        </div>
      </>
    )
  }
 
  export default PortalMatchingEscuela
