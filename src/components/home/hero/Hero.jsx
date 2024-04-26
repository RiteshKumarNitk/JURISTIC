import React from "react";
import { Carousel } from "@material-tailwind/react";
import "./hero.css";
import img from "../../images/image/10.png";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <Carousel
        className="h-screen"
        // loop={true} autoplay={true} 
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-1/2 z-50 transform -translate-x-1/2 flex gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all ${activeIndex === i ? "w-8 " : "w-4 "
                  }`}
                onClick={() => setActiveIndex(i)}
              />
              // <span
              //   key={i}
              //   className={`block h-1 cursor-pointer rounded-2xl transition-all ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              //     }`}
              //   onClick={() => setActiveIndex(i)}
              // />
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
         <img src={img} alt="image 1"   className="h-full w-full object-cover"/>
      </Carousel>
    </div>
  );
};

export default Hero;
