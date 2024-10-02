import React, { useState } from 'react';

const CadastroFisioterapeuta: React.FC = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [crefito, setCrefito] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastro = () => {
    // Lógica de cadastro do fisioterapeuta
    console.log('Cadastro de fisioterapeuta:', { nome, email, crefito, senha });
    alert('Fisioterapeuta cadastrado com sucesso!');
  };

  return (
    <div>
      <h1>Cadastro de Fisioterapeuta</h1>
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
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu email"
        />
      </div>
      <div>
        <label>Número do CREFITO:</label>
        <input
          type="text"
          value={crefito}
          onChange={(e) => setCrefito(e.target.value)}
          placeholder="Digite seu número do CREFITO"
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
      <button onClick={handleCadastro}>Cadastrar Fisioterapeuta</button>
    </div>
  );
};

export default CadastroFisioterapeuta;