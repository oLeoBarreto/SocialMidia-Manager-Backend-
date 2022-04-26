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
