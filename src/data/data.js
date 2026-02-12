/*import project1 from "../assets/projects/project-1.webp";*/
/*import project2 from "../assets/projects/project-2.webp";*/
import project3 from "../assets/projects/project-3.webp";
import apocom from "../assets/projects/apocom.webp";
import musterstadt from "../assets/projects/musterstadt.webp";
import lyricsPoster from "../assets/projects/lyricsPoster.webp";
import muiDashboard from "../assets/projects/muiDashboard.webp";
import f1scorer from "../assets/projects/f1scorer.webp";
/*import project4 from "../assets/projects/project-4.webp";*/

/* Experiences */
export const EXPERIENCES = [
  {
    id: "get-ag",
    technologies: ["React", "Next.js", "TypeScript", "TailwindCSS", "MaterialUI"],
  },
  {
    id: "lead-frontend",
    technologies: ["React", "PHP", "Contentful", "mySQL"],
  },
  {
    id: "frontend-dev",
    technologies: ["React", "JavaScript", "PHP", "Bootstrap5"],
  },
  {
    id: "content-manager",
    technologies: ["JavaScript", "jQuery", "HTML5", "CSS"],
  },
];

/* Projects */
export const PROJECTS = [
  {
    id: "f1scorer",
    image: f1scorer,
    technologies: ["React", "React Router", "TypeScript", "TailwindCSS"],
    links: ["https://github.com/therobhe/f1-game-point-manager", "https://f1-2014-season-manager.netlify.app/"]
  },
  {
    id: "muiDashboard",
    image: muiDashboard,
    technologies: ["React", "TypeScript", "MaterialUI 5", "Formik", "Yup", "React-Router"],
    links: ["https://github.com/therobhe/mui-dashboard", "https://robhe-mui-dashboard.netlify.app/"]
  },
  {
    id: "lyricsPoster",
    image: lyricsPoster,
    technologies: ["Vue.js", "Express", "CSS"],
    links: ["https://github.com/therobhe/lyrics-poster-generator", "https://lyrics-poster-generator.netlify.app/"]
  },
  {
    id: "apocom",
    image: apocom,
    technologies: ["React", "Bootstrap5", "PHP", "HTML5"],
    links: ["https://www.apo.com"]
  },
  {
    id: "musterstadt",
    image: musterstadt,
    technologies: ["React", "React-Router", "TypeScript", "TailwindCSS"],
    links: ["https://musterstadt-community-mockup.netlify.app/", "https://github.com/therobhe/community-webpage"]
  },
  {
    id: "portfolio",
    image: project3,
    technologies: ["React", "TailwindCSS", "FramerMotion"],
    links: ["https://github.com/therobhe/react-homepage/"]
  },
/*  {
    id: "task-manager",
    image: project2,
    technologies: ["React", "TailwindCSS"],
    links: ["https://github.com/therobhe/project-managing-tool/"]
  }*/
  /*  {
      title: "Quiz App",
      image: project4,
      description:
        "A simple app, fetching some questions from an API and displaying them to the user. Features a score counter and a timer.",
      technologies: ["React", "TailwindCSS", "Open Trivia API"],
      links: [""
    },*/
];
