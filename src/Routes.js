import React from 'react';
import { Navigate, useRoutes, Outlet, Switch} from 'react-router-dom';
import { RouteWithLayout } from './layout/common';
import {  AdminLayout, RegisterLayout } from './layout';

import {
  Products as ProductPage,
  Customer,
  Cashier as CashierPage,
  Manual as ManualPage,
  Order, OrderWA, CashFlow,ProfitNLoss,BalanceSheet,
  AddCust,EditCust,
  AddProduct, EditProduct, SettingProduct,
  SettingPromoPoint,PageNotFound,
  LandingPage,
  HelpPage,
  SettingShop,
  SettingOrderOnline,
  Courier,
  OnlinePayment,Printer,
  Receipt,Inbox
} from './pages';
import Login from './components/Login';
import Register from './components/Register'
import LandingLayout from './layout/LandingLayout';
import LoginLayout from './layout/LoginLayout';


export default function Routes(isLoggedIn) {
  
  return useRoutes ([
    {
      path: '/',
      element: <LandingLayout/>,
      children: [
        { path: 'landing', element:<LandingPage/> },
      ]
    },
    {
      path: '/artaka',
      element: <LoginLayout/>,
      children: [
        { path: 'signin', element: <Login/> },
      ]
    }, 
    {
      path: '/artaka',
      element: <RegisterLayout/>,
      children: [
        { path: 'signup', element: <Register/>  },
      ]
    },
    {
      path: '/artaka',
      element: <AdminLayout/>,
      children: [
        { path: 'not-found', element: isLoggedIn ? <PageNotFound/> : <Navigate to="/artaka/signin"/> },
      ]
    },
    {
      path: '/artaka/seller',
      element:  <AdminLayout/>,
      children: [
        { path: 'cashier', element: isLoggedIn ? <CashierPage/> : <Navigate to="/artaka/signin"/>},
        { path: 'manual', element: isLoggedIn ? <ManualPage/> : <Navigate to="/artaka/signin"/>},
        { path: 'help', element: isLoggedIn ? <HelpPage/>: <Navigate to="/artaka/signin"/> },
        { path: 'customer', element: isLoggedIn ? <Customer /> : <Navigate to="/artaka/signin"/>},
        { path: 'inbox', element: isLoggedIn ? <Inbox /> : <Navigate to="/artaka/signin"/>},
        { path: 'order', element: isLoggedIn ? <Order /> : <Navigate to="/artaka/signin"/>},
        { path: 'orderWA', element: isLoggedIn ? <OrderWA /> : <Navigate to="/artaka/signin"/>},
   //     { path: 'add-customer', element: isLoggedIn ? < AddCust/>: <Navigate to="/artaka/signin"/> },
   //     { path: 'edit-customer', element: isLoggedIn ? <EditCust />: <Navigate to="/artaka/signin"/> },
        { path: 'product', element: isLoggedIn ? <ProductPage />: <Navigate to="/artaka/signin"/> },
        { path: 'setting-product', element: isLoggedIn ? <SettingProduct /> : <Navigate to="/artaka/signin"/> },
        { path: 'setting-promo-point', element: isLoggedIn ? <SettingPromoPoint /> : <Navigate to="/artaka/signin"/> },
        { path: 'setting-shop', element: isLoggedIn ? <SettingShop /> : <Navigate to="/artaka/signin"/> },
        { path: 'setting-online-order', element: isLoggedIn ? <SettingOrderOnline /> : <Navigate to="/artaka/signin"/> },
        { path: 'setting-online-order', element: isLoggedIn ? <SettingOrderOnline /> : <Navigate to="/artaka/signin"/> },
        { path: 'printer', element: isLoggedIn ? <Printer /> : <Navigate to="/artaka/signin"/> },
        { path: 'receipt', element: isLoggedIn ? <Receipt /> : <Navigate to="/artaka/signin"/> },
        { path: 'signin', element : <Navigate to="/artaka/signin"/> },
        { path: 'not-found', element: <PageNotFound /> },
      ]
    },
    {
      path: '/artaka/seller/report',
      element:  <AdminLayout/>,
      children: [
        { path: 'cashflow', element: isLoggedIn ? <CashFlow /> : <Navigate to="/artaka/signin"/> },
        { path: 'profitnloss', element: isLoggedIn ? <ProfitNLoss /> : <Navigate to="/artaka/signin"/> },
        { path: 'balancesheet', element: isLoggedIn ? <BalanceSheet/> : <Navigate to="/artaka/signin"/> },
        { path: 'not-found', element: <PageNotFound /> },
      ]
    },
    {
      path: '/artaka/seller/product',
      element:  <AdminLayout/>,
      children: [
        { path: 'add', element: isLoggedIn ? <AddProduct /> : <Navigate to="/artaka/signin"/> },
        { path: 'edit', element: isLoggedIn ? <EditProduct /> : <Navigate to="/artaka/signin"/> },
        { path: 'not-found', element: <PageNotFound /> },
      ]
    },
    //
    {
      path: '/artaka/seller/product/:category',
      element:  <AdminLayout/>
    },
    {
      path: '/artaka/seller/customer',
      element:  <AdminLayout/>,
      children: [
        { path: 'add', element: isLoggedIn ? <AddCust /> : <Navigate to="/artaka/signin"/> },
        { path: 'edit', element: isLoggedIn ? <EditCust /> : <Navigate to="/artaka/signin"/> },
        { path: 'not-found', element: <PageNotFound /> },
      ]
    },
    {
      path: '/artaka/seller/setting-online-order',
      element:  <AdminLayout/>,
      children: [
        { path: 'courier', element: isLoggedIn ? <Courier /> : <Navigate to="/artaka/signin"/> },
        { path: 'online-payment', element: isLoggedIn ? <OnlinePayment /> : <Navigate to="/artaka/signin"/> },
        { path: 'not-found', element: <PageNotFound /> },
      ]
    },
    { path: '*', element: <PageNotFound /> }
  ]);
}
/*
    <Switch>
      <Navigate exact from="/" to="/artaka/landing" />

      <RouteWithLayout
        component={Register}
        exact
        layout={RegisterLayout}
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

      
      <RouteWithLayout
        component={HomePage}
        exact
        layout={MainLayout}
        pageTitle=""
        path="/artaka/home"
      /> 

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
        component={CashierPage}
        exact
        layout={AdminLayout}
        pageTitle="Cashier"
        path="/artaka/seller/cashier"
      />

      <RouteWithLayout
        component={PageNotFound}
        exact
        layout={AdminLayout}
        pageTitle="404"
        path="/artaka/not-found"
      />

       <RouteWithLayout
        component={CategoryPage}
        exact
        layout={AdminLayout}
        pageTitle="Category"
        path="/artaka/seller/category"
      /> 

      <RouteWithLayout
        component={HelpPage}
        exact
        layout={AdminLayout}
        pageTitle="Bantuan"
        path="/artaka/seller/help"
      />

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
        component={SettingProduct}
        exact
        layout={AdminLayout}
        pageTitle="Kelola Produk"
        path="/artaka/seller/product/settings"
      />

      <RouteWithLayout
        component={SettingPromoPoint}
        exact
        layout={AdminLayout}
        pageTitle="Pengaturan Promo & Poin"
        path="/artaka/seller/promo"
      />
        <RouteWithLayout
        component={SettingShop}
        exact
        layout={AdminLayout}
        pageTitle="Pengaturan Toko"
        path="/artaka/seller/shop"
      />   
       <RouteWithLayout
        component={SettingOrderOnline}
        exact
        layout={AdminLayout}
        pageTitle="Pengaturan Order Online"
        path="/artaka/seller/online-order"
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
     

      <Navigate to="/artaka/not-found" status="404" />
    </Switch>
    */
