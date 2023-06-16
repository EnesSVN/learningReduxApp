import Category from "../componnets/home/Category";
import SliderComp from "../componnets/home/SliderComp";
import Sorting from "../componnets/home/Sorting";
import Product from "../componnets/home/Product";
import { useState } from "react";

const Home = () => {
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div>
      <SliderComp />
      <Sorting setSort={setSort} />
      <div className=" flex">
        <Category setCategory={setCategory} />
        <Product category={category} sort={sort} />
      </div>
    </div>
  );
};

export default Home;
