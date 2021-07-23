import React from 'react'
import InstructorCard from './InstructorCard'

const Instructors = () => {
    const instructors=[
        {name: "John Doe", image: "https://randomuser.me/api/portraits/men/11.jpg"},
        {name: "Jane Doe", image: "https://randomuser.me/api/portraits/women/11.jpg"},
        {name: "Alex", image: "https://randomuser.me/api/portraits/men/19.jpg"},
        {name: "Natasha", image: "https://randomuser.me/api/portraits/women/19.jpg"},

    ]

    return (
       <section className="p-5 bg-primary" id="instructors">
           <div className="container">
               <h2 className="container text-center text-white">Our Instructors</h2>
               <p className="lead text-center text-white mb-5" >
                   Our instructors all have 5+ years working as a Web Developer in the industry
               </p>
               <div className="row g-4">
                   {
                       instructors.map(instructor=>(
                           <InstructorCard image={instructor.image} name={instructor.name} />
                       ))
                   }
               </div>
           </div>
       </section>
    )
}

export default Instructors
