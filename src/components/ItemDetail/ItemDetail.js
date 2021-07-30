import React from "react";

function ItemDetail({ item }) {
  console.log(item);

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
    </>
  );
}
export default ItemDetail;
