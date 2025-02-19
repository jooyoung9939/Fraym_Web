import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import WhoWeAre from './pages/WhoWeAre';
import ProductDetail from './pages/ProductDetail';
import Navbar from "./Navbar";

function App() {
  return (
      <div>
          <Navbar/>
            <Routes>
              <Route path="/" element={<Main/>}/>
              <Route path="/whoweare" element={<WhoWeAre/>}/>
              <Route path="/product/:id" element={<ProductDetail/>}/>
            </Routes>
      </div>
  );
}

export default App;