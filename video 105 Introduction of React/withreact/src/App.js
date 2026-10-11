import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  const [value, setvalue] = useState(0)

  return (
    <div className="App">

      <Navbar LogoText="RajText"/>

      <div className="value">{value}</div>
      <button onClick={()=>{setvalue(value+1)}}>Click Me</button>

      <Footer/>

    </div>
  );
}

export default App;
