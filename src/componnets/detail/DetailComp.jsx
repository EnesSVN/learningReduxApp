import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

const DetailComp = ({ productDetail }) => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  const addBasket = () => {
    dispatch(
      addToCart({
        id: productDetail.id,
        title: productDetail.title,
        image: productDetail.image,
        price: productDetail.price,
        quantity: count,
      })
    );
  };
  return (
    <div className=" flex gap-10 my-10">
      <img
        className="
          w-[500px] h-[500px] object-cover
      "
        src={productDetail?.image}
      />
      <div>
        <div className=" text-4xl font-bold">{productDetail?.title}</div>
        <div className=" text-2xl font-bold my-2">
          {productDetail?.description}
        </div>
        <div className=" text-xl font-bold my-2 text-red-500">
          Rating: {productDetail?.rating?.rate}
        </div>
        <div className=" text-xl font-bold my-2 text-red-500">
          Count: {productDetail?.rating?.count}
        </div>
        <div className=" text-5xl font-bold my-2">
          {productDetail?.price}
          <span className="text-sm font-normal"> TL</span>
        </div>
        <div className=" flex gap-5 my-5">
          <div
            className=" border border-gray-300 rounded-md cursor-pointer w-5 text-center"
            onClick={() => {
              count > 0 ? setCount(count - 1) : setCount(0);
            }}
          >
            -
          </div>
          <input type="text" value={count} className=" w-10 text-center" />
          <div
            className=" border border-gray-300 rounded-md cursor-pointer w-5 text-center"
            onClick={() => {
              count < productDetail?.rating?.count
                ? setCount(count + 1)
                : setCount(productDetail?.rating?.count);
            }}
          >
            +
          </div>
        </div>
        <div
          className="  text-center p-2 rounded-md cursor-pointer border w-[200px] text-2xl font-semibold "
          onClick={addBasket}
        >
          Sepete Ekle
        </div>
      </div>
    </div>
  );
};

export default DetailComp;
