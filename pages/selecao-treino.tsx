'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Treino {
  id: number;
  nome: string;
  descricao: string;
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#FDF8ED',
  },
  header: {
    backgroundColor: '#98C6BF',
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
    display: 'flex',
    gap: '4rem',
  },
  titleSection: {
    flex: '1',
  },
  title: {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '1rem',
  },
  exerciseSection: {
    flex: '2',
  },
  subtitle: {
    fontSize: '2rem',
    color: '#333',
    marginBottom: '2rem',
  },
  exerciseList: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1rem',
  },
  exerciseButton: {
    width: '100%',
    padding: '1.5rem',
    borderRadius: '50px',
    border: 'none',
    fontSize: '1.25rem',
    color: 'white',
    textAlign: 'left' as const,
    cursor: 'pointer',
    transition: 'opacity 0.2s',
  },
};

const exerciseColors = [
  '#E39076', // coral
  '#F4A460', // orange
  '#98C6BF', // light blue
  '#006B77', // teal
];

export default function SelecaoTreinoDiario() {
  const router = useRouter();
  const [treinos] = useState<Treino[]>([
    { id: 1, nome: 'Exercício 01', descricao: 'Descrição do exercício' },
    { id: 2, nome: 'Exercício 02', descricao: 'Descrição do exercício' },
    { id: 3, nome: 'Exercício 03', descricao: 'Descrição do exercício' },
    { id: 4, nome: 'Exercício 04', descricao: 'Descrição do exercício' },
  ]);

  const handleIniciarTreino = (treinoId: number) => {
    router.push(`/treino/${treinoId}`);
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
            TREINO
            <br />
            DIÁRIO
          </h1>
        </div>

        <div style={styles.exerciseSection}>
          <h2 style={styles.subtitle}>Selecione a atividade de hoje</h2>
          
          <div style={styles.exerciseList}>
            {treinos.map((treino, index) => (
              <button
                key={treino.id}
                onClick={() => handleIniciarTreino(treino.id)}
                style={{
                  ...styles.exerciseButton,
                  backgroundColor: exerciseColors[index],
                }}
              >
                {`${treino.nome} - ${treino.descricao}`}
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}