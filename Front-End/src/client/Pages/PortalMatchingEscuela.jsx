import '@fontsource/montserrat';
import MainLayout from '../Layouts/MainLayout';
import MiniPerfil from '../../GeneralComponents/MiniPerfil';
import SearchBar from '../../GeneralComponents/SearchBar';


function PortalMatchingEscuela() {


    return (
      <>
        <div className="min-h-screen min-w-screen z-0 font-montserrat flex flex-col justify-between" style={{ backgroundColor: '#FBFBE6' }}>
          <MainLayout>
          <section id="about" className="flex flex-col items-center justify-center w-[100%] h-full">
            <SearchBar/>
            <div className="border border-black bg-white w-[90%] mt-[3vh] mb-[5vh] rounded-3xl flex flex-row justify-center flex-wrap flex-col items-center max_width">
              <MiniPerfil/>
              <MiniPerfil/>
              <MiniPerfil/>
              <MiniPerfil/>
              {
                /*Falta de aplicar correcciones sobre el layout y escalabilidad en la insersion de perfiles.*/
              }

            </div>
          </section>
          </MainLayout>
        </div>
      </>
    )
  }
 
  export default PortalMatchingEscuela
