import { Typography, Card } from "@material-tailwind/react";

import Back from "../common/Back";
// import Heading from "../common/Heading";
// import img from "../images/about.jpg"
// import { Button } from "@material-tailwind/react"
import img from "../images/image/10.png";
import { AccordionDefault } from "../about/AccorditionDefault";
// function StatsCard({ count, title, description }) {


  
//   return (
//     <Card color="transparent" shadow={false}>
//       <Typography
//         variant="gradient"
//         className="text-4xl font-bold"
//         color="blue-gray"
//       >
//         {count}
//       </Typography>
//       <hr className="mt-2 mb-4 max-w-sm" />
//       <Typography
//         variant="h5"
//         color="blue-gray"
//         className="mt-1 font-bold"
//       >
//         {title}
//       </Typography>
//       <Typography className="text-base max-w-xs font-normal leading-7 !text-gray-500">
//         {description}
//       </Typography>
//     </Card>
//   );
// }

// const stats = [
//   {
//     count: "15,000M",
//     title: "Marathon Runner Progress",
//     description: "You're racing ahead in your marathon training goals.",
//   },
//   {
//     count: "$10,000+",
//     title: "Invested",
//     description: "Your financial acumen is paying off—literally.",
//   },
//   {
//     count: "4,500+",
//     title: "Hours of Exercise",
//     description:
//       "Your commitment to health is inspiring and your stats show it.",
//   },
//   {
//     count: "8,200+",
//     title: "Volunteer Hours",
//     description: "Your contributions have made an impact in your community.",
//   },
// ];

export function Civil() {
//   const imgUrl =
//   "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; // Define your image URL here
// const imgUrl1 =
//   "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; // Define your image URL here

  return (
    <section className="about">
    <Back name="About Us" title="About Us - Who We Are?" cover={img} />
    {/* <img src={img} alt="image 1"   className="h-full w-full object-cover"/> */}
    
    <section className="lg:py-28 py-10 px-8 container mx-auto">
      <div className="lg:mb-24 mb-10">
        <Typography
          color="blue-gray"
          className="mb-4 !text-2xl font-bold lg:!text-4xl"
        >
         Civil
        </Typography>
        <Typography
          variant="lead"
          className="w-w-full !text-gray-500 "
        >
          We&apos;re constantly trying to express ourselves and actualize our
          dreams. If you have the opportunity to play
        </Typography>
      </div>
      <div className="grid gap-10 lg:grid-cols-1 lg:gap-24 xl:grid-cols-2 items-center">
        <Card
          className="bg-gray-100/50 py-24 text-center"
          shadow={false}
        >
          <Typography
            variant="h1"
            className="!text-green-500 !leading-snug text-5xl"
          >
            1,000Kg
          </Typography>
          <Typography
            variant="h5"
            color="blue-gray"
            className="mt-2 font-bold"
          >
            CO2 Emissions Offset
          </Typography>
          <Typography
            variant="h4"
            color="blue-gray"
            className="mt-10 font-bold"
          >
            Eco Warrior Achievement
          </Typography>
          <Typography
            variant="lead"
            className="mt-1 text-base mx-auto !text-gray-500 lg:w-8/12"
          >
            Congratulations on reaching a new milestone in environmental
            stewardship!
          </Typography>
        </Card>
        <div>
          <div className="item-start">
            {/* {stats.map((props, key) => (
              <StatsCard key={key} {...props} />
            ))} */}
            {/* <AccordionDefault/> */}
            <AccordionDefault/>
          </div>
        </div>
      </div>
    </section>
  </section>
  
  );
}

export default Civil;