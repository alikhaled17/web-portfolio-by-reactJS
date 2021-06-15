import React from 'react';
import Header from './header/header'
import About from './about/about'
import Skils from './skils/skils'
import Portofolio from './portofolio/portofolio'
import Footer from './footer/footer'
import Navbar from './navbar/navbar'

class App extends React.Component{
  
  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          <Header/>
          <About/>
          <Skils/>
          <Portofolio />
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
