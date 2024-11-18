'use client'

import React, { useState, useEffect } from 'react';
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
    marginBottom: '2rem',
  },
  profileTitle: {
    color: '#E39076',
    fontSize: '2rem',
    marginBottom: '2rem',
  },
  profileGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '2rem',
  },
  fieldGroup: {
    marginBottom: '1.5rem',
  },
  label: {
    display: 'block',
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    fontSize: '1.25rem',
    border: 'none',
    borderRadius: '50px',
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

export default function EditarPaciente() {
  const [paciente, setPaciente] = useState({
    nome: 'Nome Nome Nome',
    email: 'email.email@email.com',
    dataNascimento: '00/00/0000',
    genero: 'Gênero',
    endereco: 'Endereço Endereço Endereço',
    telefone: '(55) 00 00000-0000',
    fisioterapeuta: 'Nome Nome Nome',
  });

  const router = useRouter();

  const handleConfirmar = () => {
    // Lógica para salvar as alterações
    router.push('/perfil-paciente');
  };

  const handleCancelar = () => {
    router.push('/perfil-paciente');
  };

  const handleExcluir = () => {
    if (window.confirm('Tem certeza que deseja excluir sua conta? Esta ação não pode ser desfeita.')) {
      // Lógica para excluir a conta
      router.push('/');
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
        <h1 style={styles.greeting}>OLÁ, {paciente.nome}</h1>

        <section style={styles.profileSection}>
          <h2 style={styles.profileTitle}>PERFIL</h2>

          <div style={styles.profileGrid}>
            <div style={styles.fieldGroup}>
              <label style={styles.label}>Nome</label>
              <input
                type="text"
                value={paciente.nome}
                onChange={(e) => setPaciente({...paciente, nome: e.target.value})}
                style={styles.input}
              />
            </div>

            <div style={styles.fieldGroup}>
              <label style={styles.label}>E-mail</label>
              <input
                type="email"
                value={paciente.email}
                onChange={(e) => setPaciente({...paciente, email: e.target.value})}
                style={styles.input}
              />
            </div>

            <div style={styles.fieldGroup}>
              <label style={styles.label}>Data de Nascimento</label>
              <input
                type="text"
                value={paciente.dataNascimento}
                onChange={(e) => setPaciente({...paciente, dataNascimento: e.target.value})}
                style={styles.input}
              />
            </div>

            <div style={styles.fieldGroup}>
              <label style={styles.label}>Gênero</label>
              <input
                type="text"
                value={paciente.genero}
                onChange={(e) => setPaciente({...paciente, genero: e.target.value})}
                style={styles.input}
              />
            </div>

            <div style={styles.fieldGroup}>
              <label style={styles.label}>Telefone</label>
              <input
                type="tel"
                value={paciente.telefone}
                onChange={(e) => setPaciente({...paciente, telefone: e.target.value})}
                style={styles.input}
              />
            </div>

            <div style={styles.fieldGroup}>
              <label style={styles.label}>Endereço</label>
              <input
                type="text"
                value={paciente.endereco}
                onChange={(e) => setPaciente({...paciente, endereco: e.target.value})}
                style={styles.input}
              />
            </div>

            <div style={styles.fieldGroup}>
              <label style={styles.label}>Fisioterapeuta</label>
              <input
                type="text"
                value={paciente.fisioterapeuta}
                onChange={(e) => setPaciente({...paciente, fisioterapeuta: e.target.value})}
                style={styles.input}
                disabled
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
              onClick={handleExcluir}
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