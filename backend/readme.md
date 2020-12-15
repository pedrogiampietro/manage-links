docs: https://sequelize.org

Sequelize com mysql:

    lembrar de configurar o .env, colocar a senha e criar a table previamente
    -> findOne({where: {email}}) encontra o conteudo de um campo
    - o arquivo .sequelizerc informa as alterações feitas no sequelize 
    - npx sequelize-cli migration:create --name add_jwtVersion_to_account -> cria o arquivo migration atraves do sequelize cli
    - npx sequelize-cli db:migrate -> Roda o migrate
    - usado sempre que for adicionar algo no banco, que já está criado

JSON Web Token (JWT)

    -usado para criar token de autenticação
    -atraves do metodo sign vc assina e cria um jwt com os parametros payload(corpo), chave, opções
    - pe interressante criar as chaves no dotenv
    - No projeto é criado um midleware que verifica o token do usuario e retorna seu id
    - no site jwt.io é possivel ver um debug para verificar tokens

    - Todo token que vier no authorization do header da requisição virá com o padrao: 'Bearer + token'
    - o refresh token se trata de um token que deixa com o usuario para nao expirar tao rapido, portanto nele contem o dado de versão 



npm install --save jsonwebtoken

Comandos:

instalar o sequelize: 
- npm install --save sequelize
cli pra sequelize: 
- npx sequelize-cli init:models -> cria os modelos para facilitar, cada model iniciado é adicionado ao sequelize
- npx sequelize-cli init:config -> inicia a conf do sequelize, onde contem os dados do banco(colocar no gitIgnore)

- npm install dotenv -> instala o biblio que possibila criar o .env
- npm install --save mysql2 -> instala o driver do sql pro sequelize

instalar a bilio para criptografar senhas, bcrypt
    -> para usa-la é bem simples e a mesma pode receber como param um round(criptografado quantas vezes vc disser) ou um salt(criptografia mais uma string fornecida)

- npm install bcrypt 

-npm install @hapi/joi -> biblio para validação docs -> https://hapi.dev/module/joi/

extras:

rest client: plugin que faz a função do insomnia e postman 
- funçao nativa find percorre o array, para procurar algo, e o startWith() verifica o inicio de algo
- !! - se uma reposta nao for booleana, para tranforma-la basta usar de ! para negar e ! para tornar verdadeiro
