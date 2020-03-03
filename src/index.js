const express = require('express');
const morgan = require('morgan');
const app = express();
const ruta = express.Router();
const root = require('./routes/root');

app.set('port', process.env.PORT || 4000);
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/',require('./routes/root'));



app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
