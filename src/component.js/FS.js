import React from 'react'

function FS() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-darkk bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Disaster Mangement</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/services">BLOGS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Aboutus</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 login/signup
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/login">Login</a></li>
                  <li><a className="dropdown-item" href="/registration">Signup</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search here to learn" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Explore</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default FS