import './App.css';
import Hero from './components/Hero';
import Info from './components/Info';
import Footer from './components/Footer';
import Choose from './components/Choose';
import Featured from './components/Featured';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Info />
      <Choose />
      <Featured />
      <Footer />
    </div>
  );
}

export default App;
