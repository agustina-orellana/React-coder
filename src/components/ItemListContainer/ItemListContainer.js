import React from 'react';


const ItemListContainer = ({ greeting }) =>{
    console.log(greeting)
    return(
        <div>
            <p>Bienvenidos a {greeting}</p>
        </div>
    );
};

export default ItemListContainer;
