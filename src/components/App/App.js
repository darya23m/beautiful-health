import React from 'react';
import { Route, Routes } from 'react-router-dom';

import AppLayout from '../layouts/AppLayout/AppLayout';
import Private from '../../features/auth/Private';
import HomePage from '../pages/HomePage/HomePage';
import CatalogPage from '../pages/CatalogPage/CatalogPage';
import AboutUsPage from '../pages/AboutUsPage/AboutUsPage';
import ContactsPage from '../pages/ContactsPage/ContactsPage';
import InfoPage from '../pages/InfoPage/InfoPage';
import CartPage from '../pages/CartPage/CartPage';
import OrderPage from '../pages/OrderPage/OrderPage';
import YourOrdersPage from '../pages/YourOrdersPage/YourOrdersPage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import SignInPage from '../pages/SignInPage/SignInPage';

const App = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />}>
          <Route path=":category" element={<CatalogPage />} />
        </Route>
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/order" element={<OrderPage />}/>

        <Route path="/sign-up" element={<SignUpPage />}/>
        <Route path="/sign-in" element={<SignInPage />}/>

        <Route path="/" element={<Private />}>
          <Route path="/orders-list" element={<YourOrdersPage />}/>
          <Route path="/profile" element={<ProfilePage />}/>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
