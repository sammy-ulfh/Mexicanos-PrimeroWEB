import '@fontsource/montserrat';
import Login from '/src/client/Pages/Login';
import Principal from '/src/client/Pages/Principal';
import PortalMatchingCelular from './client/Pages/PortalMatchingCelular';
import Donor from '/src/client/Pages/DonorPublicProfile';
import Chats from '/src/client/Pages/MisChats';
import Chat from '/src/client/Pages/Chat';
import ChatDialog from '/src/client/Pages/ChatDialog';
import ChatDialogInfo from '/src/client/Pages/ChatDialogInfo';
import ChatDialogInfoWaiting from '/src/client/Pages/ChatDialogInfoWaiting';
import ChatWithAdmin from '/src/client/Pages/ChatWithAdmin';
import ChatWithAdminFile from '/src/client/Pages/ChatWithAdminFile';
import Apoyos from '/src/admin/Pages/Apoyos';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
    // Clients
        <Route path='/' element={<Principal />} />
        <Route path='/login' element={<Login />} />
        <Route path='/portal-matching-celular' element={<PortalMatchingCelular />} />
        <Route path='/donador' element={<Donor />} />
        <Route path='/mis-chats' element={<Chats />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/chat-dialog' element={<ChatDialog />} />
        <Route path='/chat-dialog-info' element={<ChatDialogInfo />} />
        <Route path='/chat-dialog-info-waiting' element={<ChatDialogInfoWaiting />} />
        <Route path='/chat-with-admin' element={<ChatWithAdmin />} />
        <Route path='/chat-with-admin-file' element={<ChatWithAdminFile />} />

    // Admins
        <Route path='/admin/apoyos' element={<Apoyos />} />
      </Routes>
    </Router>
  )
}

export default App
