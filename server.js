const express = require('express');
const routes = require('./routes');
// import sequelize connection -- DONE
const sequelize = require('./config/connection');

const product = require('./models/Product');
const category = require('./models/Category');
const tag = require('./models/Tag');
const productTag = require('./models/ProductTag');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server  -- DONE
sequelize.sync({ force: true }).then(() => {
app.listen(PORT, () => 
  console.log(`App listening on port ${PORT}!`));
});