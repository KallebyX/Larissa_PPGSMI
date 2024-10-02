import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa o hook useNavigate

const Home: React.FC = () => {
  const navigate = useNavigate(); // Cria uma instância de navegação

  // Funções de navegação
  const handleEntrar = () => {
    navigate('/login'); // Redireciona para a página de login
  };

  const handleCadastrar = () => {
    navigate('/cadastro'); // Redireciona para a página de cadastro
  };

  return (
    <div>
      <h1>Bem-vindo à Home</h1>
      <button onClick={handleEntrar}>Entrar</button> {/* Adiciona evento de clique */}
      <button onClick={handleCadastrar}>Cadastrar</button> {/* Adiciona evento de clique */}
    </div>
  );
};

export default Home;