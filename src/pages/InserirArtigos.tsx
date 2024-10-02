import React, { useState } from 'react';

const InserirArtigos: React.FC = () => {
  const [titulo, setTitulo] = useState('');
  const [conteudo, setConteudo] = useState('');

  const handleInserirArtigo = () => {
    // Lógica de inserção de artigo
    console.log('Artigo inserido:', { titulo, conteudo });
    alert('Artigo inserido com sucesso!');
    setTitulo(''); // Limpa o campo após a inserção
    setConteudo(''); // Limpa o campo após a inserção
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
      <button onClick={handleInserirArtigo}>Inserir Artigo</button>
    </div>
  );
};

export default InserirArtigos;