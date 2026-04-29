import {Link} from 'react-router-dom'
function Navbar() {
    return ( 
        <>
            <div className="navbar boarder-none custom-navbar navbar-expand-lg " >
  <div className="container-fluid" style={{ backgroundColor: "#F0E4D6"}}>
    <Link className="navbar-brand" to="#">Malak</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ">
        <Link className="nav-link"  to="/">Home Page</Link>
        <Link className="nav-link"  to="/mainPage">Main Page</Link>
        <Link className="nav-link" to="/Memories">Memories</Link>
        <Link className="nav-link" to="/Shokran">Shokran</Link>
        </div>
    </div>
  </div>
</div>
        </>
     );
}

export default Navbar;