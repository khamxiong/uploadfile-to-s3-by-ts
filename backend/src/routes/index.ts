import express, {  Router } from 'express';
import multer from 'multer';
import { uploadImage } from '../controllers/uploadfile.controller';

const router: Router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/upload', upload.single('image'),uploadImage);
export default router;


