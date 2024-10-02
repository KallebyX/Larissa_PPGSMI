import React, { useState } from 'react';

interface Paciente {
  id: number;
  nome: string;
}

const PerfilFisioterapeuta: React.FC = () => {
  const [pacientes, setPacientes] = useState<Paciente[]>([
    { id: 1, nome: 'João da Silva' },
    { id: 2, nome: 'Maria Oliveira' },
  ]);

  const handleEditProfile = () => {
    alert('Editar perfil do fisioterapeuta');
  };

  const handleDefinirTreino = (pacienteId: number) => {
    alert(`Definir treino para o paciente com ID ${pacienteId}`);
  };

  return (
    <div>
      <h1>Perfil do Fisioterapeuta</h1>
      <button onClick={handleEditProfile}>Editar Perfil</button>

      <h2>Pacientes</h2>
      <ul>
        {pacientes.map((paciente) => (
          <li key={paciente.id}>
            {paciente.nome}
            <button onClick={() => handleDefinirTreino(paciente.id)}>Definir Treino</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PerfilFisioterapeuta;