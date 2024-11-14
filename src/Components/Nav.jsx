import React from 'react'

const Nav = () => {
  return (
    <>
       <nav className="w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5">
        <a
          className="py-3 px-5 border rounded border-blue-400 text-blue-300 "
          href="/create "
        >
          Add new product
        </a>
        <hr className=" my-2 w-[80%]" />
        <h1 className=" text-2xl mb-3 w-[80%]">Category Filter</h1>
        <ul className="w-[80%]">
          <li className="flex items-center mb-3">
            <span className="rounded-full mr-2  w-[15px] h-[15px] bg-blue-100"></span>{" "}
            cat1
          </li>
          <li className="flex items-center mb-3">
            <span className="rounded-full mr-2  w-[15px] h-[15px] bg-pink-100"></span>{" "}
            cat2
          </li>
          <li className="flex items-center mb-3">
            <span className="rounded-full mr-2  w-[15px] h-[15px] bg-green-100"></span>{" "}
            cat3
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Nav