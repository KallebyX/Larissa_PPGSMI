import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';

const Cadastro: React.FC = () => {
  const [tipoUsuario, setTipoUsuario] = useState('');
  
  const navigate = useNavigate(); // Para navegar entre as páginas

  const handleCadastro = () => {
    // Lógica de cadastro
    if (tipoUsuario === 'fisioterapeuta') {
      navigate('/cadastro-fisioterapeuta');
    } else if (tipoUsuario === 'paciente') {
      navigate('/cadastro-paciente-parte1'); // Redireciona para a primeira parte do cadastro do paciente
    }
    console.log('Cadastro:', tipoUsuario);
  };

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <div>
      <h1>Cadastro</h1>
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

      <button onClick={handleCadastro}>Continuar</button>

      <div>
        <label htmlFor="botao">Já tem uma conta?</label>
        <button onClick={handleLoginRedirect}>Entre agora!</button>
      </div>
    </div>
  );
};

export default Cadastro;