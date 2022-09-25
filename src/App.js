import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Home from './Home';
import Aboutus from './Aboutus';
import ClassState from './ClassState';
import UseStateHooks from './UseStateHooks';
import HookObj from './HookObj';

function App() {
  return (
    <div className="App">
      
        
      
      {/* <Login></Login>
      <Home name="raju"></Home>
      <Home name="ajinkya"></Home>
      <Home name="aditya"></Home>
      <h1>class component </h1>
      <Aboutus data="my corp ltd"></Aboutus> */}
      <ClassState></ClassState>
      <UseStateHooks></UseStateHooks>
      <HookObj></HookObj>
    </div>
  );
}

export default App;
