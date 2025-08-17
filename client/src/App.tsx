import { Route, Routes } from "react-router-dom";
import Layout from "./components/ui/layout/Layout";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Routes>
      {/* Routes with Layout (Header + Footer) */}
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<About />} />
        {/* <Route path="shop" element={<Shop />} /> */}
        {/* Add more routes here that should have Header + Footer */}
        <Route path="contact" element={<Contact />} />
        {/* <Route path="product/:id" element={<ProductDetail />} /> */}
      </Route>

      {/* Routes without Layout (no Header + Footer) */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default App;
