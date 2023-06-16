import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/categorySlice";

const Category = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  return (
    <div className=" w-1/6 px-2 bg-gray-100 p-4 max-h-screen">
      <div className=" border-b text-xl pb-1 font-bold">KATEGORİ</div>
      {categories?.map((category, i) => (
        <div key={i} className="text-lg cursor-pointer hover:bg-gray-200 p-2">
          {category}
        </div>
      ))}
    </div>
  );
};

export default Category;
