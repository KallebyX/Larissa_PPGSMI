'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Exercicio {
  treino: string;
  tempo: string;
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
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    gap: '4rem',
  },
  titleSection: {
    paddingTop: '2rem',
  },
  title: {
    fontSize: '4rem',
    fontWeight: 'bold',
    lineHeight: '1.2',
    marginBottom: '2rem',
  },
  exerciseSection: {
    paddingTop: '4rem',
  },
  subtitle: {
    fontSize: '2rem',
    marginBottom: '3rem',
  },
  exerciseList: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1.5rem',
  },
  exerciseButton: {
    width: '100%',
    padding: '1.5rem 2rem',
    borderRadius: '50px',
    border: 'none',
    fontSize: '1.25rem',
    color: 'black',
    textAlign: 'left' as const,
    cursor: 'pointer',
    transition: 'transform 0.2s',
  },
  selectedExercise: {
    transform: 'scale(1.02)',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
};

const exerciseColors = [
  '#E39076', // coral
  '#F4A460', // orange
  '#98C6BF', // light blue
  '#006B77', // teal
];

export default function SelecionarTreinosParaPaciente() {
  const router = useRouter();
  const [exerciciosSelecionados, setExerciciosSelecionados] = useState<string[]>(['', '', '', '']);

  const handleSelecionarTreino = (index: number) => {
    const treinoEscolhido = 'Descrição do exercício';
    const updatedExercicios = [...exerciciosSelecionados];
    updatedExercicios[index] = treinoEscolhido;
    setExerciciosSelecionados(updatedExercicios);
  };

  const handleVoltar = () => {
    router.push('/perfil-fisioterapeuta');
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.logoContainer}>
          <h1 style={styles.logo}>marca</h1>
        </div>
      </header>

      <main style={styles.main}>
        <div style={styles.titleSection}>
          <h1 style={styles.title}>
            DEFINIR
            <br />
            TREINOS
          </h1>
        </div>

        <div style={styles.exerciseSection}>
          <h2 style={styles.subtitle}>
            Defina tipos diferentes de treino para seu paciente:
          </h2>
          
          <div style={styles.exerciseList}>
            {['Exercício 01', 'Exercício 02', 'Exercício 03', 'Exercício 04'].map((exercicio, index) => (
              <button
                key={index}
                onClick={() => handleSelecionarTreino(index)}
                style={{
                  ...styles.exerciseButton,
                  backgroundColor: exerciseColors[index],
                  ...(exerciciosSelecionados[index] ? styles.selectedExercise : {}),
                }}
              >
                {exercicio} - {exerciciosSelecionados[index] || 'Descrição do exercício'}
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
