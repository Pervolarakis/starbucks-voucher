import React from 'react';

const Events = props => {
    return(
        <div className="d-flex justify-content-around" style={{borderBottom: "1px solid #707070"}}>
            <p style={{color: "#D2A04B"}}>{props.kind}</p>
            <p>{props.amka}</p>
            <p>{props.date}</p>
        </div>
    )
}

export default Events;