import React from 'react'
import '../../App.css'
import {Link} from "react-router-dom";



export default function ChosenElement({id, title, list, setList, l, url}){
    const deleteListElement = () => {
        setList(list.filter(element => element.id !== l.id ))
    }
    return (
        <div className='menu__item'>
            {url !== null ? (<img width='50px' height='50px' alt='' src={`https://www.themoviedb.org/t/p/original${url}`} />
            ) : (<p>no poster</p>)}
            <Link to={`/${id}`} >
                <li className='li-hover'>{title}</li>
            </Link>
            <button className='buttonAdd' type={"button"} onClick={deleteListElement}>
                delete
            </button>
        </div>
    )
}