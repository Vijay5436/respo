import React from 'react';
import './App.css';
import {Top} from './components/topHeader';
import {SideMenu} from './components/sideMenu';
import {MiddleContainer} from './components/middleContainer';
const App =()=>{
  return(
    <div>
      <Top />
      <SideMenu />
      <MiddleContainer />
    </div>
  )
}
export default App;
