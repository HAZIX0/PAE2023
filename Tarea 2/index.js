const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');
const dotenv = require('dotenv');
dotenv.config();

const router = require('./src/routes');

const app = express();
const port = process.env.PORT || 3000;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');


app.use(express.urlencoded({ extended: false }));
app.use('/assets', express.static(path.join(__dirname, 'public')))
app.use(router);


app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
