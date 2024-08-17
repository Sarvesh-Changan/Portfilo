import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `I am a passionate Web Developer with expertise in front-end technologies like HTML5, CSS3, JavaScript, React.js, Tailwind CSS, and Material UI, complemented by back-end experience with Firebase. With a focus on creating seamless user interfaces and efficient back-end solutions, my goal is to leverage my skills to craft innovative and impactful web applications that drive success and deliver outstanding user experiences.`;

export const ABOUT_TEXT = `I am a passionate Web Developer with a strong foundation in front-end technologies such as HTML5, CSS3, JavaScript, React.js, Tailwind CSS, and Material UI, paired with back-end expertise in Firebase. My focus is on crafting seamless, user-friendly interfaces and efficient back-end solutions that not only meet client needs but also push the boundaries of innovation. With a commitment to delivering high-quality, impactful web applications, I strive to create digital experiences that drive business success and leave a lasting impression on users. My goal is to leverage my skills to build solutions that are both robust and scalable.`;

export const EXPERIENCES = [
  {
    year: "2023 - Sept",
    role: "Front-End Software Engineering",
    company: "Skyscanner",
    description: `Completed a job simulation where I built a web application using React as a front-end engineer at Skyscanner.
Developed a page for picking a travel date using Skyscanner’s open-source Backpack React library.
Customised my application and ran automated tests to ensure it rendered properly.`,
    technologies: ["Javascript", "React.js", "Backpack"],
    certificateLink: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Skyscanner/km4rw7dihDr3etqom_Skyscanner_gTBa7wzBcY2ZeDq3P_1717404135353_completion_certificate.pdf",
  },
  {
    year: "2024 - Jan",
    role: "Software Engineering",
    company: "J.P. Morgan",
    description: `Set up a local dev environment by downloading the necessary files, tools and dependencies. Used JPMorgan Chase’s open source library called Perspective to generate a live graph that displays a data feed in a clear and visually appealing way for traders to monitor.`,
    technologies: ["React.js", "Python", "Financial Analysis", "Web Application",],
    certificateLink: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_gTBa7wzBcY2ZeDq3P_1717605138346_completion_certificate.pdf",
  },
];

export const PROJECTS = [
  {
    title: "Fitness App",
    image: project1,
    description:
      "Browse exercises categorized by body parts (e.g., arms, legs). Each exercise includes a link to a YouTube video for visual guidance.",
    technologies: ["React.js", "Material-UI", "Rapid API"],
    ViewLink: 'https://fitness-app-jade-psi.vercel.app',
    githubLink: 'https://github.com/Sarvesh-Changan/Fitness-app',
  },
  {
    title: "AI Trip Planner",
    image: project2,
    description:
      "A React-based application that leverages AI to provide personalized hotel recommendations and curated travel itineraries. Users can discover the best places to stay and visit.",
    technologies: ["React.js", "Tailwind CSS", "Gemini AI", "Firebase"],
    ViewLink: 'https://trip-planner-ai-six.vercel.app',
    githubLink: 'https://github.com/Sarvesh-Changan/trip-planner-ai',
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React.js", "Framer Motion", "Tailwind CSS"],
    ViewLink: 'https://portfilo-blue.vercel.app',
    githubLink: 'https://github.com/Sarvesh-Changan/Portfilo',
  },
  {
    title: "Ecommerce Website",
    image: project4,
    description:
      "This is an online store built using React, Tailwind CSS, Firebase, Redux, and Razorpay. It allows users to browse products, add items to a cart, checkout securely, and track orders.",
    technologies: ["React.js", "Tailwind CSS", "Material UI", "Firebase", "Redux","Razorpay"],
    ViewLink: 'https://snapstore-alpha.vercel.app/',
    githubLink: 'https://github.com/Sarvesh-Changan/Ecommerce-website',
  },
];

export const CONTACT = {
  address: "Kalwa, Thane ",
  phoneNo: "+91 810 461 0045 ",
  email: "changansarvesh0@gmail.com",
};
