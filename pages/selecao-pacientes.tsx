'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';

interface Paciente {
  id: number;
  nome: string;
  data: string;
  horario: string;
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
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '2rem',
  },
  searchContainer: {
    position: 'relative' as const,
    marginBottom: '3rem',
  },
  searchInput: {
    width: '100%',
    padding: '1rem 1rem 1rem 3rem',
    fontSize: '1.25rem',
    border: '2px solid #E39076',
    borderRadius: '50px',
    backgroundColor: 'white',
  },
  searchIcon: {
    position: 'absolute' as const,
    left: '1rem',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#E39076',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '1rem',
  },
  card: {
    backgroundColor: '#FFD5C8',
    padding: '1.5rem',
    borderRadius: '20px',
    cursor: 'pointer',
    transition: 'transform 0.2s',
  },
  cardHover: {
    transform: 'scale(1.02)',
  },
  patientName: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  patientInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.9rem',
  },
};

export default function SelecaoPacientes() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  const pacientes: Paciente[] = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    nome: 'Nome Nome Nome',
    data: '00/00/0000',
    horario: '00:00',
  }));

  const router = useRouter();

  const handleClickPaciente = (paciente: Paciente) => {
    // Redireciona para a página de detalhes do paciente
    router.push(`/visualizar-paciente?id=${paciente.id}`);
  };

  const filteredPacientes = pacientes.filter(paciente =>
    paciente.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.logoContainer}>
          <h1 style={styles.logo}>marca</h1>
        </div>
      </header>

      <main style={styles.main}>
        <h1 style={styles.title}>PACIENTES</h1>

        <div style={styles.searchContainer}>
          <Search style={styles.searchIcon} size={24} />
          <input
            type="text"
            placeholder="Pesquisar"
            style={styles.searchInput}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div style={styles.grid}>
          {filteredPacientes.map((paciente) => (
            <div
              key={paciente.id}
              style={{
                ...styles.card,
                ...(hoveredCard === paciente.id ? styles.cardHover : {}),
              }}
              onClick={() => handleClickPaciente(paciente)}
              onMouseEnter={() => setHoveredCard(paciente.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={styles.patientName}>{paciente.nome}</div>
              <div style={styles.patientInfo}>
                <span>Data: {paciente.data}</span>
                <span>Horário: {paciente.horario}</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
