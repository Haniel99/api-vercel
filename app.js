const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { urlencoded, json } = require('body-parser');
const cors = require('cors');
const fileUpload = require('express-fileupload');




app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(fileUpload({
  useTempFiles:true
}))

app.use(cors());



app.get('*',(req,res,next)=>{
  res.status(200).json({
    message:'bad request'
  })
})

module.exports = app;
