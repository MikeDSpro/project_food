import fs from 'fs'
import path from 'path'
import Sequelize from 'sequelize'
import config from '../config/config'

const basename = path.basename(module.filename)

const db = {}
const sequelize = process.env.NODE_ENV !== 'production'
  ? new Sequelize(
    config.development.database,
    config.development.username,
    config.development.password, {
      host: config.development.host,
      logging(message) {
        const firstCommand = message.substring(21, 27)
        
        if (firstCommand !== 'SELECT') {
          if (!~message.indexOf('INSERT INTO `Logs`')) {
            console.log(message)
          }
        }
      },
      define: {
        timestamps: false
      }
    }
  )
  : new Sequelize(
    config.production.database,
    config.production.username,
    config.production.password, {
      host: config.production.host,
      logging(message) {
        const firstCommand = message.substring(21, 27)
        
        if (firstCommand !== 'SELECT') {
          if (!~message.indexOf('INSERT INTO `Logs`')) {
            console.log(message)
          }
        }
      },
      port: config.production.port,
      define: { timestamps: false }
    }
  )
fs.readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})
db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db

const hooks = require('../utils/hooks')
Object.keys(hooks).forEach(hookName => {
  sequelize.addHook(hookName, hooks[hookName])
})