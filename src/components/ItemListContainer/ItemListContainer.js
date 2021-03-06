import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';

const handleCount=(cant)=>{
    alert(cant)
}

const ItemListContainer = ({ greeting }) =>{
    const [products, setProducts] = useState ( [] );
    let {categoryId} = useParams();

    useEffect(() => {
        if(!categoryId){

        const miPromise = new Promise((res,reject)=>{
            setTimeout(()=>{
                res([{
                    id:1,
                    title:'Remera',
                    category: 'mujer',
                    price: 3000,
                    url:'https://statics.glamit.com.ar/media/catalog/product/cache/76/image/770x999/9df78eab33525d08d6e5fb8d27136e95/f/i/fila_f12r504009_1854_01.jpg'
                },{
                    id:2,
                    title:'Pantalon',
                    category: 'hombre',
                    price: 5000,
                    url:' https://www.moovbydexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw86bb940a/products/NI_AT1111-010/NI_AT1111-010-1.JPG?sw=400&sh=400'
    
                },{
                    id:3,
                    title:'Campera',
                    category: 'mujer',
                    price: 10000,
                    url:'https://www.moovbydexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw81c2e0b7/products/PU_582220-16/PU_582220-16-1.JPG?sw=400&sh=400'
                }])
            },2000)
        });
        miPromise.then(data =>{setProducts(data)})
    } else{
        const miPromise = new Promise((res,reject)=>{
            setTimeout(()=>{
                res([{
                    id:1,
                    title:'Remera',
                    category: 'Mujer',
                    price: 3000,
                    url:'https://statics.glamit.com.ar/media/catalog/product/cache/76/image/770x999/9df78eab33525d08d6e5fb8d27136e95/f/i/fila_f12r504009_1854_01.jpg'
                },{
                    id:2,
                    title:'Pantalon',
                    category: 'Hombre',
                    price: 5000,
                    url:' https://www.moovbydexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw86bb940a/products/NI_AT1111-010/NI_AT1111-010-1.JPG?sw=400&sh=400'
    
                },{
                    id:3,
                    title:'Campera',
                    category: 'Mujer',
                    price: 10000,
                    url:'https://www.moovbydexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw81c2e0b7/products/PU_582220-16/PU_582220-16-1.JPG?sw=400&sh=400'
                }])
            },2000)
        });
        miPromise.then(data => setProducts(data.filter( p =>  p.category === categoryId)))
    }
    }, [categoryId])

//
    return(
        <div>
            
            <p>Bienvenidos a {greeting}</p>
            {/* <ItemCount stock={5} initial={1} onAdd={handleCount}/> */}
            <ItemList productos = {products} />

        </div>
    );
};

export default ItemListContainer;
