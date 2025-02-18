const Volo = require('./Volo');
const Aeroporto = require('./Aeroporto');
const Categoria = require('./Categoria');
const Citta = require('./Citta');
const Regione = require('./Regione');
const sequelize = require('../config');

Aeroporto.hasMany(Volo, { foreignKey: 'fkaeroportopartenza' });
Aeroporto.hasMany(Volo, { foreignKey: 'fkaeroportoarrivo' });
Volo.belongsTo(Aeroporto, { foreignKey: 'fkaeroportopartenza' });
Volo.belongsTo(Aeroporto, { foreignKey: 'fkaeroportoarrivo' });

Aeroporto.belongsTo(Categoria, { foreignKey: 'fkcategoria' });
Categoria.hasMany(Aeroporto, { foreignKey: 'fkcategoria' });
Aeroporto.belongsTo(Citta, { foreignKey: 'fkcitta' });
Citta.hasMany(Aeroporto, { foreignKey: 'fkcitta' });

Citta.belongsTo(Regione, { foreignKey: 'fkregione' });
Regione.hasMany(Citta, { foreignKey: 'fkregione' });


const db = {
    sequelize,
    tabelle: {
        Volo,
        Aeroporto,
        Categoria,
        Citta,
        Regione
    }
}

module.exports = db;

