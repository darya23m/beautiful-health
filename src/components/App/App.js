import React from 'react';
import { Route, Routes } from 'react-router-dom';

import AppLayout from '../layouts/AppLayout/AppLayout';
import HomePage from '../pages/HomePage/HomePage';
import CatalogPage from '../pages/CatalogPage/CatalogPage';
import AboutUsPage from '../pages/AboutUsPage/AboutUsPage';
import ContactsPage from '../pages/ContactsPage/ContactsPage';
import InfoPage from '../pages/InfoPage/InfoPage';
import CartPage from '../pages/CartPage/CartPage';
import OrderPage from '../pages/OrderPage/OrderPage';
import YourOrdersPage from '../pages/YourOrdersPage/YourOrdersPage';

const App = () => {
  return (
    <Routes>
      <Route element={<AppLayout />} >
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />}>
          <Route path=":category" element={<CatalogPage />} />
        </Route>
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/order" element={<OrderPage />}/>
        <Route path="/orders-list" element={<YourOrdersPage />}/>
      </Route>
    </Routes>
  );
}

export default App;
