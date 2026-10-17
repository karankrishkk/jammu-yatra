import { useState, useEffect } from "react";

import innova from "../assets/innova.png";
import innovaCrysta from "../assets/innova-crysta.png";
import dzire from "../assets/dzire.png";
import amaze from "../assets/amaze.png";
import winger from "../assets/winger.png";


const vehicles = [
  {
    name: "Toyota Innova",
    seats: 7,
    price: 3500,
    image: innova,
  },
  {
    name: "Innova Crysta",
    seats: 7,
    price: 4500,
    image: innovaCrysta,
  },
  {
    name: "Maruti Suzuki Dzire",
    seats: 4,
    price: 2200,
    image: dzire,
  },
  {
    name: "Honda Amaze",
    seats: 4,
    price: 2000,
    image: amaze,
  },
  {
    name: "Force Winger",
    seats: 12,
    price: 5000,
    image: winger,
  },
];

export default function Vehicles({onSelectVehicle, selectedVehicleKeys}){
    

    const[selectedVehicle, setSelectedVehicle] = useState(null);

    useEffect(() => {
        if(selectedVehicleKeys === ""){
            setSelectedVehicle (null);
        }
    }, [selectedVehicleKeys]);

    return (
        <section id="vehicles" className="container py-5">
            <div className="text-center mb-5">
                <p className="text-primary fw-bold text-uppercase">
                    Choose your Ride
                </p>

                <h2 className="fw-bold">
                    Our Travel Vehicles
                </h2>

                <p className="text-secondary">
                    Comfortable rides for your Best journey.
                </p>
            </div>

            {selectedVehicle && (
                <div 
                    className="alert alert-success mb-4"
                    id="selectedVehicle"
                >
                    <h5 className="fw-bold">
                        Vehicle Selected!
                    </h5>

                    <p className="mb-1">
                        Vehicle: {selectedVehicle.name}
                    </p>

                    <p className="mb-2">
                        Price: ₹{selectedVehicle.price} / day
                    </p>

                    <button
                        className="btn btn-danger rounded-3 shadow"                     
                        onClick={() => {

                            document.getElementById("booking")?.scrollIntoView({
                                behavior: "smooth",
                                block: "start"
                            });
                        }}
                    >
                        Book Now
                    </button>
                    
                    <button 
                        className="btn btn-light text-danger rounded-3 ms-2 shadow"
                        onClick={() => setSelectedVehicle(null)}
                    >
                        Cancel
                    </button>

                </div>
            )}

            <div className="row g-4">
                {vehicles.map((vehicle) => (
                    <div className="col-md-6 col-lg-4" key={vehicle.name}>
                        <div className="card h-100 shadow">
                            <img 
                                src={vehicle.image} 
                                alt={vehicle.image}
                                className="card-img-top"
                                style={{height:"220px", objectFit:"cover"}}
                            />

                            <div className="card-body">
                                <h3 className="card-title h5 fw-bold">
                                    {vehicle.name}
                                </h3>

                                <p className="text-secondary">
                                    <strong>Seats : </strong>{vehicle.seats} Passengers
                                </p>

                                <p className="fs-5 fw-bold text-primary">
                                    ₹{vehicle.price}
                                    <small className="text-secondary fw-normal"> / day</small>
                                </p>

                                <button 
                                    className="btn btn-outline-info w-100"
                                    onClick={() => {
                                        setSelectedVehicle(vehicle);
                                        onSelectVehicle(vehicle.name);

                                        setTimeout(() => {
                                                document.getElementById("selectedVehicle")?.scrollIntoView({
                                                behavior:"smooth",
                                                block:"center"
                                            });
                                        }, 100);

                                        
                                    }}
                                >

                                    Select Vehicle
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}