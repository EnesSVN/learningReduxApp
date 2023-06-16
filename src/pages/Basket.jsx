import { useNavigate } from "react-router-dom";
import BasketComp from "../componnets/basket/BasketComp";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCartTotal } from "../redux/cartSlice";

const Basket = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { carts, totalAmount, itemCount } = useSelector((state) => state.carts);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch, carts]);

  return (
    <div>
      {carts.length > 0 ? (
        <div>
          {carts.map((cart, i) => (
            <BasketComp key={i} cart={cart} />
          ))}

          <div className="flex justify-end items-center text-2xl">
            Toplam Fiyat:
            <span className="font-bold text-xl"> {totalAmount} TL</span>
          </div>
        </div>
      ) : (
        <div>SEPETİNİZDE ÜRÜN BULUNMAMAKTADIR.</div>
      )}
    </div>
  );
};

export default Basket;
