import React from 'react'
import fundamentals from '../img/fundamentals.svg'
import react from '../img/react.svg'

const LearnSection = () => {
    return (
            <>  
            <section className="p-5" id="learn">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-md" >
                            <img src={fundamentals} alt='' className="img-fluid"/>
                        </div>

                        <div className="col-md p-5">
                            <h2> Learn the <span className="text-warning">Fundamentals</span></h2>
                            <p className="lead">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                Iure, quas quidem possimus dolorum esse elige
                            </p>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                Iure, quas quidem possimus dolorum esse elige
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                Iure, quas quidem possimus dolorum esse elige
                            </p>
                            <a href="/readmore1" className="btn btn-danger mt-3">
                                <i className="bi bi-chevron-right">Read More</i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="p-5 bg-secondary" >
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-md p-5 text-white">
                            <h2> Learn the <span className="text-warning"> React</span></h2>
                            <p className="lead">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                Iure, quas quidem possimus dolorum esse elige
                            </p>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                Iure, quas quidem possimus dolorum esse elige
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                Iure, quas quidem possimus dolorum esse elige
                            </p>
                            <a href="/readmore2" className="btn btn-danger mt-3 text-white">
                                <i className="bi bi-chevron-right">Read More</i>
                            </a>
                        </div>
                        <div className="col-md" >
                            <img src={react} alt='' className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
        
        
    )
}

export default LearnSection
