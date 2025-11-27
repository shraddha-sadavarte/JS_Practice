import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";

const Header = () => {
    const cartCount = useSelector((state) => state.cart.items.length);
  return (
    <div className="w-full flex justify-between items-center px-6 py-4 bg-white shadow">
      <h1 className="text-2xl font-bold">MyStore 🛒</h1>

      <div className="relative cursor-pointer">
        <ShoppingCart size={28} />
        {/* Badge */}
        {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs px-2">
                {cartCount}
            </span>
        )}
        
      </div>
    </div>
  );
};

export default Header;
