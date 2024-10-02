import React, { useState } from 'react';

const DefinirTreino: React.FC = () => {
  const [nomeExercicio, setNomeExercicio] = useState('');
  const [descricao, setDescricao] = useState('');
  const [duracao, setDuracao] = useState('');
  const [percentualContracao, setPercentualContracao] = useState('');

  const handleDefinirTreino = () => {
    console.log('Treino definido:', { nomeExercicio, descricao, duracao, percentualContracao });
    alert('Treino definido com sucesso!');
  };

  return (
    <div>
      <h1>Definir Treino</h1>
      <div>
        <label>Nome do Exercício:</label>
        <input
          type="text"
          value={nomeExercicio}
          onChange={(e) => setNomeExercicio(e.target.value)}
          placeholder="Digite o nome do exercício"
          title="Nome do exercício"
        />
      </div>
      <div>
        <label>Descrição:</label>
        <input
          type="text"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          placeholder="Descreva o exercício"
          title="Descrição do exercício"
        />
      </div>
      <div>
        <label>Duração (minutos):</label>
        <input
          type="text"
          value={duracao}
          onChange={(e) => setDuracao(e.target.value)}
          placeholder="Duração em minutos"
          title="Duração do exercício"
        />
      </div>
      <div>
        <label>Percentual de Contração:</label>
        <input
          type="text"
          value={percentualContracao}
          onChange={(e) => setPercentualContracao(e.target.value)}
          placeholder="Percentual de contração"
          title="Percentual de contração muscular"
        />
      </div>
      <button onClick={handleDefinirTreino}>Salvar Treino</button>
    </div>
  );
};

export default DefinirTreino;