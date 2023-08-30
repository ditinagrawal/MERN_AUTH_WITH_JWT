import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate()

  const isUserSignedin = !!localStorage.getItem('token')
  const username = localStorage.getItem('username')

  const handleSignout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    navigate('/login')
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link className="navbar-brand fs-3 fw-bold" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav m-auto">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/about">
                About
              </Link>
              <Link className="nav-link" to="/services">
                Services
              </Link>
              <Link className="nav-link" to="/pricing">
                Pricing
              </Link>
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </div>
            {
              isUserSignedin
              ? 
              <div className="mainbtns">
                <Link to='/profile'><button className="btn btn-dark">{username}</button></Link>
                <button className="btn btn-outline-dark mx-2" onClick={handleSignout}>SignOut</button>
            </div>
            :
            <div className="mainbtns">
                <Link to='/login'><button className="btn btn-dark me-2">Login</button></Link>
                <Link to='/register'><button className="btn btn-outline-dark">Register</button></Link>
            </div>
            }
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
