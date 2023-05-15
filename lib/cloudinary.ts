const cloudinary = require('cloudinary').v2;


// Configuration 
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});


// Upload
async function uploadFile(file:string, filename: string) {

    const res = await cloudinary.uploader.upload('https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg', { public_id: "olympic_flag" })
    // @ts-ignore
    res.then((data) => {
        console.log(data);
        console.log(data.secure_url);
        // @ts-ignore
    }).catch((err) => {
        console.log(err);
    });
}

export function getUrl(filename: string) {
    const options = {
        width: 100,
        height: 150,
        Crop: 'fill'
    }

    // Generate 
    const url = cloudinary.url(filename,);

    return url
}
