import LearningPathBase from "./LearningPathBase";

const fullStackContent = {
  title: "Full Stack Development",
  subtitle: "The essential skills every full stack developer must have.",
  description:
    "A full stack developer works with both the front-end and back-end of web applications. They can create complete web applications and have a broad understanding of web development technologies.",
  averageSalary:
    "The average salary for a Full Stack Developer is $112,000 per year in the United States.",
  sections: [
    {
      title: "Front-end Development",
      description:
        "Learn to build responsive and interactive user interfaces using modern web technologies.",
      courses: [
        {
          title: "HTML5 & CSS3 Fundamentals",
          level: "Beginner",
          duration: "4 weeks",
        },
        {
          title: "JavaScript Essentials",
          level: "Beginner",
          duration: "6 weeks",
        },
        {
          title: "React.js Development",
          level: "Intermediate",
          duration: "8 weeks",
        },
      ],
    },
    {
      title: "Back-end Development",
      description: "Master server-side programming and database management.",
      courses: [
        {
          title: "Node.js & Express.js",
          level: "Intermediate",
          duration: "6 weeks",
        },
        {
          title: "Database Design with MongoDB",
          level: "Intermediate",
          duration: "4 weeks",
        },
        { title: "API Development", level: "Advanced", duration: "5 weeks" },
      ],
    },
    {
      title: "DevOps & Deployment",
      description:
        "Learn to deploy and maintain web applications in the cloud.",
      courses: [
        { title: "Git & GitHub", level: "Beginner", duration: "2 weeks" },
        {
          title: "Docker Fundamentals",
          level: "Intermediate",
          duration: "3 weeks",
        },
        {
          title: "CI/CD Pipeline Implementation",
          level: "Advanced",
          duration: "4 weeks",
        },
      ],
    },
  ],
};

export default function FullStackLearningPath() {
  return <LearningPathBase pathContent={fullStackContent} />;
}
