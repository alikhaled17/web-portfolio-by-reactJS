import React from 'react';
import Skil from './skil';
import './skils.css';



class Skils extends React.Component{

  state = {
    skils: [
      {name:"Html", percentage: "68%"},
      {name:"Css", percentage: "75%"},
      {name:"JavaScript", percentage: "84%"},
      {name:"Python", percentage: "58%"},
      {name:"React", percentage: "90%"}
    ]
  }

  render() {
    return (
      <>
        <br />
        <div className="skils ">
          <h1 className="text-center fw-bold m-2 ">Skills</h1>
          <p className="text-center  mb-2 m-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book
          </p>
          <br/>
          <div className="row">
            <div className="col-6 list-skils">
                <h3>Important skills</h3>
                <ul>
                    <li>Design AdobeXD</li>
                    <li>Design SQL database</li>
                    <li>Agile methodology</li>
                    <li>Git / Github </li>
                    <li>UI / UX</li>
                </ul>
            </div>
            <div className="col-6">
                <br/>
                {
                this.state.skils.map(s => (
                    <Skil skillName={s.name} skillPer={s.percentage}  />
                  )
                )
                }
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Skils;
