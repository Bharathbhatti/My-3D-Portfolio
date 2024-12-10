import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    mongodb,
    git,
    mysql,
    python,
    ecommerce,
    stock,
    shirt,
    threejs,
    nextjs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Frontend Developer",
      icon: backend,
    },
    {
      title: "Next.js Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Next JS",
      icon: nextjs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "My Sql",
      icon: mysql,
    },
    {
      name: "Python",
      icon: python,
    },
  ];
  
  const projects = [
    {
      name: "Ecommerce Website",
      description:
        "Designed and developed a fully functional eCommerce website with a user-friendly interface, secure payment integration, and responsive design. Implemented features such as product listing, search and filtering, shopping cart, order management, and user authentication.",
      tags: [
        {
          name: "Next Js",
          color: "blue-text-gradient",
        },
        {
          name: "Next Auth",
          color: "green-text-gradient",
        },
        {
          name: "Typescript",
          color: "black-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "pink-text-gradient",
        },
        {
          name: "Stripe",
          color: "red-text-gradient",
        },
      ],
      image: ecommerce,
      source_code_link: "https://github.com/Bharathbhatti/ecommerce_website",
    },
    {
      name: "Stock Management System",
      description:
        "Web application that enables users to add, remove and search products that are stored in a database.An interactive UI that makes user understand the functionality of a database.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Mongodb",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: stock,
      source_code_link: "https://github.com/Bharathbhatti/Stock-Management-System",
    },
    {
      name: "3d Shirt Website",
      description:
        "A product based 3D t-sirt website built using Three js where user can change the color and logo of the t-shirt.This website has an amazing feature where the user can ask the AI to design a t-shirt and finally download the designed t-shirt.",
      tags: [
        {
          name: "Threejs",
          color: "blue-text-gradient",
        },
        {
          name: "React",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "pink-text-gradient",
        },
      ],
      image: shirt,
      source_code_link: "https://github.com/Bharathbhatti/3D-Shirt-Styling",
    },
  ];
  
  export { services, technologies, projects };