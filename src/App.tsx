import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Userlist from './Component/Userlist';
import UserAdd from './Component/UserAdd';
import UserEdit from './Component/UserEdit';

function App() {
  return(
      <div className="container">
          <h1 className="mt-5 mb-5 text-center"><b>Aplicacion Vite + React <br></br><span className="text-primary">Mantenimiento Usuarios</span></b></h1>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Userlist />} />
                  <Route path="/add" element={<UserAdd />} />
                  <Route path="/edit/:id" element={<UserEdit />} />
              </Routes>
          </BrowserRouter>
      </div>
  )
}

export default App
