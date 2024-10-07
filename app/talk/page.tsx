"use client";
import React,{ useState } from "react";
import { BsBookFill } from "react-icons/bs";
import { BsBullseye } from "react-icons/bs";
import { BsCloudRain } from "react-icons/bs";
import { BsBook } from "react-icons/bs";
import growthImage from '../../public/Images/growth.jpg'; 
export default function Contact(){
    const name="laura";
    if (name)

    return(
       <div>
        <div className="bg-gray-600  w-64 h-screen fixed z-10 flex flex-col justify-start p-4">
            <ul className="space-y-4">
                <li className="flex items-center"><BsBookFill className="mr-2"/><a href="#Daily entry">Daily entry</a></li>
                <li className="flex items-center"><BsBullseye className="mr-2" /><a href="#Growth">Growth</a></li>
                <li className="flex items-center"><BsBook className="mr-2" /><a href="#Bible">Bible</a></li>
                <li className="flex items-center"><BsCloudRain className="mr-2" /><a href="#Pain">Pain</a></li>
                </ul>

        </div>
        <div className="ml-64 flex-1">
        <div id="Daily entry" className="bg-purple-500 max-w h-56 m-2 border-2 rounded-lg"></div>
        <div id="Growth" className="bg-green-300 max-w h-56 m-2  border-2 rounded-lg"></div>
        <div id="Bible" className="bg-blue-300 max-w h-56 m-2  border-2 rounded-lg"></div>
        <div id="Pain" className="bg-red-300 max-w h-56 m-2  border-2 rounded-lg"></div>
        </div>
        
                </div>
        
    )
    return(
        <h1>hi babe</h1>
    )
}