import {FC} from "react";
import {Link, useLocation} from 'react-router-dom'
import './Navbar.css'

interface IPages{
    id: number,
    name: string,
    link: string,
    className: string,
}

const Navbar:FC = () =>{
    const location = useLocation()
    const Pages: IPages[] = [{name:'Все котики',link:'/', className:'link_all',id: 1}
                            ,{name:'Любимые котики', link:'/favorite',className:'link_favorite', id: 2}]
    
    return(
        <nav className={'navbar'}>
            <ul className={'navbar__menu'}>
                {Pages.map((el:IPages)=>{
                    return(
                        <Link to={el.link} key={el.id} className={`navbar__link ${el.className}
                              ${el.link === location.pathname ? 'navbar__current' : ''}`}>
                            <li className={`navbar__link_name`}>{el.name}</li>
                        </Link>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navbar