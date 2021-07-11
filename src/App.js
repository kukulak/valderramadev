// import logo from './logo.svg';
import './App.css';
import HomePage from '../src/components/home/home.component'
import SuperHome from './components/valderramaDev';
import InfoPage from './components/infoPage/infoPage.component'
import PageProjects from './components/pageProyectos/pageProyectos.component';
import ContactPage from './components/contactPage/contactPage.component';
// import { ParallaxProvider } from 'react-scroll-parallax';

import Logo from './components/logo.component'

import Menu from '../src/components/menu.component'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



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

      <Menu />
      <Logo />

        <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>

            <Route path="/proyectos" >
              <PageProjects />
            </Route>  

            <Route path="/info">
              <InfoPage />
            </Route>

            <Route exact path='/contacto' component={ContactPage} />
              
           
        </Switch> 
        {/* <SuperHome/> */}
      {/* </ParallaxProvider> */}

    </div>
   
  );
}

export default App;
