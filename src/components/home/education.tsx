// EducationSection.js
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { GraduationCapIcon } from "lucide-react";

const educationData = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Example",
    duration: "2015 - 2019",
    description: "Focused on software engineering, algorithms, and data structures. Graduated with honors.",
  },
  {
    degree: "Master of Science in Artificial Intelligence",
    institution: "Institute of Technology",
    duration: "2020 - 2022",
    description: "Specialized in machine learning, neural networks, and deep learning.",
  },
];

const Education = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Education</h2>
        <VerticalTimeline>
          {educationData.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--education"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
              date={item.duration}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<GraduationCapIcon />}
            >
              <h3 className="vertical-timeline-element-title">{item.degree}</h3>
              <h4 className="vertical-timeline-element-subtitle">{item.institution}</h4>
              <p>{item.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Education;
