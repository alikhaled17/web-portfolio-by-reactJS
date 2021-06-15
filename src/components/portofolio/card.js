
const Card = props => {

    let {header, title, content, color} = props;
    return ( 
        <>
            <div className={`card text-white bg-dark border-${color} m-2 col-4`} style={{borderWidth: "3px" ,maxWidth: '20rem'}}>
                <div className="card-header">{header}</div>
                <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p className="card-text">{content}</p>
                </div>
            </div>
        </>
     );
}
export default Card;