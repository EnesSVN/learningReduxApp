import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryProduct, getPrdocts } from "../../redux/productSlice";
import Loading from "../Loading";
import ProductList from "./ProductList";
import ReactPaginate from "react-paginate";
const Product = ({ category, sort }) => {
  const dispatch = useDispatch();
  const { products, productStatus } = useSelector((state) => state.products);
  const [itemOffset, setItemOffset] = useState(0);
  useEffect(() => {
    if (category) {
      dispatch(getCategoryProduct(category));
      return;
    }
    dispatch(getPrdocts());
  }, [dispatch, category]);
  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const itemsPerPage = 6;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };

  return (
    <div>
      {productStatus == "LOADING" ? (
        <Loading />
      ) : (
        <>
          <div className=" flex flex-wrap justify-center">
            {currentItems
              ?.sort((a, b) =>
                sort == "inc"
                  ? a.price - b.price
                  : sort == "dec"
                  ? b.price - a.price
                  : null
              )
              .map((product, i) => (
                <ProductList key={i} product={product} />
              ))}
          </div>

          <ReactPaginate
            className="pagination"
            breakLabel="..."
            nextLabel=" >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< "
            renderOnZeroPageCount={null}
          />
        </>
      )}
    </div>
  );
};

export default Product;
