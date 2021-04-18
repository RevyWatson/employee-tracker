const express = require('express');
const mysql = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mysql.sync().then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});