const express=require('express')
const app=express();
const cors=require('cors')
const downloadRoutes=require('./api/download')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use('/download',downloadRoutes)
app.use('/',(req,res,next)=>{
    console.log("Error")
    res.status(200).json({
        message:"unhandled route"
    })
})

module.exports =app