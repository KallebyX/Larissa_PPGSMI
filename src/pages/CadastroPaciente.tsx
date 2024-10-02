import React, { useState } from 'react';

const CadastroPaciente: React.FC = () => {
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [genero, setGenero] = useState('');
  const [endereco, setEndereco] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [fisioterapeuta, setFisioterapeuta] = useState('');

  const handleCadastro = () => {
    // Lógica de cadastro do paciente
    console.log('Cadastro de paciente:', { nome, dataNascimento, genero, endereco, email, senha, fisioterapeuta });
    alert('Paciente cadastrado com sucesso!');
  };

  return (
    <div>
      <h1>Cadastro de Paciente</h1>
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
          type="date"
          value={dataNascimento}
          onChange={(e) => setDataNascimento(e.target.value)}
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
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu email"
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
        <label>Fisioterapeuta Responsável:</label>
        <input
          type="text"
          value={fisioterapeuta}
          onChange={(e) => setFisioterapeuta(e.target.value)}
          placeholder="Digite o nome do seu fisioterapeuta"
        />
      </div>
      <button onClick={handleCadastro}>Cadastrar Paciente</button>
    </div>
  );
};

export default CadastroPaciente;