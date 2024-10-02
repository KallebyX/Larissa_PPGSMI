import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface Exercicio {
  treino: string;
  tempo: string;
}

const SelecionarTreinosParaPaciente: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Hook para navegação
  const exerciciosRecebidos: Exercicio[] = location.state?.exercicios || []; // Recebe os treinos e tempos criados

  const [exerciciosSelecionados, setExerciciosSelecionados] = useState<string[]>(['', '', '', '']);

  // Função para selecionar o treino ao clicar no botão de exercício
  const handleSelecionarTreino = (index: number) => {
    const treinoEscolhido = exerciciosRecebidos[index]?.treino || 'Descrição do exercício';
    const updatedExercicios = [...exerciciosSelecionados];
    updatedExercicios[index] = treinoEscolhido;
    setExerciciosSelecionados(updatedExercicios);
  };

  // Função para voltar ao perfil do fisioterapeuta
  const handleVoltar = () => {
    navigate('/perfil-fisioterapeuta'); // Exemplo de rota de retorno
  };

  return (
    <div>
      <h1>Definir Treinos para o Paciente</h1>

      {/* Exibe os botões de exercícios */}
      <div className="exercicios">
        {['Exercício 01', 'Exercício 02', 'Exercício 03', 'Exercício 04'].map((exercicio, index) => (
          <button
            key={index}
            onClick={() => handleSelecionarTreino(index)}
            className={`exercicio-botao exercicio-${index + 1} ${exerciciosSelecionados[index] ? 'selecionado' : ''}`}
          >
            {exercicio} - {exerciciosSelecionados[index] || 'Descrição do exercício'}
          </button>
        ))}
      </div>

      {/* Botão para voltar ao perfil do fisioterapeuta */}
      <button onClick={handleVoltar} className="voltar-botao">
        Voltar para Perfil do Fisioterapeuta
      </button>

      {/* Estilos dos botões de exercícios */}
      <style>
        {`
          .exercicios {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
          .exercicio-botao {
            background-color: #f5f5f5;
            padding: 10px 20px;
            font-size: 16px;
            border-radius: 10px;
            border: none;
            cursor: pointer;
            transition: background-color 0.3s ease, border 0.3s ease;
          }
          .exercicio-1 { background-color: #e6a97a; }
          .exercicio-2 { background-color: #f7c773; }
          .exercicio-3 { background-color: #9bd0c6; }
          .exercicio-4 { background-color: #4f909d; }
          .exercicio-botao:hover {
            opacity: 0.8;
          }
          .selecionado {
            border: 3px solid #000; /* Adiciona uma borda aos itens selecionados */
          }
          .voltar-botao {
            margin-top: 20px;
            padding: 10px 20px;
            font-size: 16px;
            background-color: #4f909d;
            color: white;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }
          .voltar-botao:hover {
            background-color: #3e7a85;
          }
        `}
      </style>
    </div>
  );
};

export default SelecionarTreinosParaPaciente;