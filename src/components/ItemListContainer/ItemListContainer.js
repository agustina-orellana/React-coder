import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const handleCount=(cant)=>{
    alert(cant)
}

const ItemListContainer = ({ greeting }) =>{
    return(
        <div>
            <p>Bienvenidos a {greeting}</p>
            <ItemCount stock={5} initial={1} onAdd={handleCount}/>
        </div>
    );
};

export default ItemListContainer;
