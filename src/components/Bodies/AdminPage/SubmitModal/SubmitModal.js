import React from 'react';
import {Modal} from 'react-bootstrap';
import './SubmitModal.css'
import {success} from './../../OaedForm/Form/VoucherFormModal/VoucherModalsvgs'

const SubmitModal = props => {
    return(
      <Modal id="completeModal" show={props.show} onHide={props.handleClose} >
      <Modal.Header closeButton style={{border: "none", padding: "0px"}}>
      </Modal.Header>
      <Modal.Body style={{display: "flex", flexDirection: "row", alignItems: "center", paddingLeft: "48px", paddingRight: "48px"}}>
        {success}
        {"Ο διαγωνισμός έληξε με επιτυχία τα αποτελέσματα έχουν αναρτηθεί!"}
      </Modal.Body>
      
    </Modal>
    )
}

export default SubmitModal;