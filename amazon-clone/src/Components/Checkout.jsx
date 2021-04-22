import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import { useStateValue } from "../StateProvider";

const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <>
      <div className="checkout">
        <div className="checkout_left">
          <img
            className="checkout_ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt="add-banner"
          />
          {basket?.length === 0 ? (
            <div className="emptybasket_title">
              <h2> Your Shopping Basket is empty</h2>
              <p>
                You have no items in your basket. To buy one or more items,
                click "Add to basket" next to the item
              </p>
            </div>
          ) : (
            <div>
              <h2 className="checkout_title">Your Shopping Basket</h2>
              {/**List all of the checkout products */}
              {basket.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          )}
        </div>
        {basket.length > 0 && (
          <div className="checkout_right">
            <h1>Subtotal</h1>
            <Subtotal />
          </div>
        )}
      </div>
    </>
  );
};

export default Checkout;
