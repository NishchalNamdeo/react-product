import React, { useContext } from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { productContext } from "../utils/Context";
import Loading from "./Loading";

const Home = () => {
  const [products] = useContext(productContext);
  return products ? (
    <>
      <Nav />
      <div className="w-[85%] bg-black p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto  ">
        {products.map((p, i) => (
          <Link key={p.id}
            to={`/details/${p.id}`}
            className=" mr-3 mb-3 card p-3 border shadow-md rounded w-[18%] h-[35vh] flex flex-col justify-center items-center"
          >
            <div
              className=" hover:scale-110 w-full h-[80%] bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  `url(${p.image})`,
              }}
            ></div>
            <h1 className="text-white text-center mt-2 hover:text-blue-500">{p.title}</h1>
          </Link>
        ))}
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
