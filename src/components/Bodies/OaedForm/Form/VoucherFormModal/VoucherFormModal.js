import React from 'react';
import {Modal} from 'react-bootstrap';
import {success, fail} from './VoucherModalsvgs';
import './VoucherFormModal.css'

const VoucherFormModal = props => {
    return(
        <Modal contentClassName={(props.success)? "voucherModalSuccess": "voucherModalFail"} show={props.show} onHide={props.handleClose} >
          <Modal.Header closeButton style={{border: "none", padding: "0px"}}>
          </Modal.Header>
          <Modal.Body style={{display: "flex", flexDirection: "row", alignItems: "center", paddingLeft: "48px", paddingRight: "48px"}}>
            {(props.success)? success : fail}
            {(props.success) ? "Ο κωδικός σου εξαργυρώθηκε με επιτυχία. Μπορείς να παραλάβεις το κουπόνι σου πατώντας το παρακάτω κουμπί!" : "Ο κωδικός που εισάγατε δεν είναι σωστός ή έχει χρησιμοποιηθεί ήδη. Παρακαλούμε βεβαιωθείτε ότι τον πληκτρολογήσατε σωστά."}
          </Modal.Body>
          
        </Modal>
    )
}

export default VoucherFormModal;