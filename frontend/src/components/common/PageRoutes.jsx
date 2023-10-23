import { Route, Routes } from 'react-router-dom';
import ProductList from '../ProductList';
import ProductDetail from '../ProductDetail';
import ProductEdit from '../ProductEdit';
import ProductAdd from '../ProductAdd';


export default function PageRoutes() {
    return (
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/products" element={<ProductList/>} />
        <Route path="/product/:id" element={<ProductDetail/>} />
        <Route path="/product/add" element={<ProductAdd/>} />
        <Route path="/product-edit/:id" element={<ProductEdit/>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    );
  }
  