import { useState } from "react";

import jammu from "../assets/jammu.png";
import patnitop from "../assets/patnitop.png";
import mansar from "../assets/mansar.png";

export default function TourPackages ({onBookPackage}){
  const packages = [
    {
      name: "Patnitop",
      description: "Explore green mountains, pines and scenic views.",
      duration: "1 Day Trip",
      stops: ["Patnitop","Nathatop", "Sanasar"],
      price: 2500,
      image: patnitop,
    },
    {
      name: "Shiv Khori",
      description: "Experience a memorable spiritual journey.",
      duration: "1 Day Trip",
      stops: ["Ransoo Base Camp", "Shiv Khori Cave"],
      price: 2000,
      image: jammu,
    },
    {
      name: "Mansar Lake",
      description: "Enjoy peaceful lake views and natural beauty.",
      duration: "1 Day Trip",
      stops: ["Mansar Lake", "Surinsar Lake"],
      price: 1800,
      image: mansar,
    },
  ];

  const[selectedPackage,setSelectedPackage] = useState(null);

  // const handleViewPackage = (item) => {
  //   alert(
  //     `${item.name}\nDuration : ${item.duration}\nPrice : ₹${item.price}\n\n${item.description}`
  //   );
  // };

  return (
    
    <section id="packages" className="container py-5">
      <div className="text-center mb-5">
        <p className="text-primary text-uppercase fw-bold">
          Explore jammu
        </p>

        <h2 className="fw-bold">Popular Tour and Packages</h2>

        <p className="text-secondary">
          Discover beautiful destinations with Jammu Yatra.
        </p>
      </div>

      {selectedPackage && (
        <div className="modal d-block" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {selectedPackage.name}
                </h5>

                
              </div>
              
              <div className="modal-body">
                <p>{selectedPackage.description}</p>
                <p><strong>Duration :</strong> {selectedPackage.duration}</p>

                <p><strong>Places to Visits :</strong></p>

                <ul>
                  {selectedPackage.stops.map((place) => (
                    <li key={place}>{place}</li>
                  ))}
                </ul>

                <p><strong>Starting Price :</strong> ₹{selectedPackage.price}</p>
              </div>

              <div className="modal-footer ">
                <button
                  className="btn btn-secondary"
                  onClick={() => setSelectedPackage(null)}
                >
                  Close
                </button>

                <button
                  className="btn btn-primary"
                  onClick={() => {
                    onBookPackage(selectedPackage.name);
                    setSelectedPackage(null);
                    
                    document.getElementById("vehicles")?.scrollIntoView({
                      behavior: "smooth",
                      block: "center"
                    });
                  }}
                >
                  Book This Package
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="row g-4">
        {packages.map((item) => (
           <div className="col-md-6 col-lg-4" key={item.name}>
            <div className="card h-100 shadow">
              
              <img 
                src={item.image} 
                className="card-image-top"
                alt={item.image}
                style={{ height:"220px", objectFit: "cover" }} 
              />


              <div className="card-body">
                <h3 className="card-title h5 fw-bold">{item.name}</h3>
                <p className="text-secondary">{item.description}</p>
                <span className="badge text-bg-primary">
                  {item.duration}
                </span>

                <button 
                  className="btn btn-outline-primary w-100 mt-3"
                  onClick={() => setSelectedPackage(item)}
                >
                  View Package
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}