const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config');

class Aeroporto extends Model {}

Aeroporto.init({
    codice: {
        type: DataTypes.SMALLINT,
        primaryKey: true,
        allowNull: false
    },
    nome: {
        type: DataTypes.STRING(20),
    },
    fkcategoria: {
        type: DataTypes.TINYINT
    },
    fkcitta: {
        type: DataTypes.SMALLINT
    }
}, {
    sequelize,
    modelName: 'Aeroporto',
    tableName: 'Aeroporto',
    timestamps: false
});

module.exports = Aeroporto;