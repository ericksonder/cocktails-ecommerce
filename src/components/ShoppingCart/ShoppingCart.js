import React, { useContext } from "react";
import ContextWrapper from "../../context/contextWrapper";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";
import "./styles.css";

const ShoppingCart = ({ setShowShoppingCart, showShoppingCart }) => {
  const {
    shoppingCart,
    increaseProductQuantity,
    decreaseProductQuantity,
    deleteDrink,
  } = useContext(ContextWrapper);

  return (
    <div className={`shopping-cart ${showShoppingCart && "--show"}`}>
      <div className="shopping-cart__header">
        <button
          onClick={() => setShowShoppingCart(false)}
          className="btn-hide-cart"
        >
          <i className="bx bx-chevron-left bx-md"></i>
        </button>
        <h4>Carrito de Compras</h4>
      </div>

      <div className="shopping-cart__body">
        {shoppingCart.drinks.length === 0 ? (
          <p>Carrito vacio</p>
        ) : (
          shoppingCart.drinks.map((drink) => (
            <CartItem
              key={drink.id}
              drink={drink}
              increaseProductQuantity={increaseProductQuantity}
              decreaseProductQuantity={decreaseProductQuantity}
              deleteDrink={deleteDrink}
            />
          ))
        )}
      </div>

      <div className="shopping-cart__footer">
        <div className="total">
          <p className="total__title">Total</p>
          <div className="total__info">
            <p className="cantidad-items">
              ({shoppingCart.drinks.length} items)
            </p>
            <p className="monto">S/ {shoppingCart.total_cost}</p>
          </div>
        </div>
        <Button size="lg">Continuar</Button>
      </div>
    </div>
  );
};

export default ShoppingCart;
