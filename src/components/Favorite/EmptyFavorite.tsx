import { FC } from "react";
import catGif from '../../images/catGif.gif'
import '../Main/Main.css'

const EmptyFavorite:FC = () => {
    return(
        <div className={'main__warning'}>
            <span className={'main__warning_message'}>Вы пока что не добавили котиков</span>
            <img src={catGif} className={'main__warning_cat'} alt={'cat'}/>
        </div>
    )
}
export default EmptyFavorite