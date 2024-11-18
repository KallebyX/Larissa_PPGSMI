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
  checkboxContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    margin: '2rem 0',
  },
  checkbox: {
    width: '20px',
    height: '20px',
    cursor: 'pointer',
  },
  checkboxLabel: {
    color: '#333',
    fontSize: '1rem',
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

export default function CadastroPacienteParte2() {
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [termosAceitos, setTermosAceitos] = useState(false);

  const router = useRouter();

  const handleCadastro = () => {
    if (!email || !telefone || !senha || !confirmarSenha) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem.');
      return;
    }

    if (!termosAceitos) {
      alert('Você precisa aceitar os Termos de Uso e a Política de Privacidade.');
      return;
    }

    const pacienteInfo = JSON.parse(localStorage.getItem('pacienteInfo') || '{}');
    const dadosCompletos = {
      ...pacienteInfo,
      email,
      telefone,
      senha,
    };

    console.log('Cadastro de paciente:', dadosCompletos);
    alert('Cadastro realizado com sucesso!');
    router.push('/login');
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
          <label style={styles.label}>E-mail</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            placeholder="Digite seu e-mail"
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Telefone</label>
          <input
            type="tel"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            style={styles.input}
            placeholder="Digite seu telefone"
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Senha</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            style={styles.input}
            placeholder="Digite sua senha"
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Confirme sua senha</label>
          <input
            type="password"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            style={styles.input}
            placeholder="Confirme sua senha"
          />
        </div>

        <div style={styles.checkboxContainer}>
          <input
            type="checkbox"
            id="termosEprivacidade"
            checked={termosAceitos}
            onChange={(e) => setTermosAceitos(e.target.checked)}
            style={styles.checkbox}
          />
          <label htmlFor="termosEprivacidade" style={styles.checkboxLabel}>
            Eu li e concordo com os Termos de Uso e a Política de Privacidade.
          </label>
        </div>

        <button style={styles.button} onClick={handleCadastro}>
          FINALIZAR
        </button>
      </main>

      <footer style={styles.footer} />
    </div>
  );
}