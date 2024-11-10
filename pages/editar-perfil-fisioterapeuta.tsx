'use client'

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

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
  greeting: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '2rem',
  },
  profileSection: {
    position: 'relative' as const,
    border: '2px solid #E39076',
    borderRadius: '20px',
    padding: '2rem',
  },
  profileTitle: {
    color: '#E39076',
    fontSize: '2.5rem',
    marginBottom: '2rem',
  },
  formGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '2rem',
  },
  formGroup: {
    marginBottom: '1.5rem',
  },
  label: {
    display: 'block',
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  value: {
    fontSize: '1.25rem',
    color: '#666',
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    fontSize: '1.25rem',
    border: 'none',
    borderRadius: '10px',
    backgroundColor: '#FDF8ED',
  },
  buttonsContainer: {
    position: 'absolute' as const,
    right: '2rem',
    top: '2rem',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1rem',
  },
  button: {
    padding: '0.75rem 2rem',
    borderRadius: '50px',
    border: 'none',
    fontSize: '1.25rem',
    cursor: 'pointer',
    width: '200px',
    textAlign: 'center' as const,
  },
  confirmButton: {
    backgroundColor: '#98C6BF',
    color: 'white',
  },
  cancelButton: {
    backgroundColor: '#E39076',
    color: 'white',
  },
  deleteButton: {
    backgroundColor: '#E85338',
    color: 'white',
  },
};

export default function EditarPerfilFisioterapeuta() {
  const [nome, setNome] = useState('Nome Nome Nome');
  const [email, setEmail] = useState('email.email@email.com');
  const [crefito] = useState('CREFITO-0/000000-A');
  const [senha, setSenha] = useState('senhasenhasenha');
  const [confirmarSenha, setConfirmarSenha] = useState('Nome Nome Nome');
  const router = useRouter();

  const handleConfirmar = () => {
    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }
    console.log('Perfil atualizado:', { nome, email, senha });
    alert('Perfil atualizado com sucesso!');
    router.push('/perfil-fisioterapeuta');
  };

  const handleCancelar = () => {
    router.back();
  };

  const handleExcluirConta = () => {
    router.push('/excluir-conta');
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.logoContainer}>
          <h1 style={styles.logo}>marca</h1>
        </div>
      </header>

      <main style={styles.main}>
        <h1 style={styles.greeting}>OLÁ, NOMENOME</h1>

        <section style={styles.profileSection}>
          <h2 style={styles.profileTitle}>PERFIL</h2>

          <div style={styles.formGrid}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Nome</label>
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                style={styles.input}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>E-mail</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={styles.input}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>CREFITO</label>
              <input
                type="text"
                value={crefito}
                disabled
                style={styles.input}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Senha</label>
              <input
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                style={styles.input}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Confirmação de senha</label>
              <input
                type="password"
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
                style={styles.input}
              />
            </div>
          </div>

          <div style={styles.buttonsContainer}>
            <button
              onClick={handleConfirmar}
              style={{...styles.button, ...styles.confirmButton}}
            >
              CONFIRMAR
            </button>
            <button
              onClick={handleCancelar}
              style={{...styles.button, ...styles.cancelButton}}
            >
              CANCELAR
            </button>
            <button
              onClick={handleExcluirConta}
              style={{...styles.button, ...styles.deleteButton}}
            >
              EXCLUIR
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}