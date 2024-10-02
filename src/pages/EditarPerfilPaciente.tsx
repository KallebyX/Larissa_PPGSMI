import React, { useState } from 'react';

const EditarPerfilPaciente: React.FC = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSalvar = () => {
    // Lógica de salvamento do perfil
    alert('Perfil do paciente atualizado com sucesso!');
  };

  return (
    <div>
      <h1>Editar Perfil do Paciente</h1>
      <div>
        <label>Nome:</label>
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
        <label>Senha:</label>
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Digite sua senha"
        />
      </div>
      <button onClick={handleSalvar}>Salvar</button>
    </div>
  );
};

export default EditarPerfilPaciente;