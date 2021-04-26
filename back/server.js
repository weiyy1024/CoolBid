var express =require('express');
var app = express();
const cors =require('cors');

app.use(cors());
app.use(express.json())
app.listen(3001);

app.get('/search/:id',function(req,res){
    let test = req.params.id;
    // console.log(test);
    var mysql = require('mysql');
    var conn = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database:"coolbid",
            port: 8889
        });
        conn.query("select * from product where newold = ? ",[test],function(err,result){
                    res.send(result)
                    // res.send('ok');
                })
})


// app.post('/search',function(req,res){
//     let test = req.body.test
//     // console.log(test)
//     // res.send(JSON.stringify(test))
//     var mysql = require('mysql');
//     var conn = mysql.createConnection({
//         host: 'localhost',
//         user: 'root',
//         password: 'root',
//         database:"coolbid",
//         port: 8889
//     });
//     conn.query("select * from product where productId = ?",[test],function(err,result){
//         res.send(result)
//     })
// })

