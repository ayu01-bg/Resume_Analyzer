const express = require('express')
const multer = require('multer')
// const uploadFile = require('./services/storage.service')
const postModel = require('./model/post.model')
const pdfParse = require('pdf-parse')
const connectingAi = require('./api/api')


const app = express()

app.use(express.json())

const upload = multer({ storage: multer.memoryStorage() })


app.post("/postResume", upload.single("resume"), async (req, res) => {

    try {

        // console.log("Before upload");

        const pdfData = await pdfParse(req.file.buffer);

        const resumeText = pdfData.text

        console.log("data of pdf text is", resumeText);

        const result = await connectingAi(pdfData.text)
        console.log("Result showd here", result);


        res.status(201).json({
            message: "PDF read Successfully"
        });


        // console.log("After upload");

        // await postModel.create({
        //     image: data.url,
        //     caption: req.body.caption
        // });

        // res.status(201).json({
        //     message: "Post Created Successfully"
        // });

    } catch (error) {

        console.log("POST ERROR:", error);

        res.status(500).json({
            message: error.message
        });
    }
});

app.get("/getResume", async (req, res) => {

    const result = await postModel.find()

    res.status(201).json({
        message: "Post Fetched Sucessfully",
        result: result
    })

})


module.exports = app  