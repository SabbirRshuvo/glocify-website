import { useState } from "react";
import DairyEggsPage from "./components/CategoryPages/DairyEggsPage";
import FruitsVeggiesPage from "./components/CategoryPages/FruitsVeggiesPage";
import MeatSeafoodPage from "./components/CategoryPages/MeatSeafoodPage";
import Home from "./components/Home/Home";

function App() {
  const [currentRoute, setCurrentRoute] = useState("home");

  // Simple navigation function
  const navigate = (route) => {
    setCurrentRoute(route);
  };

  // Render different pages based on current route
  const renderCurrentPage = () => {
    switch (currentRoute) {
      case "fruits-veggies":
        return <FruitsVeggiesPage onNavigateBack={() => navigate("home")} />;
      case "dairy-eggs":
        return <DairyEggsPage onNavigateBack={() => navigate("home")} />;
      case "meat-seafood":
        return <MeatSeafoodPage onNavigateBack={() => navigate("home")} />;
      default:
        return <Home onNavigate={navigate} />;
    }
  };

  return <div className="App">{renderCurrentPage()}</div>;
}

export default App;
