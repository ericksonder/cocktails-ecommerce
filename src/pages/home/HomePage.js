import React, { useEffect, useState } from "react";
import "./styles.css";
import ProductsList from "../../components/ProductsList/ProductsList";
import { getCocktails } from "../../services/services";
import Header from "../../components/Header/Header";
import ShoppingCart from "../../components/ShoppingCart/ShoppingCart";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [showShoppingCart, setShowShoppingCart] = useState(false);

  useEffect(() => {
    getCocktails().then((data) => setProducts(data));
  }, []);

  return (
    <div className="homepage">
      <div>
        <div>
          <Header setShowShoppingCart={setShowShoppingCart}/>
        </div>
        <div>
          <ProductsList products={products} />
        </div>
      </div>

      
      <ShoppingCart showShoppingCart={showShoppingCart} setShowShoppingCart={setShowShoppingCart}/>
    </div>
  );
};

export default HomePage;
