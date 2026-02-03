import React from 'react'
import { BsCloudsFill } from "react-icons/bs";
import { RiSunFill } from "react-icons/ri";
import { IoRainy } from "react-icons/io5";
import { BsCloudSnowFill } from "react-icons/bs";
import { RiMistFill } from "react-icons/ri";
import { FaCloud } from "react-icons/fa";

function iconSelector({weatherTipe}) {
    if(weatherTipe == "Rain"){
        return <IoRainy  className="text-4xl mt-2"/>
    }else if(weatherTipe == "Sunny" || weatherTipe == "Clear" ){
        return <RiSunFill  className=" mt-2"/>
    }else if(weatherTipe == "Clouds"){
        return <BsCloudsFill  className=" mt-2"/>
    }else if(weatherTipe == "Snow"){
        return <BsCloudSnowFill  className=" mt-2"/>
    }else if(weatherTipe == "Mist"){
        return <RiMistFill />
    }else{
        return <FaCloud className=" mt-2"/>
    }
}

export default iconSelector
