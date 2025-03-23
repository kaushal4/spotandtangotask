import { useEffect, useState } from "react";
import Pagination from "./pagination";
import ProductCard from "./productCard";
import style from "./productList.module.css"

export default function ProductList({
    products,
    getProdductQuantity,
    updateCartList,
    filter
}) {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(6);

    useEffect(() => {
        setCurrentPage(1);
    }, [filter]);

    console.log(products)

    const filteredProducts =
        products?.filter(
            (product) =>
                filter === "all" || product.group.toLowerCase() === filter
        ) || [];

    console.log(filteredProducts)

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredProducts.slice(
        indexOfFirstItem,
        indexOfLastItem
    );

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <div className={style.productListContainer}>
                <h2>Product List:</h2>
                <div className={style.productGrid}>
                    {currentItems?.map((product) => (
                        <ProductCard
                            key={product.id}
                            {...product}
                            quantity={getProdductQuantity(product.id)}
                            updateCartList={updateCartList}
                        />
                    )) || <p>Loading...</p>}
                </div>
            </div>

            {filteredProducts.length > 0 && (
                <Pagination
                    itemsPerPage={itemsPerPage}
                    totalItems={filteredProducts.length}
                    paginate={paginate}
                    currentPage={currentPage}
                />
            )}
        </>
    );
}