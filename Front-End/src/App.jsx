import '@fontsource/montserrat';
import Login from '/src/client/Pages/Login';
import Principal from '/src/client/Pages/Principal';
import PrincipalAdmin from '/src/admin/Pages/PrincipalAdmin';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {

  return (
    <Router>
      <Routes>
    // Clients
        <Route path='/' element={<Principal />} />
        <Route path='/login' element={<Login />} />

    // Admins
        <Route path='/admin/apoyos' element={<PrincipalAdmin />} />
      </Routes>
    </Router>
  )
}

export default App
