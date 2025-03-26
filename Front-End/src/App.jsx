import '@fontsource/montserrat';
import Login from '/src/client/Pages/Login';
import Principal from '/src/client/Pages/Principal';
import Apoyos from '/src/admin/Pages/Apoyos';
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
      </Routes>
    </Router>
  )
}

export default App
