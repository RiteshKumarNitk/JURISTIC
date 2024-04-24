import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import img from "../../images/image/1.jpg"
const navListMenuItems = [
  {
    title: "Civil",
    description: "Find the perfect solution for your needs.",
    icon: SquaresPlusIcon,
    path: "/civil",
  },
  {
    title: "Criminal",
    description: "Meet and learn about our dedication",
    icon: UserGroupIcon,
    path: "/criminal",
  },
  {
    title: "Banking & Finance",
    description: "Find the perfect solution for your needs.",
    icon: Bars4Icon,
    path: "/banking-finance",
  },
  {
    title: "Securities Law",
    description: "Learn how we can help you achieve your goals.",
    icon: SunIcon,
    path: "/securities-laws",
  },
  {
    title: "Foreign Exchange",
    description: "Reach out to us for assistance or inquiries",
    icon: GlobeAmericasIcon,
    path: "/foreign-exchange",
  },
  {
    title: "Intellectual Property Rights",
    description: "Find the perfect solution for your needs.",
    icon: PhoneIcon,
    path: "/intellectual-property-rights",
  },
  {
    title: "Constitutional Law",
    description: "Read insightful articles, tips, and expert opinions.",
    icon: NewspaperIcon,
    path: "/constitutional-law",
  },
  {
    title: "Service Law",
    description: "Find the perfect solution for your needs.",
    icon: RectangleGroupIcon,
    path: "/service-law",
  },
  {
    title: "Alternate Dispute Redressal	",
    description: "Explore limited-time deals and bundles",
    icon: TagIcon,
    path: "/alternate-dispute-resolution",
  },
];

const navListMenuItemsInsights = [
  {
    title: "Articles",
    description: "Find the perfect solution for your needs.",
    icon: SquaresPlusIcon,
    path: "/articles",
  },
  {
    title: "NewsLetter",
    description: "Find the perfect solution for your needs.",
    icon: SquaresPlusIcon,
    path: "/Newsltr",
  },

];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(
    ({ icon, title, description, path }, key) => (
      <Link to={path} key={key}>
        <MenuItem className=" flex text-center justify-center  ">
         
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className=" items-start text-sm font-bold"
            >
              {title}
            </Typography>
          </div>
        </MenuItem>
      </Link>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Practice Areas
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""
                  }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""
                  }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavListMenuInsights() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItemsInsights.map(
    ({ icon, title, description, path }, key) => (
      <Link to={path} key={key}>
        <MenuItem className=" flex flex-col  ">
          {/* <div className="items-start flex rounded-lg !bg-blue-gray-50 p-2 ">
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div> */}
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className=" text-sm font-bold"
            >
              {title}
            </Typography>
          </div>
        </MenuItem>
      </Link>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              insights
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""
                  }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""
                  }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
 
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as={Link} // Use Link instead of a
        to="/" // Specify the home path
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2">Home</ListItem>
      </Typography>
      <NavListMenu />
      <Typography
        as={Link} // Use Link instead of a
        to="/CoreTeam" // Specify the home path
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Core Team
        </ListItem>
      </Typography>

      <NavListMenuInsights />
      <Typography
        as={Link} // Use Link instead of a
        to="/contact" // Specify the contact path
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Contact Us
        </ListItem>
      </Typography>
    </List>
  );
}

export default function Header() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md">
    <Navbar className="mx-auto shadow-none border-none px-4 py-4">
      <div className="flex items-center justify-between text-blue-gray-900">
        <a href="#" className="flex title-font font-medium items-center w-16 h-16 text-gray-900 mb-4">
          <img src={img} alt="" />
        </a>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          <Button variant="gradient" size="sm">
            Sign In
          </Button>
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Button variant="gradient" size="sm" fullWidth>
            Sign In
          </Button>
        </div>
      </Collapse>
    </Navbar>
  </div>
  );
}
