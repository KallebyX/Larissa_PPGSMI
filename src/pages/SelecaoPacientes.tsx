import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Paciente {
  id: number;
  nome: string;
  data: string;
  horario: string;
}

const SelecaoPacientes: React.FC = () => {
  const pacientes: Paciente[] = [
    { id: 1, nome: 'João da Silva', data: '12/12/2024', horario: '10:00' },
    { id: 2, nome: 'Maria Oliveira', data: '12/12/2024', horario: '11:00' },
    // Outros pacientes...
  ];

  const navigate = useNavigate();

  const handleClickPaciente = (id: number) => {
    // Redireciona para a página de edição do paciente
    navigate(`/editar-paciente/${id}`);
  };

  return (
    <div>
      <h1>Pacientes</h1>
      <input type="text" placeholder="Pesquisar" />
      <ul>
        {pacientes.map((paciente) => (
          <li key={paciente.id} onClick={() => handleClickPaciente(paciente.id)}>
            <p><strong>{paciente.nome}</strong></p>
            <p>Data: {paciente.data}</p>
            <p>Horário: {paciente.horario}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelecaoPacientes;