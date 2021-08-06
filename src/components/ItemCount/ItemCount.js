import React, { useState } from "react";
import './ItemCount.css';

function ItemCount({ initial, stock, onAdd, item }) {
  const [cantidad, setCantidad] = useState(1);
  const handleAdd = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };
  const handleRemove = () => {
    if (cantidad > initial) {
      setCantidad(cantidad - 1);
    }
  };
  return (
    <>
      <div className="cart">
        <h3 className='title'>ItemCount</h3>
      </div>
      <div className="btn1">
        <button className='remove' onClick={handleRemove}> - </button>
        <span className="cantidad"> {cantidad}</span>
        <button className='add'onClick={handleAdd}> + </button>
      </div>
      <button className="btn2" onClick={() => onAdd(item)}>
        Add to cart
      </button>
    </>
  );
}

export default ItemCount;
