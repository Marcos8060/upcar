import React,{useState,useRef,useEffect} from 'react'
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from 'react-router-dom'


function Navbar() {
  const [navBackground, setNavBackground] = useState(false);

  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 40;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="app__navbar">
      <nav className="navbar navbar-expand-lg fixed-top"
      style={{
        transition: "1s ease",
        backgroundColor: navBackground ? "#EEF5FB" : "transparent",
      }} 
      >
          <div className="container">
            <a className="navbar-brand" href="/">
              ZolaCar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <MenuIcon className='menu'/>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                
                <li className="nav-item">
                  <Link to='/fleet' className="nav-link">
                    Visit Our Fleet
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav right ms-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    My Account
                  </a>
                  <ul className="dropdown-menu account" aria-labelledby="navbarDropdown">
                    <li>
                      <a className="dropdown-item" href="#">
                        SignIn
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        My account
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Checkout
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar