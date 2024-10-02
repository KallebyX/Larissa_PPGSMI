import React, { useState } from 'react';

const ExcluirConta: React.FC = () => {
  const [confirmacao, setConfirmacao] = useState('');

  const handleExcluirConta = () => {
    if (confirmacao.toLowerCase() === 'sim') {
      alert('Conta excluída com sucesso.');
    } else {
      alert('Confirmação incorreta. Conta não excluída.');
    }
  };

  return (
    <div>
      <h1>Excluir Conta</h1>
      <p>Você tem certeza que deseja excluir sua conta? Digite "sim" para confirmar.</p>
      <input
        type="text"
        value={confirmacao}
        onChange={(e) => setConfirmacao(e.target.value)}
        placeholder="Digite 'sim' para confirmar"
      />
      <button onClick={handleExcluirConta}>Excluir Conta</button>
    </div>
  );
};

export default ExcluirConta;