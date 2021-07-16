import React from 'react';
import './App.css';

import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ScrollToTop from './components/scrollTop.component';

import HomePage from '../src/components/home/home.component'
import SuperHome from './components/valderramaDev';
import InfoPage from './components/infoPage/infoPage.component'
import PageProjects from './components/pageProyectos/pageProyectos.component';
import ContactPage from './components/contactPage/contactPage.component';

import Caso from './components/caso.component.jsx'
import CasoDetail from './components/casoDetail.component'

import Ahorra from './components/fastPages/ahorra.component';
import Morris from './components/fastPages/morris.component';

import Logo from './components/logo.component'

import Menu from '../src/components/menu.component'

import Footer from '../src/components/footer.component'



// import { BrowserRouter as Switch, Route } from "react-router-dom";

import { Switch, Route } from 'react-router-dom';


function App({match}) {
  return (
      
       
    <div className="App">
      <Menu />
      <Logo />
      <ScrollToTop />

      <Switch>
        <Route exact path="/" component={HomePage} />
     
        <Route exact path="/proyectos" component={PageProjects} />
       
        <Route exact path="/info" component={InfoPage} />

        <Route exact path='/contacto' component={ContactPage} />
        
        <Route exact path='/morris' component={Morris} />  
        <Route exact path='/bdc' component={Ahorra} />  
        <Route exact path='/3bh' component={Ahorra} />  
        <Route exact path='/ahorra' component={Ahorra} />  
        <Route exact path='/frutas' component={Ahorra} />  
        <Route exact path='/habla' component={Ahorra} />        
        {/* /:collectionId */}
        {/* <Route exact path={`${match.path}/:collectionId/:detailId`} component={Caso} /> */}
        {/* <Route exact path='/:detailId' component={CasoDetail} /> */}

        {/* <Route
              exact
              path="/morris"
              render={() => <Morris />} />

        <Route
              exact
              path="/bdc"
              render={() => <Bdc />} />
        <Route
              exact
              path="/3bh"
              render={() => <Bh3 />} /> */}

        {/* <Route
              exact
              path="/ahorra"
              render={() => <Ahorros />} />     */}


        {/* <Route
              exact
              path="/frutas"
              render={() => <Morris />} /> */}
      </Switch> 

      <Footer />
    </div>
   
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});


const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});


export default connect(mapStateToProps, mapDispatchToProps)(App);