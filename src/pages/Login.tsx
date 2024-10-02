import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';

const Login: React.FC = () => {
  const [nome, setNome] = useState('');
  const [password, setPassword] = useState('');
  const [tipoUsuario, setTipoUsuario] = useState('');
  
  const navigate = useNavigate();

  const handleLogin = () => {
    // Lógica básica de validação de login
    if (nome && password && tipoUsuario) {
      console.log('Login:', nome, password, tipoUsuario);

      // Salva o nome e tipo de usuário no localStorage
      localStorage.setItem('nomeUsuario', nome);
      localStorage.setItem('tipoUsuario', tipoUsuario);

      // Redireciona com base no tipo de usuário
      if (tipoUsuario === 'fisioterapeuta') {
        navigate('/perfil-fisioterapeuta');
      } else if (tipoUsuario === 'paciente') {
        navigate('/perfil-paciente');
      }
    } else {
      alert('Por favor, preencha todos os campos e selecione seu tipo de usuário.');
    }
  };

  return (
    <div>
      <h1>Entrar</h1>
      <Input label="Nome Completo" type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
      <Input label="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      
      <div>
        <label>Você é...</label>
        <div>
          <input
            type="radio"
            id="fisioterapeuta"
            name="voce_e"
            value="fisioterapeuta"
            checked={tipoUsuario === 'fisioterapeuta'}
            onChange={(e) => setTipoUsuario(e.target.value)}
          />
          <label htmlFor="fisioterapeuta">Fisioterapeuta</label>
        </div>
        <div>
          <input
            type="radio"
            id="paciente"
            name="voce_e"
            value="paciente"
            checked={tipoUsuario === 'paciente'}
            onChange={(e) => setTipoUsuario(e.target.value)}
          />
          <label htmlFor="paciente">Paciente</label>
        </div>
      </div>

      <button onClick={handleLogin}>Continuar</button>
    </div>
  );
};

export default Login;