import React from 'react';
import Link from 'next/link';

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column' as const,
    backgroundColor: '#FDF8ED',
  },
  header: {
    backgroundColor: '#B4DCD6',
    padding: '2rem',
    borderRadius: '0 0 2rem 2rem',
    marginBottom: '2rem',
  },
  marca: {
    color: 'white',
    textAlign: 'center' as const,
    fontSize: '2rem',
    fontWeight: 'bold',
  },
  hero: {
    backgroundColor: '#98C6BF',
    padding: '2rem',
    textAlign: 'center' as const,
    marginBottom: '2rem',
  },
  heroText: {
    color: 'white',
    fontSize: '1.5rem',
    marginBottom: '2rem',
    maxWidth: '600px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  buttonContainer: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap' as const,
  },
  button: {
    padding: '0.75rem 2rem',
    borderRadius: '2rem',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'opacity 0.2s',
  },
  enterButton: {
    backgroundColor: '#E39076',
    color: 'white',
  },
  registerButton: {
    backgroundColor: '#006B77',
    color: 'white',
  },
  infoSection: {
    backgroundColor: '#E39076',
    padding: '2rem',
    color: 'white',
  },
  infoTitle: {
    fontSize: '1.75rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
  },
  infoSubtitle: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
  },
  infoQuestion: {
    fontSize: '1.25rem',
    marginBottom: '1rem',
  },
  infoText: {
    lineHeight: 1.6,
  },
  additionalInfo: {
    backgroundColor: '#98C6BF',
    padding: '2rem',
    color: 'white',
  },
  additionalTitle: {
    fontSize: '1.75rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  additionalSubtitle: {
    fontSize: '1.5rem',
    marginBottom: '1.5rem',
  },
  learnMore: {
    display: 'inline-block',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: 'white',
    padding: '0.75rem 2rem',
    borderRadius: '2rem',
    textDecoration: 'none',
    transition: 'background-color 0.2s',
  },
  footer: {
    backgroundColor: '#E85338',
    padding: '1rem',
    marginTop: 'auto',
  },
  footerMarca: {
    color: 'white',
    textAlign: 'center' as const,
    fontSize: '2rem',
    fontWeight: 'bold',
    textTransform: 'lowercase' as const,
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      {/* Header Section */}
      <header style={styles.header}>
        <h1 style={styles.marca}>MARCA</h1>
      </header>

      {/* Hero Section */}
      <section style={styles.hero}>
        <h2 style={styles.heroText}>
          Suporte e orientação para seus exercícios diários no conforto do seu lar!
        </h2>
        <div style={styles.buttonContainer}>
          <Link href="/login" style={{...styles.button, ...styles.enterButton}}>
            ENTRAR
          </Link>
          <Link href="/cadastro" style={{...styles.button, ...styles.registerButton}}>
            CADASTRAR
          </Link>
        </div>
      </section>

      {/* Info Section */}
      <section style={styles.infoSection}>
        <h2 style={styles.infoTitle}>
          O QUE VOCÊ PRECISA SABER SOBRE TREINAMENTO DO ASSOALHO PÉLVICO
        </h2>
        <h3 style={styles.infoSubtitle}>
          Incontinência urinária: o que é e como afeta?
        </h3>
        <h4 style={styles.infoQuestion}>- O que é incontinência urinária?</h4>
        <p style={styles.infoText}>
          A Sociedade Internacional de Continência (ICS) define incontinência urinária (IU) como a condição em que ocorre
          perda involuntária de urina. Pode ser classificada como de esforço (IUE), cujas características estão
          associadas com a elevação da pressão abdominal, de urgência (IUU), quando relaciona-se com a bexiga hiperativa,
          com ou sem hiperatividade do destrusor e mista (IUM), quando os sintomas de esforço e de urgência estão
          reunidos.
        </p>
      </section>

      {/* Additional Info Section */}
      <section style={styles.additionalInfo}>
        <h2 style={styles.additionalTitle}>
          Alguns fatores que podem auxiliar na causa da incontinência urinária:
        </h2>
        <h3 style={styles.additionalSubtitle}>
          Déficits dos músculos do assoalho pélvico
        </h3>
        <Link href="/saiba-mais" style={styles.learnMore}>
          Saiba Mais
        </Link>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <h2 style={styles.footerMarca}>marca</h2>
      </footer>
    </div>
  );
}