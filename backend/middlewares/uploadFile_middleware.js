const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'images');
    },
    filename:function(req,file,cb){
        const imgName = Date.now()+path.extname(file.originalname);
        cb(null,imgName);
    }
});

const upload = multer({
    storage,
    limits:{fileSize:6300000},
});

module.exports = upload;