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
            {(props.success) ? "Η αίτηση σας καταχωρήθηκε μεεπιτυχία. Θα ενημερωθείτε σύντομα για τα αποτελέσματα!" : "Τα στοιχεία που πληκτρολογήσατε δεν είναι έγκυρα η δεν πληροίτε τις προϋποθέσεις του διαγωνισμού"}
          </Modal.Body>
          
        </Modal>
    )
}

export default VoucherFormModal;