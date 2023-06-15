import { BsSearch } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { BsFillBasketFill } from "react-icons/bs";

const NavbarRight = () => {
  return (
    <div className=" flex items-center gap-8 ">
      <div className=" flex items-center border p-3 rounded-full bg-gray-200">
        <input
          type="text"
          placeholder="Search"
          className=" bg-gray-200 outline-none"
        />
        <BsSearch size={25} />
      </div>
      <AiFillHeart size={28} />
      <div className=" relative">
        <div className=" absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center ">
          3
        </div>
        <BsFillBasketFill size={28} />
      </div>
    </div>
  );
};

export default NavbarRight;
