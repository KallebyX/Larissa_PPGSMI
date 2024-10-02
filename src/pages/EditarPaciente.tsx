import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa o useNavigate para navegação

const EditarPaciente: React.FC = () => {
  const [paciente, setPaciente] = useState({
    nome: 'Nome Nome Nome',
    email: 'email.email@email.com',
    dataNascimento: '00/00/0000',
    genero: 'Gênero',
    endereco: 'Endereço Endereço Endereço',
    telefone: '(55) 00 00000-0000',
    fisioterapeuta: 'Nome Nome Nome',
    proximaConsulta: {
      data: '00/00/0000',
      horario: '00:00',
    },
  });

  const navigate = useNavigate(); // Hook para navegação

  useEffect(() => {
    // Aqui você pode fazer a lógica para buscar as informações do paciente baseado no id recebido
  }, []);

  const handleDefinirTreino = () => {
    navigate('/definir-treino'); // Redireciona para a página de definir treino
  };

  const handleHistorico = () => {
    navigate('/historico-atividades'); // Redireciona para a página de histórico de atividades (corrigido para corresponder à rota correta)
  };

  return (
    <div>
      <h1>Olá, {paciente.nome}</h1>
      <button onClick={handleDefinirTreino}>Definir Treino</button>
      <button onClick={handleHistorico}>Histórico</button>

      <div>
        <h2>Agenda</h2>
        <p>Próxima consulta:</p>
        <p>Data: {paciente.proximaConsulta.data}</p>
        <p>Horário: {paciente.proximaConsulta.horario}</p>
      </div>

      <div>
        <h2>Perfil</h2>
        <p><strong>Nome:</strong> {paciente.nome}</p>
        <p><strong>E-mail:</strong> {paciente.email}</p>
        <p><strong>Data de Nascimento:</strong> {paciente.dataNascimento}</p>
        <p><strong>Gênero:</strong> {paciente.genero}</p>
        <p><strong>Endereço:</strong> {paciente.endereco}</p>
        <p><strong>Telefone:</strong> {paciente.telefone}</p>
        <p><strong>Fisioterapeuta:</strong> {paciente.fisioterapeuta}</p>
      </div>
    </div>
  );
};

export default EditarPaciente;