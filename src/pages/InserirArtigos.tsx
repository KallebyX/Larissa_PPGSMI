import React, { useState } from 'react';
import axios from 'axios'; // Para a integração com o back-end

const InserirArtigos: React.FC = () => {
  const [titulo, setTitulo] = useState('');
  const [conteudo, setConteudo] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInserirArtigo = async () => {
    setIsSubmitting(true);
    try {
      // Enviar o artigo para a API de back-end
      await axios.post('http://localhost:5000/api/artigos', { titulo, conteudo });
      alert('Artigo inserido com sucesso!');
      setTitulo('');
      setConteudo('');
    } catch (error) {
      console.error('Erro ao inserir artigo:', error);
      alert('Ocorreu um erro ao inserir o artigo.');
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
    </div>
  );
};

export default InserirArtigos;