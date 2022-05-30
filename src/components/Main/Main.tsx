import { FC, useEffect, useRef, useState} from "react";
import { IData } from "../../App";
import {useScroll} from "../../hooks/useScroll";
import Card from "../Card/Card";
import './Main.css'

const Main:FC=()=>{
    const [Data, setData] = useState<IData[]>([])

    const parentRef = useRef(null)
    const childRef = useRef(null)
    const Intersepting = useScroll(parentRef,childRef,()=>fetchCatsImages())

    function fetchCatsImages(){ 
        fetch ('https://api.thecatapi.com/v1/images/search?limit=20',{
        method: "GET",
        headers: {
            "X-Auth-Token": "156edcb5-405c-4fcc-adb6-841d9df11d80",
            
        }}).then((response) => response.json())
        .then(result=> setData([...Data,...result]))
    }

    useEffect(()=>{
    },[Intersepting])

        return(
        <main className={'main'} ref={parentRef}>
            <section className={'main__section'}>
                {Data && Data.map((el:any)=>{
                    return(
                        <Card key={el.id} {...el}/>
                    )
                })}
            </section>
            <div ref={childRef} style={{height: 20, background: 'white'}}/>
        </main>
    )
}

export default Main