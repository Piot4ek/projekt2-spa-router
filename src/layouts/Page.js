import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductListPage from "../pages/ProductListPage";
import ProductPage from "../pages/ProductPage";
import ContactPage from "../pages/ContactPage";
import AdminPage from "../pages/AdminPage";
import ErrorPage from "../pages/ErrorPage";
import LoginPage from "../pages/LoginPage";

const permission = false;
const Page = () => {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="products" element={<ProductListPage />} />
        <Route path="product/:id" element={<ProductPage />} />
        <Route path="/contacts" element={<ContactPage />} />
        <Route
          path="admin"
          element={
            permission ? <AdminPage /> : <Navigate to="/login" replace />
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {/* <Outlet /> */}
    </>
  );
};

export default Page;
