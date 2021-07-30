import React from 'react';
import { Link } from 'react-router-dom';

function Item({p}) {
    return (
        <div>
            <Link to={`/item/${p.id}`}>
            <h1 style={{color:'black'}}>{p.title}</h1>
            <h1 style={{color:'black'}}>{p.price}</h1>
            <img src={p.url}></img>
            
            </Link>
        </div>
    )
}

export default Item;
