import { Link } from "react-router-dom";
import "./EmptyCart.css";

const EmptyCart = () => {

    return (

        <div className="empty-cart">

            <h2>
                Your Cart is Empty
            </h2>

            <p>
                Looks like you haven't added anything yet.
            </p>

            <Link
                to="/products"
                className="shop-btn"
            >
                Continue Shopping
            </Link>

        </div>

    );

};

export default EmptyCart;