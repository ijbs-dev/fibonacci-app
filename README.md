# Fibonacci App

Este projeto contém duas partes principais:

1. **Frontend (Angular)**: Interface de usuário para entrada de dados e exibição de resultados.
2. **Backend (Node.js)**: Servidor simples com `Express.js` para fornecer dados ao frontend.

## Estrutura do Projeto

```
/fibonacci-app
│
├── /fibonacci-app-frontend    # Projeto Angular (Frontend)
│   ├── /src
│   │   ├── /app
│   │   │   ├── /app.component.ts
│   │   │   ├── /app.component.html
│   │   │   └── /app.module.ts
│   ├── angular.json
│   ├── package.json
│   └── tsconfig.app.json
│
├── /public                    # Arquivos estáticos do servidor
│   └── index.html
│
├── server.js                  # Arquivo do servidor Node.js (Express)
├── package.json               # Configurações do servidor Node.js
├── .gitignore                 # Arquivos e diretórios ignorados pelo Git
└── README.md                  # Instruções do projeto
```

---

## Exemplos de Uso

### Tela Inicial (Valor 0)

Na tela inicial, o valor de entrada é **0**. Aqui, o campo de entrada está vazio e nenhuma verificação foi feita. Esta é a tela padrão do projeto ao ser carregado pela primeira vez.

![Tela Inicial]([https://drive.google.com/file/d/1SkNR3fyFXwqP3xltnwtWCvoMzvKUtKU4/view?usp=sharing](https://drive.google.com/file/d/1XXnf81o-Mc4xFBhi758KUPhVMnXyPqMD/view?usp=sharing))

---

### Exemplo 1: Verificação de um número que pertence à sequência de Fibonacci

No exemplo abaixo, o número **55** foi inserido, e o sistema verificou corretamente que ele pertence à sequência de Fibonacci. A sequência de Fibonacci até **55** é exibida logo abaixo do resultado.

![Exemplo 1]([https://drive.google.com/file/d/1XXnf81o-Mc4xFBhi758KUPhVMnXyPqMD/view?usp=sharing](https://drive.google.com/file/d/1nHzVQBcjGvYLcCDj_WNQ7gG4ORkhfxz1/view?usp=sharing))

---

### Exemplo 2: Verificação de um número que **não** pertence à sequência de Fibonacci

No segundo exemplo, o número **100** foi inserido, e o sistema informou que ele **não** pertence à sequência de Fibonacci. A sequência de Fibonacci gerada até **100** também foi exibida.

![Exemplo 2]([https://drive.google.com/file/d/1SkNR3fyFXwqP3xltnwtWCvoMzvKUtKU4/view](https://drive.google.com/uc?export=view&id=1XXnf81o-Mc4xFBhi758KUPhVMnXyPqMD
))


---

## Pré-requisitos

Antes de começar, certifique-se de que você tenha os seguintes softwares instalados:

- **Node.js** (versão 18.x ou superior)
- **npm** (que normalmente já vem com o Node.js)
- **Angular CLI** (caso ainda não esteja instalado, execute: `npm install -g @angular/cli`)

---

## Clonando o repositório

Para clonar este projeto do GitHub e navegar até a pasta:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd fibonacci-app
```

---

## Configurando o Backend (Node.js)

1. Instale as dependências do backend:

   No diretório raiz do projeto (onde está localizado o arquivo `server.js`), execute:

   ```bash
   npm install
   ```

2. Inicie o servidor backend (Node.js com Express):

   ```bash
   node server.js
   ```

   O servidor backend será iniciado por padrão em `http://localhost:3000`.

---

## Configurando o Frontend (Angular)

1. Navegue até o diretório do frontend:

   ```bash
   cd fibonacci-app-frontend
   ```

2. Instale as dependências do frontend:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento do Angular:

   ```bash
   npm run start
   ```

   O frontend estará disponível em `http://localhost:4200`.

---

## Executando o Projeto Completo

### Passos para rodar o backend e o frontend:

1. **Inicie o backend**:

   No diretório raiz do projeto, onde o arquivo `server.js` está localizado, execute:

   ```bash
   node server.js
   ```

   O backend será executado em `http://localhost:3000`.

2. **Inicie o frontend**:

   Em uma nova aba do terminal, vá para o diretório `fibonacci-app-frontend` e execute:

   ```bash
   cd fibonacci-app-frontend
   npm run start
   ```

   O frontend estará acessível em `http://localhost:4200`.

---

## Estrutura do `.gitignore`

Aqui está o `.gitignore` configurado para ignorar arquivos e diretórios gerados automaticamente:

```plaintext
# Output compilado
/dist
/tmp
/out-tsc
/bazel-out

# Node
/node_modules
npm-debug.log
yarn-error.log

# IDEs e editores
.idea/
.project
.classpath
.c9/
*.launch
.settings/
*.sublime-workspace

# Visual Studio Code
.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json
.history/*

# Miscellaneous
/.angular/cache
.sass-cache/
/connect.lock
/coverage
/libpeerconnection.log
testem.log
/typings

# Arquivos de sistema
.DS_Store
Thumbs.db

# Permitir o rastreamento da pasta src/app
!/fibonacci-app-frontend/src/app/
```

---

## Dependências

### Backend (Node.js)

- **Express.js**: Utilizado para criar um servidor HTTP simples para a aplicação.

### Frontend (Angular)

- **Angular**: Framework moderno para desenvolvimento de interfaces web.
- **RxJS**: Biblioteca para programação reativa.
- **Zone.js**: Necessário para a detecção de mudanças no Angular.

---

## Possíveis Problemas

1. **Portas em uso**: Certifique-se de que as portas **3000** (backend) e **4200** (frontend) estejam disponíveis.
2. **Dependências faltando**: Caso tenha problemas ao iniciar o projeto, rode o comando `npm install` nas pastas `fibonacci-app-frontend` e no diretório raiz do projeto.

---

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request com melhorias.

---

## Licença

Este projeto é distribuído sob a licença MIT.
