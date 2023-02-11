import React from 'react'
import './Card.css'
import useHover from '../../hooks/useHover'
import Heart from '../Heart/Heart'

interface CardProps{
    url: string,
    id: string,
    isFavorite: boolean
}
const Card: React.FC<CardProps> = ({url,id, isFavorite}) =>{
    const cardRef = React.useRef(null)
    const isHoveredCard = useHover(cardRef)
    return(
        <div className={isHoveredCard ? 'card_hover': 'card'} ref={cardRef}>
            <img src={url} alt={id} className={'card__image'}></img>
            {isHoveredCard ? <Heart id={id} url={url} isFavorite={isFavorite}/> : ''}
        </div> 
    )
}
export default Card