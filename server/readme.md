To get started run npm install.
This project uses Node v.9.2.0.
You need docker with mysql image
See config folder and config.json for database details.


type:
    npm run + one the commands:
            "migration:generate": "cd src && sequelize migration:generate" - creates migration file in migration folder
        example: npm run migration:create -- --name=create-user-table"

             "model:generate": "cd src && sequelize model:generate" - creates a model
        example: npm run model:generate -- --name User_test --attributes firstName:string,lastName:string,email:string"

             "migrate": "cd src && sequelize db:migrate" - this is how you can create migration file
        example: npm run migration:create -- --name=create-user-table

             "migrate:down": "cd src && sequelize db:migrate:undo" - undo migration
        example: npm run migrate:down