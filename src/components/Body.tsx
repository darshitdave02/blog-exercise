import React from "react";
import Card from "./Card";
import data from '../assets/mockData/index.json'

type proType = {
    date: string,
    readingTime: string,
    title: string,
    description: string,
    claps: number,
    liked: boolean,
    image: string
  
  
  };

export default function Body():JSX.Element {
    return (
        <div className="content main">
            
            {data.map((data: proType) => (
                    
                <Card {...data}/>
            ))}


        </div>
    )
}