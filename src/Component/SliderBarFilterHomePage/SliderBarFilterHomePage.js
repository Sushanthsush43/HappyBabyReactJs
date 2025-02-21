import React, { useState } from "react";

const SidebarFilter = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showMore, setShowMore] = useState(false);

  // Sample product categories with counts
  const productCategories = [
    { name: "Baby Care", count: 12 },
    { name: "Baby Food", count: 8 },
    { name: "Baby Clothes", count: 15 },
    { name: "Baby Toys", count: 10 },
    { name: "Baby Accessories", count: 5 },
    { name: "Baby Health", count: 7 },
    { name: "Baby Pock", count: 7 },
    { name: "Baby Slide", count: 7 },
    { name: "Baby Jhon", count: 7 },
  ];

  // Toggle collapse state
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Toggle show more state
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div
      style={{ background: "#e0e5e0" }} // Ensures exact background color
      className="w-64 p-3 border-r border-gray-300 ml-4 rounded-lg shadow-md"
    >
      {/* Filter Title */}
      <h2 className="text-lg font-bold text-green-700 mb-4">Filter:</h2>

      {/* Collapsible Product Type Section */}
      <div className="mb-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={toggleCollapse}
        >
          <h3 className="font-semibold text-gray-800">Product Type</h3>
          <svg
            className={`w-4 h-4 transform transition-transform ${
              isCollapsed ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        {/* Product Type List */}
        {!isCollapsed && (
          <div className="mt-2">
            {productCategories
              .slice(0, showMore ? productCategories.length : 5)
              .map((category, index) => (
                <div key={index} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    id={`category-${index}`}
                    className="form-checkbox h-4 w-4 text-green-600 border-gray-400 rounded"
                  />
                  <label
                    htmlFor={`category-${index}`}
                    className="ml-2 text-sm text-gray-800"
                  >
                    {category.name} ({category.count})
                  </label>
                </div>
              ))}

            {/* Show More Link */}
            {productCategories.length > 3 && (
  <span
    onClick={toggleShowMore}
    className="text-sm text-green-700 hover:text-green-800 mt-2 font-medium underline cursor-pointer"
  >
    {showMore ? "- Show Less" : "+ Show More"}
  </span>
)}
            
          </div>
        )}
      </div>
    </div>
  );
};

export default SidebarFilter;
