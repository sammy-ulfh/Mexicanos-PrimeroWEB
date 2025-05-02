import '@fontsource/montserrat';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Initial from '../Layouts/Initial';
import MiniPerfil from '../../GeneralComponents/MiniPerfil';
import SearchBar from '../../GeneralComponents/SearchBar';
import getMatching from '../Peticiones/Busqueda/searchMatching';

function PortalMatching() {

    const navigate = useNavigate();
    const [search, setSearch] = useState('');
    const [user_info, setUser_info] = useState([]);

    const id = localStorage.getItem('id');
    const type = localStorage.getItem('type');

    useEffect(() => {
      async function fetchData() {
        try {
          const response = await getMatching(search);
          if (response && Array.isArray(response)) {
            setUser_info(response);
          } else {
            setUser_info([]); // Valor predeterminado
          }
        } catch (error) {
          setUser_info([]); // En caso de error, aseguramos que user_info sea un array
        }
      }
      fetchData();
    }, [search]);
    
    

    return (
      <>
        <div className="min-h-screen min-w-screen z-0 font-montserrat flex flex-col justify-between" style={{ backgroundColor: '#FBFBE6' }}>
          <Initial>
            <section id="about" className="relative flex flex-col items-center justify-center w-[100%] h-full">
              <div className='flex fixed justify-center items-center relative w-full'>
                <SearchBar search={search} setSearch={setSearch}/>
              </div>
              <div className="relative top-15 border border-black bg-white w-[90%] min-h-[50vh] mt-[3vh] mb-[7vh] rounded-3xl flex flex-row justify-center flex-wrap items-start justify-center"> 
                {user_info.length > 0 &&(
                    user_info.map((tarjeta) => (
                      <MiniPerfil 
                        info={tarjeta}
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
