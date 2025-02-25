# 🏆 Score App - Placar Eletrônico ⚽

O **Score App** é um aplicativo de placar eletrônico para partidas de futebol, desenvolvido com **React 19 + TypeScript** e estilizado com **TailwindCSS**. Ele permite acompanhar o **placar**, **eventos da partida** (gols, cartões) e o **cronômetro**.

## 📌 Funcionalidades
- 📊 **Placar em tempo real**: Atualização automática com base nos eventos da partida.
- 🕒 **Cronômetro integrado**: Sincroniza eventos com o tempo da partida.
- ⚽ **Registro de eventos**: Gols, gols contra, cartões amarelos e vermelhos.
- 🏟️ **Lista de jogadores**: Exibe jogadores de ambos os times com fotos.

## 🚀 Tecnologias utilizadas
- **React 19** ⚛️
- **TypeScript**
- **TailwindCSS** 🎨
- **Vite** ⚡ (para desenvolvimento rápido)
- **ESLint & Prettier** (padronização de código)

## 🖼️ Imagens do projeto
![screen-capture.](../public/screencapture.png)

## 📂 Estrutura do projeto

```
score-app/
│── public/                # Arquivos públicos (favicon, index.html, logos)
│── src/
│   ├── business/          # Lógica de negócio (cálculo do placar, regras)
│   ├── components/        # Componentes React
│   │   ├── MatchComponent/   # Tela principal do jogo
│   │   ├── PlayersListcomponent/   # Listagem de jogadores e eventos
│   │   ├── ScoreboardComponent/    # Placar do jogo
│   │   ├── StopwatchComponent/     # Cronômetro
│   │   ├── TimelineComponent/      # Linha do tempo de eventos
│   ├── types/             # Tipos TypeScript (Match, Player, Event)
│   ├── utils/             # Funções auxiliares (ex: formatar tempo)
│── package.json           # Dependências do projeto
│── tailwind.config.js     # Configuração do TailwindCSS
│── tsconfig.json          # Configuração do TypeScript
│── vite.config.ts         # Configuração do Vite
```

## 🛠️ Como rodar o projeto?

### 1️⃣ **Pré-requisitos**
Antes de começar, certifique-se de ter:
- **Node.js** instalado (`v18+`)
- **Gerenciador de pacotes**: `npm` ou `yarn`

### 2️⃣ **Instalar dependências**
```bash
npm install
# ou
yarn install
```

### 3️⃣ **Rodar o projeto**
```bash
npm run dev
# ou
yarn dev
```
Depois, acesse: **http://localhost:5173**

## 🎯 Próximas melhorias
- 📊 Exibição de estatísticas detalhadas da partida.
- 🌍 Integração com **API para atualização ao vivo.**

## 📜 Licença
Este projeto está licenciado sob a **MIT License**.  