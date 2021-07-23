import React from 'react'
import Question from './Question'

const AccordionQuestions = () => {
    const questions= [
        {
            question: "What exactly are you located?",
            id: "question1"
        },
        {
            question: "How much does it cost to attend?",
            id: "question2"
        },
        {
            question: "What do I need to know?",
            id: "question3"
        },
        {
            question: "How do I sign up?",
            id: "question4"
        },
        {
            question: "Do you help me find a job?",
            id: "question5"
        },

    ]
    return (
        <section className="p-5" id="questions">
            <div className="container">
                <h2 className="text-center mb-4">
                    Frequently Asked Questions
                </h2>

                <div className="accordion accordion-flush" >
                    {
                        questions.map(x=>(
                            
                                <Question question={x.question} />
                        
                            
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default AccordionQuestions
