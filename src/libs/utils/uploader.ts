import path from "path";
import multer from "multer";
import { v4 as uuidv4 } from "uuid";

function getTargetImageStorage(address: any) {
    return multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, `./uploads/${address}`);
        },
        filename: function (req, file, cb) {
            cb(null, uuidv4() + path.extname(file.originalname));
        },
    });
}

function makeUploader(address: string) {
    return multer({ storage: getTargetImageStorage(address) });
}

export default makeUploader;
