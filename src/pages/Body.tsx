import React from "react";
import Card from "../components/Card";
import datas from '../assets/mockData/index.json'

interface proType{
    
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
            
            {datas.map((data: proType) => (
                    
                <Card data = {data}/>
            ))}


        </div>
    )
}