import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

const products = [
  {
    img: "https://i.ibb.co/GHb596N/product-2.jpg",
    name: "Elastic Product",
  },
  {
    img: "https://i.ibb.co/Jq3HL67/product-3.png",
    name: "Elastic Product",
  },
  {
    img: "https://i.ibb.co/XjHLLg1/product-4.jpg",
    name: "Elastic Product",
  },
  {
    img: "https://i.ibb.co/59yRmZz/product-5.jpg",
    name: "Elastic Product",
  },
  {
    img: "https://i.ibb.co/KqNSnqs/product-6.jpg",
    name: "Elastic Product",
  },
  {
    img: "https://i.ibb.co/TrGd3ZR/product-7.jpg",
    name: "Elastic Product",
  },
  {
    img: "https://i.ibb.co/SV5Mm9Q/product-8.jpg",
    name: "Elastic Product",
  },
  {
    img: "https://i.ibb.co/C0FtNTj/product-9.jpg",
    name: "Elastic Product",
  },
  {
    img: "https://i.ibb.co/DbjtjTL/product-10.jpg",
    name: "Elastic Product",
  },
  {
    img: "https://i.ibb.co/njLgTfZ/product-11.jpg",
    name: "Elastic Product",
  },
  {
    img: "https://i.ibb.co/4RXcvC9/product-12.jpg",
    name: "Elastic Product",
  },
  {
    img: "https://i.ibb.co/0VQLq1L/product-13.png",
    name: "Elastic Product",
  },
  {
    img: "https://i.ibb.co/R769PX6/product-14.jpg",
    name: "Elastic Product",
  },
  {
    img: "https://i.ibb.co/bX4xF2z/product-1.jpg",
    name: "Elastic Product",
  },
];

const Products = () => {
  return (
    <section className="container mx-auto">
      <h2 className="text-center text-3xl my-10 font-extrabold">
        Our Products
      </h2>
      <div className="mx-5 pb-20 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
        <PhotoProvider>
          {products.map((p,i) => (
            <div key={i} className="shadow-xl rounded-xl bg-base-200">
              <PhotoView key={i} src={p.img}>
                <img src={p.img} alt="" className="w-full rounded-t-xl cursor-pointer" />
              </PhotoView>
              <p className="p-4 font-semibold">{p.name}</p>
            </div>
          ))}
        </PhotoProvider>
      </div>
    </section>
  );
};

export default Products;
