import React from 'react';

const WinnersBoard = props => {
    return(
        <div style={{display: "flex", justifyContent: "space-around", borderBottom: "1px solid black"}}>
            <p>{props.name}</p>
            <p>{props.fatherName}</p>
        </div>
    )
}

export default WinnersBoard;