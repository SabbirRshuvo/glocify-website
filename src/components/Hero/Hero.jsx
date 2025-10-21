import {
  FaCheckCircle,
  FaInfoCircle,
  FaShoppingCart,
  FaStar,
} from "react-icons/fa";
import banner from "../../assets/grocery.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-green-50 via-white to-orange-50 min-h-screen">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-screen pt-20 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
            {/* Left side - Text content */}
            <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
              {/* Badge */}
              <div className="inline-flex items-center">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-orange-100 text-orange-800 border border-orange-200">
                  <FaCheckCircle className="w-4 h-4 mr-2" />
                  Export Best Quality
                </span>
              </div>

              {/* Main heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                Tasty Organic{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-green-600 to-green-800">
                  Fruits
                </span>{" "}
                &{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-600 to-orange-800">
                  Veggies
                </span>{" "}
                In Your City
              </h1>

              {/* Description */}
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Bred for high content of beneficial nutrients. Our products are
                all fresh and healthy, sourced directly from local farms to
                ensure maximum quality and taste.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="inline-flex items-center px-8 py-4 bg-linear-to-r from-green-600 to-green-700 text-white font-semibold rounded-full hover:from-green-700 hover:to-green-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                  <FaShoppingCart className="w-5 h-5 mr-2" />
                  Shop Now
                </button>
                <button className="inline-flex items-center px-8 py-4 bg-white text-gray-700 font-semibold rounded-full border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg">
                  <FaInfoCircle className="w-5 h-5 mr-2" />
                  Learn More
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                <div className="text-center lg:text-left">
                  <div className="text-2xl lg:text-3xl font-bold text-gray-900">
                    500+
                  </div>
                  <div className="text-sm text-gray-600">Products</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl lg:text-3xl font-bold text-gray-900">
                    1000+
                  </div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl lg:text-3xl font-bold text-gray-900">
                    100%
                  </div>
                  <div className="text-sm text-gray-600">Organic</div>
                </div>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="relative order-1 lg:order-2">
              <div className="relative">
                {/* Main image container */}
                <div className="relative z-10 mx-auto max-w-lg lg:max-w-none">
                  <img
                    src={banner}
                    alt="Fresh organic fruits and vegetables"
                    className="w-full h-auto object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Floating elements */}
                <div className="absolute top-4 right-4 lg:top-8 lg:right-8 bg-white rounded-2xl shadow-lg p-4 transform rotate-12 hover:rotate-6 transition-transform duration-300">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <FaCheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Fresh</div>
                      <div className="text-xs text-gray-500">100% Organic</div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 lg:bottom-8 lg:left-8 bg-white rounded-2xl shadow-lg p-4 transform -rotate-12 hover:-rotate-6 transition-transform duration-300">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                      <FaStar className="w-4 h-4 text-orange-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Premium</div>
                      <div className="text-xs text-gray-500">
                        Quality Assured
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
