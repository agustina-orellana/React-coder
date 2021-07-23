import React from 'react';
import Item from '../Item/Item';

function ItemList({ productos }) {


    return (
        <div>
            
            {
                productos.map((producto) => <Item p = {producto} key={producto.id}/>)
                
            }
        </div>
    )
}

export default ItemList


