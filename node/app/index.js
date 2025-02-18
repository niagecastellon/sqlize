const db = require('./tabelle/Associazioni')
const express = require('express')
const { Op } = require('sequelize')
const app = express();
app.use(express.json())

db.sequelize.authenticate().then(() => {
    console.log("connessione con il database stabilita")
}).catch((err) => {
    console.log("errore nella connessione con il database", err)
})

db.sequelize.sync().then(() => {
    console.log("tabelle sincronizzate con successo");
}).catch((err) => {
    console.log("errore nella sincronizzazione delle tabelle", err);
})

app.post('/categoria', async (req, res) => {
    try {
        await db.tabelle.Categoria.create({ nome: req.body.nome })
        res.status(200).json({ message: "creata categoria" })
    }
    catch (err) {
        res.status(500).json({ message: "errore nella creazione categoria", error: err })
    }
})

app.post('/regione', async (req, res) => {
    try {
        await db.tabelle.Regione.create({ nome: req.body.nome })
        res.status(200).json({ message: "creata regione" })
    }
    catch (err) {
        res.status(500).json({ message: "errore nella creazione regione", error: err })
    }
})

app.post('/citta', async (req, res) => {
    try {
        await db.tabelle.Citta.create({
            nome: req.body.nome,
            numeroabitanti: req.body.numeroabitanti,
            fkregione: req.body.fkregione
        })
        res.status(200).json({ message: "creata citta" })
    } catch (err) {
        res.status(500).json({ message: "errore nella creazione citta", error: err })
    }
})

app.post('/aeroporto', async (req, res) => {
    try {
        await db.tabelle.Aeroporto.create({
            codice: req.body.codice,
            nome: req.body.nome,
            fkcategoria: req.body.fkcategoria,
            fkcitta: req.body.fkcitta
        })
        res.status(200).json({ message: "creato aeroporto" })
    } catch (err) {
        res.status(500).json({ message: "errore nella creazione aeroporto", error: err })
    }
})

app.post('/volo', async (req, res) => {
    try {
        await db.tabelle.Volo.create({
            orariopartenza: req.body.orariopartenza,
            durataminuti: req.body.durataminuti,
            fkaeroportopartenza: req.body.fkaeroportopartenza,
            fkaeroportoarrivo: req.body.fkaeroportoarrivo
        })
        res.status(200).json({ message: "creato volo" })
    } catch (err) {
        res.status(500).json({ message: "errore nella creazione volo", error: err })
    }
})
//mostrare tutti i voli in partenza oggi
app.get('/voli/:data', async (req, res) => {
    const data = req.params.data
    res.json(await db.tabelle.Volo.findAll({
        where: db.sequelize.where(db.sequelize.fn("day", db.sequelize.col("orariopartenza")),{[Op.eq]:data})
        
    }));
})




app.listen(3000, () => {
    console.log("applicazione in ascolto sulla porta 3000");
})