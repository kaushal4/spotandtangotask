"use client";
import { useEffect, useState } from "react";
import Filter from "./components/filter";
import CartList from "./components/cartList";
import ProductList from "./components/productList";
import style from "./page.module.css"

export default function Home() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("all");
  const [cartList, setCartList] = useState([]);

  const updateCartList = (productId, decrease = false) => {
    const product = products.find((product) => product.id === productId);
    const newCartList = [...cartList];
    const productIndex = newCartList.findIndex((cartProduct) => cartProduct.id === productId);

    if (productIndex === -1) {
      newCartList.push({ ...product, quantity: 1 });
    } else {
      if (decrease) {
        newCartList[productIndex].quantity -= 1;

        if (newCartList[productIndex].quantity === 0) {
          newCartList.splice(productIndex, 1);
        }
      } else {
        newCartList[productIndex].quantity += 1;
      }
    }

    setCartList(newCartList);
  }

  const getProdductQuantity = (productId) => {
    const product = cartList.find((cartProduct) => cartProduct.id === productId);

    return product ? product.quantity : 0;
  }

  useEffect(() => {
    fetch("https://s3.us-east-1.amazonaws.com/assets.spotandtango/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, [])

  return (
      <div className={style.pageContainer}>
          <main>
              <h1>Coding challenge for Spot and Tango</h1>
              <div>
                  <Filter filter={filter} setFilter={setFilter} />
              </div>
              <div>
                  <ProductList
                      products={products}
                      updateCartList={updateCartList}
                      getProdductQuantity={getProdductQuantity}
                      filter={filter}
                  />
              </div>
              <div>
                  <h2>Cart List: </h2>
                  {cartList.map((product) => (
                      <CartList
                          key={product.id}
                          {...product}
                          quantity={getProdductQuantity(product.id)}
                          updateCartList={updateCartList}
                      />
                  ))}
              </div>
          </main>
          <footer className={style.footer}><a href="https://kaushaldamania.com">Kaushal Damania</a></footer>
      </div>
  );
}
