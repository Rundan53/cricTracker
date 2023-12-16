const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database')
const cors = require('cors')
const app = express();

const playerRoutes = require('./routes/player');

app.use(cors());
app.use(bodyParser.json());

app.use(playerRoutes);

sequelize.sync()
.then(()=>app.listen(3000))
.catch(err=> console.log(err))
