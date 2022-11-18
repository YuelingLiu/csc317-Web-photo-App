const mysql = require("mysql2");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "photodb",
  password: "852456Liu",
});

module.exports = db.promise();
