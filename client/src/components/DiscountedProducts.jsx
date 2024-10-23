import React, { useState } from "react";
import { discountedProducts } from "../assets/products";
import { Link } from "react-router-dom";

const DiscountedProducts = () => {
  const [products, setProducts] = useState(discountedProducts);
  return (
    <div className="mt-20 px-16">
      <div>
        <p className="text-gray-950 text-2xl font-semibold">
          Interior for every space + Style
        </p>
      </div>
      <div className="grid grid-cols-4 gap-7 py-7">
        {products.map((item, index) => {
          return (
            <Link
              key={index}
              to={`/products/${index}`}
              className="hover:scale-110 duration-150 ease-in-out hover:shadow"
            >
              <div className="relative">
                <img src={item.img} alt="" />
                {item.isDiscounted && (
                  <p className="absolute top-4 left-5 bg-orange-500 text-white text-xs py-1 px-2">
                    -10%
                  </p>
                )}
              </div>
              <div className="mt-3">
                <p className=" uppercase text-xs font-semibold text-gray-900">
                  {item.title}
                </p>
                <div className="flex gap-2 text-xs my-2">
                  <p className="line-through text-gray-500">{item.price} EBT</p>
                  <p className="text-gray-800">{item.discountPrice} EBT</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default DiscountedProducts;
