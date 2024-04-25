import { Grid } from "@chakra-ui/react";
import mixpanel from "mixpanel-browser";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { getProductCategory, getProducts } from "../../redux/productSlice";
import Loading from "../Loading";
import Product from "./Product";

export default function Products({ category, sort }) {
  const dispatch = useDispatch();
  const { products, productsStatus } = useSelector((state) => state.products);

  useEffect(() => {
    if (category) {
      dispatch(getProductCategory(category));
    } else {
      dispatch(getProducts());
    }
  }, [dispatch, category]);

  const itemsPerPage = 6;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };

  return (
    <div>
      {productsStatus === "LOADING" ? (
        <Loading />
      ) : (
        <>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap={6}
            w="full"
          >
            {currentItems
              ?.sort((a, b) =>
                sort === "increment" ? a.price - b.price : b.price - a.price
              )
              .map((product, id) => (
                <Product
                  onClick={() => {
                    mixpanel.track("product_clicked", {
                      product: product.name,
                      price: product.price,
                      category: product.category,
                    });
                  }}
                  key={id}
                  product={product}
                />
              ))}
          </Grid>
          <ReactPaginate
            className="paginate"
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
          />
        </>
      )}
    </div>
  );
}
