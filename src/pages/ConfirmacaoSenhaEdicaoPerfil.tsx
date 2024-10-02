import React, { useState } from 'react';

const ConfirmacaoSenhaEdicaoPerfil: React.FC = () => {
  const [senha, setSenha] = useState('');

  const handleConfirmar = () => {
    if (senha === 'senhaCerta') {
      alert('Senha confirmada! Pode editar o perfil.');
    } else {
      alert('Senha incorreta. Tente novamente.');
    }
  };

  return (
    <div>
      <h1>Confirmação de Senha</h1>
      <div>
        <label>Digite sua senha para continuar:</label>
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Digite sua senha"
        />
      </div>
      <button onClick={handleConfirmar}>Confirmar</button>
    </div>
  );
};

export default ConfirmacaoSenhaEdicaoPerfil;