import React, { useState } from 'react';
import axios from 'axios';

const InserirArtigos: React.FC = () => {
  const [titulo, setTitulo] = useState('');
  const [conteudo, setConteudo] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleInserirArtigo = async () => {
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      // Usando a URL do backend de variável de ambiente
      await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/artigos`, {
        titulo,
        conteudo,
      });
      alert('Artigo inserido com sucesso!');
      setTitulo('');
      setConteudo('');
    } catch (error) {
      console.error('Erro ao inserir artigo:', error);
      setErrorMessage('Ocorreu um erro ao inserir o artigo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h1>Inserir Artigos e Textos</h1>
      <div>
        <label>Título do Artigo:</label>
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Digite o título do artigo"
        />
      </div>
      <div>
        <label>Conteúdo do Artigo:</label>
        <textarea
          value={conteudo}
          onChange={(e) => setConteudo(e.target.value)}
          placeholder="Digite o conteúdo do artigo"
          rows={10}
          style={{ width: '100%' }}
        ></textarea>
      </div>
      <button onClick={handleInserirArtigo} disabled={isSubmitting}>
        {isSubmitting ? 'Enviando...' : 'Inserir Artigo'}
      </button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default InserirArtigos;
