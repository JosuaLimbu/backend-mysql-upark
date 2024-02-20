// controller.js

const PlateDetect = require("./model");

// Fungsi untuk mengambil semua data plat dari database
const index = (req, res) => {
  PlateDetect.getAllPlateDetects((err, plateDetects) => {
    if (err) {
      return res.status(500).json({ status: "error", message: err.message });
    }
    res.status(200).json({ status: "success", message: "Welcome to backend for React JS", data: plateDetects });
  });
};

// Fungsi untuk mencari data plat berdasarkan nomor plat
const findByNumberPlate = (req, res) => {
  const numberPlate = req.params.numberPlate;
  PlateDetect.findByNumberPlate(numberPlate, (err, plateDetect) => {
    if (err) {
      return res.status(500).json({ status: "error", message: err.message });
    }
    if (!plateDetect) {
      return res.status(404).json({ status: "warning", message: "Number plate not found" });
    }
    res.status(200).json({ status: "success", message: "Welcome to backend for ReactJS", data: plateDetect });
  });
};

module.exports = { index, findByNumberPlate };
