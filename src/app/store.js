import { configureStore } from '@reduxjs/toolkit';

import catalogSlice from '../features/catalog/catalog-slice';
import cartSlice from '../features/cart/cart-slice';
import infoSlice from '../features/pages-data/info-slice';
import contactsSlice from '../features/pages-data/contacts-slice';
import { ordersApi } from '../features/orders/ordersApi';
import { usersApi } from '../features/users/usersApi';

export const store = configureStore({
  reducer: {
    catalog: catalogSlice.reducer,
    cart: cartSlice.reducer,
    info: infoSlice.reducer,
    contacts: contactsSlice.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(ordersApi.middleware).concat(usersApi.middleware)
});
