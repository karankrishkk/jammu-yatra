export default function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark opacity-75 sticky-top shadow-lg">
            <div className="container">
                <a className="navbar-brand fw-bold fs-4" href="#">
                    <span className="text-warning">Jammu</span> Yatra
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarMenu"
                    aria-controls="navbarMenu"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarMenu">
                    <div className="navbar-nav ms-auto gap-lg-3">
                        <a className="nav-link active" href="#">Home</a>
                        <a className="nav-link" href="#packages">Tour Packages</a>
                        <a className="nav-link" href="#vehicles">Vehicles</a>
                        <a className="nav-link" href="#contact">Contact</a>
                        <a className="btn btn-danger opacity-100 nav-link active" href="#booking">Book Trip</a>
                    </div>
                </div>

            </div>
        </nav>
    )
}