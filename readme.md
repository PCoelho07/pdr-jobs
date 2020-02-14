
### Projeto feito com Laravel, PostgreSql, Redis, ReactJS e containers Docker.


Requisitos mínimos de máquina:
- Docker
- npm 6.13
- node v10.16

Para acessar a página de admin basta acessar: `http://localhost/admin`

Passos para executar o projeto:

1) Executar um dos comandos abaixo para
instalar as dependencias do sistema.

```
composer install
```
ou
```
docker run --rm -v $(pwd):/app composer install
```


2) Executar o comando abaixo para instalar as
dependencias de front

```
npm install
```

3) Executar o comando abaixo para compilar os assets

```
npm run dev
```
ou

```
npm run prod
```

4) Utilizar a seguinte config para o BD

```
DB_CONNECTION=pgsql
DB_HOST=database
DB_PORT=5432
DB_DATABASE=laravel
DB_USERNAME=laravel
DB_PASSWORD=secret
```
após, executar o comando abaixo para o sistema aplicar as `migrations`

```
docker exec -it rits-challenger-web php artisan migrate
```

e então, executar o comando abaixo para o sistema criar um usuário padrão para ter acesso a área de admin.

```
    docker exec -it rits-challenger-web php artisan db:seed
```

As credenciais são:
```
Email: Teste@teste.com
Password: secret
```

5) Para executar o `Task scheduler` são necessários os seguintes passos:

    - Executar o script `bash.sh`
    - Em outra aba, executar
        ```
        docker exec -it rits-challenger-web php artisan queue:work
        ```

### Importante, para que o email seja entregue, é necessário colocar a configuração de driver desejada para envio de emails e colocar o nome e endereço de destino dentro das variáveis
    ```
    EMAIL_RECIPIENT_ADDRESS=
    EMAIL_RECIPIENT_NAME=
    ```

