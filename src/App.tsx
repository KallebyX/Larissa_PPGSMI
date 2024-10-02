import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Home from './pages/Home';
import PerfilFisioterapeuta from './pages/PerfilFisioterapeuta';
import PerfilPaciente from './pages/PerfilPaciente';
import DefinirTreino from './pages/DefinirTreino';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/perfil-fisioterapeuta" element={<PerfilFisioterapeuta />} />
        <Route path="/perfil-paciente" element={<PerfilPaciente />} />
        <Route path="/definir-treino" element={<DefinirTreino />} />
      </Routes>
    </Router>
  );
}

export default App;