import React from "react";
import brand1 from "../assets/images/elements/coinbase.svg";
import brand2 from "../assets/images/elements/blockchain.svg";
import brand3 from "../assets/images/elements/binance.svg";
import brand4 from "../assets/images/elements/bitmex.svg";

const brands = [
  {
    path: brand1,
    alt: "coinbase.png",
  },
  {
    path: brand2,
    alt: "blockchain.png",
  },
  {
    path: brand3,
    alt: "binance.png",
  },
  {
    path: brand4,
    alt: "bitmex.png",
  },
];
const Partners = () => {
  return (
    <section className="partners">
      <div className="brands">
        {brands.map((brand) => (
          <img src={brand.path} alt={brand.alt} className="brand" />
          
        ))}
      </div>
    </section>
  );
};

export default Partners;
