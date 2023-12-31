import './App.css';
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Footer from './Components/Footer/Footer';
import FloatingButton from './Components/FloatingButton/FloatingBtn';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <FloatingButton/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;