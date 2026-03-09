# 🌤️ Previsão do Tempo

## 📋 Descrição do Sistema

Aplicativo web moderno para consulta de previsão meteorológica em tempo real. O sistema permite que o usuário visualize as condições climáticas atuais de sua localização ou de qualquer cidade do mundo. Utiliza a geolocalização automática para inicial com a previsão do local do usuário e oferece a possibilidade de buscar previsões para outras cidades. O aplicativo exibe tanto a previsão atual quanto a previsão estendida dos próximos 5 dias.

## 🛠️ Tecnologias Utilizadas

- **Frontend Framework:** React 19
- **Build Tool:** Vite
- **HTTP Client:** Axios
- **Linguagem de Estilização:** CSS
- **API Externa:** OpenWeatherMap
- **Linter:** ESLint
- **Runtime:** Node.js

## ✨ Funcionalidades

- 🗺️ **Geolocalização Automática:** Detecta automaticamente a localização do usuário (com permissão)
- 🔍 **Busca por Cidade:** Permite pesquisar previsões de qualquer cidade do mundo
- 🌡️ **Previsão Atual:** Exibe temperatura, descrição, sensação térmica, umidade e pressão
- 📅 **Previsão de 5 Dias:** Visualiza as condições climáticas dos próximos 5 dias
- 🎨 **Interface Responsiva:** Design limpo e intuitivo com ícones de clima dinâmicos

## 🚀 Como Executar Localmente

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn instalado

### Passos de Instalação

1. **Clone ou baixe o projeto:**
   ```bash
   cd weather forecast
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Crie um arquivo `.env.local`** na raiz do projeto `weather forecast/`:
   ```env
   VITE_KEY=sua_chave_api_aqui
   VITE_URL_SEARCH_COORDS=https://api.openweathermap.org/data/2.5/weather?lat=
   VITE_IMG_CLOUND=https://openweathermap.org/img/wn/
   ```

   > **Nota:** Para obter uma chave API gratuita, acesse [OpenWeatherMap](https://openweathermap.org/api)

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

5. **Acesse a aplicação:**
   - Abra seu navegador e acesse `http://localhost:5173`

### Comandos Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Compila o projeto para produção
- `npm run preview` - Visualiza a build de produção localmente
- `npm run lint` - Valida o código com ESLint

## 👨‍💻 Autoria

**Desenvolvido por:** Erick Amorim da Silva

---

© 2026 - Previsão do Tempo. Todos os direitos reservados.