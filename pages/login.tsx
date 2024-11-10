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
  },
  main: {
    flex: 1,
    maxWidth: '600px',
    margin: '0 auto',
    padding: '2rem',
    width: '100%',
  },
  title: {
    color: 'white',
    fontSize: '2rem',
    textAlign: 'center' as const,
    marginBottom: '2rem',
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
  radioGroup: {
    marginTop: '2rem',
  },
  radioLabel: {
    color: '#333',
    fontSize: '1.25rem',
    marginBottom: '1rem',
    display: 'block',
  },
  radioOptions: {
    display: 'flex',
    gap: '2rem',
    justifyContent: 'center',
  },
  radioOption: {
    backgroundColor: '#FDF8ED',
    padding: '1rem 2rem',
    borderRadius: '50px',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    cursor: 'pointer',
  },
  radio: {
    width: '20px',
    height: '20px',
    margin: 0,
  },
  button: {
    display: 'block',
    width: '200px',
    margin: '2rem auto',
    padding: '1rem',
    fontSize: '1.25rem',
    color: 'white',
    backgroundColor: '#E39076',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    textAlign: 'center' as const,
  },
  footer: {
    backgroundColor: '#E39076',
    padding: '2rem',
  },
};

export default function Login() {
  const [nome, setNome] = useState('');
  const [password, setPassword] = useState('');
  const [tipoUsuario, setTipoUsuario] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (nome && password && tipoUsuario) {
      localStorage.setItem('nomeUsuario', nome);
      localStorage.setItem('tipoUsuario', tipoUsuario);

      if (tipoUsuario === 'fisioterapeuta') {
        router.push('/perfil-fisioterapeuta');
      } else if (tipoUsuario === 'paciente') {
        router.push('/perfil-paciente');
      }
    } else {
      alert('Por favor, preencha todos os campos e selecione seu tipo de usuário.');
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
        <h2 style={styles.title}>ENTRAR</h2>

        <div style={styles.formGroup}>
          <label style={styles.label}>Nome Completo</label>
          <input
            type="text"
            style={styles.input}
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Senha</label>
          <input
            type="password"
            style={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div style={styles.radioGroup}>
          <label style={styles.radioLabel}>Você é...</label>
          <div style={styles.radioOptions}>
            <label style={styles.radioOption}>
              <input
                type="radio"
                style={styles.radio}
                name="tipoUsuario"
                value="paciente"
                checked={tipoUsuario === 'paciente'}
                onChange={(e) => setTipoUsuario(e.target.value)}
              />
              Paciente
            </label>
            <label style={styles.radioOption}>
              <input
                type="radio"
                style={styles.radio}
                name="tipoUsuario"
                value="fisioterapeuta"
                checked={tipoUsuario === 'fisioterapeuta'}
                onChange={(e) => setTipoUsuario(e.target.value)}
              />
              Fisioterapeuta
            </label>
          </div>
        </div>

        <button style={styles.button} onClick={handleLogin}>
          CONTINUAR
        </button>
      </main>

      <footer style={styles.footer} />
    </div>
  );
}