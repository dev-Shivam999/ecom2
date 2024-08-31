import "./App.css";
import { Routes, Route , BrowserRouter} from "react-router-dom";

import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Blog from "./Components/Blog/Blog";
import Home from "./Components/Main/Home";
import Shop from "./Components/Main/Shop";
import About from "./Components/Main/About";
import Contact from "./Components/Main/Contact";
import Cart from "./Components/Main/Cart";
import S_product from "./Components/Main/S_product";

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          {/* <Route path="/sproduct" element={<S_product />}></Route> */}
          {/* <Route path="/sproduct" element={<S_product />}></Route> */}
        </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
