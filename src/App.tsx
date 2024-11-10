import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./VIEW/home"
import Login from "./VIEW/login"
import Store from "./VIEW/store"
import { RecoilRoot } from "recoil";
import ProductInfo from "./VIEW/productInfo";

function App() {
  return (
    <BrowserRouter>
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element = {<Login/>}></Route>
        <Route path="/store" element = {<Store/>}></Route>
        <Route path="/productinfo" element = {<ProductInfo/>}></Route>
      </Routes></RecoilRoot>
    </BrowserRouter>

  );
}
export default App;
