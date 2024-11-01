import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./VIEW/home"
import Login from "./VIEW/login"
import { RecoilRoot } from "recoil";

function App() {
  return (
    <BrowserRouter>
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element = {<Login/>}></Route>
      </Routes></RecoilRoot>
    </BrowserRouter>

  );
}
export default App;
