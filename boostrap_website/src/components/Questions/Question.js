import React from 'react'

const Question = ({question, id}) => {
    return (
        <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" 
                        type="button" data-bs-toggle="collapse">
                        {question}
                        </button>
                    </h2>
                    <div id={`${id}`} className="accordion-collapse collapse"  
                    data-bs-parent="#questions">
                        <div className="accordion-body">
                            Placeholder content for this accordion, which is intended
                            to demonstrate the <code>.accordion-flush</code> class. 
                            This is the first item's accordion body.
                        </div>
                    </div>
        </div>
    )
}

export default Question
