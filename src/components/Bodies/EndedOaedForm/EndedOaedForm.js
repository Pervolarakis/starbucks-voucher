import React from 'react';
import './EndedOaedForm.css'
import {Card} from 'react-bootstrap'
import WinnersBoard from './WinnersBoard';

const EndedOaedForm = props => {
    return(
        <div>
            <div className="shadow-lg" style={{height: "50px", backgroundColor: "#1E3932", paddingRight: "140px", paddingLeft: "140px", color: "white", fontSize: 24, fontWeight: "bold", display: "flex", alignItems: "center"}}>STARBUCKS COFFEE</div>
            <div className="backgrnd">
                
                <p style={{color: "#D2A04B", fontSize: 32, fontWeight: 600}}>Ο ΔΙΑΓΩΝΙΣΜΟΣ ΕΛΗΞΕ!</p>
                <p style={{color: "white", fontSize: 16, fontWeight: 600, width: "500px"}}>ΣΑΣ ΕΥΧΑΡΙΣΤΟΥΜΕ ΓΙΑ ΤΗΝ ΣΥΜΕΤΟΧΗ ΣΑΣ.
                ΤΑ ΟΝΟΜΑΤΑ ΤΩΝ ΝΙΚΗΤΩΝ ΕΧΟΥΝ ΑΝΑΚΟΙΝΩΘΕΙ
                ΠΑΡΑΚΑΤΩ!</p>
                <Card style={{width: "500px"}}>
                    <Card.Header as="h5">ΝΙΚΗΤΕΣ</Card.Header>
                    <Card.Body>
                        <div style={{display: "flex", justifyContent: "space-around"}}>
                            <p>ONOMA</p>
                            <p>ΠΑΤΡΩΝΥΜΟ</p>
                        </div>
                        <WinnersBoard name="Γεωργιος Παπας" fatherName="Νικολαος"/>
                        <WinnersBoard name="Γεωργιος Παπας" fatherName="Νικολαος"/>
                        <WinnersBoard name="Γεωργιος Παπας" fatherName="Νικολαος"/>
                        <WinnersBoard name="Γεωργιος Παπας" fatherName="Νικολαος"/>
                        <WinnersBoard name="Γεωργιος Παπας" fatherName="Νικολαος"/>

                    </Card.Body>
                </Card>
                
            </div>
        </div>
    )
}

export default EndedOaedForm;