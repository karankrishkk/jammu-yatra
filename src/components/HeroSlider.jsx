import { useEffect, useState } from "react";

import jammu from "../assets/jammu.png";
import patnitop from "../assets/patnitop.png";
import mansar from "../assets/mansar.png";

const slides = [
    {
        image: jammu,
        title: "Discover the Beauty of Jammu",
        description: "Your Journey, Our Responsibility.",
    },
    {
        image: patnitop,
        title: "Escape to Patnitop",
        description: "Explore green mountains and scenic roads.",
    },
    {
        image: mansar,
        title: "Experience Mansar Lake",
        description: "Find peace in the beauty of nature.",
    },
];

export default function HeroSlider(){
    const [currentIndex, setCurrentindex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentindex((previousIndex) =>
                (previousIndex + 1) % slides.length
            );
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const currentSlide = slides[currentIndex];

    return(
        <section
            className="hero-slider"
            style={{backgroundImage: `url(${currentSlide.image})`}}
        >
            <div className="hero overlay">
                <p className="text-uppercase fw-bold">
                    --- Jammu Yatra • Explore More ---
                </p>

                <h1 className="display-3 fw-bold">
                    {currentSlide.title}
                </h1>

                <p className="lead text-dark bg-light opacity-50">
                    {currentSlide.description}
                </p>

                <button 
                    className="btn btn-warning btn-lg mt-3"
                    onClick={() =>
                        document.getElementById("packages")?.scrollIntoView({
                            behavior: "smooth",
                        })
                    }
                >
                    Explore Tour Packages
                </button>

                <div className="mt-4">
                    {slides.map((slide, index) => (
                        <button 
                            key={slide.title}
                            className={`slider-dot ${index === currentIndex ? " active" : ""}`}
                            onClick={() => setCurrentindex(index)}
                            aria-label={'Show slide ${index + 1}'}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}