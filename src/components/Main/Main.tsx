import { FC, useRef, useState} from "react";
import { IData } from "../../models/Data"
import {useScroll} from "../../hooks/useScroll";
import Card from "../Card/Card";
import './Main.css'

const Main:FC=()=>{
    const [Data, setData] = useState<IData[]>([])
    const parentRef = useRef(null)
    const childRef = useRef(null)

    function fetchCatsImages(){ 
        fetch ('https://api.thecatapi.com/v1/images/search?limit=20',{
        }).then((response) => response.json())
        .then(result=> setData([...Data,...result]))
    }

    useScroll(parentRef,childRef,()=>fetchCatsImages())
    return(
        <main className={'main'} ref={parentRef}>
            <div className={'main__section'}>
                {Data && Data.map((el:IData)=>{
                    return(
                        <Card isFavorite={false} key={el.id} {...el}/>
                    )
                })}
            </div>
            <div ref={childRef} style={{height: 20, background: 'white'}}/>
        </main>
    )
}

export default Main
