import { FaArrowRight } from "react-icons/fa";
import dairyEggsImg from "../../assets/dairy-and-eggs.png";
import fruitsVeggiesImg from "../../assets/fruits-and-veggies.png";
import meatSeafoodImg from "../../assets/meat-and-seafood.png";

const FoodCategory = ({ onNavigate }) => {
  const categories = [
    {
      id: 1,
      title: "Fruits & Veggies",
      description:
        "Fresh organic fruits and vegetables delivered daily from local farms. Rich in vitamins, minerals, and natural goodness.",
      image: fruitsVeggiesImg,
      route: "fruits-veggies",
      bgGradient: "from-green-100 to-green-50",
      buttonColor: "bg-green-600 hover:bg-green-700",
      itemCount: "150+ Items",
    },
    {
      id: 2,
      title: "Dairy & Eggs",
      description:
        "Premium dairy products and farm-fresh eggs. From creamy milk to artisanal cheeses, all sourced from trusted farms.",
      image: dairyEggsImg,
      route: "dairy-eggs",
      bgGradient: "from-blue-100 to-blue-50",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      itemCount: "80+ Items",
    },
    {
      id: 3,
      title: "Meat & Seafood",
      description:
        "High-quality meat and fresh seafood selections. Sustainably sourced and carefully prepared for your table.",
      image: meatSeafoodImg,
      route: "meat-seafood",
      bgGradient: "from-red-100 to-red-50",
      buttonColor: "bg-red-600 hover:bg-red-700",
      itemCount: "90+ Items",
    },
  ];

  const handleSeeAll = (route) => {
    if (onNavigate) {
      onNavigate(route);
    } else {
      // Fallback for when no navigation function is provided
      console.log(`Navigating to: ${route}`);
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
            Shop by{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-600 to-orange-800">
              Category
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover fresh, quality products organized by category. From
            farm-fresh produce to premium meats, we have everything you need for
            a healthy lifestyle.
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`group relative bg-linear-to-br ${category.bgGradient} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden`}
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>

              {/* Category Image */}
              <div className="relative z-10 mb-6">
                <div className="w-full h-48 bg-white rounded-2xl shadow-md flex items-center justify-center overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 space-y-4">
                {/* Item Count Badge */}
                <div className="inline-flex items-center px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700">
                  {category.itemCount}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                  {category.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {category.description}
                </p>

                {/* See All Button */}
                <button
                  onClick={() => handleSeeAll(category.route)}
                  className={`inline-flex items-center px-6 py-3 ${category.buttonColor} text-white font-semibold rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group-hover:shadow-2xl`}
                >
                  See All Products
                  <FaArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodCategory;
