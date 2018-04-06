To get started run npm install.
This project uses Node v.9.2.0.
You need docker with mysql image
See config folder and config.json for database details.


Use docker container with mysql. Run command: docker run --name DBNAME -e MYSQL_ROOT_PASSWORD=YOUR-PASS-HERE -d mysql:VERSION-OF-MYSQL
or create docker compose.yml and describe all needed conf there...


type:
    npm run + one the commands:
            "migration:generate": "cd src && sequelize migration:generate" - creates migration file in migration folder
        example: npm run migration:generate -- --name=create-user-table"

             "model:generate": "cd src && sequelize model:generate" - creates a model
        example: npm run model:generate -- --name User_test --attributes firstName:string,lastName:string,email:string"

             "migrate": "cd src && sequelize db:migrate" - this is how you run a migration

             "migrate:down": "cd src && sequelize db:migrate:undo" - undo migration
        example: npm run migrate:down