import './App.css';
import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Characters from "./components/Characters/Characters";
import Home from "./components/Home/Home";

function App() {
  return (
    <Router>
   
      <div className="App">
      <header className="App-header">
        <Link to="/">Home</Link>
        <Link to="/characters">Characters</Link>
        
      </header>
     
      <Routes>
        <Route path='/' element= {<Home></Home>}></Route>
        <Route path='/characters' element= {<Characters></Characters>}></Route>

      </Routes>
    
      </div>
          
    </Router>
  );
}

export default App;
