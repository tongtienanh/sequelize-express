const multer = require('multer');
const path = require('path')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        
        cb(null, './uploads/image'); 
       
    },
    filename: (req, file, cb) => {
        cb(null , file.originalname); ;// mặc định sẽ save name của hình ảnh
        // là name gốc, chúng ta có thể rename nó.  
    }
})

var upload = multer({storage:storage});

module.exports = upload;