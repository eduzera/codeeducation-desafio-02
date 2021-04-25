const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values('Eduardo')`
connection.query(sql)

app.get('/', (req,res) => {
    const sqlSelect = `SELECT * FROM people`
    
    var content = '<h1>Full Cycle</h1>';

    connection.query("SELECT * FROM people", function (err, result, fields) {
        if (err) throw err;

        result.forEach(row => {
            content += `<p> id: &nbsp; <strong>${row.id}</strong> &nbsp; name: &nbsp; <strong>${row.name}</strong></p>`
        });

        res.send(content)
    });
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})