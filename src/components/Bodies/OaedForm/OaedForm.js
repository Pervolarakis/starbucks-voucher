import React from 'react';
import './OaedForm.css';
import Form from './Form/Form'
import {starbuckslogo} from '../../../Assets/svgs'
import card from '../../../Assets/singlecard.jpg'

const OaedForm = props => {
    return(
        <div>
            <div className="shadow-lg" style={{height: "50px", backgroundColor: "#1E3932", paddingRight: "140px", paddingLeft: "140px", color: "white", fontSize: 24, fontWeight: "bold", display: "flex", alignItems: "center"}}>STARBUCKS COFFEE</div>
            <div className="backgrnd">
                <div className="triangle" id="triangle"></div>
                <div className="over row">
                    <div className="col-md-6 p-0" style={{display: "flex", alignItems: "flex-start", justifyContent: "center", flexDirection: "column"}}>
                        <p style={{fontSize: 36, fontWeight: 600, color: "white", display: "block"}}>Μια πρωτοβουλία του</p>
                        {starbuckslogo}
                        <p style={{fontSize: 36, fontWeight: 600, color: "white", display: "block"}}>Σε συνεργασία με τον ΟΑΕΔ.</p>
                        <img alt="card img" src={card} style={{borderRadius: "15px"}}/>
                    </div>
                    <div className="col-md-6 p-0" style={{display: "flex", alignItems: "center"}}>
                        <Form/>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default OaedForm;