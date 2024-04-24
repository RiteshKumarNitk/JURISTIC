
import React from "react";
import Back from "../common/Back";
import Heading from "../common/Heading";
// import img from "../images/about.jpg"
import { Button } from "@material-tailwind/react";
const CoreTeam = () => {


  const imgUrl =
    "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; // Define your image URL here
  const imgUrl1 =
    "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; // Define your image URL here

  return (


    <div>
      <section className="about">
        <Back name="About Us" title="About Us - Who We Are?" cover={imgUrl} />
        <div className="container flex mtop">
          <div className="left row">
            <Heading
              title="Our Agency Story"
              subtitle="Check out our company story and work process"
            />

            <p>
              Legal Inkwell is one of the most versatile law firms in India. We
              pride ourselves in providing strategic and result oriented
              solutions to our broad spectrum of clientele.
            </p>
            <p>
              Our colleagues are experts in their specific areas along with
              being zestful for the rapidly changing world. We have been able to
              solve complex corporate issues to small civil matters. The firm
              deals in various avenues of law with utmost professional and
              highly trained partners and colleagues who deal proficiently in
              their niche. We believe in cultural depth, entrustment and it's
              amalgamation with modern ethics.
            </p>
            <p>
              We believe in maintaining transparency and constant update to our
              clients thereby resulting in efficiency and client satisfaction.
              Our focus is pin-pointed upon our clients' needs and simplifying
              complex legal solutions to them.
            </p>
            {/* <button className="btn2">More About Us</button> */}
            <Button variant="text" className="flex items-center gap-2">
              Read More{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </div>
          <div className="right row">
            <img src={imgUrl1} alt="" />
          </div>
        </div>
      </section>
     
    </div>
  )
}

export default CoreTeam