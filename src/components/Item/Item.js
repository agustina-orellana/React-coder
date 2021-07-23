import React from 'react';

function Item({p}) {
    return (
        <div>
            <h1 style={{color:'black'}}>{p.title}</h1>
            <h1 style={{color:'black'}}>{p.price}</h1>
            <img src={p.url}></img>
            
        </div>
    )
}

export default Item;
