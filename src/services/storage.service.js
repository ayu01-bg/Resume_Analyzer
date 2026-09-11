const ImageKit = require('@imagekit/nodejs')

const imagekit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
})

async function uploadFile(buffer) {

    try {

        console.log("1. ImageKit upload started")
        console.log("2. Buffer size:", buffer.length)

        const result = await imagekit.files.upload({
            file: buffer.toString('base64'),
            fileName: "resume.jpg"
        })

        console.log("3. ImageKit upload completed")
        console.log("4. Result:", result)

        return result

    } catch (error) {

        console.log("❌ IMAGEKIT ERROR");
        console.log(error);

        throw error
    }
}

module.exports = uploadFile