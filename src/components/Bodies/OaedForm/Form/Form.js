import React,{useState} from 'react';
import './Form.css'
import VoucherFormModal from './VoucherFormModal/VoucherFormModal'

const Form = props => {

    const handleSubmit = (event) => {
        event.preventDefault();
        event.target.className += " was-validated";
        handleShow();
    };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div className="card shadow-lg" style={{width: "100%"}}>
            <div className="card-header" style={{backgroundColor: "white", fontWeight: 500}}>
                Συμπληρώστε την παρακάτω φόρμα για να αποκτήσετε το <p style={{color: "#006F42", display: "inline"}}>VOUCHER</p> σας.
            </div>
            <div className="card-body">
                <form className="needs-validation" onSubmit={handleSubmit} noValidate>
                    
                    
                    <div className="form-floating">
                        <label htmlFor="floatingPassword">ΑΜΚΑ</label>
                        <input type="text" className="form-control" id="amka" placeholder="ΑΜΚΑ" required/>
                    </div>

                    <div className="form-floating">
                        <label htmlFor="floatingPassword">ΑΦΜ</label>
                        <input type="text"  className="form-control" id="afm" placeholder="ΑΦΜ" required/>
                    </div>

                    <div className="form-floating">
                        <label htmlFor="floatingPassword">ΑΔΤ</label>
                        <input type="text"  className="form-control" id="aft" placeholder="ΑΔΤ" required/>
                    </div>

                    <div className="form-floating">
                        <label htmlFor="floatingPassword">ΚΩΔΙΚΟΣ ΚΑΡΤΑΣ ΑΝΕΡΓΙΑΣ</label>
                        <input type="text"  className="form-control" id="kodikoskartas" placeholder="ΚΩΔΙΚΟΣ ΚΑΡΤΑΣ ΑΝΕΡΓΙΑΣ" required/>
                    </div>
                    
                    <button className="form-button" color="primary" type="submit">
                        ΥΠΟΒΟΛΗ
                    </button>
                </form>

            </div>
            <VoucherFormModal show={show} success={false} handleClose={handleClose}/>
        </div>
        
    )
}

export default Form;