const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Player = sequelize.define('player', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },

    name: {
        type: Sequelize.STRING,
        allowNull: false
    },

    dateOfBirth: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },

    photoUrl: {
        type: Sequelize.STRING,
        allowNull: false
    },

    birthPlace: {
        type: Sequelize.STRING,
        allowNull: false
    },

    career: {
        type: Sequelize.TEXT,
        allowNull: false
    },

    category: {
        type: Sequelize.STRING,
        allowNull: false
    },

    matches: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    runs: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    wickets: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    fifties: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    centuries: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    average: {
        type: Sequelize.DECIMAL(5,2),
        allowNull: false
    }
});


module.exports = Player;