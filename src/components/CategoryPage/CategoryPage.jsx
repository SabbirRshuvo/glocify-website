import { FaArrowLeft, FaPlus } from "react-icons/fa";

// Import category images
import dairyBanner from "../../assets/dairy-banner.jpg";
import fruitsVeggiesBanner from "../../assets/fruits-banner.jpg";
import seafoodBanner from "../../assets/seafood-banner.jpg";

// Import product images
import banana from "../../assets/banana.png";
import beef from "../../assets/beef.png";
import broccoli from "../../assets/broccoli.png";
import butter from "../../assets/butter.png";
import cabbage from "../../assets/cabbage.png";
import cheese from "../../assets/cheese.png";
import chickenBreast from "../../assets/chicken-breast.png";
import eggs from "../../assets/eggs.png";
import grapes from "../../assets/grapes.png";
import kiwi from "../../assets/kiwi.png";
import milk from "../../assets/milk.png";
import salmon from "../../assets/salmon.png";
import shrimp from "../../assets/shrimp.png";
import strawberry from "../../assets/strawberry.png";
import tilapia from "../../assets/tilapia.png";
import yogurt from "../../assets/yogurt.png";

const CategoryPage = ({ categoryType = "fruits-veggies", onNavigateBack }) => {
  // Category data configuration
  const categoryData = {
    "fruits-veggies": {
      title: "Fruits & Veggies",
      subtitle: "Fresh Organic Produce",
      description:
        "Farm-fresh fruits and vegetables packed with nutrients and natural goodness",
      banner: fruitsVeggiesBanner,
      color: "green",
      products: [
        {
          id: 1,
          name: "Fresh Bananas",
          price: "$2.99",
          unit: "per bunch",
          image: banana,
          discount: "20%",
        },
        {
          id: 2,
          name: "Organic Broccoli",
          price: "$3.49",
          unit: "per head",
          image: broccoli,
        },
        {
          id: 3,
          name: "Green Cabbage",
          price: "$1.99",
          unit: "per head",
          image: cabbage,
        },
        {
          id: 4,
          name: "Sweet Grapes",
          price: "$4.99",
          unit: "per lb",
          image: grapes,
          discount: "15%",
        },
        {
          id: 5,
          name: "Fresh Kiwi",
          price: "$0.99",
          unit: "each",
          image: kiwi,
        },
        {
          id: 6,
          name: "Organic Strawberries",
          price: "$5.99",
          unit: "per box",
          image: strawberry,
          discount: "25%",
        },
      ],
    },
    "dairy-eggs": {
      title: "Dairy & Eggs",
      subtitle: "Premium Dairy Products",
      description:
        "Fresh dairy products and farm eggs from trusted local sources",
      banner: dairyBanner,
      color: "blue",
      products: [
        {
          id: 7,
          name: "Whole Milk",
          price: "$3.99",
          unit: "per gallon",
          image: milk,
        },
        {
          id: 8,
          name: "Farm Fresh Eggs",
          price: "$4.49",
          unit: "per dozen",
          image: eggs,
          discount: "10%",
        },
        {
          id: 9,
          name: "Cheddar Cheese",
          price: "$6.99",
          unit: "per block",
          image: cheese,
        },
        {
          id: 10,
          name: "Organic Butter",
          price: "$5.49",
          unit: "per stick",
          image: butter,
        },
        {
          id: 11,
          name: "Greek Yogurt",
          price: "$1.99",
          unit: "per cup",
          image: yogurt,
          discount: "20%",
        },
      ],
    },
    "meat-seafood": {
      title: "Meat & Seafood",
      subtitle: "Premium Quality Proteins",
      description:
        "Fresh, sustainably sourced meat and seafood for your healthy meals",
      banner: seafoodBanner,
      color: "red",
      products: [
        {
          id: 12,
          name: "Atlantic Salmon",
          price: "$12.99",
          unit: "per lb",
          image: salmon,
          discount: "15%",
        },
        {
          id: 13,
          name: "Fresh Shrimp",
          price: "$14.99",
          unit: "per lb",
          image: shrimp,
        },
        {
          id: 14,
          name: "Premium Beef",
          price: "$16.99",
          unit: "per lb",
          image: beef,
        },
        {
          id: 15,
          name: "Chicken Breast",
          price: "$8.99",
          unit: "per lb",
          image: chickenBreast,
          discount: "20%",
        },
        {
          id: 16,
          name: "Tilapia Fillet",
          price: "$9.99",
          unit: "per lb",
          image: tilapia,
        },
      ],
    },
  };

  const currentCategory = categoryData[categoryType];
  const colorClasses = {
    green: {
      primary: "text-green-600",
      bg: "bg-green-600",
      bgHover: "hover:bg-green-700",
      border: "border-green-600",
      gradient: "from-green-600 to-green-700",
    },
    blue: {
      primary: "text-blue-600",
      bg: "bg-blue-600",
      bgHover: "hover:bg-blue-700",
      border: "border-blue-600",
      gradient: "from-blue-600 to-blue-700",
    },
    red: {
      primary: "text-red-600",
      bg: "bg-red-600",
      bgHover: "hover:bg-red-700",
      border: "border-red-600",
      gradient: "from-red-600 to-red-700",
    },
  };

  const colors = colorClasses[currentCategory.color];

  const handleAddToCart = (product) => {
    console.log(`Adding ${product.name} to cart`);
    // Here you would typically dispatch an action to add to cart
  };

  const handleGoBack = () => {
    if (onNavigateBack) {
      onNavigateBack();
    } else {
      console.log("Going back to categories");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <section className="relative h-80 lg:h-96 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={currentCategory.banner}
            alt={currentCategory.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="text-center text-white">
              <button
                onClick={handleGoBack}
                className="inline-flex items-center mb-6 text-white/90 hover:text-white transition-colors duration-300"
              >
                <FaArrowLeft className="mr-2 w-4 h-4" />
                Back to Categories
              </button>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
                {currentCategory.title}
              </h1>
              <p className="text-xl lg:text-2xl mb-2 text-orange-300">
                {currentCategory.subtitle}
              </p>
              <p className="text-lg max-w-2xl mx-auto">
                {currentCategory.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our {currentCategory.title} Collection
            </h2>
            <p className="text-lg text-gray-600">
              Discover our premium selection of{" "}
              {currentCategory.title.toLowerCase()}
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {currentCategory.products.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              >
                {/* Product Image */}
                <div className="relative h-48 bg-gray-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Discount Badge */}
                  {product.discount && (
                    <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-bold">
                      -{product.discount}
                    </div>
                  )}

                  {/* Add to Cart Button */}
                  <button
                    onClick={() => handleAddToCart(product)}
                    className={`absolute top-3 right-3 w-10 h-10 ${colors.bg} ${colors.bgHover} text-white rounded-full flex items-center justify-center transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-lg hover:shadow-xl`}
                  >
                    <FaPlus className="w-4 h-4" />
                  </button>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">
                    {product.name}
                  </h3>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className={`text-2xl font-bold ${colors.primary}`}>
                        {product.price}
                      </p>
                      <p className="text-sm text-gray-500">{product.unit}</p>
                    </div>

                    <button
                      onClick={() => handleAddToCart(product)}
                      className={`px-4 py-2 ${colors.bg} ${colors.bgHover} text-white rounded-lg font-medium transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg`}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button
              className={`inline-flex items-center px-8 py-4 bg-gradient-to-r ${colors.gradient} text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
            >
              Load More Products
              <FaPlus className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;
