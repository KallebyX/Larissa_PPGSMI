import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Para navegação

interface Atividade {
  atividade: string;
  tempo: string;
  porcentagem: string;
}

interface Treino {
  nome: string;
  atividades: Atividade[];
}

interface Exercicio {
  treino: string;
  tempo: string;
}

const DefinirTreinos: React.FC = () => {
  const [treinosPreDefinidos, setTreinosPreDefinidos] = useState<Treino[]>([]);
  const [novoTreino, setNovoTreino] = useState<Atividade[]>([]);
  const [nomeTreino, setNomeTreino] = useState('');

  const [definirTreinos, setDefinirTreinos] = useState<Exercicio[]>([{ treino: '', tempo: '00' }, { treino: '', tempo: '00' }, { treino: '', tempo: '00' }, { treino: '', tempo: '00' }]); // Para os 4 treinos

  const navigate = useNavigate(); // Hook para navegação

  // Função para adicionar uma nova linha de atividade
  const handleAddAtividade = () => {
    setNovoTreino([...novoTreino, { atividade: '', tempo: '', porcentagem: '' }]);
  };

  // Função para salvar o treino no menu pré-definido
  const handleConcluirTreino = () => {
    setTreinosPreDefinidos([...treinosPreDefinidos, { nome: nomeTreino, atividades: novoTreino }]);
    setNovoTreino([]); // Limpar atividades
    setNomeTreino(''); // Limpar nome do treino
  };

  // Função para atualizar a atividade (usando keyof para validar os campos)
  const handleChangeAtividade = (index: number, field: keyof Atividade, value: string) => {
    const updatedTreino = [...novoTreino];
    updatedTreino[index][field] = value;
    setNovoTreino(updatedTreino);
  };

  // Função para adicionar o treino pré-definido à parte "Definir Treinos"
  const handleAddTreinoToDefinir = (index: number, treino: string) => {
    const updatedDefinirTreinos = [...definirTreinos];
    updatedDefinirTreinos[index].treino = treino;
    setDefinirTreinos(updatedDefinirTreinos);
  };

  // Função para mudar o tempo do treino em "Definir Treinos"
  const handleChangeTempo = (index: number, value: string) => {
    const updatedDefinirTreinos = [...definirTreinos];
    updatedDefinirTreinos[index].tempo = value;
    setDefinirTreinos(updatedDefinirTreinos);
  };

  // Função para redirecionar para a página de Selecionar Treinos para Paciente e passar os exercícios definidos
  const handleGoToSelecionarTreino = () => {
    navigate('/selecionar-treinos-paciente', { state: { exercicios: definirTreinos } }); // Passa os treinos e tempos criados
  };

  return (
    <div>
      <h1>Definir Treinos</h1>

      {/* Exibe os 4 exercícios para selecionar o treino e o tempo */}
      {definirTreinos.map((exercicio, index) => (
        <div key={index} className={`definir-treino definir-treino-${index + 1}`}>
          <label htmlFor={`select-treino-${index}`}>Exercício {index + 1}:</label>
          <select
            id={`select-treino-${index}`}
            value={exercicio.treino}
            onChange={(e) => handleAddTreinoToDefinir(index, e.target.value)}
            title={`Selecionar treino para exercício ${index + 1}`} // Acessibilidade
          >
            <option value="">Selecione um treino</option>
            {treinosPreDefinidos.map((t, i) => (
              <option key={i} value={t.nome}>
                {t.nome}
              </option>
            ))}
          </select>
          <label htmlFor={`tempo-treino-${index}`}>Tempo</label>
          <input 
            id={`tempo-treino-${index}`} 
            type="text" 
            value={exercicio.tempo} 
            onChange={(e) => handleChangeTempo(index, e.target.value)} 
            placeholder="00" 
            title={`Definir tempo para exercício ${index + 1}`} // Acessibilidade
          /> segundos
        </div>
      ))}

      <h2>Treinos Pré-definidos</h2>
      <ul>
        {treinosPreDefinidos.map((treino, index) => (
          <li key={index}>{treino.nome}</li>
        ))}
      </ul>

      <h2>Criar Novo Treino</h2>
      <div>
        <label htmlFor="nome-treino">Nome do Treino</label>
        <input
          id="nome-treino"
          type="text"
          placeholder="Nome do Treino"
          value={nomeTreino}
          onChange={(e) => setNomeTreino(e.target.value)}
        />
      </div>
      {novoTreino.map((item, index) => (
        <div key={index} className="criar-atividade">
          <label htmlFor={`atividade-${index}`}>Atividade</label>
          <select
            id={`atividade-${index}`}
            value={item.atividade}
            onChange={(e) => handleChangeAtividade(index, 'atividade', e.target.value)}
            title={`Selecionar atividade ${index + 1}`} // Acessibilidade
          >
            <option value="">Selecione</option>
            <option value="Contração">Contração</option>
            <option value="Repouso">Repouso</option>
            <option value="Relaxamento">Relaxamento</option>
            <option value="Descanso">Descanso</option>
          </select>
          <label htmlFor={`tempo-${index}`}>Tempo</label>
          <input
            id={`tempo-${index}`}
            type="text"
            placeholder="00"
            value={item.tempo}
            onChange={(e) => handleChangeAtividade(index, 'tempo', e.target.value)}
            title={`Definir tempo para atividade ${index + 1}`} // Acessibilidade
          /> segundos
          <label htmlFor={`porcentagem-${index}`}>Porcentagem</label>
          <input
            id={`porcentagem-${index}`}
            type="text"
            placeholder="Porcentagem"
            value={item.porcentagem}
            onChange={(e) => handleChangeAtividade(index, 'porcentagem', e.target.value)}
            onBlur={(e) => {
              const value = e.target.value.replace('%', '');
              handleChangeAtividade(index, 'porcentagem', `${value}%`);
            }}
            title={`Definir porcentagem para atividade ${index + 1}`} // Acessibilidade
          />
        </div>
      ))}
      <button onClick={handleAddAtividade}>Adicionar nova atividade</button>
      <button onClick={handleConcluirTreino}>Concluir</button>

      {/* Botão para ir para a página de Selecionar Treino para Paciente */}
      <button onClick={handleGoToSelecionarTreino}>Selecionar Treino para Paciente</button>

      {/* Estilos dos treinos */}
      <style>
        {`
          .definir-treino-1 { background-color: #e6a97a; }
          .definir-treino-2 { background-color: #f7c773; }
          .definir-treino-3 { background-color: #9bd0c6; }
          .definir-treino-4 { background-color: #4f909d; }
        `}
      </style>
    </div>
  );
};

export default DefinirTreinos;