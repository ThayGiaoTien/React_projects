import React from 'react'

const Newsletter = () => {
    return (
        <section className= "bg-primary p-5">
            <div className="container">
                <div className="d-md-flex justify-content-between align-items-center">
                    <h3 className="mb-3 mb-md-0 text-light">Sign up for our Newsletters</h3>
                    <div className="input-group email-input">
                        <input type="text" className="form-control" placeholder="Enter a email"/>
                        <button className="btn btn-dark btn-lg" type="submit" >Submit</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Newsletter
