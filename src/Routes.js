import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { RouteWithLayout } from './layout/common';
import { MainLayout, MainLayoutSidebar } from './layout';

import {
  Home as HomePage,
  Category as CategoryPage,
  Products as ProductPage,
  Dashboard as DashboardPage,
<<<<<<< HEAD
  Customer as customerPage,
  ShopPerformance as ReportPage,
  AddCust,EditCust,
  AddProduct, EditProduct,
=======
  AddProduct,
>>>>>>> origin/chalid
  PageNotFound
} from './pages';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
<<<<<<< HEAD
=======
import Login from './components/Login';
import LandingLayout from './layout/LandingLayout';
import Register from './components/Register';
>>>>>>> origin/chalid

export default function Routes() {
  return (
    <Switch>
<<<<<<< HEAD
      {/* <Redirect exact from="/" to="/artaka/home" /> */}
      <Redirect exact from="/" to="/artaka/seller/dashboard" />
      <Redirect exact from="/signin/" to="/artaka/signin" />
      <Route path="/artaka/signup" component={SignUp} />
      <Route path="/artaka/signin" component={SignIn} />
=======
      <Redirect exact from="/" to="/eshopay/signin" />
      
     {/*  <Route path="/eshopay/signup" component={SignUp} />
      <Route path="/eshopay/signin" component={Login} /> */}

      <RouteWithLayout
        component={Register}
        exact
        layout={LandingLayout}
        pageTitle=""
        path="/eshopay/signup"
      />

      <RouteWithLayout
        component={Login}
        exact
        layout={LandingLayout}
        pageTitle=""
        path="/eshopay/signin"
      />
      {/* 
>>>>>>> origin/chalid
      <RouteWithLayout
        component={HomePage}
        exact
        layout={MainLayout}
        pageTitle=""
<<<<<<< HEAD
        path="/artaka/home"
      />
=======
        path="/eshopay/home"
      /> */}
>>>>>>> origin/chalid

      <RouteWithLayout
        component={DashboardPage}
        exact
        layout={MainLayoutSidebar}
        pageTitle="Dashboard"
<<<<<<< HEAD
        path="/artaka/seller/dashboard"
=======
        path="/eshopay/seller/dashboard"
>>>>>>> origin/chalid
      />

      <RouteWithLayout
        component={PageNotFound}
        exact
        layout={MainLayoutSidebar}
        pageTitle="404"
<<<<<<< HEAD
        path="/artaka/not-found"
=======
        path="/eshopay/not-found"
>>>>>>> origin/chalid
      />

      <RouteWithLayout
        component={CategoryPage}
        exact
        layout={MainLayoutSidebar}
        pageTitle="Category"
<<<<<<< HEAD
        path="/artaka/seller/category"
=======
        path="/eshopay/seller/category"
>>>>>>> origin/chalid
      />
      <RouteWithLayout
        component={ProductPage}
        exact
        layout={MainLayoutSidebar}
        pageTitle="Products"
<<<<<<< HEAD
        path="/artaka/seller/product"
=======
        path="/eshopay/seller/product"
>>>>>>> origin/chalid
      />
      <RouteWithLayout
        component={AddProduct}
        exact
        layout={MainLayoutSidebar}
        pageTitle="Products"
<<<<<<< HEAD
        path="/artaka/seller/product/add"
      />
      <RouteWithLayout
        component={EditProduct}
        exact
        layout={MainLayoutSidebar}
        pageTitle="Products"
        path="/artaka/seller/product/edit"
      />
      <RouteWithLayout
        component={customerPage}
        exact
        layout={MainLayoutSidebar}
        pageTitle="Daftar Pelanggan"
        path="/customer"
      />
      <RouteWithLayout
        component={AddCust}
        exact
        layout={MainLayoutSidebar}
        pageTitle="Tambahkan Pelanggan"
        path="/customer/add"
      />
      <RouteWithLayout
        component={EditCust}
        exact
        layout={MainLayoutSidebar}
        pageTitle="Info Pelanggan"
        path="/customer/edit"
      />
      <RouteWithLayout
        component={ReportPage}
        exact
        layout={MainLayoutSidebar}
        pageTitle="Performansi Toko"
        path="/report/shopperformance"
      />
      <Redirect to="/artaka/not-found" status="404" />
    </Switch>
  );
};


=======
        path="/eshopay/seller/product/add"
      />
      <Redirect to="/eshopay/not-found" status="404" />
    </Switch>
  );
};
>>>>>>> origin/chalid
