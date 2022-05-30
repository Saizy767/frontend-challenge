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
            <div className={'navbar__menu'}>
                {Pages.map((el)=>{
                    return(
                        <Link to={el.link} key={el.id} 
                              className={`navbar__link ${el.className}
                              ${el.link === location.pathname ? 'navbar__current' : ''}`}>
                            <span className={`navbar__link_name`}>{el.name}</span>
                        </Link>
                    )
                })}
            </div>
        </nav>
    )
}

export default Navbar