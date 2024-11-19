import LearningPathBase from "./LearningPathBase";

const cloudDevOpsContent = {
  title: "AWS, Azure & DevOps",
  subtitle:
    "Master cloud platforms and DevOps practices for modern software development.",
  description:
    "Cloud and DevOps engineers design, implement, and manage cloud infrastructure while streamlining the software development lifecycle through automation and collaboration.",
  averageSalary:
    "The average salary for a Cloud DevOps Engineer is $130,000 per year in the United States.",
  sections: [
    {
      title: "Cloud Fundamentals",
      description: "Learn the basics of cloud computing and major platforms.",
      courses: [
        {
          title: "Introduction to Cloud Computing",
          level: "Beginner",
          duration: "3 weeks",
        },
        { title: "AWS Essentials", level: "Beginner", duration: "6 weeks" },
        { title: "Azure Fundamentals", level: "Beginner", duration: "6 weeks" },
      ],
    },
    {
      title: "DevOps Practices",
      description: "Master DevOps methodologies and tools.",
      courses: [
        {
          title: "DevOps Principles and Practices",
          level: "Intermediate",
          duration: "4 weeks",
        },
        {
          title: "Continuous Integration and Deployment",
          level: "Intermediate",
          duration: "5 weeks",
        },
        {
          title: "Infrastructure as Code",
          level: "Advanced",
          duration: "6 weeks",
        },
      ],
    },
    {
      title: "Container Orchestration",
      description: "Learn to manage and deploy containerized applications.",
      courses: [
        {
          title: "Docker Fundamentals",
          level: "Intermediate",
          duration: "3 weeks",
        },
        {
          title: "Kubernetes Essentials",
          level: "Advanced",
          duration: "7 weeks",
        },
        {
          title: "Microservices Architecture",
          level: "Advanced",
          duration: "5 weeks",
        },
      ],
    },
  ],
};

export default function CloudDevOpsLearningPath() {
  return <LearningPathBase pathContent={cloudDevOpsContent} />;
}
