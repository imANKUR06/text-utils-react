import React, { useState } from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {

  const [bg,setbg] = useState('white')

  const changebg = (event)=>{
    setbg(event.target.value)
    console.log('Change bg is called of navbar : '+bg)
    document.body.style.backgroundColor = '$'+bg
  }

  const onchange =(event)=>{
    setbg(event.target.value)
    console.log('On change of Navbar is called');
  }


  return (
    <div>
      <nav className = {`navbar navbar-expand-lg navbar-${props.dmode} bg-${props.dmode}`} >
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Text Utils</a>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="/about">{props.naam}</Link>
        </li> */}
        {/* <li className="nav-item">
          <a className="nav-link" href="/">Contact</a>
        </li> */}

        
      </ul>
      <div className={`form-text form-text text-${props.dmode === 'warning'?'dark':'warning'}`}>
      <input className="form-text-input " value={bg} onChange={onchange} type="text" />
      <label className="form-text-label " >{bg}</label>
      <button onClick={changebg}  >Apply</button>
      </div>
      <div className={`form-check form-switch text-${props.dmode === 'warning'?'dark':'warning'}`}>
      <input className="form-check-input" type="checkbox" role="switch" onChange={props.enable} id="flexSwitchCheckDefault" />
      <label className="form-check-label " htmlFor="flexSwitchCheckDefault">Dark Mode</label>
      </div>
      
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
    </div>
  )
}

// for error checking and restricting data sent to props in App.js
Navbar.propType = {
    title: PropTypes.string.isRequired,
    naam: PropTypes.string,
}
Navbar.defaultProps = {
    title: 'This is home',
    naam: 'Apni Info'
}