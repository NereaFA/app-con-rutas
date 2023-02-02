import './App.css';
import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Characters from "./pages/Characters/Characters";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <Router>
   
      <div className="App">
      <header className="App-header">
        <Link to="/">Home</Link>
        <Link to="/characters">Characters</Link>
        <Link to="/contact">Contact</Link>
      </header>
     
      <Routes>
        <Route path='/' element= {<Home></Home>}></Route>
        <Route path='/contact' element= {<Contact></Contact>}></Route>
        <Route path='/characters' element= {<Characters></Characters>}></Route>
        
      </Routes>
    
      </div>
          
    </Router>
  );
}

export default App;
