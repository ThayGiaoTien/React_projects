import React from 'react'

const InstructorCard = ({image, name}) => {
    return (
        <div className="col-md-6 col-lg-3">
            <div className="card bg-light">
                <div className="card-body text-center">
                    <img src={image} alt="" className="rounded-circle mb-3"/>
                    <h3 className="card-title mb-3">{name}</h3>
                    <p className="card-text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Iure, quas quidem possimus dolorum esse elige
                    </p>
                    <a href="#" ><i className="bi bi-twitter text-dark mx-1"></i></a>
                    <a href="#" ><i className="bi bi-facebook text-dark mx-1"></i></a>
                    <a href="#" ><i className="bi bi-linkedin text-dark mx-1"></i></a>
                    <a href="#" ><i className="bi bi-instagram text-dark mx-1"></i></a>
                </div>
            </div>
        </div>
    )
}

export default InstructorCard
