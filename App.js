import React from 'react';
import "./App.css";
import Header from "./components/Header/Header";
import SideBar from "./Sidebar";
import Games from"./components/Header/games/Games";
import TopStreams from"./components/Header/TopStreams/TopStreams";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Live from './components/Live/Live';
import GameStreams from './components/Header/GameStreams/GameStreams';
import Resultat from './components/Header/games/resultat/Resultat'
import Erreurs from './components/Header/Erreurs/Erreurs';

function App() {
  return (
  < Router
  forceRefresh={true} 
  >

    <div className="App">
      <Header />
      <SideBar />

      < Switch>
        <Route exact path="/" component= {Games}/>
        <Route exact path="/topstreams" component= {TopStreams}/> 
        <Route exact path="/live/:slug" component= {Live}/>
        <Route exact path="/game/:slug" component= {GameStreams}/>
        <Route exact path="/resultat/:slug" component= {Resultat}/>
        <Route exact path="/resultat/" component= {Erreurs}/>

        
      </Switch>
   </div>   
  </Router>
  );
}

export default App;
