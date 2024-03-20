import React,{ useState,useRef,useEffect } from 'react'
import Image from 'next/image'
import astronaut from "@/public/astronaut3.png"
import "@/src/components/AstronautOnScreen/AstronautOnScreen.css"

export default function AstronautOnScreen({windowHeight, windowWidth}){

    const [time,setTime] = useState(0);
    const [currentPosition,setCurrentPosition] = useState({x:0,y:0});
    const [rotation,setRotation] = useState(0);

    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }

    useEffect(()=>{
        if(windowHeight && windowWidth){
            moveAstronaut();
        }
    },[windowHeight,windowWidth]);

    function moveAstronaut(){

        let xOrY = getRandomInt(2);

        let destX = 0;
        let destY = 0;

        if(xOrY){
            destX = getRandomInt(101);
            destY = getRandomInt(2) * 100;
        } 
        else{
            destY = getRandomInt(101);
            destX = getRandomInt(2) * 100;
        }

        let xPx = (parseInt(windowWidth)*destX)/100;
        let yPx = (parseInt(windowHeight)*destY)/100;


        let dX = Math.abs(xPx - currentPosition.x);
        let dY = Math.abs(yPx - currentPosition.y);

        //Nous donne la distance en pixel entre la position actuelle et le point choisi au hasard
        let d = Math.sqrt((dX*dX) + (dY*dY));

        // let d = (Math.abs(destX - currentPosition.x)*Math.abs(destX - currentPosition.x)) + (Math.abs(destY - currentPosition.y)*Math.abs(destY - currentPosition.y));

        //V en px/s
        let v = 30;

        //Calcule en seconde
        let t = d/v;

        setTime(t);

        setCurrentPosition({x:xPx,y:yPx});
        setRotation(getRandomInt(361));
        setTimeout(()=>{moveAstronaut()},t*1000);
        
    }
  
    return(
        <div className="screen">
            <Image src={astronaut} style={{"--time":time*1000+"ms","--x":currentPosition.x+"px","--y":currentPosition.y+"px","--rotation":rotation+"deg"}}/>
        </div>

    )
}