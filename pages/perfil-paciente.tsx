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
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem',
  },
  greeting: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '2rem',
  },
  content: {
    display: 'grid',
    gridTemplateColumns: '250px 1fr',
    gap: '2rem',
  },
  navigation: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1rem',
  },
  navButton: {
    padding: '1rem',
    borderRadius: '50px',
    border: 'none',
    color: 'white',
    fontSize: '1.25rem',
    cursor: 'pointer',
    textAlign: 'center' as const,
    textDecoration: 'none',
  },
  treinoButton: {
    backgroundColor: '#98C6BF',
  },
  historicoButton: {
    backgroundColor: '#006B77',
  },
  agendaSection: {
    backgroundColor: '#E39076',
    padding: '1.5rem',
    borderRadius: '20px',
    color: 'white',
  },
  agendaTitle: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
  },
  agendaInfo: {
    fontSize: '1.25rem',
  },
  rightSection: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '2rem',
  },
  notificationSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem',
  },
  notificationText: {
    fontSize: '1.25rem',
    maxWidth: '600px',
  },
  activateButton: {
    backgroundColor: '#E39076',
    color: 'white',
    padding: '0.75rem 2rem',
    borderRadius: '50px',
    border: 'none',
    fontSize: '1.25rem',
    cursor: 'pointer',
  },
  profileSection: {
    border: '2px solid #E39076',
    borderRadius: '20px',
    padding: '2rem',
  },
  profileHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem',
  },
  profileTitle: {
    color: '#E39076',
    fontSize: '2rem',
    margin: 0,
  },
  editButton: {
    color: '#E39076',
    background: 'none',
    border: 'none',
    fontSize: '1.25rem',
    cursor: 'pointer',
  },
  profileGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '2rem',
  },
  profileField: {
    marginBottom: '1.5rem',
  },
  fieldLabel: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  fieldValue: {
    fontSize: '1.25rem',
  },
};

export default function PerfilPaciente() {
  const router = useRouter();
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [showEditProfile, setShowEditProfile] = useState(false);

  // Função para editar o perfil
  const handleEditProfile = () => {
    // Redireciona para a página de edição de perfil
    router.push('/editar-perfil-paciente');
  };
  const handleTreino = () => {
    // Redireciona para a página de edição de perfil
    router.push('/selecao-treino');
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

        <div style={styles.content}>
          <nav style={styles.navigation}>
            <button 
              onClick={handleTreino} 
              style={{ ...styles.navButton, ...styles.treinoButton }}>TREINO</button>
            <button style={{ ...styles.navButton, ...styles.historicoButton }}>HISTÓRICO</button>
            <div style={styles.agendaSection}>
              <h3 style={styles.agendaTitle}>AGENDA</h3>
              <p style={styles.agendaInfo}>Próxima consulta:</p>
              <p style={styles.agendaInfo}>Data: 00/00/00</p>
              <p style={styles.agendaInfo}>Horário: 00:00</p>
            </div>
          </nav>

          <div style={styles.rightSection}>
            <div style={styles.notificationSection}>
              <p style={styles.notificationText}>
                Deseja receber lembretes para não esquecer suas atividades de fisioterapia?
              </p>
              <button
                style={styles.activateButton}
                onClick={() => setNotificationsEnabled(!notificationsEnabled)}
              >
                {notificationsEnabled ? 'DESATIVAR' : 'ATIVAR'}
              </button>
            </div>

            <div style={styles.profileSection}>
              <div style={styles.profileHeader}>
                <h2 style={styles.profileTitle}>PERFIL</h2>
                <button
                  onClick={handleEditProfile}
                  style={{ ...styles.editButton }}
                >
                  Editar
                </button>
              </div>

              <div style={styles.profileGrid}>
                <div style={styles.profileField}>
                  <div style={styles.fieldLabel}>Nome</div>
                  <div style={styles.fieldValue}>Nome Nome Nome</div>
                </div>
                <div style={styles.profileField}>
                  <div style={styles.fieldLabel}>E-mail</div>
                  <div style={styles.fieldValue}>email.email@email.com</div>
                </div>
                <div style={styles.profileField}>
                  <div style={styles.fieldLabel}>Data de Nascimento</div>
                  <div style={styles.fieldValue}>00/00/0000</div>
                </div>
                <div style={styles.profileField}>
                  <div style={styles.fieldLabel}>Gênero</div>
                  <div style={styles.fieldValue}>Gênero</div>
                </div>
                <div style={styles.profileField}>
                  <div style={styles.fieldLabel}>Telefone</div>
                  <div style={styles.fieldValue}>(55) 00 00000-0000</div>
                </div>
                <div style={styles.profileField}>
                  <div style={styles.fieldLabel}>Endereço</div>
                  <div style={styles.fieldValue}>Endereço Endereço Endereço</div>
                </div>
                <div style={styles.profileField}>
                  <div style={styles.fieldLabel}>Fisioterapeuta</div>
                  <div style={styles.fieldValue}>Nome Nome Nome</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
