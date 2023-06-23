import {BrowserRouter, Route, Routes} from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'

function App() {
  return(
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<h1>Home page</h1>}/>
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/citas" element={<h1>Citas</h1>}/>
      <Route path="/add-citas" element={<h1>Agregar citas</h1>}/>
      <Route path="/citas/:id" element={<h1>Actualizar citas</h1>}/>
      <Route path="/profile" element={<h1>Perfil de usuario</h1>}/>
      </Routes>
       </BrowserRouter>
  )
}

export default App