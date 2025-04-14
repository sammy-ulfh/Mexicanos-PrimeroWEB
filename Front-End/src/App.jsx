import '@fontsource/montserrat';
import Login from '/src/client/Pages/Login';
import Principal from '/src/client/Pages/Principal';
import Apoyos from '/src/admin/Pages/Apoyos';
import Chats from '/src/admin/Pages/Chats';
import Config from '/src/admin/Pages/Config';
import InfoSolicitudApoyo from '/src/admin/Pages/InfoSolicitudApoyo';
import InfoApoyo from '/src/admin/Pages/InfoApoyo';
import Chat from '/src/admin/Pages/Chat';
import Perfil from '/src/admin/Pages/Perfil';
import Cuentas from '/src/admin/Pages/Cuentas';
import PortalInicial from '/src/client/Pages/PortalInicial';
import FormularioCrearCuenta from '/src/client/Pages/FormularioCrearCuenta';
import FormularioEscuela from './client/Pages/FormularioEscuela';
import FormularioDonador from './client/Pages/FormularioDonador';
import PortalEspera from '/src/client/Pages/PortalEspera';
import PortalEscuela from '/src/client/Pages/PortalEscuela';
import PortalRechazo from '/src/client/Pages/PortalRechazo';
import ConfigurarPerfilEscuela from '/src/client/Pages/ConfigurarPerfilEscuela';
import ConfigurarPerfilDonador from '/src/client/Pages/ConfigurarPerfilDonador';
import PortalMatchingEscuela from '/src/client/Pages/PortalMatchingEscuela';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <Router>
      <Routes>
    // Clients
        <Route path='/' element={<Principal />} />
        <Route path='/login' element={<Login />} />
        <Route path='/portal' element={<PortalInicial />} />
        <Route path='/new/account' element={<FormularioCrearCuenta />} />
        <Route path='/new/account/school' element={<FormularioEscuela/>} />
        <Route path='/new/account/donator' element={<FormularioDonador/>} />
        <Route path='/portal/wait' element={<PortalEspera />} />
        <Route path='/portal/school' element={<PortalEscuela />} />
        <Route path='/portal/rejected' element={<PortalRechazo />} />
        <Route path='/configuration/profile/school' element={<ConfigurarPerfilEscuela />} />
        <Route path='/configuration/profile/donator' element={<ConfigurarPerfilDonador />} />
        <Route path='/portal/matching/school' element={<PortalMatchingEscuela />} />

    // Admins
        <Route path='/admin/apoyos' element={<Apoyos />} />
        <Route path='/admin/chats' element={<Chats />} />
        <Route path='/admin/config' element={<Config />} />
        <Route path='/admin/apoyos/info' element={<InfoApoyo />} />
        <Route path='/admin/solicitudes/apoyos/info' element={<InfoSolicitudApoyo />} />
        <Route path='/admin/chat' element={<Chat />} />
        <Route path='/admin/perfil' element={<Perfil />} />
        <Route path='/admin/solicitudes/cuentas' element={<Cuentas />} />
      </Routes>
    </Router>
  )
}

export default App
