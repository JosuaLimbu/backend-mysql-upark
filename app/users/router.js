// router.js

const express = require('express');
const router = express.Router();
const { index, findByNumberPlate, getAllAccount } = require('./controller');

// Endpoint untuk mengambil semua data plat
router.get("/platedetect", index);
router.get("/account", getAllAccount);

// Endpoint untuk mencari data plat berdasarkan nomor plat
router.get("/platedetect/:numberPlate", findByNumberPlate);

module.exports = router;
