import React from 'react';
import {Modal} from 'react-bootstrap';
import './SubmitModal.css'

const SubmitModal = props => {
    return(
        <Modal id="completeModal" show={props.show} onHide={props.handleClose} >
          <Modal.Header closeButton style={{border: "none"}}></Modal.Header>
          <Modal.Body style={{display: "flex", flexDirection: "column", alignItems: "center", paddingLeft: "24px", paddingRight: "24px"}}>
            <Modal.Title>
                Τα αποτελέσματα ανακοινώθηκαν με επιτυχία!
            </Modal.Title>
          </Modal.Body>
        </Modal>
    )
}

export default SubmitModal;