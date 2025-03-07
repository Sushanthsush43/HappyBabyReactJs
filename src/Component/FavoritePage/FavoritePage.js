import React from "react";
import { useLocation } from "react-router-dom";

const FavoritesPage = () => {
  const location = useLocation();
  const favoriteProductIds = location.state?.favorites || [];

  // Sample products data (replace with your actual data)
  const products = [
    {
      id: 1,
      image: "img/sbmayuroil.webp",
      name: "Submayur Oil",
      price: "₹19.99",
      description: "Helps protect infections",
    },
    // Add more products here...
  ];

  // Filter products to display only favorites
  const favoriteProducts = products.filter((product) =>
    favoriteProductIds.includes(product.id.toString())
  );

  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <h1 className="text-3xl font-bold mb-8">Your Favorites</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {favoriteProducts.map((product) => (
          <div
            key={product.id}
            className="rounded overflow-hidden shadow-lg bg-white"
          >
            <div className="h-64 flex items-center justify-center bg-gray-100">
              <img
                className="w-full h-full object-cover"
                src={product.image}
                alt={product.name}
              />
            </div>
            <div className="px-6 py-4">
              <h2 className="font-semibold text-lg">{product.name}</h2>
              <p className="text-gray-500 text-sm">{product.description}</p>
              <p className="text-1xl font-bold text-black">
                MRP: {product.price}
              </p>
              <div className="mt-4 flex gap-2">
                <button className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition">
                  Add to Cart
                </button>
                <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;