const mysql = require('mysql');
const { mysqlConn } = require('../config');

// Buat koneksi ke MySQL
const db = mysql.createConnection(mysqlConn);

// Hubungkan ke MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Koneksi berhasil, buka di http://localhost:1500');
});

// Tangani kesalahan saat koneksi
db.on('error', (err) => {
  console.error('MySQL database error:', err);
});

module.exports = db;
