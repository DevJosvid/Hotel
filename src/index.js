const express = require('express');
const morgan = require('morgan');
const bodyP = require('body-parser');
const app = express();
const path = require('path')


app.set('port',process.env.PORT || 3001);

const {mongoose} =  require('./database/mongoDatabase')
app.use(bodyP.json());
app.use(require('./routes/hotelRoutes'));

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname ,'public')));
app.listen(app.get('port'),()=>{
    console.log(`puerto corriendo en ${app.get('port')}`)
})
