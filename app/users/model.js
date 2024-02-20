require('dotenv').config();
const mysql = require('mysql');


// Buat koneksi ke MySQL
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

// Hubungkan ke MySQL
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL database');
});

// Fungsi untuk mendapatkan semua data dari tabel tbl_platedetect
const getAllPlateDetects = (callback) => {
  db.query('SELECT * FROM tbl_platedetect', (err, results) => {
    if (err) {
      return callback(err);
    }
    return callback(null, results);
  });
};

// Fungsi untuk mencari data berdasarkan nomor plat
const findByNumberPlate = (numberPlate, callback) => {
  db.query('SELECT * FROM tbl_platedetect WHERE number_plate = ?', [numberPlate], (err, results) => {
    if (err) {
      return callback(err);
    }
    return callback(null, results[0]);
  });
};

module.exports = { getAllPlateDetects, findByNumberPlate };
