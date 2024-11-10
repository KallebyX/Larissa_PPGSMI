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
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    padding: '2rem',
    gap: '2rem',
  },
  title: {
    color: 'white',
    fontSize: '2rem',
    textAlign: 'center' as const,
    margin: '2rem 0',
  },
  radioGroup: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '2rem',
    width: '100%',
    maxWidth: '600px',
  },
  radioLabel: {
    color: 'white',
    fontSize: '1.5rem',
    marginBottom: '1rem',
  },
  radioOptions: {
    display: 'flex',
    gap: '2rem',
    flexWrap: 'wrap' as const,
    justifyContent: 'center',
  },
  radioOption: {
    position: 'relative' as const,
    minWidth: '200px',
  },
  radioInput: {
    position: 'absolute' as const,
    opacity: 0,
    width: '100%',
    height: '100%',
    cursor: 'pointer',
  },
  radioButton: {
    display: 'block',
    padding: '1rem 2rem',
    backgroundColor: '#FDF8ED',
    borderRadius: '50px',
    textAlign: 'center' as const,
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  radioButtonSelected: {
    backgroundColor: '#E39076',
    color: 'white',
  },
  button: {
    padding: '1rem 3rem',
    fontSize: '1.25rem',
    color: 'white',
    backgroundColor: '#006B77',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    marginTop: '2rem',
  },
  loginSection: {
    textAlign: 'center' as const,
    marginTop: '2rem',
  },
  loginText: {
    color: 'white',
    fontSize: '1.25rem',
    marginBottom: '1rem',
  },
  loginButton: {
    padding: '0.75rem 2rem',
    fontSize: '1.25rem',
    color: 'white',
    backgroundColor: '#E39076',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  footer: {
    backgroundColor: '#006B77',
    height: '4rem',
  },
};

export default function Cadastro() {
  const [tipoUsuario, setTipoUsuario] = useState('');
  const router = useRouter();

  const handleCadastro = () => {
    if (tipoUsuario === 'fisioterapeuta') {
      router.push('/cadastro-fisioterapeuta');
    } else if (tipoUsuario === 'paciente') {
      router.push('/cadastro-paciente-parte1');
    } else {
      alert('Por favor, selecione um tipo de usuário.');
    }
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

        <div style={styles.radioGroup}>
          <label style={styles.radioLabel}>Você é...</label>
          <div style={styles.radioOptions}>
            <div style={styles.radioOption}>
              <input
                type="radio"
                id="paciente"
                name="tipoUsuario"
                value="paciente"
                checked={tipoUsuario === 'paciente'}
                onChange={(e) => setTipoUsuario(e.target.value)}
                style={styles.radioInput}
              />
              <label
                htmlFor="paciente"
                style={{
                  ...styles.radioButton,
                  ...(tipoUsuario === 'paciente' ? styles.radioButtonSelected : {}),
                }}
              >
                Paciente
              </label>
            </div>

            <div style={styles.radioOption}>
              <input
                type="radio"
                id="fisioterapeuta"
                name="tipoUsuario"
                value="fisioterapeuta"
                checked={tipoUsuario === 'fisioterapeuta'}
                onChange={(e) => setTipoUsuario(e.target.value)}
                style={styles.radioInput}
              />
              <label
                htmlFor="fisioterapeuta"
                style={{
                  ...styles.radioButton,
                  ...(tipoUsuario === 'fisioterapeuta' ? styles.radioButtonSelected : {}),
                }}
              >
                Fisioterapeuta
              </label>
            </div>
          </div>
        </div>

        <button style={styles.button} onClick={handleCadastro}>
          CONTINUAR
        </button>

        <div style={styles.loginSection}>
          <p style={styles.loginText}>Já tem uma conta?</p>
          <button
            onClick={() => router.push('/login')}
            style={styles.loginButton}
          >
            Entre Agora!
          </button>
        </div>
      </main>

      <footer style={styles.footer} />
    </div>
  );
}