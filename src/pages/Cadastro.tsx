import React, { useState } from 'react';
import Input from '../components/Input';

const Cadastro: React.FC = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCadastro = () => {
    // Lógica de cadastro aqui
    console.log('Cadastro:', nome, email, password);
  };

  return (
    <div>
      <h1>Cadastro</h1>
      <Input label="Nome" type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
      <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input label="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleCadastro}>Cadastrar</button>
    </div>
  );
};

export default Cadastro;