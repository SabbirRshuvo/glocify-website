import FoodCategory from "../FoodCategory/FoodCategory";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";

const Home = ({ onNavigate }) => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Hero />
      <FoodCategory onNavigate={onNavigate} />
    </div>
  );
};

export default Home;
