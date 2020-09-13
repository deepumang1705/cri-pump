import React from 'react';
// import logo from './logo.svg';
import './css/App.css';
import Header from './components/Header'
import FlexBox from './components/FlexBox'
import Body from './components/Body'
import Footer from './components/Footer'



function App() {
  return (
    <div className="App">
      <Header/>
      <FlexBox/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
