import React, { useState }  from 'react'
import '../Styles/NativeShare.css'
import Dropdown from './Dropdown.jsx';
const NativeShare = () => {
    const dropdownData = [
        {
          title: "Instagram Reels",
          description: "Download photos, videos, stories & reels from Instagram and share them natively on your social accounts.",
          icon: "/assets/plus.svg",
        },
        {
          title: "Tiktok videos without watermark",
          description: "Download videos from TikTok and share them natively on your social accounts.",
          icon: "/assets/plus.svg"
        },
        {
          title: "Youtube Videos and shorts",
          description: "Download videos and shorts from YouTube and share them natively on your social accounts.",
          icon: "/assets/plus.svg"
        },
        {
          title: "Facebook Videos",
          description: "Download videos from Facebook, and share them natively on your social accounts.",
          icon: "/assets/plus.svg"
        },
        {
          title: "LinkedIn Videos",
          description: "Download videos from LinkedIn, and share them natively on your social accounts.",
          icon: "/assets/plus.svg"
        },
        {
          title: "Twitter Photos and videos",
          description: "Download photos and videos from Twitter/X and share them natively on your social accounts.",
          icon: "/assets/plus.svg"
        }
      ];
      const [activeIndex, setActiveIndex] = useState(null);

      const toggleDropdown = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
      };
    
  return (
    <div className='nativeShare'>
        <div><h2>Downloading to share on social media?</h2></div>
        <div><p>No need to waste storage & bandwidth as this tool is fully integrated within our website</p></div>
        <div className='smallFlex'>
        <ul className='dropdown'>
            {dropdownData.map((dropdowndata,index)=>(
                <Dropdown   key={index} 
                dropdowndata={dropdowndata}
                isActive={activeIndex === index}
                onToggle={() => toggleDropdown(index)} />
            ))}
        </ul>
        <div className='prev'>
          <video autoPlay muted loop className='preview'><source src="/assets/media.mp4" type="video/mp4"></source></video>
        </div>
        </div>
        <div>

        </div>
    </div>
  )
}

export default NativeShare