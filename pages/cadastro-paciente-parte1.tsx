'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column' as const,
    backgroundColor: '#98C6BF',
  },
  header: {
    backgroundColor: '#006B77',
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
    flex: 1,
    maxWidth: '800px',
    margin: '0 auto',
    padding: '2rem',
    width: '100%',
  },
  title: {
    color: '#006B77',
    fontSize: '2rem',
    textAlign: 'center' as const,
    marginBottom: '3rem',
  },
  formGroup: {
    marginBottom: '1.5rem',
  },
  label: {
    display: 'block',
    color: '#333',
    fontSize: '1.25rem',
    marginBottom: '0.5rem',
  },
  input: {
    width: '100%',
    padding: '1rem',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '50px',
    backgroundColor: '#FDF8ED',
  },
  row: {
    display: 'flex',
    gap: '2rem',
    marginBottom: '1.5rem',
  },
  column: {
    flex: 1,
  },
  button: {
    display: 'block',
    width: '200px',
    margin: '3rem auto',
    padding: '1rem',
    fontSize: '1.25rem',
    color: 'white',
    backgroundColor: '#006B77',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    textAlign: 'center' as const,
  },
  footer: {
    backgroundColor: '#006B77',
    height: '4rem',
  },
};

export default function CadastroPacienteParte1() {
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [genero, setGenero] = useState('');
  const [endereco, setEndereco] = useState('');
  const [fisioterapeuta, setFisioterapeuta] = useState('');

  const router = useRouter();

  const handleContinuar = () => {
    if (!nome || !dataNascimento || !genero || !endereco || !fisioterapeuta) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const pacienteInfo = {
      nome,
      dataNascimento,
      genero,
      endereco,
      fisioterapeuta,
    };
    localStorage.setItem('pacienteInfo', JSON.stringify(pacienteInfo));
    router.push('/cadastro-paciente-parte2');
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.logoContainer}>
          <h1 style={styles.logo}>marca</h1>
        </div>
      </header>

      <main style={styles.main}>
        <h2 style={styles.title}>CADASTRAR</h2>

        <div style={styles.formGroup}>
          <label style={styles.label}>Nome Completo</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            style={styles.input}
            placeholder="Digite seu nome completo"
          />
        </div>

        <div style={styles.row}>
          <div style={styles.column}>
            <label style={styles.label}>Data de Nascimento</label>
            <input
              type="date"
              value={dataNascimento}
              onChange={(e) => setDataNascimento(e.target.value)}
              style={styles.input}
            />
          </div>

          <div style={styles.column}>
            <label style={styles.label}>Gênero</label>
            <input
              type="text"
              value={genero}
              onChange={(e) => setGenero(e.target.value)}
              style={styles.input}
              placeholder="Digite seu gênero"
            />
          </div>
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Endereço</label>
          <input
            type="text"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
            style={styles.input}
            placeholder="Digite seu endereço completo"
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Fisioterapeuta</label>
          <input
            type="text"
            value={fisioterapeuta}
            onChange={(e) => setFisioterapeuta(e.target.value)}
            style={styles.input}
            placeholder="Digite o nome do seu fisioterapeuta"
          />
        </div>

        <button style={styles.button} onClick={handleContinuar}>
          CONTINUAR
        </button>
      </main>

      <footer style={styles.footer} />
    </div>
  );
}