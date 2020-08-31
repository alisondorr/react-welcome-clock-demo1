import React from "react"
import { Link } from "react-router-dom"


function Navigation(props) {
    return (
        <div classname="Navigation">
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/clock">CLOCK</Link></li>
                <li><Link to="/contact">CONTACT</Link></li>
                <li><Link to="/jeopardy">JEOPARDY</Link></li>

            </ul>
        </div>
    )
}

export default Navigation 