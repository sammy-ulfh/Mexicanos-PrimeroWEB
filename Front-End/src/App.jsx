import '@fontsource/montserrat';
import Login from '/src/client/Pages/Login';
import Principal from '/src/client/Pages/Principal';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Principal />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
