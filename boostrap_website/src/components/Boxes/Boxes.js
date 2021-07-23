import React from 'react'
import Card from './Card'

const Boxes = () => {
    return (
        <section className="p-5">
            <div className="container">
                <div className='row text-center g-4'>
                    <Card icon="bi bi-laptop mb-3" card_title="Virtual" 
                    card_text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Iure, quas quidem possimus dolorum esse eligendi?"/>

                    <Card icon="bi bi-person-square mb-3" card_title="Hybrid" 
                    card_text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Iure, quas quidem possimus dolorum esse eligendi?"/>

                    <Card icon="bi bi-people mb-3" card_title="In Person" 
                    card_text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Iure, quas quidem possimus dolorum esse eligendi?"/>
                    
                </div>
        
            </div>
        </section>
        
    )
}

export default Boxes
