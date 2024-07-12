import axios from 'axios';
export const detailsYouTube = async(link) => {
    // YouTube download logic
    const res = await fetch(
        "https://downloaderbackend.onrender.com/youtubedownload/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            url: link,
          }),
        }
      ).catch((err) => {
        console.log(err);
      });
      const data = await res.json();
      const details=data.details
      const url=data.data;
      console.log(url)
     return {details,url}
  };
  
  export const downloaderYouTube = async(link,quality) => {
   const res = await fetch(
          "https://downloaderbackend.onrender.com/youtubedownload/download",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              url: link,
              quality: quality,
            }),
          }
        ).catch((err) => {
          console.log(err);
        });
        console.log("...........",res)
        if (res.ok) {
          const blob = await res.blob();
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.style.display = "none";
          a.href = url;
          a.download = "video.mp4";
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
        } else {
          alert("Failed to download video");
        }
      }


  export const downloadLinkedIn = async (link) => {
    // LinkedIn download logic
    console.log('LinkedIn download initiated.');
    const res = await fetch("https://downloaderbackend.onrender.com/download", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: link,
        }),
      }).catch((err) => {
        console.log(err);
      });
      const data = await res.json();
      console.log("data",data)
       const axiosResponse = await axios({
      url: data.url,
      method: 'GET',
      responseType: 'blob',
    });

    const url = window.URL.createObjectURL(new Blob([axiosResponse.data]));
    console.log("url", url);

    return { url };
  }
  
  export const downloadFacebook = async (link) => {
    // Facebook download logic
    console.log('Facebook download initiated.');
    const res = await fetch("https://downloaderbackend.onrender.com/facebookdownload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: link,
        }),
      }).catch((err) => {
        console.log(err);
      });
      const data = await res.json();
      console.log("data.links",data.data);
      return {url:data.data.links['Download High Quality']}
  };
  
  export const downloadInstagram = async (link) => {
    // Instagram download logic
    console.log(link)
    console.log('Instagram download initiated.');
    const res = await fetch("https://downloaderbackend.onrender.com/instagramdownload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: link,
        }),
      }).catch((err) => {
        console.log(err);
      });

     
      const data = await res.json();
      console.log("instagram data",data.data.data.video_url)
      const axiosResponse = await axios({
        url: data.data.data.video_url,
        method: 'GET',
        responseType: 'blob',
      });
  
      const url = window.URL.createObjectURL(new Blob([axiosResponse.data]));
      console.log("url", url);
  
      return { url };
    }