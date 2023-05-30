import React from "react";

function Product(props) {
  return (
    <article className="product">
      <h1>{props.id}</h1>
    </article>
  );
}

export default Product;
