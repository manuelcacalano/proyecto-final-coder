import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkout from "./components/Checkout";
import Contacto from "./components/Contacto";
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from './components/Navbar';
import ContextContainer from './components/ContextContainer';


function App() {
  return (
    <ContextContainer>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/category/:idcategory" element={<ItemListContainer />} />
        <Route path="/item/:iditem" element={<ItemDetailContainer />} />
        <Route />
        <Route />
        <Route />
      </Routes>
      <Footer />
    </BrowserRouter>
    </ContextContainer>
  );
}

export default App;
