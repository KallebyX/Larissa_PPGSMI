'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

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
    maxWidth: '800px',
    margin: '0 auto',
    padding: '2rem',
    textAlign: 'center' as const,
  },
  title: {
    color: '#E39076',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '2rem',
    lineHeight: '1.2',
  },
  subtitle: {
    fontSize: '1.5rem',
    color: '#333',
    marginBottom: '3rem',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    marginTop: '2rem',
  },
  button: {
    padding: '1rem 3rem',
    borderRadius: '50px',
    border: 'none',
    fontSize: '1.25rem',
    cursor: 'pointer',
    transition: 'opacity 0.2s',
  },
  cancelButton: {
    backgroundColor: '#E39076',
    color: 'white',
  },
  confirmButton: {
    backgroundColor: '#98C6BF',
    color: 'white',
  },
  passwordSection: {
    maxWidth: '400px',
    margin: '0 auto',
  },
  inputGroup: {
    marginBottom: '1.5rem',
    textAlign: 'left' as const,
  },
  label: {
    display: 'block',
    fontSize: '1.25rem',
    marginBottom: '0.5rem',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '1rem',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '50px',
    backgroundColor: 'white',
  },
  checkboxContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '2rem',
  },
  checkbox: {
    width: '20px',
    height: '20px',
  },
};

export default function ExcluirConta() {
  const [etapa, setEtapa] = useState(1);
  const [senha, setSenha] = useState('');
  const router = useRouter();

  const handleConfirmarExclusao = () => {
    setEtapa(2);
  };

  const handleConcluirExclusao = () => {
    if (senha === '') {
      alert('Por favor, insira sua senha para continuar.');
      return;
    }
    console.log('Conta excluída com a senha:', senha);
    alert('Conta excluída com sucesso!');
    router.push('/');
  };

  const handleCancelar = () => {
    router.back();
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.logoContainer}>
          <h1 style={styles.logo}>marca</h1>
        </div>
      </header>

      <main style={styles.main}>
        {etapa === 1 ? (
          <>
            <h1 style={styles.title}>
              DESEJA MESMO EXCLUIR SUA CONTA PERMANENTEMENTE?
            </h1>
            <p style={styles.subtitle}>
              Você perderá todo seu progresso no site permanentemente.
            </p>
            <div style={styles.buttonContainer}>
              <button
                onClick={handleCancelar}
                style={{...styles.button, ...styles.cancelButton}}
              >
                NÃO, VOLTAR
              </button>
              <button
                onClick={handleConfirmarExclusao}
                style={{...styles.button, ...styles.confirmButton}}
              >
                SIM, EXCLUIR
              </button>
            </div>
          </>
        ) : (
          <div style={styles.passwordSection}>
            <h1 style={styles.title}>
              Para excluir sua conta permanentemente:
            </h1>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Insira sua senha atual:</label>
              <input
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="Digite sua senha"
                style={styles.input}
              />
            </div>
            <div style={styles.checkboxContainer}>
              <input
                type="checkbox"
                id="esqueciSenha"
                style={styles.checkbox}
              />
              <label htmlFor="esqueciSenha" style={styles.label}>
                Esqueci minha senha
              </label>
            </div>
            <div style={styles.buttonContainer}>
              <button
                onClick={handleCancelar}
                style={{...styles.button, ...styles.cancelButton}}
              >
                CANCELAR
              </button>
              <button
                onClick={handleConcluirExclusao}
                style={{...styles.button, ...styles.confirmButton}}
              >
                CONCLUIR
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}