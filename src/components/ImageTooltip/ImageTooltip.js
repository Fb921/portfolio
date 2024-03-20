
import React,{ useState,useRef,useEffect } from 'react';
import Image from 'next/image'
import "./ImageTooltip.css"

export default function ImageTooltip({image1,image2,info,classname,title}){
    const [top,setTop] = useState(0);
    const [left,setLeft] = useState(0);
    const [display,setDisplay] = useState("none");

    return(
        <span className="imageTooltip">
            <Image className={classname || ''} src={image1}/>
            <Image className={classname || ''} src={image2} onMouseLeave={()=>{setDisplay("none");}} onMouseMove={(e)=>{if(e.clientY && e.clientX){setTop(e.clientY + 5);setLeft(e.clientX + 5);setDisplay('block')}}} onClick={(e)=>{if(e.clientY && e.clientX){setTop(e.clientY + 5);setLeft(e.clientX + 5);setDisplay('block')}}}/>
            <span className="tooltip" style={{"--top":top,"--left":left,"--display":display}}><span className="tooltipTitle">{title}</span>{info}</span>
        </span>
    )
}