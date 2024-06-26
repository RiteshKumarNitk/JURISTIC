import {
    Card,
    CardBody,
    Avatar,
    IconButton,
    Typography,
  } from "@material-tailwind/react";
  
  
  function TeamCard({ img, name, title }) {
    return (
      <Card className="gap-4" shadow={false} style={{ width: 'auto', height: 'auto' }}>
      <CardBody className="text-center">
      <Avatar
  src={img}
  alt={name}
  variant="rectangle" // corrected variant spelling
  size="xxxl" // Increase the size of the avatar
  className="mx-auto mb-16 object-top" // Increase margin bottom for better spacing
/>

        <Typography variant="h5" color="blue-gray" className="font-medium text-xl mb-2"> {/* Increase text size */}
          {name}
        </Typography>
        <Typography
          color="blue-gray"
          className="text-base font-semibold text-gray-600 mb-4" // Increase margin bottom for better spacing
        >
          {title}
        </Typography>
        <div className="flex items-center justify-center gap-2">
          <IconButton variant="text" color="gray">
            <i className="fa-brands fa-twitter text-lg" />
          </IconButton>
          <IconButton variant="text" color="gray">
            <i className="fa-brands fa-linkedin text-lg" />
          </IconButton>
          <IconButton variant="text" color="gray">
            <i className="fa-brands fa-dribbble text-lg" />
          </IconButton>
        </div>
      </CardBody>
    </Card>
    
    );
  }
  
  
  const members = [
    {
      img: `https://www.material-tailwind.com/img/avatar1.jpg`,
      name: "Ritesh",
      title: "Co-Founder",
    },
    {
      img: `https://www.material-tailwind.com/img/avatar2.jpg`,
      name: "Ryan Samuel",
      title: "Co-Founder",
    },
    {
      img: `https://www.material-tailwind.com/img/avatar5.jpg`,
      name: "Nora Hazel",
      title: "UI/UX Designer",
    },
    {
      img: `https://www.material-tailwind.com/img/avatar4.jpg`,
      name: "Otto Gonzalez",
      title: "Marketing Specialist",
    }
  ];
  
  export function TeamSection12() {
    return (
      <section className=" py-8 px-8 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-16 text-center lg:mb-28">
          <Typography
            variant="h6"
            color="blue-gray"
            className="text-lg"
          >
            Meet the Team
          </Typography>
          <Typography
            variant="h1"
            color="blue-gray"
            className="my-2 !text-2xl lg:!text-4xl"
          >
            Behind the Success: Our Dedicated Team
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto w-full !text-gray-500 max-w-4xl"
          >
            From visionary leadership to creative talent, and technical wizards, 
            each team member plays a pivotal role in delivering the exceptional 
            service and innovative solutions.
          </Typography>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {members.map((props, key) => (
            <TeamCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
    );
  }
  
  export default TeamSection12;