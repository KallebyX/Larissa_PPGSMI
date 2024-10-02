import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CadastroPacienteParte2: React.FC = () => {
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [termosAceitos, setTermosAceitos] = useState(false);

  const navigate = useNavigate();

  const handleCadastro = () => {
    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem.');
      return;
    }

    if (!termosAceitos) {
      alert('Você precisa aceitar os Termos de Uso e a Política de Privacidade.');
      return;
    }

    // Recupera os dados da Parte 1 do localStorage
    const pacienteInfo = JSON.parse(localStorage.getItem('pacienteInfo') || '{}');

    // Lógica de cadastro do paciente
    console.log('Cadastro de paciente:', {
      ...pacienteInfo,
      email,
      telefone,
      senha,
    });

    alert('Paciente cadastrado com sucesso!');
    // Redireciona para a página de login
    navigate('/login');
  };

  return (
    <div>
      <h1>Cadastrar Paciente - Parte 2</h1>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu email"
        />
      </div>
      <div>
        <label>Telefone:</label>
        <input
          type="tel"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          placeholder="Digite seu telefone"
        />
      </div>
      <div>
        <label>Senha:</label>
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Digite sua senha"
        />
      </div>
      <div>
        <label>Confirmar Senha:</label>
        <input
          type="password"
          value={confirmarSenha}
          onChange={(e) => setConfirmarSenha(e.target.value)}
          placeholder="Confirme sua senha"
        />
      </div>
      <div>
        <input
          type="checkbox"
          name="termos"
          id="termosEprivacidade"
          checked={termosAceitos}
          onChange={(e) => setTermosAceitos(e.target.checked)}
        />
        <label htmlFor="termosEprivacidade">
          Eu li e concordo com os Termos de Uso e a Política de Privacidade.
        </label>
      </div>
      <button onClick={handleCadastro}>Cadastrar Paciente</button>
    </div>
  );
};

export default CadastroPacienteParte2;