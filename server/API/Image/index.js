// Libraries
import express from "express";
import passport from "passport";
import AWS from "aws-sdk";
import multer from "multer";

// Database model
import { ImageModel } from "../../database/allModels";

const Router = express.Router();

// Multer config
const storage = multer.memoryStorage();
const upload = multer({ storage });

// AWS s3 bucket config
const s3Bucket = new AWS.S3({
    accessKeyId: process.env.AWS_S3_ACCESS_KEY,
    secretAccessKey: process.env.AWS_S3_SECRET_KEY,
    region: "ap-south-1",
});

/*
Route    /
Des      uploads given image to S3 bucket, and saves file link to mongoDB
Params   none
Access   Public
Method   POST
*/
Router.post("/", upload.array("file", 4) ,async(req, res) => {
    try {

        const file= req.file;
       
   
        return res.json({ menus });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})



export default Router;