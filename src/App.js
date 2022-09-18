import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Home from './Home';
import Aboutus from './Aboutus';

function App() {
  return (
    <div className="App">
      
        
      
      <Login></Login>
      <Home name="raju"></Home>
      <Home name="ajinkya"></Home>
      <Home name="aditya"></Home>
      <h1>class component </h1>
      <Aboutus data="my corp ltd"></Aboutus>
    </div>
  );
}

export default App;
