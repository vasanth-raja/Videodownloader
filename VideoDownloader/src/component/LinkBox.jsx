import React,{useState} from 'react'
import '../Styles/LinkBox.css'
const LinkBox = () => {
    const [link,setLink]=useState("");
    const [url,setUrl]=useState("");
    const submitForm=async(e)=>{
        e.preventDefault();
        const res= await fetch('http://localhost:5000/download',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                'url':link
            })
        })
        const data=await res.json()
        console.log(data)
        setUrl(data.url)
    }
  return (
   
    <div>
        <form onSubmit={submitForm}>
            <div>
                <label htmlFor='link'><h2>Enter Your Link here</h2></label>
                <input onChange={(e)=>{setLink(e.target.value)}} type='text' placeholder='Link to donwload video' name='link' id='link' className='link' value={link}/>
            </div>
            <div>
                <button className='submit' type='submit'><h2>Submit</h2></button>
            </div>
        </form>
        {url && (<div> <video width="320" height="240" controls>
            <source src={url} type="video/mp4"></source>  
        </video> <a  href={url} download={"LinkedInd"}>download</a></div>)}
       
    </div>
  )
}

export default LinkBox