import React, { useContext } from "react";
import { ContextFlow } from "./Pages";

function Products() {
  const {
    newState: { products },
    dispatch,
  } = useContext(ContextFlow);

  return (
      <div className="w-full flex justify-around flex-wrap mt-10 pt-5">
        {products.length
          ? products.map((product) => {
              return (
                <div className="flex flex-col justify-around items-center w-1/3 h-1/2 p-10 bg-white m-10" key={product.id}>
                  <div>
                    <img className="w-auto h-24" src={product.image} alt={ product.title} />
                  </div>
                  <div> 
                    <h1 className="text-center">{product.title}</h1>
                  </div>
                  <div>
                    <h1>${product.price}</h1>
                  </div>
                  <div>
                    <button className="font-bold ring-2 rounded-sm bg-purple-600 p-2" onClick={() => dispatch({type : 'Add', payload : product})}>Add to Cart</button>
                  </div>
                </div>
              );
            })
          : "Loading..."}
      </div>
  );
}

export default Products;
