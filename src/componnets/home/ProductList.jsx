import { useNavigate } from "react-router-dom";

const ProductList = ({ key, product }) => {
  const navigate = useNavigate();
  const handleDetail = () => {
    navigate(`/products/${product.id}`);
  };
  return (
    <div
      className=" w-[250px] p-2 m-2 border border-gray-300 rounded-md relative cursor-pointer"
      key={key}
      onClick={handleDetail}
    >
      <div>
        <div className="text-2xl font-bold absolute rounded-md top-0 right-0 bg-black text-white p-2 m-1">
          {product?.price}
          <span className="text-sm font-normal"> TL</span>
        </div>
      </div>
      <img
        src={product?.image}
        className=" w-[200px] h-[200px] object-contain m-auto"
      />
      <div className=" text-center text-lg font-bold cursor-pointer hover:text-blue-500">
        {product?.title}
      </div>
    </div>
  );
};

export default ProductList;
