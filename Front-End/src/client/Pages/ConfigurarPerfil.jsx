import '@fontsource/montserrat';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function ConfigurarPerfil() {
  const navigate = useNavigate();

  useEffect(() => {
    const type = Number(localStorage.getItem('type'));

    if (type === 2) {
      navigate('/configuration/profile/school');
    } else if (type === 3) {
      navigate('/configuration/profile/donator');
    }
    /*
    Si esta mal el tipo de usuario lo enviara al login, cerrando la sesion.
    */ 
  }, [navigate]);

  return null;
}

export default ConfigurarPerfil;

