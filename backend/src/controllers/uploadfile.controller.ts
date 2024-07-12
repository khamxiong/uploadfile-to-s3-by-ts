import sharp from 'sharp';
import { S3 } from 'aws-sdk';
import { Request, Response } from 'express';
import AWS from 'aws-sdk';



interface MulterFile {
  buffer: Buffer;
  originalname: string;
  mimetype: string;
}
// Update AWS config
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
});

const s3 = new AWS.S3();
const resizeAndUploadImage = async (file: MulterFile, size: number, s3: S3): Promise<string> => {
  const resizedBuffer = await sharp(file.buffer)
    .resize(size, size)
    .toBuffer();
  const uploadParams: S3.PutObjectRequest = {
    Bucket: process.env.AWS_BUCKET_NAME!,
    Key: `${Date.now().toString()}-${size}x${size}-${file.originalname}`,
    Body: resizedBuffer,
    ContentType: file.mimetype,
  };

  const uploadResult = await s3.upload(uploadParams).promise();
  // console.log(uploadResult);
  return uploadResult.Location;
};

export const uploadImage = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!req.file) {
      res.status(400).json({ success: false, message: 'No file uploaded!' });
      return;
    }
    const urls = await Promise.all([
      resizeAndUploadImage(req.file as MulterFile, 100, s3),
      resizeAndUploadImage(req.file as MulterFile, 200, s3)
    ]);

    res.json({
      success: true,
      message: 'Images uploaded successfully!',
      urls: urls
    });
  } catch (error) {
    console.error('Error uploading images:', error);
    res.status(500).json({ success: false, message: 'Image upload failed!' });
  }
};
