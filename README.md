# Cine Lua

Cine Lua é um sistema de streaming onde os usuários podem acessar filmes e séries. O sistema oferece uma plataforma onde é possível fazer upload de conteúdo, gerenciar filmes e séries, e assistir com um player compatível com HLS (HTTP Live Streaming).

# Funcionalidades

Cadastro de Conteúdo: Adicione filmes e séries ao sistema, com suporte a upload de vídeos e metadados.

Busca e Filtros: Pesquise filmes e séries por nome, gênero e ano de lançamento.

Player HLS: Reproduza conteúdo com suporte a streaming HLS para uma experiência otimizada.

Anúncios: Exiba anúncios para usuários gratuitos com a integração do Google Ads e AdMob.

Painel Administrativo: Ferramenta para gerenciar e visualizar conteúdos enviados, estatísticas de visualização e interações com os diretores.

Versão Gratuita e Paga: Usuários gratuitos terão anúncios, enquanto usuários pagos podem navegar sem interrupções.


# Tecnologias Usadas

Frontend: React (Web), React Native (Android e TV)

Backend: Firebase (Firestore, Storage, Auth), Node.js (API)

Player de Vídeo: Video.js (suporte a HLS .m3u8)

Serviços de Anúncios: Google AdSense (web), AdMob (Android)

API de Filmes: TMDB para puxar metadados dos filmes e séries.

Hospedagem: Firebase Hosting, Firebase Storage ou alternativa HLS.


# Requisitos

Conta no Firebase para autenticação, armazenamento de dados e vídeos.

Conta no TMDB para integração de metadados de filmes e séries.

Conta no Google AdSense ou AdMob para exibição de anúncios.


# Instruções de Instalação

1. Clone este repositório para seu ambiente local:

git clone https://github.com/Seu-Nome/Streaming.git
cd cine-lua


2. Instale as dependências do projeto:

npm install


3. Configure suas credenciais do Firebase no arquivo .env (ou no arquivo de configurações):

REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
REACT_APP_FIREBASE_APP_ID=your-app-id


4. Para rodar o servidor localmente, execute:

npm start


5. Para rodar a versão mobile, execute:

npx react-native run-android



# Estrutura do Projeto

<img src="https://i.ibb.co/PGkPZnTq/carbon.png" alt="carbon" border="0"></img>


