const express= require('express')
const router=express.Router()
const axios=require('axios')
const ytdl=require('ytdl-core')
router.get('/',(req,res,next)=>{
    console.log("GET")
    res.status(200).json({
        message: 'Get request recieved '
    })
})
router.post('/',async(req,res,next)=>{

    async function ytVideoDownload() {
        try {
            const info = await ytdl.getInfo(req.body.url);
            
             console.log("info..........", info.videoDetails);
            if (info.formats) {
                // const downloadLink = response.data.link; // Adjust based on actual API response structure.
            //    const data=info.formats;
            const data = ytdl.filterFormats(info.formats,'videoonly')
            const details=info.videoDetails;
            //    console.log(data.map((format)=>format.url))
            res.status(200).json({ message: 'Download links',data: data,details: details });
            } else {
                console.log("error")
                res.status(400).json({ message: 'Failed to get download link' });
            }
            // res.json({ downloadLink });
        } catch (error) {
            console.error('Error fetching download link:', error);
            res.status(400).json({ message: 'Failed to get download link' });
        }
    }
    const downloadLink = await ytVideoDownload();
    console.log(downloadLink)
    
})
module.exports=router