import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Pages/Login.jsx'
import Cadastro from './Pages/Cadastro.jsx'
import NoteFound from './Pages/NoteFound.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        {/* <App /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<App />} />
        <Route path="/cadastro" element={<Cadastro />} />
        {/* 404 */}
        <Route path="*" element={<NoteFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
) 
