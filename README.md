# Dispositivos Terapêuticos Digitais no Tratamento Fisioterapêutico Pélvico da Incontinência Urinária

Bem-vindo ao projeto **Dispositivos Terapêuticos Digitais no Tratamento Fisioterapêutico Pélvico da Incontinência Urinária**. Este projeto tem como objetivo desenvolver uma plataforma digital que auxilia fisioterapeutas na gestão e prescrição de exercícios personalizados para o tratamento da incontinência urinária, permitindo que pacientes sigam as instruções diretamente de casa.

## Índice

- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Contribuição](#contribuição)
- [Licença](#licença)
- [Contato](#contato)

## Funcionalidades

- **Autenticação de Usuários**: Sistema de login e cadastro para fisioterapeutas e pacientes.
- **Gerenciamento de Perfis**: Fisioterapeutas e pacientes podem visualizar e editar seus perfis.
- **Definição de Treinos**: Fisioterapeutas podem criar treinos personalizados e associá-los a pacientes.
- **Histórico de Atividades**: Visualização do histórico de treinos dos pacientes através de um calendário interativo.
- **Feedback**: Pacientes podem fornecer feedback sobre os treinos realizados.
- **Inserção de Artigos**: Fisioterapeutas podem compartilhar artigos e materiais educativos com seus pacientes.
- **Termos de Uso e Exclusão de Conta**: Páginas informativas e funcionalidade para exclusão de conta.

## Tecnologias Utilizadas

### Frontend

- **React** com **TypeScript**
- **CSS** para estilização
- **React Router DOM**: Navegação entre páginas
- **React Calendar**: Exibição de histórico de atividades
- **Axios**: Integração com o backend (planejada)
- **Bibliotecas adicionais**: `react-hook-form`, `Yup` (sugeridas para validação de formulários)

### Backend (Planejado)

- **Framework**: **Django** com **Django REST Framework** ou **Node.js** com **Express**
- **Banco de Dados**: **PostgreSQL** (recomendado) ou **MongoDB**
- **Autenticação**: JWT armazenado em cookies HttpOnly
- **Segurança**: Implementações para conformidade com a LGPD

## Pré-requisitos

- **Node.js** (versão 14 ou superior)
- **npm** ou **yarn**
- **Python 3** (se optar por Django)
- **PostgreSQL** instalado e configurado

## Instalação

### Clonando o Repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### Configuração do Frontend

1. Navegue até a pasta do frontend:

   ```bash
   cd frontend
   ```

2. Instale as dependências:

   ```bash
   npm install
   # ou
   yarn install
   ```

### Configuração do Backend (Se utilizando Django)

1. Navegue até a pasta do backend:

   ```bash
   cd backend
   ```

2. Crie um ambiente virtual:

   ```bash
   python -m venv venv
   source venv/bin/activate  # Linux/Mac
   venv\Scripts\activate  # Windows
   ```

3. Instale as dependências:

   ```bash
   pip install -r requirements.txt
   ```

4. Realize as migrações:

   ```bash
   python manage.py migrate
   ```

5. Crie um superusuário (opcional):

   ```bash
   python manage.py createsuperuser
   ```

## Como Usar

### Executando o Frontend

1. Navegue até a pasta do frontend:

   ```bash
   cd frontend
   ```

2. Inicie o servidor de desenvolvimento:

   ```bash
   npm start
   # ou
   yarn start
   ```

3. Acesse `http://localhost:3000` no seu navegador.

### Executando o Backend (Django)

1. Navegue até a pasta do backend:

   ```bash
   cd backend
   ```

2. Inicie o servidor de desenvolvimento:

   ```bash
   python manage.py runserver
   ```

3. A API estará disponível em `http://localhost:8000`.

## Estrutura do Projeto

```bash
.
├── frontend
│   ├── public
│   └── src
│       ├── components
│       ├── pages
│       ├── App.tsx
│       └── index.tsx
├── backend (planejado)
│   ├── manage.py
│   ├── backend
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── wsgi.py
│   └── apps
│       ├── users
│       ├── exercises
│       └── ...
├── README.md
└── package.json
```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir **issues** e **pull requests**.

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas alterações (`git commit -m 'Adiciona nova feature'`).
4. Faça push para a branch (`git push origin feature/nova-feature`).
5. Abra um pull request.

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contato

- **Nome:** Seu Nome
- **Email:** seu.email@exemplo.com
- **LinkedIn:** [Seu Perfil](https://www.linkedin.com/in/seu-perfil/)

---

**Nota:** Este projeto está em desenvolvimento ativo. Algumas funcionalidades podem não estar completas ou podem sofrer alterações.