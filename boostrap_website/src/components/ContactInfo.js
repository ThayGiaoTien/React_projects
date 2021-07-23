import React from 'react'

const ContactInfo = () => {
    return (
        <section className="p-5">
            <div className="container">
                <div className='row g-4'>
                    <div className="col-md">
                        <h2 className="text-center mb-5">Contact Info</h2>
                        <ul className="list-group list-group-flush lead">
                            <li className="list-group-item">
                                <span className="fw-bold">Main Location:</span> 50 Main st Boston MA
                            </li>
                            <li className="list-group-item">
                                <span className="fw-bold">Enrollment Phone:</span> (555) 555-5555
                            </li>
                            <li className="list-group-item">
                                <span className="fw-bold">Student Phone:</span> (333) 333-3333
                            </li>
                            <li className="list-group-item">
                                <span className="fw-bold">Enrollment Email:</span> teacherforward_dev@gmail.com
                            </li>
                            <li className="list-group-item">
                                <span className="fw-bold">Student Email:</span> thelaststanding97@gmail.com
                            </li>
                        </ul>
                    </div>
                    

                    <div className="col-md">
                        <div id="map" className="text-center">
                            <h1 className="m-5">Map using mapbox's API in here</h1>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default ContactInfo
