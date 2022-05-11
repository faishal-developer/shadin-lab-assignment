import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import SingleProduct from './pages/SingleProduct';
import Products from './pages/Products';
import Login from './components/login/Login';
import Context from './components/hooks/Context';
import LayOut from './components/Layout/LayOut';
import LoginLayOut from './components/Layout/LoginLayOut';
import Registration from './components/login/Registration';
import CartDetails from './pages/CartDetails';


function App() {
  return (
    <Context>
    < BrowserRouter>
      <Routes>
        <Route path="/" element={<LayOut/>} >
            <Route path="" element={<Home />}></Route>
            <Route path="products" element={<Products />} />
            <Route path="singleProduct/:id" element={<SingleProduct />} />
            <Route path="cartDetails" element={<CartDetails />} />
        </Route>
        <Route path="/" element={<LoginLayOut/>}>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Registration/>}/>
        </Route>
        <Route path="*" element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        } />
      </Routes>
    </BrowserRouter>
    </Context>
  );
}

export default App;
