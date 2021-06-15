import React from 'react';
import './header.css';
import mainImg from '../assets/03.png' ;



class Header extends React.Component{
  render() {
    return (
      <>
        <div className="header row">
          <div className="col-5 block-left" >
            <h2>Ali K. Web portofolio</h2>
            <hr/>
            <h4>Fullstack develoer | React | Node-JS </h4>
            <input type="button" value="CONTACT ME" className="btn btn-danger" />
          </div>
          <div className="col-7 write" >
            <img src={mainImg} alt="main img"/>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
