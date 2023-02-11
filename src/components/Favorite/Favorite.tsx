import { useTypedSelector } from "../../hooks/useTypedSelector"
import { RootState } from "../../store/root"
import Card from "../Card/Card"
import catGif from '../../images/catGif.gif'
import '../Main/Main.css'

const Favorite: React.FC = () =>{
    const array = useTypedSelector((state: RootState)=> state.regulaterFavorite.array)
    console.log(array)
    return(
        <main className={'main'}>
            <div className={'main__section'}>
                {array.length ? array.map((el:any)=>{
                    return(
                        <Card key={el.id} {...el}/>
                    )
                }):
                <div className={'main__warning'}>
                    <span className={'main__warning_message'}>Вы пока что не добавили котиков</span>
                    <img src={catGif} className={'main__warning_cat'} alt={'cat'}/>
                </div>
                }
            </div>
        </main>
    )
}

export default Favorite