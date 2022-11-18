import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './routes/About';
import Contact from './routes/Contact';
import Home from './routes/Home';
import Offers from './routes/Offers';
import Signin from './routes/Signin';
import Signup from './routes/Signup';

function App() {

  return (
    <>

      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/offers" element={<Offers />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/signin" element={<Signin />}/>
      <Route path="/signup" element={<Signup />}/>

      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
