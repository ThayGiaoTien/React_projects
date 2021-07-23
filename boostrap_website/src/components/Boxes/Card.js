import React from 'react'

const Card = ({icon, card_title, card_text}) => {
    return (
        
            <div className="col-md-4">
                <div className="card bg-dark text-light">
                    <div className="card-body text-center">
                        <div className="h1">
                            <i className={icon} ></i>
                        </div>
                        <h3 className="mb-3 card-title">{card_title}</h3>
                        <p className='card-text'>{card_text}</p>
                        <a href="/readmore" className="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        
    )
}

export default Card
