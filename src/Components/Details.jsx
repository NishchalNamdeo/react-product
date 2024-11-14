import axios from "../utils/axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "./Loading";

const Details = () => {
  const [products, setproducts] = useState(null);
  const { id } = useParams();

  const getsingleproduct = async () => {
    try {
      const { data } = await axios.get(`/products/${id}`);
      setproducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getsingleproduct();
  }, []);

  return products ? (
   
      <div className="w-[70%]  h-full bg-black p-[10%] m-auto text-white flex justify-between items-center gap-10 ">
        <img
          className=" object-contain h-[70%] w-[50%]"
          src={`${products.image}`}
          alt=""
        />
        <div className="content">
          <h1 className="text-3xl">
            {products.title}
          </h1>
          <h2 className="text-zinc-500 my-5"> {products.category}</h2>
          <h3 className="text-red-500 mb-3">{products.price}</h3>
          <p className="mb-5">
            {products.description}
          </p>
          <Link className="py-2 mr-5 px-5 border rounded border-blue-400 text-blue-300 ">
            Edit
          </Link>
          <Link className="py-2 px-5  border rounded border-red-400 text-red-500 ">
            Delete
          </Link>
        </div>
      </div>
  ) : (
    <Loading />
  );

};

export default Details;
