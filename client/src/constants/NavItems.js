//import { useEffect, useState } from "react";

// const ResizeComponent = () => {
//   const [size, setSize] = useState({ width: window.innerWidth });

//   console.log("Size: ", size);
//   useEffect(() => {
//     setSize({
//       width: window.innerWidth,
//     });
//     ResizeComponent();
//   }, [size]);
// };

export const navItems = [
  {
    id: 1,
    title: "Home",
    path: "/",
    cName: "nav-item",
  },
  {
    id: 2,
    title: "About",
    path: "/overview",
    cName: "nav-item",
  },
  {
    id: 3,
    title: "Services",
    path: "/trainings",
    cName: "nav-item",
  },
  {
    id: 4,
    title: "Pricing",
    path: "/pricing",
    cName: "nav-item",
  },
  {
    id: 5,
    title: "News",
    path: "/news",
    cName: "nav-item",
  },
  {
    id: 6,
    title: "Applications",
    path: "/trainingIndividual",
    cName: "nav-item",
  },
  {
    id: 7,
    title: "Contact",
    path: "/contact",
    cName: "nav-item",
  },
];

export const aboutDropdown = [
  {
    id: 1,
    title: "Overview",
    path: "/overview",
    cName: "submenu-item",
  },
  {
    id: 2,
    title: "Our Team",
    path: "/teams",
    cName: "submenu-item",
  },
  {
    id: 3,
    title: "Our Partners",
    path: "/partners",
    cName: "submenu-item",
  },
  {
    id: 4,
    title: "Testimonials",
    path: "/testimonials",
    cName: "submenu-item",
  },
];

export const serviceDropdown = [
  {
    id: 1,
    title: "Trainings",
    path: "/trainings",
    cName: "submenu-item",
  },
  {
    id: 2,
    title: "Solutions",
    path: "/solutions",
    cName: "submenu-item",
  },
];

export const ApplicationsDropdown = [
  {
    id: 1,
    title: "For Individuals",
    path: "/trainingIndividual",
    cName: "submenu-item",
  },
  {
    id: 2,
    title: "Business org.",
    path: "/businessOrganizations",
    cName: "submenu-item",
  },
  {
    id: 2,
    title: "Business D.S",
    path: "/bds",
    cName: "submenu-item",
  },
];
