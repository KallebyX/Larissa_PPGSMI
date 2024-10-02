import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CadastroPacienteParte1: React.FC = () => {
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [genero, setGenero] = useState('');
  const [endereco, setEndereco] = useState('');
  const [fisioterapeuta, setFisioterapeuta] = useState('');

  const navigate = useNavigate();

  const handleContinuar = () => {
    // Armazena os dados no localStorage para serem usados na Parte 2
    const pacienteInfo = {
      nome,
      dataNascimento,
      genero,
      endereco,
      fisioterapeuta,
    };
    localStorage.setItem('pacienteInfo', JSON.stringify(pacienteInfo));
    // Redireciona para a parte 2 do cadastro
    navigate('/cadastro-paciente-parte2');
  };

  return (
    <div>
      <h1>Cadastrar Paciente - Parte 1</h1>
      <div>
        <label>Nome Completo:</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Digite seu nome"
        />
      </div>
      <div>
        <label>Data de Nascimento:</label>
        <input
          type="Date"
          value={dataNascimento}
          onChange={(e) => setDataNascimento(e.target.value)}
          placeholder="Digite sua data de nascimento"
        />
      </div>
      <div>
        <label>Gênero:</label>
        <input
          type="text"
          value={genero}
          onChange={(e) => setGenero(e.target.value)}
          placeholder="Digite seu gênero"
        />
      </div>
      <div>
        <label>Endereço:</label>
        <input
          type="text"
          value={endereco}
          onChange={(e) => setEndereco(e.target.value)}
          placeholder="Digite seu endereço"
        />
      </div>
      <div>
        <label>Fisioterapeuta:</label>
        <input
          type="text"
          value={fisioterapeuta}
          onChange={(e) => setFisioterapeuta(e.target.value)}
          placeholder="Digite o nome do seu fisioterapeuta"
        />
      </div>
      <button onClick={handleContinuar}>Continuar</button>
    </div>
  );
};

export default CadastroPacienteParte1;