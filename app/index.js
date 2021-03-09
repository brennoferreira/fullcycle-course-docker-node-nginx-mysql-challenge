const express = require('express')
const app = express()
const port = 3000
const config = {
     host: 'db',
     user: 'root',
     password: 'root',
     database: 'nodedb'
}

var html = "";

app.get('/', (req, res) => {

    const mysql = require('mysql')
    const connection = mysql.createConnection(config)

    var name = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
    const sql = `INSERT INTO people(name) VALUES('` + name + `')`

    connection.query(sql)

    html = '<h1>FULL CYCLE YEAAAAHHH</h1>';

    connection.query(`SELECT * FROM people`, function(err, result, fields) {
        result.forEach(r => {
            html += "ID: " + r.id + " | " + r.name + '<br>';    
        });
        res.send(html)    
    });

    connection.end()
})

app.listen(port, () => {
    console.log('rodando na porta ' + port)
})