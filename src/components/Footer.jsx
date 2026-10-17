
export default function Footer() {
  return (
    <footer id="contact" className="bg-dark text-light py-5 mt-5">
      <div className="container">
        <div className="row g-4">

          {/* Business Information */}
          <div className="col-md-4">
            <h4 className="fw-bold"><span className="text-warning">Jammu </span>Yatra</h4>
            <p className="text-secondary">
              Explore Jammu, Travel Beyond!
            </p>
            <p className="mb-0">📍 Jammu, Jammu & Kashmir</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none ms-2">Home</a></li>
              <li><a href="#packages" className="text-light text-decoration-none ms-2"> Tour Packages</a></li>
              <li><a href="#vehicles" className="text-light text-decoration-none ms-2">Vehicles</a></li>
              <li><a href="#booking" className="text-light text-decoration-none ms-2">Book a Trip</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p className="mb-2">📞 Phone: 6005755026</p>
            <p className="mb-0">✉️ Email: jammuyatra@gmail.com</p>
          </div>

        </div>

        <hr className="border-secondary my-4" />

        <p className="text-center text-secondary mb-0">
          © {new Date().getFullYear()} Jammu Yatra. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
