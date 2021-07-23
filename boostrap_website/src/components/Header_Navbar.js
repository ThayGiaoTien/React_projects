import React from 'react'


const Header_Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md bg-dark fixed-top navbar-dark">
            
            <div className="container " >
                <a href="#" className="navbar-brand">Teacher Forward</a>

                {/* Hamberger Menu Button */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navmenu" >
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navmenu">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a href="#learn" className="nav-link">What you will learn?</a>
                        </li>
                        <li className="nav-item">
                            <a href="#questions" className="nav-link">Questions</a>
                        </li>
                        <li className="nav-item">
                            <a href="#instructors" className="nav-link">Instructors</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header_Navbar
