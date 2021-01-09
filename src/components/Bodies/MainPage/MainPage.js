import React from 'react';
import drinks from '../../../Assets/drinks.png'
import cards from '../../../Assets/cards.png'
import {Col, Row} from 'react-bootstrap';
import {whiteLogo} from '../../../Assets/svgs'

const MainPage = props => {
    return(
        <div style={{height: "100%"}}>
            <div style={{backgroundColor: "#006F42"}} >
                <Row style={{marginLeft: "140px", marginRight: "140px", display: "flex", alignItems: "center"}}>
                    <Col md={8}>
                        <div style={{maxWidth: "800PX", marginTop: "64px", marginBottom: "64px"}}>
                            <p style={{fontSize: 56, fontWeight: 600, color: "white", letterSpacing: "-1px", marginBottom: "0px"}}>ΚΑΛΩΣ ΗΡΘΑΤΕ ΣΤΑ </p>
                            {whiteLogo}
                            <p style={{fontSize: 24, fontWeight: 600, color: "white", letterSpacing: "-1px", marginTop: "24px"}}>Καταπληκτικοί καφέδες από όλο τον κόσμο. Χειροποίητα ροφήματα και εύγεστες επιλογές φαγητού σας περιμένουν για να τα ανακαλύψετε και να τα απολαύσετε. </p>
                            <button style={{marginTop: "24px", backgroundColor: "#006F42", border: "4px solid white", color: "white", width: "300px", height: "104px", borderRadius: "5px", fontSize: 32, fontWeight: 600}}>ΔΕΙΤΕ ΤΟ MENU!</button>
                        </div>
                        
                    </Col>
                    <Col md={4}>
                        <img alt="drink img" src={drinks} width="320px" height="400px"/>
                    </Col>
                </Row>
            
            </div>
            <div style={{backgroundColor: "#1E3932"}}>
                <Row style={{marginLeft: "140px", marginRight: "240px", display: "flex", alignItems: "center"}}>
                    <Col md={8}>
                        <div style={{maxWidth: "800PX", marginTop: "64px", marginBottom: "64px"}}>
                            <p style={{fontSize: 56, fontWeight: 600, color: "#D2A04B", letterSpacing: "-1px"}}>ΚΛΗΡΩΣΗ! </p>
                            <p style={{fontSize: 24, fontWeight: 600, color: "white", letterSpacing: "-1px", marginTop: "24px", marginBottom: "0px"}}>Η εταιρία μας σε συνεργασία με τον ΟΑΕΔ προσφέρει δωρεάν voucher σε 10.000 τυχερούς.</p>
                            <p style={{fontSize: 16, fontWeight: 600, color: "white"}}>*Η προσφορά ισχύει μέχρι 2/2/2021  </p>
                            <button style={{marginTop: "24px", backgroundColor: "#D2A04B",  color: "1E3932", border: "none",  width: "300px", height: "104px", borderRadius: "5px", fontSize: 32, fontWeight: 600}}>ΚΑΝΤΕ ΑΙΤΗΣΗ!</button>
                        </div>
                    </Col>
                    <Col md={4}>
                        <img alt="cards img" src={cards} width="550px" height="350px" style={{margin: "auto"}}/>
                    </Col>
                </Row>
                
            </div>

        </div>

    )
}

export default MainPage;