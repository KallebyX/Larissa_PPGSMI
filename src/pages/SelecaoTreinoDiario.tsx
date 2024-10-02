import React, { useState } from 'react';

interface Treino {
  id: number;
  nome: string;
  descricao: string;
  duracao: string;
}

const SelecaoTreinoDiario: React.FC = () => {
  const [treinos, setTreinos] = useState<Treino[]>([
    { id: 1, nome: 'Exercício 1', descricao: 'Descrição do exercício 1', duracao: '15 minutos' },
    { id: 2, nome: 'Exercício 2', descricao: 'Descrição do exercício 2', duracao: '10 minutos' },
  ]);

  const handleIniciarTreino = (treinoId: number) => {
    alert(`Iniciando treino ${treinoId}`);
  };

  return (
    <div>
      <h1>Seleção do Treino Diário</h1>
      <ul>
        {treinos.map((treino) => (
          <li key={treino.id}>
            <h2>{treino.nome}</h2>
            <p>{treino.descricao}</p>
            <p>Duração: {treino.duracao}</p>
            <button onClick={() => handleIniciarTreino(treino.id)}>Iniciar Treino</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelecaoTreinoDiario;