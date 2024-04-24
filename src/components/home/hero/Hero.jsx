import React from "react";
import { Carousel } from "@material-tailwind/react";
import "./hero.css";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <Carousel
        className="h-screen"
        loop={true} // Enable looping
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-1/2 z-50 transform -translate-x-1/2 flex gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
        responsive={[
          {
            breakpoint: "sm",
            options: {
              slidesPerView: 1,
            },
          },
          {
            breakpoint: "md",
            options: {
              slidesPerView: 2,
            },
          },
          {
            breakpoint: "lg",
            options: {
              slidesPerView: 3,
            },
          },
        ]}
      >
        <img
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1413919873593-061d76ec8452?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image 3"
          className="h-full w-full object-cover"
        />
      </Carousel>
    </div>
  );
};

export default Hero;
