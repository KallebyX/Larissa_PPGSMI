import React, { useState } from 'react';
import { useRouter } from 'next/router';

const ConfirmacaoSenhaEdicaoPerfil: React.FC = () => {
  const [senha, setSenha] = useState('');
  const router = useRouter();

  const handleConfirmar = () => {
    if (senha === 'senhaCerta') {
      alert('Senha confirmada! Pode editar o perfil.');
      // Exemplo de redirecionamento para a página de edição de perfil
      router.push('/editar-perfil');
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
