import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Para navegação
import Calendar from 'react-calendar'; // Biblioteca de calendário
import 'react-calendar/dist/Calendar.css'; // Importa o CSS do calendário
import axios from 'axios'; // Para fazer a requisição HTTP

interface Paciente {
  id: number;
  nome: string;
  horario: string;
}

const PerfilFisioterapeuta: React.FC = () => {
  const [pacientes, setPacientes] = useState<Paciente[]>([
    { id: 1, nome: 'João da Silva', horario: '10:00 AM' },
    { id: 2, nome: 'Maria Oliveira', horario: '11:00 AM' },
  ]);

  const [nomeFisio, setNomeFisio] = useState<string | null>('');
  const [dataSelecionada, setDataSelecionada] = useState<Date>(new Date()); // Inicializa com uma data padrão
  const [dataBrasilia, setDataBrasilia] = useState<Date | null>(null);

  const navigate = useNavigate(); // Hook para navegar entre páginas

  // Função para buscar a data e hora de Brasília usando uma API pública
  const fetchHoraDeBrasilia = async () => {
    try {
      const response = await axios.get('http://worldtimeapi.org/api/timezone/America/Sao_Paulo');
      const dateTimeString = response.data.datetime; // Data e hora no formato ISO 8601
      const dateBrasilia = new Date(dateTimeString);
      setDataBrasilia(dateBrasilia);
      setDataSelecionada(dateBrasilia); // Atualiza o calendário com a data de Brasília
    } catch (error) {
      console.error('Erro ao buscar a data e hora de Brasília:', error);
    }
  };

  useEffect(() => {
    // Recupera o nome do fisioterapeuta do localStorage
    const nome = localStorage.getItem('nomeUsuario');
    setNomeFisio(nome);

    // Chama a função para buscar a data e hora de Brasília
    fetchHoraDeBrasilia();
  }, []);

  const handleEditProfile = () => {
    navigate('/editar-perfil-fisioterapeuta'); // Redireciona para a página de edição de perfil
  };

  const handlePacientes = () => {
    navigate('/selecao-pacientes'); // Redireciona para a página de seleção de pacientes
  };

  return (
    <div>
      <h1>Olá, {nomeFisio}</h1>
      <button onClick={handlePacientes}>Pacientes</button>
      <button onClick={handleEditProfile}>Editar Perfil</button>

      {/* Exemplo de calendário usando react-calendar */}
      <div>
        <h2>Calendário</h2>
        {dataBrasilia ? (
          <Calendar
            value={dataSelecionada}
            defaultValue={dataBrasilia} // Usa a data de Brasília como valor padrão
          />
        ) : (
          <p>Carregando horário de Brasília...</p>
        )}
        <p>Data selecionada: {dataSelecionada.toDateString()}</p>
      </div>

      {/* Lista de Pacientes */}
      <ul>
        {pacientes.map((paciente) => (
          <li key={paciente.id}>
            Paciente: {paciente.nome} - Horário: {paciente.horario}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PerfilFisioterapeuta;