import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
    <div className="container mx-auto flex  justify-between  py-8 items-center">
      {/* logo */}
      <div>
        <h2 className="text-4xl font-semibold hover:border-b-2  hover:border-orange-600 pb-1">
          Gr<span className="text-orange-600">O</span>cify
        </h2>
      </div>
      {/* desktop  menu */}
      <ul className="md:flex space-x-6 text-zinc-600 hidden items-center">
        <li className="  text-orange-600 transition-all duration-100 hover:border-b hover:border-orange-500 font-semibold">
          Home
        </li>
        <li className=" hover:text-orange-600 transition-all duration-100 hover:border-b hover:border-orange-500 font-semibold">
          About Us
        </li>
        <li className=" hover:text-orange-600 transition-all duration-100 hover:border-b hover:border-orange-500 font-semibold ">
          Process
        </li>
        <li className=" hover:text-orange-600 transition-all duration-100 hover:border-b hover:border-orange-500 font-semibold ">
          Contact Us
        </li>
      </ul>
      {/* actions */}
      <div className="flex items-center space-x-2">
        <div className="flex items-center border rounded-full px-4 py-1 border-orange-500">
          <input
            className="focus:outline-none "
            type="text"
            placeholder="Search here..."
          />
          <CiSearch className="w-6 h-6 bg-orange-500 text-white rounded-full flex justify-center items-center" />
        </div>
        <FaHeart className="w-6 h-6 " />
        <FaShoppingCart className="w-6 h-6 " />
      </div>
      {/* mobile action */}
      <div className="items-center  md:hidden flex ">
        <button onClick={toggleMenu} className="cursor-pointer">
          {open ? (
            <HiMenu className="h-6 w-6" />
          ) : (
            <IoMdClose className="h-6 w-6" />
          )}
        </button>
      </div>
      {/* mobile menu */}
      {!open ? (
        <ul className=" absolute bg-white top-20 left-0 w-full  md:hidden flex flex-col  items-center  py-4 space-y-4 shadow-lg ">
          <li className=" text-orange-600 transition-all duration-100 hover:border-b hover:border-orange-500 font-semibold">
            Home
          </li>
          <li className=" hover:text-orange-600 transition-all duration-100 hover:border-b hover:border-orange-500 font-semibold">
            About Us
          </li>
          <li className=" hover:text-orange-600 transition-all duration-100 hover:border-b hover:border-orange-500 font-semibold ">
            Process
          </li>
          <li className=" hover:text-orange-600 transition-all duration-100 hover:border-b hover:border-orange-500 font-semibold ">
            Contact Us
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default Navbar;
