import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ExcluirConta: React.FC = () => {
  const [etapa, setEtapa] = useState(1); // Estado para controlar a etapa do fluxo
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  // Função para avançar para a etapa de validação da senha
  const handleConfirmarExclusao = () => {
    setEtapa(2);
  };

  // Função para concluir a exclusão da conta
  const handleConcluirExclusao = () => {
    if (senha === '') {
      alert('Por favor, insira sua senha para continuar.');
      return;
    }
    // Lógica de exclusão da conta
    console.log('Conta excluída com a senha:', senha);
    alert('Conta excluída com sucesso!');
    navigate('/'); // Redireciona para a página inicial após a exclusão
  };

  // Função para cancelar o processo de exclusão
  const handleCancelar = () => {
    navigate(-1); // Volta para a página anterior
  };

  return (
    <div>
      {etapa === 1 ? (
        // Etapa 1: Confirmação de exclusão
        <div>
          <h1>Deseja mesmo excluir sua conta permanentemente?</h1>
          <p>Você perderá todo o seu progresso no site permanentemente.</p>
          <button onClick={handleCancelar}>Não, Voltar</button>
          <button onClick={handleConfirmarExclusao}>Sim, Excluir</button>
        </div>
      ) : (
        // Etapa 2: Validação da senha
        <div>
          <h1>Para excluir sua conta permanentemente:</h1>
          <div>
            <label>Insira sua senha atual:</label>
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Digite sua senha"
            />
          </div>
          <div>
            <input type="checkbox" id="esqueciSenha" />
            <label htmlFor="esqueciSenha">Esqueci minha senha</label>
          </div>
          <button onClick={handleCancelar}>Cancelar</button>
          <button onClick={handleConcluirExclusao}>Concluir</button>
        </div>
      )}
    </div>
  );
};

export default ExcluirConta;