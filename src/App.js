import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./componnets/navbar/Navbar";
import "./App.css";
import PageContainer from "./containers/PageContainer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Detail from "./pages/Detail";
import Basket from "./pages/Basket";

function App() {
  return (
    <PageContainer>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Detail />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </Router>
    </PageContainer>
  );
}

export default App;
