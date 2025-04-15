import '@fontsource/montserrat';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function ConfigurarPerfil(){

  const loca = useLocation();
  const data = loca.state;
  
  const navigate = useNavigate();

  useEffect(() => {
  if (data == 'school'){
    console.log(data);
   navigate('/configuration/profile/school'); 
  }
  else if(data == 'donator'){ 
   navigate('/configuration/profile/donator'); 
  }
  }, [navigate, data]);

  return null;
}

export default ConfigurarPerfil
