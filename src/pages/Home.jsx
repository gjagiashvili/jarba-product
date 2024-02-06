import { AddressBar } from "../components/AddressBar.jsx";
import { Header } from "../components/Header.jsx";
import { Categories } from "../components/Categories.jsx";
import { PopularProducts } from "../components/PopularProducts.jsx";
import { BestDeal } from "../components/BestDeal.jsx";

export const Home = () => {
  return (
    <>
      <AddressBar />
      <Header />
      <Categories />
      <PopularProducts />
      <BestDeal />
    </>
  );
};
