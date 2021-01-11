import React from 'react';
import {Modal, Button} from 'react-bootstrap'
import './RedeemModal.css'
import {failed, success} from './RedeemModalSvgs'
import pdfFile from '../../../../Assets/coupon.pdf'

const RedeemModal = props => {
    return(
        <Modal id="redeemModal" show={props.show} onHide={props.handleClose} >
          <Modal.Header closeButton style={{border: "none"}}>
            
          </Modal.Header>
          <Modal.Body style={{display: "flex", flexDirection: "column", alignItems: "center", paddingLeft: "48px", paddingRight: "48px"}}>
            <Modal.Title>{(props.success) ? "ΣΥΓΧΑΡΗΤΗΡΙΑ!" : "ΣΦΑΛΜΑ..."}</Modal.Title>
            {(props.success)? success : failed}
            {(props.success) ? "Ο κωδικός σου εξαργυρώθηκε με επιτυχία. Μπορείς να παραλάβεις το κουπόνι σου πατώντας το παρακάτω κουμπί!" : "Ο κωδικός που εισάγατε δεν είναι σωστός ή έχει χρησιμοποιηθεί ήδη. Παρακαλούμε βεβαιωθείτε ότι τον πληκτρολογήσατε σωστά."}
            
            <Button onClick={(props.success) ? () => window.open(pdfFile): props.handleClose} id="redeemButton">{(props.success) ? "Παραλαβή κωδικού!": "Προσπαθήστε ξανά!"}</Button>
          </Modal.Body>
          
        </Modal>
    )
}

export default RedeemModal;