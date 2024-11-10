import React from 'react';

interface TermosDeUsoProps {
  nomeDoSite: string;
  emailContato: string;
}

const TermosDeUso: React.FC<TermosDeUsoProps> = ({ nomeDoSite, emailContato }) => {
  return (
    <div>
      <h1>Termos de Uso</h1>
      <p>Bem-vindo ao {nomeDoSite}. Ao acessar e utilizar nosso site, você concorda com os seguintes Termos de Uso.</p>
      
      <h2>Cadastro e Informações Pessoais</h2>
      <p>Você deve fornecer informações corretas e atualizadas no seu cadastro.</p>
      
      <h2>Responsabilidade e Limitações</h2>
      <p>O conteúdo do site é apenas informativo e de suporte. As orientações não substituem consultas com profissionais de saúde.</p>
      
      <h2>Modificações e Atualizações</h2>
      <p>O site pode ser modificado, e os Termos de Uso atualizados. Verifique periodicamente.</p>
      
      <h2>Contato</h2>
      <p>Para dúvidas, entre em contato pelo e-mail {emailContato}.</p>
    </div>
  );
};

// Uso do componente com valores específicos para o nome do site e e-mail
// <TermosDeUso nomeDoSite="Nome do Site" emailContato="contato@exemplo.com" />

export default TermosDeUso;
