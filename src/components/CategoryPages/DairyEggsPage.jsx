import CategoryPage from "../CategoryPage/CategoryPage";

const DairyEggsPage = ({ onNavigateBack }) => {
  return (
    <CategoryPage categoryType="dairy-eggs" onNavigateBack={onNavigateBack} />
  );
};

export default DairyEggsPage;
