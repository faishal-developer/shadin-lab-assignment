import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import SingleProduct from './pages/SingleProduct';
import Products from './pages/Products';


function App() {
  return (
    < BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/singleProduct/:id" element={<SingleProduct/>} />
        <Route path="*" element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
