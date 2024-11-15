import React, { useContext } from "react";
import { useState } from "react";
import { productContext } from "../utils/Context";

const Create = () => {
  const [ products , setproducts]=useContext(productContext)
  const [title, settitle] = useState("");
  const [image, setimage] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");

  const AddProductHandler = (e) =>{
    e.preventDefault();
    const product ={
      title,
      image,
      category,
      price,
      description
    }
    setproducts([...products, product])
  }

  return (
    <form onSubmit={AddProductHandler} className=" flex flex-col items-center p-[5%] w-screen h-screen">
      <h1 className=" mb-3 w-1/2 text-3xl">Add New Product</h1>
      <input
        type="url"
        placeholder="image link"
        className=" text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        onChange={(e) => setimage(e.target.value)}
        value={title}
      />
      <input
        type="text"
        placeholder="title"
        className=" text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        onChange={(e) => settitle(e.target.value)}
        value={title}
      />
      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          placeholder="category"
          className=" text-1xl bg-zinc-100 rounded p-3 w-[45%] mb-3"
          onChange={(e) => setcategory(e.target.value)}
          value={category}
        />
        <input
          type="number"
          placeholder="price"
          className=" text-1xl bg-zinc-100 rounded p-3 w-[45%] mb-3"
          onChange={(e) => setprice(e.target.value)}
          value={price}
        />
      </div>
      <textarea
        onChange={(e) => setdescription(e.target.value)}
        placeholder="enter product description here"
        value={description}
        name=""
        id=""
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        rows="10"
      ></textarea>
      <div className="w-1/2">
        <button className="py-3 px-5 border rounded border-blue-400 text-blue-300 ">
          Add new product
        </button>
      </div>
    </form>
  );
};

export default Create;
