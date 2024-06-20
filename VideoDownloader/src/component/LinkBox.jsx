import React,{useState} from 'react'
import '../Styles/LinkBox.css'
const LinkBox = () => {
    const [link,setLink]=useState("");
    const [url,setUrl]=useState("");
    const [isLoading,setIsLoading]=useState(false)
    const submitForm=async(e)=>{
        e.preventDefault();
        setIsLoading(true)
        const res= await fetch('http://localhost:5000/download',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                'url':link
            })
        }).catch(err=>{
            setIsLoading(false)
            console.log(err)
        })
        setIsLoading(false)
        const data=await res.json()
        console.log(data)
        setUrl(data.url)
    }
  return (
   
    <div className='box' >
        <form onSubmit={submitForm} >
            <div>
                <label htmlFor='link' className='Bold'><h2>Enter Your Link here</h2></label>
                <input onChange={(e)=>{setLink(e.target.value)}} type='text' placeholder='Link to donwload video' name='link' id='link' className='link' value={link}/>
            </div>
            <div>
                <button className='submit' type='submit'><h2>Submit</h2></button>
            </div>
        </form>
        <div className='loading'>
            {isLoading ? <p>Loading...</p> : null}
        </div>
        {url && (<div className='down'><a  href={url} download={"LinkedInd"}>download</a></div>)}
       
    </div>
  )
}

export default LinkBox