import {FC} from "react";
import {Link, useLocation} from 'react-router-dom'
import { IPages, Pages } from "../../models/Navbar";
import './Navbar.css'


const Navbar:FC = () =>{
    const location = useLocation()
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