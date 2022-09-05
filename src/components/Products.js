import React from "react";

const Products = ({ product }) => {
  return (


    <>
      <div className="container">
        {product.map((pdata) => {

          return (
            <>
              <article key={pdata.id}>{pdata.price}</article>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Products;
