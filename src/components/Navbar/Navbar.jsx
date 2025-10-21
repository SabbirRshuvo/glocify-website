import { CiSearch } from "react-icons/ci";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
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
    </div>
  );
};

export default Navbar;
