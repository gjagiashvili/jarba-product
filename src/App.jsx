import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { Test } from "./pages/Test.jsx";
import { Products } from "./pages/Products.jsx";
import { Product } from "./pages/Product.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/contact-us" element={<h1>Contact</h1>} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<h1>Cart</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
