import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail'

function ItemDetailContainer() {
    const [item, setItems] = useState ( [] );
    let {id} = useParams();

    useEffect(() => {

        const miPromise = new Promise((res,reject)=>{
            setTimeout(()=>{
                res([{
                    id:1,
                    title:'Remera',
                    stock: 2,
                    price: 3000,
                    category: 'Mujer',
                    url:'https://statics.glamit.com.ar/media/catalog/product/cache/76/image/770x999/9df78eab33525d08d6e5fb8d27136e95/f/i/fila_f12r504009_1854_01.jpg'
                },{
                    id:2,
                    title:'Pantalon',
                    stock: 4,
                    price: 5000,
                    category:'Hombre',
                    url:' https://www.moovbydexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw86bb940a/products/NI_AT1111-010/NI_AT1111-010-1.JPG?sw=400&sh=400'
    
                },{
                    id:3,
                    title:'Campera',
                    stock: 5,
                    price: 10000,
                    category:'Mujer',
                    url:'https://www.moovbydexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw81c2e0b7/products/PU_582220-16/PU_582220-16-1.JPG?sw=400&sh=400'
                }])
            },2000)
        });
        miPromise.then(data => setItems(data.filter(p => p.id === Number(id))));
    }, [id])


    return (
    <div>
         <ItemDetail item={item} />
        </div>
    )
}
 export default ItemDetailContainer;