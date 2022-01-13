import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { RouteWithLayout } from './layout/common';
import { MainLayout, MainLayoutSidebar, AdminLayout } from './layout';

import {
  Home as HomePage,
  Category as CategoryPage,
  Products as ProductPage,
  Dashboard as DashboardPage,
  Customer as customerPage,
  ShopPerformance as ReportPage,
  AddCust,EditCust,
  AddProduct, EditProduct,
  PageNotFound,
  LandingPage
} from './pages';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Login from './components/Login';
import LandingLayout from './layout/LandingLayout';
import LoginLayout from './layout/LoginLayout';
import Register from './components/Register';

export default function Routes() {
  return (
    <Switch>
      <Redirect exact from="/" to="/artaka/landing" />
      
     {/*  <Route path="/artaka/signup" component={SignUp} />
      <Route path="/artaka/signin" component={Login} /> */}

      <RouteWithLayout
        component={Register}
        exact
        layout={LoginLayout}
        pageTitle=""
        path="/artaka/signup"
      />

      <RouteWithLayout
        component={Login}
        exact
        layout={LoginLayout}
        pageTitle=""
        path="/artaka/signin"
      />
      {/* 
      <RouteWithLayout
        component={HomePage}
        exact
        layout={MainLayout}
        pageTitle=""
        path="/artaka/home"
      /> */}

        <RouteWithLayout
        component={LandingPage}
        exact
        layout={LandingLayout}
        pageTitle="Landing"
        path="/artaka/landing"
      />

       <RouteWithLayout
        component={DashboardPage}
        exact
        layout={AdminLayout}
        pageTitle="Dashboard"
        path="/artaka/seller/dashboard"
      />

      <RouteWithLayout
        component={PageNotFound}
        exact
        layout={AdminLayout}
        pageTitle="404"
        path="/artaka/not-found"
      />

      {/* <RouteWithLayout
        component={CategoryPage}
        exact
        layout={AdminLayout}
        pageTitle="Category"
        path="/artaka/seller/category"
      /> */}

      <RouteWithLayout
        component={ProductPage}
        exact
        layout={AdminLayout}
        pageTitle="Produk"
        path="/artaka/seller/product"
      />
      <RouteWithLayout
        component={AddProduct}
        exact
        layout={AdminLayout}
        pageTitle="Tambah Produk"
        path="/artaka/seller/product/add"
      />
      <RouteWithLayout
        component={EditProduct}
        exact
        layout={AdminLayout}
        pageTitle="Edit Produk"
        path="/artaka/seller/product/edit"
      />
      
      <RouteWithLayout
        component={customerPage}
        exact
        layout={AdminLayout}
        pageTitle="Daftar Pelanggan"
        path="/artaka/seller/customer"
      />
      <RouteWithLayout
        component={AddCust}
        exact
        layout={AdminLayout}
        pageTitle="Tambahkan Pelanggan"
        path="/artaka/seller/customer/add"
      />
      <RouteWithLayout
        component={EditCust}
        exact
        layout={AdminLayout}
        pageTitle="Info Pelanggan"
        path="/artaka/seller/customer/edit"
      />
      <RouteWithLayout
        component={ReportPage}
        exact
        layout={AdminLayout}
        pageTitle="Performansi Toko"
        path="/artaka/seller/report"
      />

      <Redirect to="/artaka/not-found" status="404" />
    </Switch>
  );
};


