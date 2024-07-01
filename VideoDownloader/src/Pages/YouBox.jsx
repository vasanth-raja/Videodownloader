import React,{useState} from 'react'
import '../Styles/YouBox.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios'

const YouBox = () => {
    const [link,setLink]=useState("");
    const [url,setUrl]=useState("");
    const [details,setDetails]=useState("");
    
    const [isLoading,setIsLoading]=useState(false)
    const submitForm=async(e)=>{
        e.preventDefault();
        setIsLoading(true)
        const res= await fetch('https://downloaderbackend.onrender.com/youtubedownload/',{
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
        console.log(data.data)
        console.log(data.details)
        setUrl(data.data)
        setDetails(data.details)
        console.log(url) 
    }
    async function geturl(url,quality) {
        const res= await fetch('https://downloaderbackend.onrender.com/youtubedownload/download',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                'url':link,
                'quality':quality
            })
        }).catch(err=>{
            setIsLoading(false)
            console.log(err)
        })
        if (res.ok) {
            const blob = await res.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = 'video.mp4';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
          } else {
            alert('Failed to download video');
          }
    }
  return (
   <div className='mainbox'>
     <img src="/assets/knock.png" width='250' height='200'/>
    <div className='box' >
        <form onSubmit={submitForm} >
            <div>
                <label htmlFor='link' className='Bold'><h2>YOUTUBE VIDEO DOWNLOADER</h2></label>
                <input required onChange={(e)=>{setLink(e.target.value)}} type='text' placeholder=' Enter Link to download video' name='link' id='link' className='link' value={link}/>
            </div>
            <div>
                <button className='submit' type='submit'><h2>Submit</h2></button>
            </div>
        </form>
        <div className='loading'>
            {isLoading ? <p>Loading...</p> : null}
        </div>
        {url && url.map((dat,key)=>

            // <div><h1>{dat.qualityLabel}</h1>
            //         <h2>{key}</h2>
            //     <h2>{dat.quality}</h2>
               
            //     <h2>{details.title}</h2>
            //     <h2>{details.lengthSeconds/60}</h2>
            // </div>
            <Card style={{ width: '18rem', backgroundColor:'grey', margin:'2rem', borderRadius:'0.5rem'
            }}>
          
            <Card.Body>
              <Card.Title>{details.title}</Card.Title>
              <Card.Text>
              {dat.qualityLabel}
              </Card.Text>
              <Card.Text>
              {details.lengthSeconds/60}
              </Card.Text>
              <Card.Text>
              {dat.quality}
              </Card.Text>
              <Card.Text>
              {key}
               </Card.Text>
               
              <Button onClick={()=>geturl(dat.url,dat.qualityLabel)} variant="primary" className="download">

             
               <h3>Download File</h3></Button>
            </Card.Body>
          </Card>
            
        )}
       
    </div>
    </div>
  )
}

export default YouBox