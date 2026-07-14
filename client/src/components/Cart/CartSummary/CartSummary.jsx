import "./CartSummary.css";

import useCart from "../../../hooks/useCart";

const CartSummary = () => {

    const {
        cart,
        clearCart
    } = useCart();

    return (

        <div className="summary">

            <h2>
                Order Summary
            </h2>

            <div className="row">

                <span>Subtotal</span>

                <span>
                    ₹{cart.subtotal}
                </span>

            </div>

            <div className="row">

                <span>Tax</span>

                <span>
                    ₹{cart.tax}
                </span>

            </div>

            <div className="row">

                <span>Shipping</span>

                <span>
                    ₹{cart.shipping}
                </span>

            </div>

            <hr />

            <div className="row total">

                <span>Total</span>

                <span>
                    ₹{cart.total}
                </span>

            </div>

            <button className="checkout-btn">

                Checkout

            </button>

            <button
                className="clear-btn"
                onClick={clearCart}
            >

                Clear Cart

            </button>

        </div>

    );

};

export default CartSummary;