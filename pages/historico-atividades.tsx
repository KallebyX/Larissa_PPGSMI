import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Estilos padrão do react-calendar

const HistoricoAtividades: React.FC = () => {
  const [diasComTreinos, setDiasComTreinos] = useState<{ dia: Date; tipoExercicio: string }[]>([
    { dia: new Date(2024, 8, 3), tipoExercicio: 'exercicio-1' },
    { dia: new Date(2024, 8, 4), tipoExercicio: 'exercicio-2' },
    { dia: new Date(2024, 8, 5), tipoExercicio: 'exercicio-3' },
    { dia: new Date(2024, 8, 6), tipoExercicio: 'exercicio-4' },
    { dia: new Date(2024, 8, 7), tipoExercicio: 'exercicio-1' },
  ]);

  const obterCorExercicio = (tipoExercicio: string) => {
    switch (tipoExercicio) {
      case 'exercicio-1':
        return '#e6a97a';
      case 'exercicio-2':
        return '#f7c773';
      case 'exercicio-3':
        return '#9bd0c6';
      case 'exercicio-4':
        return '#4f909d';
      default:
        return '';
    }
  };

  const marcarDatasTreino = ({ date }: { date: Date }) => {
    const treinoDoDia = diasComTreinos.find((treino) => treino.dia.toDateString() === date.toDateString());
    if (treinoDoDia) {
      return (
        <div
          style={{
            backgroundColor: obterCorExercicio(treinoDoDia.tipoExercicio),
            borderRadius: '50%',
            width: '100%',
            height: '100%',
          }}
        ></div>
      );
    }
    return null;
  };

  return (
    <div>
      <h1>Histórico do Paciente</h1>

      <div className="exercicios-legenda">
        <div className="exercicio-item" style={{ backgroundColor: '#e6a97a' }}>
          Exercício 01 - Descrição do exercício
        </div>
        <div className="exercicio-item" style={{ backgroundColor: '#f7c773' }}>
          Exercício 02 - Descrição do exercício
        </div>
        <div className="exercicio-item" style={{ backgroundColor: '#9bd0c6' }}>
          Exercício 03 - Descrição do exercício
        </div>
        <div className="exercicio-item" style={{ backgroundColor: '#4f909d' }}>
          Exercício 04 - Descrição do exercício
        </div>
      </div>

      {/* Calendário com datas marcadas */}
      <Calendar
        tileContent={marcarDatasTreino}
        defaultValue={new Date(2024, 8, 1)} // Define setembro como mês padrão
        showNeighboringMonth={false} // Remove dias do mês vizinho
      />

    </div>
  );
};

export default HistoricoAtividades;
