import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../redux/slice";

const Cart = () => {

    const cartItems = useSelector((state) => state.cart.items); //it pulls cart items from the redux store
    const dispatch = useDispatch();

    //if items are present in the cart, display them else show empty cart message
    if (cartItems.length > 0) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>
        <ul className="space-y-4">
            {cartItems.map((item, index) => (
                <li key={index} className="bg-white shadow p-4 rounded-lg flex justify-between items-center">
                    <div>
                        <h3 className="text-lg font-medium">{item.name}</h3>
                        <p className="text-gray-700">₹{item.price}</p>
                    </div>
                    <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
                        onClick={() => dispatch(removeItem(item.id))}
                    >Remove</button>
                </li>
            ))}
        </ul>
      </div>
    );
  } else {
    return (
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">Your Cart is Empty</h2>
        <p className="text-gray-600">Add some products to your cart.</p>
      </div>
    );
  }
};
export default Cart;
