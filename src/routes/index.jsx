import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { ProductDetail  } from '../pages/Product';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { Cart } from '../pages/Cart';
import { ListPurchases } from '../pages/ListPurchase';

export const RoutesProvider = () => {

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/product/:id" element={ <ProductDetail/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/purchases" element={<ListPurchases/>} />
    </Routes>
  );
};