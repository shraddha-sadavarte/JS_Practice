import { useDispatch } from "react-redux";
import { addItem } from "../redux/slice";

const Product = () => {
  const products = [
    { id: 1, name: "iPhone", price: 999 },
    { id: 2, name: "Headphones", price: 199 },
    { id: 3, name: "Smart Watch", price: 149 },
  ];

  const dispatch = useDispatch(); //to dispatch addItem action to the redux store

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((p) => (
        <div
          key={p.id}
          className="bg-white shadow p-5 rounded-lg flex flex-col gap-3"
        >
          <h2 className="text-lg font-medium">{p.name}</h2>
          <p className="text-gray-700 font-semibold">₹{p.price}</p>

          <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            onClick={()=>{
                console.log("Adding to cart:", p);
                dispatch(addItem(p))
            }}
        >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Product;
