import './App.css';
import Navbar from './Componnets/nav'
import Home from './Componnets/home'
import About from './Componnets/About'
import 'boxicons/css/boxicons.min.css';
import ContactUs from './Componnets/contactUs'
import Services from './Componnets/services'
import Footer from './Componnets/Footer'

function App() {


  return (

    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Services/>
      <ContactUs/>
      <Footer/>
    </div>

  );
}

export default App;
