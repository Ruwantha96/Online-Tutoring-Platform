//import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import NavBar from './components/NavBar'
import MainFeaturedPost from './components/Section1'
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Home />
     <NavBar />
     <MainFeaturedPost />
     <Footer />
    </div> 
  );
}

export default App;
 