import logo from './logo.svg';
import './App.css';
import HomePage from '../src/components/home/home.component'
import SuperHome from './components/valderramaDev';
import PageProjects from './components/pageProyectos/pageProyectos.component';
// import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}

      {/* <ParallaxProvider> */}
        {/* <HomePage/> */}

      <PageProjects />

        {/* <SuperHome/> */}
      {/* </ParallaxProvider> */}

    </div>
  );
}

export default App;
