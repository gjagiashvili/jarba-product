import { AddressBar } from "../components/AddressBar.jsx";
import { Header } from "../components/Header.jsx";
import { Categories } from "../components/Categories";
import { AllProductsList } from "../components/AllProductsList";

export const Products = () => {
  return (
    <div>
      <AddressBar />
      <Header />
      <Categories />
      <AllProductsList />
    </div>
  );
};
