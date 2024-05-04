import React from "react";
import Images from "./Images";
import Flex from "./Flex";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { GrPowerCycle } from "react-icons/gr";

const Product = ({ pimage, pitem, ProductPrice, ProductColor, isNew }) => {
  return (
    <div className="w-[370px] sm:w-[300px] md:w-[340px] lg:w-[370px]">
      <div className="relative group">
        <Images src={pimage} alt="product" />
        {isNew && (
          <h4 className="font-bold text-sm text-white py-2 px-6 bg-black inline-block absolute top-5 left-5">
            New
          </h4>
        )}
        <div className="bg-white w-full absolute bottom-0 right-0 py-4 pr-5 hidden group-hover:block">
          <Flex className="flex-col items-end gap-5">
            <Flex className="gap-4 text-lightAsh text-base font-normal hover:text-black hover:font-bold duration-300">
              <h4>Add to Wish List</h4>
              <span className="mt-1">
                <FaHeart />
              </span>
            </Flex>
            <Flex className="gap-4 text-lightAsh text-base font-normal hover:text-black hover:font-bold duration-300">
              <h4>Compare</h4>
              <span className="mt-1">
                <GrPowerCycle />
              </span>
            </Flex>
            <Flex className="gap-4 text-lightAsh text-base font-normal hover:text-black hover:font-bold duration-300">
              <h4>Add to Cart</h4>
              <span className="mt-1">
                <FaShoppingCart />
              </span>
            </Flex>
          </Flex>
        </div>
      </div>
      <Flex className="justify-between mt-6">
        <h3 className="text-black font-bold text-xl">{pitem}</h3>
        <span className="text-base font-normal text-lightAsh leading-[30px]">
          {ProductPrice}
        </span>
      </Flex>
      <h5 className="text-base font-normal text-lightAsh leading-[30px] mt-3">
        {ProductColor}
      </h5>
    </div>
  );
};

export default Product;
