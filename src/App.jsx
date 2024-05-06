import mixpanel from "mixpanel-browser";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Footer from "./components/Footer";
import Header from "./components/header/Header";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Contact from "./pages/Contact";
import Details from "./pages/Details";
import FAQ from "./pages/FAQ";
import Home from "./pages/Home";
import ShoppingCart from "./pages/ShoppingCart";
import Stores from "./pages/Stores";
import { ROUTES } from "./utils/routes";
export default function App() {
  mixpanel.init(import.meta.env["VITE_MIXPANEL_TOKEN"]);
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} exact />
        <Route path={ROUTES.ABOUT} element={<About />} exact />
        <Route path={ROUTES.PRODUCTDETAILS} element={<Details />} exact />
        <Route path={ROUTES.SHOPPINGCART} element={<ShoppingCart />} exact />
        <Route path={ROUTES.BLOG} element={<Blog />} exact />
        <Route path={ROUTES.BLOGDETAILS} element={<BlogDetails />} exact />
        <Route path={ROUTES.STORES} element={<Stores />} exact />
        <Route path={ROUTES.FAG} element={<FAQ />} exact />
        <Route path={ROUTES.CONTACT} element={<Contact />} exact />
      </Routes>
      <Footer />
    </Router>
  );
}
