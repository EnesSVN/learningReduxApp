import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice";

const BasketComp = ({ cart }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between items-center border-b-2 border-gray-200 py-2">
      <img src={cart.image} alt="" className="w-28 h-28 object-cover" />

      <div
        className="text-xl font-bold flex justify-start items-start w-[470px]
      "
      >
        {cart.title}
      </div>
      <div className="text-2xl font-extrabold ">
        {cart.price} TL ({cart.quantity} Adet)
      </div>
      <div
        className="text-lg font-semibold cursor-pointer hover:bg-gray-200 p-3 px-5 border rounded-lg text-center bg-red-600 text-white hover:text-red-600 hover:border-red-600"
        onClick={() => dispatch(removeFromCart(cart.id))}
      >
        Urunu Sil
      </div>
    </div>
  );
};

export default BasketComp;
