import LearningPathBase from "./LearningPathBase";

const cybersecurityContent = {
  title: "Cybersecurity",
  subtitle: "Essential skills for protecting digital assets and systems.",
  description:
    "Cybersecurity professionals protect organizations from digital threats and implement security measures to safeguard sensitive information and systems.",
  averageSalary:
    "The average salary for a Cybersecurity Analyst is $99,000 per year in the United States.",
  sections: [
    {
      title: "Security Fundamentals",
      description: "Learn the basics of cybersecurity and threat assessment.",
      courses: [
        {
          title: "Introduction to Cybersecurity",
          level: "Beginner",
          duration: "4 weeks",
        },
        {
          title: "Network Security Basics",
          level: "Beginner",
          duration: "5 weeks",
        },
        {
          title: "Security Protocols & Standards",
          level: "Intermediate",
          duration: "6 weeks",
        },
      ],
    },
    {
      title: "Offensive Security",
      description: "Master ethical hacking and penetration testing techniques.",
      courses: [
        {
          title: "Ethical Hacking Fundamentals",
          level: "Intermediate",
          duration: "8 weeks",
        },
        {
          title: "Penetration Testing",
          level: "Advanced",
          duration: "6 weeks",
        },
        {
          title: "Web Application Security",
          level: "Advanced",
          duration: "5 weeks",
        },
      ],
    },
    {
      title: "Security Operations",
      description: "Learn to monitor and respond to security incidents.",
      courses: [
        {
          title: "Security Information Management",
          level: "Intermediate",
          duration: "4 weeks",
        },
        { title: "Incident Response", level: "Advanced", duration: "5 weeks" },
        { title: "Digital Forensics", level: "Advanced", duration: "6 weeks" },
      ],
    },
  ],
};

export default function CybersecurityLearningPath() {
  return <LearningPathBase pathContent={cybersecurityContent} />;
}
