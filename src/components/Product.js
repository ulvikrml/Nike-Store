import React from "react";
import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import { addToCart, toggleCart } from "../store/CartSlice";
import { useDispatch } from "react-redux";

const Item = (props) => {
  const {ifExists, id, color, shadow, title, text, img, rating, price} = props
  const dispatch = useDispatch();

  const onAddToCart = () => {
    const item = { id, title, text, img, color, shadow, price };

    dispatch(addToCart(item));
  };

  const onCartToggle = () => {
    dispatch(toggleCart())
}
  return (
    <>
      <div
        className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center ${
          ifExists ? "justify-items-start" : "justify-items-center"
        } rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105`}
      >
        <div
          className={`grid items-center ${
            ifExists ? "justify-items-start" : "justify-items-center"
          }`}
        >
          <h1 className="text-slate-200 text-base md:text-lg lg:text-xl font-medium filter drop-shadow">
            {title}
          </h1>
          <p className="text-slate-200 filter drop-shadow text-sm md:text-base">
            {text}
          </p>

          <div className="flex items-center justify-between w-28 my-2">
            <div className="flex items-center bg-white/80  px-1 rounded blur-effect-theme">
              <h1 className="text-black text-sm font-medium">${price}</h1>
            </div>
            <div className="flex items-center gap-1">
              <StarIcon className="icon-style w-4 h-4 md:w-5 md:h-5" />
              <h1 className="text-sm md:text-base text-slate-100">
                {rating}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={()=> onAddToCart()}
              type="button"
              className="bg-white/90 blur-effect-theme button-theme p-0.5 shadow shadow-sky-200"  
            >
              <ShoppingBagIcon className="icon-style text-slate-900" />
            </button>
            <button
              onClick={()=> {onAddToCart(); onCartToggle();}}
              type="button"
              className="bg-white/90 blur-effect-theme button-theme px-2 py-1 shadow shadow-sky-200 text-sm text-black"
              
            >
               Buy Now
            </button>
          </div>
        </div>
        <div
          className={`flex items-center ${
            ifExists ? "absolute top-5 right-1" : "justify-center"
          }`}
        >
          <img
            src={img}
            alt={title}
            className={`transitions-theme hover:-rotate-12 ${
              ifExists
                ? "h-auto w-48 md:w-56 lg:w-64 -rotate-[35deg]"
                : "h-36 w-64"
            }`}
          />
        </div>
      </div>
    </>
  );
};

export default Item;
