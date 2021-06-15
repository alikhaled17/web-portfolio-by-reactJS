import React from 'react';
import './portofolio.css';
import Card from './card'


class Portofolio extends React.Component{

  state = {
    cards: [
      {header: "projrct XYZ", color: "danger", title: "Title of projext XYZ", content: "Some quick example text to build on the card title and make up the bulk of the card's content."},
      {header: "projrct HJF", color: "success", title: "Title of projext HJF", content: "Some quick example text to build on the card title and make up the bulk of the card's content."},
      {header: "projrct KSB", color: "danger", title: "Title of projext KSB", content: "Some quick example text to build on the card title and make up the bulk of the card's content."},
      {header: "projrct LWZ", color: "success", title: "Title of projext LWZ", content: "Some quick example text to build on the card title and make up the bulk of the card's content."},
      {header: "projrct JPS", color: "danger", title: "Title of projext JPS", content: "Some quick example text to build on the card title and make up the bulk of the card's content."},
      {header: "projrct FBI", color: "success", title: "Title of projext FBI", content: "Some quick example text to build on the card title and make up the bulk of the card's content."}
    ]
  }

  render() {
    return (
      <>
        <div className="portofolio row ">
          <h3 className="portofolio-title">Portofolio</h3>
          {
            this.state.cards.map(c => (
                <Card header={c.header} title={c.title} content={c.content} color={c.color} />
              )
            )
          }
        </div>
      </>
    );
  }
}

export default Portofolio;
