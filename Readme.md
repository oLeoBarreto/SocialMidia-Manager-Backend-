# Backend Social Midia Manager

## O que é?
    - Um Projeto de TCC do curso de Desenvolvimentos de Sistemas da ETEC de Barra Bonita, que se trata de um gerenciador de redes sociais que ajuda o usuário com seu crescimento na rede.

## Rotas

    Alguma rotas da aplicação para POST e GET de dados

### Rotas da api do TWITTER
    - /api/twitter/Followers : Para a quantidade de seguidores(GET)
    - /api/twitter/Friends : Para a quantidade de amigos(GET)

### Rotas de autenticação de usuario
    - /auth/register : Para registrar um novo usuario(POST)
    - /auth/login : Para login do usuario(POST)
    - /auth/login : Pegar a SESSION do usuario(GET)

### Rotas para os lembretes
    - /reminder/newReminder : Para adicionar um lembrete novo(POST)
    - /reminder/getReminders : Para pegar lembretes(GET)

# Lista de Fazeres

## Consumir Api

    [x] Aprender a fazer require http no Node
    [x] Teste Simples de Require 
    [] Testar Rec da API do Instagram
    [x] Testar Rec da API do Twitter
    [] Testar Rec da API do TikTok

##  Banco de dados

    [x] Estudar qual o banco de dados iremos usar (MongoDB ou AzureDB) - MongoDB
    [x] Criar conexão e schema do banco 

## Modos de fazer req no Node.js
    -Usando a lib Request (https://www.npmjs.com/package/request)
    -Usando a lib Axios (https://www.npmjs.com/package/axios)

    *Iremos usar o Axios como Lib para fazer requests