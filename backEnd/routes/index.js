var express = require('express');
var router = express.Router();

const { Pool, Client } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'projectonedatabase',
  password: 'admin',
  port: 5432,
})

/* GET home page. */
router.get('/', function(req, res, next) { });


// api get data from postgreSql
router.get('/getdata', function(req, res, next) {
  pool.query('SELECT * FROM product_info',(error,response)=>{
    if(error){
      console.log(error);
    } else {
      res.send(response.rows);
    }
    // pool.end();
  });
});
// api post data to postgreSql
router.post('/add', function(req,res,next){
  var product_name = req.body.pName,
  product_price = req.body.pPrice,
  product_image = req.body.pImage;
  console.log("///");
  console.log(req.body);
  console.log("Data:", product_name, product_price, product_image);
  pool.query("INSERT INTO product_info(product_name,product_price,product_image) values ($1,$2,$3)",[product_name,product_price,product_image],(error, response)=>{
    if(error){
      console.log("Lỗi")
      res.send(error);
    } else {
      console.log("oke")
      res.send("Da nhan duoc!");
    }
  })
})
module.exports = router;
