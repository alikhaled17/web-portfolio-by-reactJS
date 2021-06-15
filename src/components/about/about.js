import React from 'react';
import './about.css';



class About extends React.Component{
  render() {
    return (
      <>
        <div className="about row">
          <h2 className="col-4">About Me</h2>
          <div className="col-8">
            <p>
              What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has? ..
            </p>
            <input type="button" value="READ MORE" className="btn btn-custom" />
          </div>
        </div>
      </>
    );
  }
}

export default About;
