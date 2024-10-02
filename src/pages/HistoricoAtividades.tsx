import React, { useState } from 'react';

interface Atividade {
  id: number;
  nome: string;
  data: string;
  duracao: string;
}

const HistoricoAtividades: React.FC = () => {
  const [atividades, setAtividades] = useState<Atividade[]>([
    { id: 1, nome: 'Exercício de Respiração', data: '2024-09-28', duracao: '15 minutos' },
    { id: 2, nome: 'Exercício de Contração', data: '2024-09-29', duracao: '10 minutos' },
  ]);

  return (
    <div>
      <h1>Histórico de Atividades</h1>
      <ul>
        {atividades.map((atividade) => (
          <li key={atividade.id}>
            <h2>{atividade.nome}</h2>
            <p>Data: {atividade.data}</p>
            <p>Duração: {atividade.duracao}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistoricoAtividades;