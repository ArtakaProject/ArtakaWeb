import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { RouteWithLayout } from './layout/common';
import { MainLayout, MainLayoutSidebar } from './layout';

import {
  Home as HomePage,
  Category as CategoryPage,
  Products as ProductPage,
  Dashboard as DashboardPage,
  AddProduct,
  PageNotFound
} from './pages';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Login from './components/Login';
import LandingLayout from './layout/LandingLayout';
import Register from './components/Register';

export default function Routes() {
  return (
    <Switch>
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
      <RouteWithLayout
        component={HomePage}
        exact
        layout={MainLayout}
        pageTitle=""
        path="/eshopay/home"
      /> */}

      <RouteWithLayout
        component={DashboardPage}
        exact
        layout={MainLayoutSidebar}
        pageTitle="Dashboard"
        path="/eshopay/seller/dashboard"
      />

      <RouteWithLayout
        component={PageNotFound}
        exact
        layout={MainLayoutSidebar}
        pageTitle="404"
        path="/eshopay/not-found"
      />

      <RouteWithLayout
        component={CategoryPage}
        exact
        layout={MainLayoutSidebar}
        pageTitle="Category"
        path="/eshopay/seller/category"
      />
      <RouteWithLayout
        component={ProductPage}
        exact
        layout={MainLayoutSidebar}
        pageTitle="Products"
        path="/eshopay/seller/product"
      />
      <RouteWithLayout
        component={AddProduct}
        exact
        layout={MainLayoutSidebar}
        pageTitle="Products"
        path="/eshopay/seller/product/add"
      />
      <Redirect to="/eshopay/not-found" status="404" />
    </Switch>
  );
};