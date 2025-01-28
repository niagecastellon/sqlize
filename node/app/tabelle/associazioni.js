const Volo = require('./volo');
const Aeroporto = require('./aeroporto');

Aeroporto.hasMany(Volo, {foreignKey: 'fkaeroportopartenza'});
Volo.belongsTo(Aeroporto, {foreignKey: 'fkaeroportopartenza'});

Aeroporto.hasMany(Volo, {foreignKey: 'fkaeroportoarrivo'});
Volo.belongsTo(Aeroporto, {foreignKey: 'fkaeroportoarrivo'});

const db = {
    sequelize,
    tables: [
        Aeroporto,
        Volo
    ]
};

module.exports = db;