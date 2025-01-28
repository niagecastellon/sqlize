const {Model} = require('sequelize');

class Volo extends Model {}

Volo.init({
    id: {
        type: DataTypes.SMALLINT,
        primaryKey: true,
        allowNull: false
    },
    orariopartenza: {
        type: DataTypes.TIME
    },
    durataminuti: {
        type: DataTypes.SMALLINT
    },
    fkaeroportopartenza: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    fkaeroportoarrivo: {
        type: DataTypes.SMALLINT,
        allowNull: false
    }

}, {
    sequelize,
    modelName: 'Volo',
    tableName: 'Volo',
    timestamps: false
});

module.exports = Volo;