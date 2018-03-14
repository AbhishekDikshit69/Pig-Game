const express=require('express');

const app = express();

const hbs= require('hbs');
var port= process.env.PORT || 3000 ;

//app.set('view engine','hbs');

app.use(express.static(__dirname + '/public'));


app.listen(port,()=>{
    console.log('Server Started');
});
