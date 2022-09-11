import React from "react";
import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { MedicosPage } from "./pages/MedicosPage/MedicosPage";
import { PacientesPage } from "./pages/PacientesPage/PacientesPage";
import { CadastrosPage } from "./pages/CadastrosPage/CadastrosPage";

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/register" element = {<RegisterPage/>}/>
        <Route path="/home" element = {<HomePage/>}/>
        <Route path="/medicos" element = {<MedicosPage/>}/>
        <Route path="/pacientes" element = {<PacientesPage/>}/>
        <Route path="/cadastros" element = {<CadastrosPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
