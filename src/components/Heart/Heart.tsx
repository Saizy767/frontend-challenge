import React, { useCallback, useEffect, useState } from "react"
import useHover from "../../hooks/useHover"
import HeartBasic from '../../images/Vector.svg'
import HeartHover from '../../images/VectorHover.svg'
import HeartClicked from '../../images/VectorClick.svg'
import {useTypedDispatch} from '../../hooks/useTypedDispatch'
import './Heart.css'
import { decrement, increment } from "../../store/savingFavoriteSlice"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { RootState } from "../../store/root"

interface HeartProps{
    id: string;
    url: string;
}
const Heart: React.FC<HeartProps> = ({id, url}) =>{
    const heartRef = React.useRef(null)
    const isHoveredHeart = useHover(heartRef)
    const [isClicked, setIsClicked] = useState(false)

    const dispatch = useTypedDispatch()

    const arrayFavorite = useTypedSelector((state: RootState)=> state.regulaterFavorite.array)

    const handleClick = useCallback((id:string, url: string) =>{
        setIsClicked(!isClicked)
        !isClicked === true ? dispatch(increment({id,url,isFavorite:true})): dispatch(decrement({id, url, isFavorite: false}))
    },[isClicked, dispatch])

    useEffect(()=>{
        for (let i=0; i< arrayFavorite.length; i++){
            if( id === arrayFavorite[i].id){
                setIsClicked(arrayFavorite[i].isFavorite)
            }
        }
    },[arrayFavorite, id])
    
    return( 
        <div className={'card__heart'}>
            {isClicked ? <img src={HeartClicked} className={'card__heart_icon'} 
                                                alt={'HeartClicked'} 
                                                onClick={()=>handleClick(id, url)}/> :
            isHoveredHeart ? <img src={HeartHover} className={'card__heart_icon'}
                                                   alt={'HeardHovered'} 
                                                   onClick={()=>handleClick(id, url)}/>
                            : <img src={HeartBasic} className={'card__heart_icon'}
                                                    alt={'HeartBasic'} 
                                                    ref={heartRef}/>}
        </div>
    )
}

export default Heart
