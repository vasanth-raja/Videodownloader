const express= require('express')
const router=express.Router()
const axios=require('axios')
router.get('/',(req,res,next)=>{
    console.log("GET")
    res.status(200).json({
        message: 'Get request recieved '
    })
})
router.post('/',(req,res,next)=>{
    console.log(req.body.url)
    axios.post('https://us-central1-ez4cast.cloudfunctions.net/tweetVideoURL-getLinkedinVideoURL',{
        'url':req.body.url
    },
        {
        headers:{
            'Content-Type':'application/json'
        }}
        
    ).then(value=>{
        console.log(value.data.src)
        res.status(200).json({
            url:value.data.src
        })
    }).catch(err=>{
        console.log(err)
        res.status(404).json({
            message: 'failed to fetch video'
        })
    })
})
module.exports=router

fetch('movies/data').then((moviedata)=>{
    return fetch('cast/data',{
        castname:moviedata.castname
    })
}).then((castdata)=>{
    console.log(castdata)
}).catch((error)=>{
    console.log(error)
})