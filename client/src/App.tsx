import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/ui/layout/Layout";
import HomePage from "./pages/HomePage";
import PageLoader from "./components/ui/PageLoader";

const Contact = React.lazy(() => import("./pages/Contact"));
const About = React.lazy(() => import("./pages/About"));
const Login = React.lazy(() => import("./pages/Login"));
const Signup = React.lazy(() => import("./pages/Signup"));

const App = () => {
  return (
    <Routes>
      {/* Routes with Layout (Header + Footer) */}
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="about"
          element={
            <Suspense fallback={<PageLoader />}>
              <About />
            </Suspense>
          }
        />
        {/* <Route path="shop" element={<Shop />} /> */}
        {/* Add more routes here that should have Header + Footer */}
        <Route
          path="contact"
          element={
            <Suspense fallback={<PageLoader />}>
              <Contact />
            </Suspense>
          }
        />
        {/* <Route path="product/:id" element={<ProductDetail />} /> */}
      </Route>

      {/* Routes without Layout (no Header + Footer) */}
      <Route
        path="/login"
        element={
          <Suspense fallback={<PageLoader />}>
            <Login />
          </Suspense>
        }
      />
      <Route
        path="/signup"
        element={
          <Suspense fallback={<PageLoader />}>
            <Signup />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default App;
