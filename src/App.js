import './App.css';
import{BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Create from './Pages/Create';
import Navbar from './Components/Navbar';
import Singletask from './Pages/Singletask';
import Edit from './Pages/Edit';
import Coverpage from './Pages/Coverpage';
import Footer from "./Components/Footer";


function App() {
  return (
    <div className="App">
     <Router>
      <Navbar />
      <Routes>
        <Route path='/coverpage' element= {<Coverpage />}/>
        <Route path='/' element= {<Home />}/>
        <Route path='/create' element= {<Create />}/>
        <Route path='/:taskId' element= {<Singletask />}/>
        <Route path='edit/:taskId' element= {<Edit />}/>
      </Routes>
      <Footer />
     </Router>
    </div>
  );
}

export default App;



