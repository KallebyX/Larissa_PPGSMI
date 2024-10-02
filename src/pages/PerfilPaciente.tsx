import React, { useState } from 'react';

interface Treino {
  id: number;
  nome: string;
  data: string;
}

const PerfilPaciente: React.FC = () => {
  const [treinos, setTreinos] = useState<Treino[]>([
    { id: 1, nome: 'Exercício de Respiração', data: '2024-10-02' },
    { id: 2, nome: 'Exercício de Contração Pélvica', data: '2024-10-03' },
  ]);

  const handleEditProfile = () => {
    alert('Editar perfil do paciente');
  };

  return (
    <div>
      <h1>Perfil do Paciente</h1>
      <button onClick={handleEditProfile}>Editar Perfil</button>

      <h2>Histórico de Treinos</h2>
      <ul>
        {treinos.map((treino) => (
          <li key={treino.id}>
            {treino.nome} - {treino.data}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PerfilPaciente;