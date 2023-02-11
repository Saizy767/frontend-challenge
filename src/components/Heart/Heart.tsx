import React, { useCallback, useEffect, useState } from "react"
import useHover from "../../hooks/useHover"
import HeartBasic from '../../images/Vector.svg'
import HeartHover from '../../images/VectorHover.svg'
import HeartClicked from '../../images/VectorClick.svg'
import {useTypedDispatch} from '../../hooks/useTypedDispatch'
import './Heart.css'
import { adding, deleting } from "../../store/favoriteReducer"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { RootState } from "../../store/root"
import { HeartProps } from "../../models/Heart"

const Heart: React.FC<HeartProps> = ({id, url, isFavorite=false}) =>{
    const [isClicked, setIsClicked] = useState(isFavorite)
    const heartRef = React.useRef(null)
    const isHoveredHeart = useHover(heartRef)
    
    const dispatch = useTypedDispatch()
    const arrayFavorite = useTypedSelector((state: RootState)=> state.regulaterFavorite.array)

    const handleClick = useCallback((id:string, url: string) =>{
        isClicked ? dispatch(deleting({id, url, isFavorite: false})):
                    dispatch(adding({id,url, isFavorite:true}))
        setIsClicked(!isClicked)
    },[isClicked, dispatch])

    useEffect(()=>{
        arrayFavorite.forEach(element => 
                            (element.id === id) && setIsClicked(element.isFavorite))
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
