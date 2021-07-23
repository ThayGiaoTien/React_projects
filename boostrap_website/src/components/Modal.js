import React, {useState} from 'react'

const Modal = () => {
    const [modal, setModal]= useState(true)
    
    const handleClose=(e)=>{
        
        setModal(!modal)
    }
    const handleSubmit=(e)=>{
        e.preventdefault()
        setModal(false)
        window.alert("Enrollment was successfull")
    }
    return (
        <>
        {
            modal && (
            <div className="modal fade" id="enroll" tabIndex="-1" aria-aria-labelledby="enrollLabel"
             aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="enrollLabel">Enrollment</h5>
                            <button className="btn-close"type="button" 
                            data-bs-dismiss="modal" aria-label="Close">
                            </button>
                        </div>

                        <div className="modal-body">
                            <p className="lead">Fill out this form and we will get back to you</p>
                            <form action="" onSubmit={handleSubmit}>
                                <label htmlFor="first-name" className="col-form-label">First Name:</label>
                                <input type='text' className="form-control" id="first-name"/>
                                <label htmlFor="last-name" className="col-form-label">Last Name:</label>
                                <input type='text' className="form-control" id="last-name"/>
                                <label htmlFor="email" className="col-form-label">Email:</label>
                                <input type='text' className="form-control" id="email"/>
                                <label htmlFor="phone" className="col-form-label"> Phone:</label>
                                <input type='text' className="form-control" id="phone"/>
                                <div className="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>

                    </div>

                </div>
                
            </div>
            )
        }
        </>
        
        
    )
}

export default Modal
