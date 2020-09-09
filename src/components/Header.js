import React from 'react'
import './Header.css'

export default function Header() {
    return (
        <header>
            <div className="header-logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2014_logo.svg/800px-Netflix_2014_logo.svg.png" alt="Netflix logo" />
            </div>
            <div className="header-user">
                <img src="https://occ-0-407-420.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABSLII-o6GmYPFo09Nlv7D5jVLJGKsBJnZFzFAj82yk-WfGl7mV_vbCPIK5h65iTgGTs1dobHjU5Nlwc0EwKaty5KYhoV.png" alt="Netflix user" />
            </div>
        </header>
    )
}
