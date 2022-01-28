const express = require('express');
const mysql = require('mysql2');
const cTable = require('console.table');
const inquirer = require('inquirer');


const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'business_db'
  },
  console.log(`Connected to the business_db database.`)
);

//db.query here or in separate files?
//connection.query();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });