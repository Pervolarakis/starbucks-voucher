import React from 'react';
import Events from './Events';

const EventLog = props => {
    return(
        <div>
            <div className="d-flex justify-content-around">
                <p style={{color: "#707070"}}>ΕΙΔΟΣ</p>
                <p style={{color: "#707070"}}>ΑΜΚΑ</p>
                <p style={{color: "#707070"}}>ΩΡΑ</p>
            </div>
            <div>
                <Events kind={"ΑΙΤΗΣΗ"} amka={"445566"} date={"Today 14:52:14"}/>
                <Events kind={"ΑΙΤΗΣΗ"} amka={"445566"} date={"Today 14:52:14"}/>
                <Events kind={"ΑΙΤΗΣΗ"} amka={"445566"} date={"Today 14:52:14"}/>
                <Events kind={"ΑΙΤΗΣΗ"} amka={"445566"} date={"Today 14:52:14"}/>
                <Events kind={"ΑΙΤΗΣΗ"} amka={"445566"} date={"Today 14:52:14"}/>
                <Events kind={"ΑΙΤΗΣΗ"} amka={"445566"} date={"Today 14:52:14"}/>
                <Events kind={"ΑΙΤΗΣΗ"} amka={"445566"} date={"Today 14:52:14"}/>
                <Events kind={"ΑΙΤΗΣΗ"} amka={"445566"} date={"Today 14:52:14"}/>
            </div>
        </div>
    )
}

export default EventLog;