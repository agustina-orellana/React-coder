import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail({ item }) {
  const [detail,setDetail] = useState([]);
  const onAdd = (item) =>{
    setDetail(item)
  }
  let initial = 1;
  return (
    <>
    <h1 style={{color:'black'}}>ITEM DETAIL</h1>
      {item.map((i) => (
        <div>
          <h1 style={{ color: "black" }}>{i.title}</h1>
          <h4>{i.price}</h4>
          <img src={i.url} />
        </div>
        
        ))}
      <ItemCount initial={initial} stock={item[0].stock} onAdd={onAdd} item={item[0]} />
        <button>Terminar la compra</button>
    </>
  );
}
export default ItemDetail;
