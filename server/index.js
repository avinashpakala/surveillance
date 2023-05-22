
const express = require('express');

const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const mongoose = require('mongoose');
const sequelize = require('./util/database')
const auth = require('./routes/auth');
const billing = require('./routes/billing');
const service = require('./routes/service');

const multer = require('multer');
const flash = require('connect-flash');
const bodyParser = require('body-parser');
const logger = require('morgan');

const user = require('./model/user');
const camera = require('./model/camera');


const c = require('./model/nosql/camera');

const dotenv = require('dotenv');
dotenv.config();






let SERVER_PORT = 4000;




const app = express();

const store = new MongoDBStore({
    uri:'mongodb+srv://akankshterminator2001:Sharan1997@cluster0.ngoyhgh.mongodb.net/?retryWrites=true&w=majority' ,
    collection: 'sessions'
});
app.use(session({secret: 'my secret', resave: false, saveUninitialized: false, store: store}));



app.use(bodyParser.json());
app.use(express.json());
app.use(flash());
app.use(express.urlencoded({extended: false}));
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next()
});


app.use(auth);
app.use(billing);
app.use(service);
app.use('/', (req, res) => {
    res.send("Hello friend")
});




sequelize.sync().then(res=>{
    console.log("sql synced");
    mongoose.connect('')
        .then(result => {
            if (result) {

                console.log("Database connected");
                console.log(`server started on ${SERVER_PORT} `);
                app.listen(SERVER_PORT);
            } else {
                console.log("failed to connect db ");
                console.log(result);
            }

        })
        .catch(err => {
            console.log(err);
        });

}).catch(err=>{
    console.log(err);
    console.log("error syncing sql");
});


