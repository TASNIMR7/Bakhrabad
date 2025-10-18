
import './asset/css/custom.css'

import Hero from './components/Hero';

import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation';
import Mission from './components/Mission';
import Vision from './components/Vision';
import Product from './components/Product';
import Client from './components/Client';
import Location from './components/Location';
import Footer from './components/Footer';

import MyRouter from './router/MyRouter';

function App() {
  return (
    <div className="App">
       <MyRouter/>
    </div>
  );
}

export default App;
