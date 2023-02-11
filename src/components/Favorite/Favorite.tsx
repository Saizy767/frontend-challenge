import { useTypedSelector } from "../../hooks/useTypedSelector"
import { RootState } from "../../store/root"
import Card from "../Card/Card"
import '../Main/Main.css'
import EmptyFavorite from "./EmptyFavorite"

const Favorite: React.FC = () =>{
    const array = useTypedSelector((state: RootState)=> state.regulaterFavorite.array)

    return(
        <main className={'main'}>
            <div className={'main__section'}>
                {array.length ? array.map((el:any)=>{
                    return(
                        <Card key={el.id} {...el}/>
                    )
                }):
                <EmptyFavorite/>
                }
            </div>
        </main>
    )
}

export default Favorite