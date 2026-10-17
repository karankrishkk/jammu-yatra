import { useState } from "react";

import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import TourPackages from "./pages/TourPackages";
import Vehicles from "./pages/Vehicles";
import BookingForm from "./pages/BookingForm";
import Footer from "./components/Footer";

export default function App(){

  const [selectedVehicle,setSelectedVehicle] = useState("");

  const handleSelectVehicle = (vehicleName) => {
    const vehicleKeys =  {
    "Toyota Innova": "innova",
    "Innova Crysta": "innova-crysta",
    "Maruti Suzuki Dzire": "dzire",
    "Honda Amaze": "amaze",
    "Force Winger": "winger",
    };

    setSelectedVehicle(vehicleKeys[vehicleName] || "")
  }

  const[selectedPackage,setSelectedPackage] = useState("");

  const handleBookPackage = (packageName) => {

    const packageKeys = {
      "Patnitop": "patnitop",
      "Shiv Khori": "shiv-khori",
      "Mansar Lake": "mansar-lake"
    };

    setSelectedPackage(packageKeys[packageName] || "")
  };

  return (
    <>
      <Navbar />
      <HeroSlider />
      <TourPackages onBookPackage={handleBookPackage} />
      <Vehicles 
        onSelectVehicle={handleSelectVehicle} 
        selectedVehicleKeys={selectedVehicle}
      />

      <BookingForm 
        selectedPackage={selectedPackage}
        setSelectedPackage={setSelectedPackage}
        selectedVehicle={selectedVehicle}
        setSelectedVehicle={setSelectedVehicle}
      />
      <Footer />
    </>
  )
}