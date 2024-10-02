import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const EditarPerfilFisioterapeuta: React.FC = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [crefito, setCrefito] = useState(''); // Esse campo não será editável
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Simulação de carregamento dos dados do perfil (nome, email e CREFITO)
    setNome('Nome');
    setEmail('email.email@email.com');
    setCrefito('CREFITO-0/000000-A');
  }, []);

  const handleConfirmar = () => {
    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }
    // Lógica para salvar os dados editados (envio ao backend)
    console.log('Perfil atualizado:', { nome, email, senha });
    alert('Perfil atualizado com sucesso!');
  };

  const handleCancelar = () => {
    // Lógica para cancelar e redirecionar para a página anterior
    navigate(-1); // Retorna para a página anterior
  };

  const handleExcluirConta = () => {
    // Redireciona para a página de exclusão de conta
    navigate('/excluir-conta');
  };

  return (
    <div>
      <h1>Olá, {nome}</h1>
      <div>
        <label htmlFor="nome">Nome Completo:</label>
        <input
          id="nome"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Digite seu nome completo"
          title="Nome completo"
        />
      </div>
      <div>
        <label htmlFor="email">E-mail:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu e-mail"
          title="Endereço de e-mail"
        />
      </div>
      <div>
        <label htmlFor="crefito">CREFITO:</label>
        <input
          id="crefito"
          type="text"
          value={crefito}
          disabled // Não pode ser editado
          title="Número do CREFITO"
        />
      </div>
      <div>
        <label htmlFor="senha">Senha:</label>
        <input
          id="senha"
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Digite sua nova senha"
          title="Senha"
        />
      </div>
      <div>
        <label htmlFor="confirmarSenha">Confirmação de Senha:</label>
        <input
          id="confirmarSenha"
          type="password"
          value={confirmarSenha}
          onChange={(e) => setConfirmarSenha(e.target.value)}
          placeholder="Confirme sua nova senha"
          title="Confirmação de senha"
        />
      </div>
      <div>
        <button onClick={handleConfirmar}>Confirmar</button>
        <button onClick={handleCancelar}>Cancelar</button>
        <button onClick={handleExcluirConta}>Excluir Conta</button>
      </div>
    </div>
  );
};

export default EditarPerfilFisioterapeuta;