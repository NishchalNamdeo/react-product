import React from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Components/Home";
import Details from "./Components/Details";
import Create from "./Components/Create";

const App = () => {
  const { search, pathname } = useLocation();
  return (
    <div className="h-screen w-screen flex ">
      {(pathname != "/" || search.length > 0) && (
        <Link className="text-red-500 absolute left-[17%] top-[5%]" to="/">
          Home
        </Link>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/create" element={<Create/>} />
      </Routes>
    </div>
  );
};

export default App;
