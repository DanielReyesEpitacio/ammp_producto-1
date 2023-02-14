import './App.css';
import Header from './components/Header';
import Navs from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App" class="container">
        <Header />
        <Navs />
        <Footer />
    </div>
  );
}

export default App;
