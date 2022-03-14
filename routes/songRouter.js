const songController = require('../controllers/songController')
const router = require('express').Router()
const multer = require('multer');
const uploadMulter = require('../models/ModelMulter')

router.post('/upload', uploadMulter.single('name'),songController.uploadSingleFile)



module.exports = router;