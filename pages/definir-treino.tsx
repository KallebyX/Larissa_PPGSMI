'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Plus } from 'lucide-react';

interface Atividade {
  atividade: string;
  tempo: string;
  porcentagem: string;
}

interface Treino {
  nome: string;
  atividades: Atividade[];
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#FDF8ED',
  },
  header: {
    backgroundColor: '#E39076',
    padding: '2rem 0',
    marginBottom: '2rem',
  },
  logoContainer: {
    width: '200px',
    margin: '0 auto',
    padding: '0.75rem',
    backgroundColor: '#B4DCD6',
    borderRadius: '50px',
    textAlign: 'center' as const,
  },
  logo: {
    color: 'white',
    fontSize: '1.5rem',
    margin: 0,
    fontWeight: 'normal',
  },
  main: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem',
  },
  title: {
    fontSize: '4rem',
    fontWeight: 'bold',
    marginBottom: '3rem',
  },
  content: {
    display: 'grid',
    gridTemplateColumns: '400px 1fr',
    gap: '2rem',
  },
  exerciseList: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1rem',
  },
  exerciseButton: {
    padding: '1rem 2rem',
    borderRadius: '50px',
    border: 'none',
    fontSize: '1.25rem',
    textAlign: 'left' as const,
    cursor: 'pointer',
    color: '#000',
    display: 'flex',
    alignItems: 'center',
  },
  formSection: {
    backgroundColor: '#E39076',
    borderRadius: '20px',
    padding: '2rem',
  },
  formGrid: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1rem',
  },
  trainingRow: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr auto',
    gap: '1rem',
    alignItems: 'center',
  },
  input: {
    padding: '0.75rem 1.5rem',
    borderRadius: '50px',
    border: 'none',
    fontSize: '1rem',
    width: '100%',
    backgroundColor: 'white',
  },
  timeInput: {
    padding: '0.75rem 1.5rem',
    borderRadius: '50px',
    border: 'none',
    fontSize: '1rem',
    width: '100px',
    backgroundColor: 'white',
    textAlign: 'center' as const,
  },
  secondsLabel: {
    color: 'white',
    fontSize: '1rem',
  },
  addButton: {
    backgroundColor: '#98C6BF',
    color: 'white',
    padding: '0.75rem 1.5rem',
    borderRadius: '50px',
    border: 'none',
    fontSize: '1rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    marginTop: '1rem',
    width: 'fit-content',
  },
  section: {
    marginTop: '4rem',
  },
  sectionTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '2rem',
    color: '#000',
  },
  preDefinedList: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1rem',
  },
  preDefinedItem: {
    padding: '1rem 2rem',
    borderRadius: '50px',
    border: '1px solid #E39076',
    backgroundColor: 'white',
    fontSize: '1.25rem',
    cursor: 'pointer',
  },
  activityGrid: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr 1fr',
    gap: '1rem',
    marginBottom: '1rem',
  },
  concludeButton: {
    backgroundColor: '#98C6BF',
    color: 'white',
    padding: '0.75rem 2rem',
    borderRadius: '50px',
    border: 'none',
    fontSize: '1.25rem',
    cursor: 'pointer',
  },
};

const exerciseColors = [
  '#E39076', // coral
  '#F4A460', // orange
  '#98C6BF', // light blue
  '#006B77', // teal
];

export default function DefinirTreino() {
  const [treinosPreDefinidos, setTreinosPreDefinidos] = useState<Treino[]>([]);
  const [novoTreino, setNovoTreino] = useState<Atividade[]>([]);
  const [nomeTreino, setNomeTreino] = useState('');
  const [selectedTreinos, setSelectedTreinos] = useState<{ [key: string]: string }>({});
  const router = useRouter();

  const handleAddAtividade = () => {
    setNovoTreino([...novoTreino, { atividade: '', tempo: '', porcentagem: '' }]);
  };

  const handleAddTreino = () => {
    const newTreino = { nome: `Treino ${treinosPreDefinidos.length + 1}`, atividades: [] };
    setTreinosPreDefinidos([...treinosPreDefinidos, newTreino]);
  };

  const handleConcluirTreino = () => {
    if (nomeTreino && novoTreino.length > 0) {
      setTreinosPreDefinidos([...treinosPreDefinidos, { nome: nomeTreino, atividades: novoTreino }]);
      setNovoTreino([]);
      setNomeTreino('');
    }
  };

  const handleSelectTreino = (treino: string, index: number) => {
    const updatedSelectedTreinos = { ...selectedTreinos, [index]: treino };
    setSelectedTreinos(updatedSelectedTreinos);
  };

  const handleTimeChange = (index: number, value: string) => {
    const updatedTreinos = [...treinosPreDefinidos];
    updatedTreinos[index].tempo = value;
    setTreinosPreDefinidos(updatedTreinos);
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.logoContainer}>
          <h1 style={styles.logo}>marca</h1>
        </div>
      </header>

      <main style={styles.main}>
        <h1 style={styles.title}>DEFINIR TREINOS</h1>

        <div style={styles.content}>
          <div style={styles.exerciseList}>
            {['Exercício 01', 'Exercício 02', 'Exercício 03', 'Exercício 04'].map((exercicio, index) => (
              <button
                key={index}
                style={{
                  ...styles.exerciseButton,
                  backgroundColor: exerciseColors[index],
                }}
              >
                {exercicio} - Descrição do exercício
              </button>
            ))}
          </div>

          <div style={styles.formSection}>
            <div style={styles.formGrid}>
              {treinosPreDefinidos.map((treino, index) => (
                <div key={index} style={styles.trainingRow}>
                  <select
                    style={styles.input}
                    value={selectedTreinos[index] || ''}
                    onChange={(e) => handleSelectTreino(e.target.value, index)}
                  >
                    <option value="">Selecione o treino pré-definido</option>
                    <option value={treino.nome}>{treino.nome}</option>
                  </select>
                  <input
                    type="text"
                    placeholder="00"
                    value={treino.tempo || ''}
                    onChange={(e) => handleTimeChange(index, e.target.value)}
                    style={styles.timeInput}
                  />
                  <span style={styles.secondsLabel}>segundos</span>
                </div>
              ))}
            </div>
            <button onClick={handleAddTreino} style={styles.addButton}>
              <Plus size={20} /> Adicionar mais treinos
            </button>
          </div>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>CRIAR NOVO TREINO</h2>
          <input
            type="text"
            placeholder="Nome do Treino"
            value={nomeTreino}
            onChange={(e) => setNomeTreino(e.target.value)}
            style={{ ...styles.input, marginBottom: '2rem' }}
          />

          {novoTreino.map((_, index) => (
            <div key={index} style={styles.activityGrid}>
              <input
                type="text"
                placeholder="Atividade"
                style={styles.input}
              />
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input
                  type="text"
                  placeholder="segundos"
                  style={styles.timeInput}
                />
                <span style={styles.secondsLabel}>segundos</span>
              </div>
              <input
                type="text"
                placeholder="Porcentagem"
                style={styles.input}
              />
            </div>
          ))}

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
            <button onClick={handleAddAtividade} style={styles.addButton}>
              <Plus size={20} /> Adicionar nova atividade
            </button>
            <button onClick={handleConcluirTreino} style={styles.concludeButton}>
              CONCLUIR
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
