import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeSection from "../HomePage/HomeSection";
import NavigationSection from "../Navigation/NavigationSection";
import ProductSection from "../ProductPage/ProductSection";
import SingleProductSection from "../singlePorductPage/SingleProductSection";
import ContactUsPage from "../ContactUs/ContactUsPage";
export default function RouterPage() {
  return (
    <Router>
      <NavigationSection />
      <Routes>
        <Route path="/" element={<HomeSection />} />
        <Route path="/product" element={<ProductSection />} />
        <Route path="/product/:id" element={<SingleProductSection />} />
        <Route path="/contactUs" element={<ContactUsPage />} />
      </Routes>
    </Router>
  );
}
