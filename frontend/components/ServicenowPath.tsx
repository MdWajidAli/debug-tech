import LearningPathBase from "./LearningPathBase";

const serviceNowContent = {
  title: "ServiceNow",
  subtitle:
    "Become an expert in the ServiceNow platform for IT service management.",
  description:
    "ServiceNow specialists implement and customize the ServiceNow platform to streamline IT operations, improve service delivery, and automate business processes.",
  averageSalary:
    "The average salary for a ServiceNow Developer is $108,000 per year in the United States.",
  sections: [
    {
      title: "ServiceNow Fundamentals",
      description:
        "Learn the basics of the ServiceNow platform and its core modules.",
      courses: [
        {
          title: "Introduction to ServiceNow",
          level: "Beginner",
          duration: "3 weeks",
        },
        {
          title: "ServiceNow Administration",
          level: "Beginner",
          duration: "5 weeks",
        },
        {
          title: "ITIL with ServiceNow",
          level: "Intermediate",
          duration: "4 weeks",
        },
      ],
    },
    {
      title: "ServiceNow Development",
      description:
        "Master ServiceNow development and customization techniques.",
      courses: [
        {
          title: "ServiceNow Scripting",
          level: "Intermediate",
          duration: "6 weeks",
        },
        {
          title: "ServiceNow Application Development",
          level: "Advanced",
          duration: "8 weeks",
        },
        {
          title: "ServiceNow Integration",
          level: "Advanced",
          duration: "5 weeks",
        },
      ],
    },
    {
      title: "ServiceNow Specializations",
      description: "Dive deep into specific ServiceNow modules and use cases.",
      courses: [
        {
          title: "IT Operations Management (ITOM)",
          level: "Advanced",
          duration: "6 weeks",
        },
        {
          title: "Customer Service Management (CSM)",
          level: "Intermediate",
          duration: "4 weeks",
        },
        {
          title: "ServiceNow Security Operations",
          level: "Advanced",
          duration: "5 weeks",
        },
      ],
    },
  ],
};

export default function ServiceNowLearningPath() {
  return <LearningPathBase pathContent={serviceNowContent} />;
}
