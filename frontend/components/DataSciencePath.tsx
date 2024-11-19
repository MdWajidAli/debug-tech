import LearningPathBase from "./LearningPathBase";

const dataScienceContent = {
  title: "Data Science",
  subtitle: "Transform raw data into actionable insights.",
  description:
    "Data scientists analyze and interpret complex data to help organizations make better decisions. They use statistical techniques, machine learning, and programming to extract meaningful information from data.",
  averageSalary:
    "The average salary for a Data Scientist is $122,000 per year in the United States.",
  sections: [
    {
      title: "Programming for Data Science",
      description:
        "Learn essential programming skills for data analysis and manipulation.",
      courses: [
        {
          title: "Python for Data Science",
          level: "Beginner",
          duration: "6 weeks",
        },
        { title: "R Programming", level: "Beginner", duration: "4 weeks" },
        {
          title: "SQL for Data Analysis",
          level: "Intermediate",
          duration: "3 weeks",
        },
      ],
    },
    {
      title: "Statistics and Machine Learning",
      description:
        "Master statistical techniques and machine learning algorithms.",
      courses: [
        {
          title: "Statistics Fundamentals",
          level: "Intermediate",
          duration: "5 weeks",
        },
        {
          title: "Machine Learning Basics",
          level: "Intermediate",
          duration: "8 weeks",
        },
        {
          title: "Deep Learning and Neural Networks",
          level: "Advanced",
          duration: "6 weeks",
        },
      ],
    },
    {
      title: "Big Data and Visualization",
      description:
        "Learn to work with large datasets and create impactful visualizations.",
      courses: [
        {
          title: "Big Data Processing with Spark",
          level: "Advanced",
          duration: "5 weeks",
        },
        {
          title: "Data Visualization with Tableau",
          level: "Intermediate",
          duration: "4 weeks",
        },
        {
          title: "Advanced Data Storytelling",
          level: "Advanced",
          duration: "3 weeks",
        },
      ],
    },
  ],
};

export default function DataScienceLearningPath() {
  return <LearningPathBase pathContent={dataScienceContent} />;
}
