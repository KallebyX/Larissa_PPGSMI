import React, { useState } from 'react';
import { useRouter } from 'next/router';

const CadastroFisioterapeuta: React.FC = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [crefito, setCrefito] = useState('');
  const [senha, setSenha] = useState('');
  const [termosAceitos, setTermosAceitos] = useState(false); // Verifica se os termos foram aceitos

  const router = useRouter(); // Para navegação entre páginas

  const handleCadastro = () => {
    if (!termosAceitos) {
      alert('Você precisa aceitar os Termos de Uso e a Política de Privacidade para continuar.');
      return;
    }

    // Lógica de cadastro do fisioterapeuta
    console.log('Cadastro de fisioterapeuta:', { nome, email, crefito, senha });
    alert('Fisioterapeuta cadastrado com sucesso!');
    router.push('/login'); // Redireciona para a página de login após o cadastro
  };

  return (
    <div>
      <h1>Cadastrar Fisioterapeuta</h1>
      <div>
        <label>Nome Completo:</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Digite seu nome"
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu email"
        />
      </div>
      <div>
        <label>Número do CREFITO:</label>
        <input
          type="text"
          value={crefito}
          onChange={(e) => setCrefito(e.target.value)}
          placeholder="Digite seu número do CREFITO"
        />
      </div>
      <div>
        <label>Senha:</label>
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Digite sua senha"
        />
      </div>
      <div>
        <input
          type="checkbox"
          name="termos"
          id="termosEprivacidade"
          checked={termosAceitos}
          onChange={(e) => setTermosAceitos(e.target.checked)}
        />
        <label htmlFor="termosEprivacidade">
          Eu li e concordo com os Termos de Uso e a Política de Privacidade.
        </label>
      </div>
      <button onClick={handleCadastro}>Cadastrar Fisioterapeuta</button>
    </div>
  );
};

export default CadastroFisioterapeuta;
