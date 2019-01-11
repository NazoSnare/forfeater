'use strict';

var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var basename = path.basename(__filename);
var env = process.env.NODE_ENV || 'production';
var config = require('../config/config.js')[env];
var db = {};

var sequelize = new Sequelize(config);

// sequelize
  // .authenticate()
  // .then(() => {
    console.log('Connection has been established successfully.');
    fs
      .readdirSync(__dirname)
      .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
      })
      .forEach(file => {
        var model = sequelize['import'](path.join(__dirname, file));
        db[model.name] = model;
      });

    Object.keys(db).forEach(modelName => {
      if (db[modelName].associate) {
        db[modelName].associate(db);
      }
    });

    db.sequelize = sequelize;
    db.Sequelize = Sequelize;

    module.exports = db;
  // })
  // .catch(err => {
  //   console.error('Unable to connect to the database:', err);
  // });

