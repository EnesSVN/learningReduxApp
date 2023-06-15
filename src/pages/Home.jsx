import Category from "../componnets/home/Category";
import SliderComp from "../componnets/home/SliderComp";
import Sorting from "../componnets/home/Sorting";
import Product from "../componnets/home/Product";

const Home = () => {
  return (
    <div>
      <SliderComp />
      <Sorting />
      <div className=" flex">
        <Category />
        <Product />
      </div>
    </div>
  );
};

export default Home;
