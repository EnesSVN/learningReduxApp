import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPrdocts } from "../../redux/productSlice";
import Loading from "../Loading";
import ProductList from "./ProductList";
import ReactPaginate from "react-paginate";
const Product = () => {
  const dispatch = useDispatch();
  const { products, productStatus } = useSelector((state) => state.products);
  const [itemOffset, setItemOffset] = useState(0);
  useEffect(() => {
    dispatch(getPrdocts());
  }, [dispatch]);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const itemsPerPage = 6;
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div>
      {productStatus == "LOADING" ? (
        <Loading />
      ) : (
        <>
          (
          <div className=" flex flex-wrap justify-center">
            {currentItems?.map((product, i) => (
              <ProductList key={i} product={product} />
            ))}
          </div>
          )
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
