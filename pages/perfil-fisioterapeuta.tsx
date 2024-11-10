'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Paciente {
  id: number;
  nome: string;
  horario: string;
}

interface DiaAgenda {
  dia: string;
  pacientes: { horario: string; nome: string; }[];
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
  greeting: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '2rem',
  },
  actionButtons: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1rem',
    maxWidth: '300px',
    marginBottom: '2rem',
  },
  button: {
    padding: '1rem',
    borderRadius: '50px',
    border: 'none',
    backgroundColor: '#E39076',
    color: 'white',
    fontSize: '1.25rem',
    cursor: 'pointer',
  },
  content: {
    display: 'grid',
    gridTemplateColumns: '300px 1fr',
    gap: '2rem',
  },
  agenda: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1rem',
  },
  diaAgenda: {
    backgroundColor: '#E39076',
    padding: '1.5rem',
    borderRadius: '20px',
    color: 'white',
  },
  diaNumero: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  horarios: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.5rem',
  },
  calendario: {
    backgroundColor: 'white',
    borderRadius: '20px',
    padding: '2rem',
  },
  calendarioHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem',
  },
  mes: {
    fontSize: '2rem',
    color: '#E39076',
    fontWeight: 'bold',
  },
  navegacaoMes: {
    display: 'flex',
    gap: '1rem',
  },
  botaoNavegacao: {
    background: 'none',
    border: 'none',
    color: '#E39076',
    cursor: 'pointer',
    fontSize: '2rem',
  },
  diasSemana: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    textAlign: 'center' as const,
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gap: '0.5rem',
  },
  dia: {
    padding: '0.5rem',
    textAlign: 'center' as const,
    borderRadius: '5px',
  },
  diaComConsulta: {
    backgroundColor: '#E39076',
    color: 'white',
  },
};

export default function PerfilFisioterapeuta() {
  const router = useRouter();
  const [agenda] = useState<DiaAgenda[]>([
    {
      dia: '03',
      pacientes: [
        { horario: '10:00', nome: 'Nome do Paciente' },
        { horario: '13:00', nome: 'Nome do Paciente' },
        { horario: '13:30', nome: 'Nome do Paciente' },
        { horario: '14:30', nome: 'Nome do Paciente' },
      ],
    },
    {
      dia: '04',
      pacientes: [
        { horario: '10:00', nome: 'Nome do Paciente' },
        { horario: '13:00', nome: 'Nome do Paciente' },
        { horario: '13:30', nome: 'Nome do Paciente' },
        { horario: '14:30', nome: 'Nome do Paciente' },
        { horario: '15:20', nome: 'Nome do Paciente' },
      ],
    },
  ]);

  const diasDaSemana = ['SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB', 'DOM'];
  const diasDoMes = Array.from({ length: 30 }, (_, i) => i + 1);
  const diasComConsulta = [3, 4, 5];

  const handlePacientes = () => {
    router.push('/selecao-pacientes');
  };

  const handleEditarPerfil = () => {
    router.push('/editar-perfil-fisioterapeuta');
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

        <div style={styles.actionButtons}>
          <button style={styles.button} onClick={handlePacientes}>
            PACIENTES
          </button>
          <button style={styles.button} onClick={handleEditarPerfil}>
            EDITAR PERFIL
          </button>
        </div>

        <div style={styles.content}>
          <div style={styles.agenda}>
            {agenda.map((dia) => (
              <div key={dia.dia} style={styles.diaAgenda}>
                <div style={styles.diaNumero}>{dia.dia}</div>
                <div style={styles.horarios}>
                  {dia.pacientes.map((paciente, index) => (
                    <div key={index}>
                      {paciente.horario} - {paciente.nome}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={styles.calendario}>
            <div style={styles.calendarioHeader}>
              <button style={styles.botaoNavegacao}>
                <ChevronLeft />
              </button>
              <h2 style={styles.mes}>SETEMBRO, 2024</h2>
              <button style={styles.botaoNavegacao}>
                <ChevronRight />
              </button>
            </div>

            <div style={styles.diasSemana}>
              {diasDaSemana.map((dia) => (
                <div key={dia}>{dia}</div>
              ))}
            </div>

            <div style={styles.grid}>
              {diasDoMes.map((dia) => (
                <div
                  key={dia}
                  style={{
                    ...styles.dia,
                    ...(diasComConsulta.includes(dia) ? styles.diaComConsulta : {}),
                  }}
                >
                  {dia}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
