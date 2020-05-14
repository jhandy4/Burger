var mysql = require("mysql");

if(process.env.NODE_ENV === "production") {
var connection = mysql.createConnection(process.env.JASWDB);
} else {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "27526",
    database: "burgers_db"
  });
}
  
  // Make connection.
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
  // Export connection for our ORM to use.
  module.exports = connection;
  