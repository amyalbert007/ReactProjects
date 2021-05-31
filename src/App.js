import logo from './logo.svg';
import './App.css';
import About from './about'
/*
function App() {
  return (
    <div>
    <div className="App">
      <h1> ReatcJStutorial- CG</h1>
    </div>
    <div>
         <About/>
    </div>
    </div>
  );
}
*/
import React,{Component} from 'react'
import Contact from './contact'
import FormDemo from './FormDemo'

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

class  App extends Component {
  render(){
    return (
    <div>
    <div className="App">
    <img src={logo} className="App-logo" alt="logo" />
      <h1> ReatcJStutorial- CG- Class Component</h1>
    </div>
    <div>
         <About/>
    </div>
    <div>
         <Contact/>
    </div>
<div>
    <FormDemo/>
    </div>
    </div>
  );
    }
}

export default App;
