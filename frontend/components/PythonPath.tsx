import LearningPathBase from "./LearningPathBase";

const pythonContent = {
  title: "Python Programming",
  subtitle: "Master Python, one of the most versatile programming languages.",
  description:
    "Python developers create a wide range of applications, from web development to data analysis, machine learning, and automation. Python's simplicity and power make it an essential skill for many tech roles.",
  averageSalary:
    "The average salary for a Python Developer is $120,000 per year in the United States.",
  sections: [
    {
      title: "Python Fundamentals",
      description: "Learn the core concepts of Python programming.",
      courses: [
        { title: "Python Basics", level: "Beginner", duration: "4 weeks" },
        {
          title: "Object-Oriented Programming in Python",
          level: "Intermediate",
          duration: "5 weeks",
        },
        {
          title: "Python Data Structures and Algorithms",
          level: "Intermediate",
          duration: "6 weeks",
        },
      ],
    },
    {
      title: "Python for Web Development",
      description: "Master web development using Python frameworks.",
      courses: [
        {
          title: "Django Fundamentals",
          level: "Intermediate",
          duration: "7 weeks",
        },
        {
          title: "Flask Web Development",
          level: "Intermediate",
          duration: "5 weeks",
        },
        {
          title: "FastAPI for High-Performance APIs",
          level: "Advanced",
          duration: "4 weeks",
        },
      ],
    },
    {
      title: "Python for Data Science",
      description:
        "Learn to use Python for data analysis and machine learning.",
      courses: [
        {
          title: "Data Analysis with Pandas",
          level: "Intermediate",
          duration: "5 weeks",
        },
        {
          title: "Machine Learning with Scikit-learn",
          level: "Advanced",
          duration: "8 weeks",
        },
        {
          title: "Deep Learning with TensorFlow",
          level: "Advanced",
          duration: "6 weeks",
        },
      ],
    },
  ],
};

export default function PythonLearningPath() {
  return <LearningPathBase pathContent={pythonContent} />;
}
