import CategoryPage from "../CategoryPage/CategoryPage";

const FruitsVeggiesPage = ({ onNavigateBack }) => {
  return (
    <CategoryPage
      categoryType="fruits-veggies"
      onNavigateBack={onNavigateBack}
    />
  );
};

export default FruitsVeggiesPage;
