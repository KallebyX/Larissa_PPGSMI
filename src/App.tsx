import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import PerfilFisioterapeuta from './pages/PerfilFisioterapeuta';
import PerfilPaciente from './pages/PerfilPaciente';
import DefinirTreino from './pages/DefinirTreino';
import SelecaoTreinoDiario from './pages/SelecaoTreinoDiario';
import AnimacaoTreino from './pages/AnimacaoTreino';
import Feedback from './components/Feedback';
import TermosDeUso from './pages/TermosDeUso';
import ExcluirConta from './pages/ExcluirConta';
import HistoricoAtividades from './pages/HistoricoAtividades';
import EditarPerfilFisioterapeuta from './pages/EditarPerfilFisioterapeuta';
import EditarPerfilPaciente from './pages/EditarPerfilPaciente';
import ConfirmacaoSenhaEdicaoPerfil from './pages/ConfirmacaoSenhaEdicaoPerfil';
import CadastroPaciente from './pages/CadastroPaciente';
import CadastroFisioterapeuta from './pages/CadastroFisioterapeuta';
import InserirArtigos from './pages/InserirArtigos';

function App() {
  return (
    <Router>
      <Routes>
        {/* Páginas principais */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />

        {/* Páginas de Perfil */}
        <Route path="/perfil-fisioterapeuta" element={<PerfilFisioterapeuta />} />
        <Route path="/perfil-paciente" element={<PerfilPaciente />} />

        {/* Funcionalidades de Treino */}
        <Route path="/definir-treino" element={<DefinirTreino />} />
        <Route path="/selecao-treino" element={<SelecaoTreinoDiario />} />
        <Route path="/animacao-treino" element={<AnimacaoTreino />} />
        
        {/* Feedback e Histórico */}
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/historico-atividades" element={<HistoricoAtividades />} />

        {/* Termos e Exclusão de Conta */}
        <Route path="/termos-de-uso" element={<TermosDeUso />} />
        <Route path="/excluir-conta" element={<ExcluirConta />} />

        {/* Edição de Perfil */}
        <Route path="/editar-perfil-fisioterapeuta" element={<EditarPerfilFisioterapeuta />} />
        <Route path="/editar-perfil-paciente" element={<EditarPerfilPaciente />} />

        {/* Confirmação de Senha para Edição de Perfil */}
        <Route path="/confirmar-senha-edicao" element={<ConfirmacaoSenhaEdicaoPerfil />} />

        {/* Cadastro de Paciente e Fisioterapeuta */}
        <Route path="/cadastro-paciente" element={<CadastroPaciente />} />
        <Route path="/cadastro-fisioterapeuta" element={<CadastroFisioterapeuta />} />

        {/* Inserir Artigos e Textos */}
        <Route path="/inserir-artigos" element={<InserirArtigos />} />
      </Routes>
    </Router>
  );
}

export default App;