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
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {

  return (
    <Router>
      <Routes>
    // Clients
        <Route path='/' element={<Principal />} />
        <Route path='/login' element={<Login />} />

    // Admins
        <Route path='/admin/apoyos' element={<Apoyos />} />
        <Route path='/admin/chats' element={<Chats />} />
        <Route path='/admin/config' element={<Config />} />
        <Route path='/admin/apoyos/info' element={<InfoApoyo />} />
        <Route path='/admin/solicitudes/apoyos/info' element={<InfoSolicitudApoyo />} />
        <Route path='/admin/chat' element={<Chat />} />
        <Route path='/admin/perfil' element={<Perfil />} />
      </Routes>
    </Router>
  )
}

export default App
