import { BsSearch } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { BsFillBasketFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCartTotal } from "../../../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const NavbarRight = () => {
  const dispatch = useDispatch();
  const { carts, totalAmount, itemCount } = useSelector((state) => state.carts);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  console.log(carts);
  console.log(totalAmount);
  console.log(itemCount);
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
      <div
        className=" relative cursor-pointer"
        onClick={() => navigate("/basket")}
      >
        <div className=" absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center ">
          {carts?.length}
        </div>
        <BsFillBasketFill size={28} />
      </div>
    </div>
  );
};

export default NavbarRight;
