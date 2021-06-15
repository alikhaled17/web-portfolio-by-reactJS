import React from 'react';
import './skil.css';

const Skil = props => {
    return ( 
        <>
            <div className="row skil-progress">
                <div className="progress-name col-3" >{props.skillName}</div>
                <div className="progress-outer col-9">
                    <div className="progress-in" style={{width: props.skillPer}}>{props.skillPer}</div>
                </div>
            </div>
        </>
    );
}
 
export default Skil;