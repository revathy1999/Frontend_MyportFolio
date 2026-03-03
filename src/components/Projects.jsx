import { useState } from "react";

export default function Projects({ data }) {
  const [expandedIndex, setExpandedIndex] = useState(false);
  const truncateText = (text, wordLimit = 7) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };
  const toggleText = (index) => {
    return setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="md:p-10 bg-[#171A42] p-5">
      <h1 className="font-bold text-white mb-5">Projects</h1>
      <div className="text-white flex flex-col justify-center md:flex-row md:gap-24 flex-wrap gap-5">
        {data?.projects.map((project, index) => (
          <div
            key={index}
            className="border border-gray-500 p-5 flex flex-col gap-3"
          >
            <h2 className="font-bold">{project?.title}</h2>

            <p className="font-thin">
              {expandedIndex === index
                ? project?.description
                : truncateText(project?.description, 7)}{" "}
              <button onClick={() => toggleText(index)} className="font-bold">
                {expandedIndex === index ? "Show less" : "Read more"}
              </button>
            </p>

            <div className="flex flex-wrap gap-3 mb-5">
              {project?.techstack.map((tech, i) => (
                <span key={i} className="px-2 py-1 text-sm bg-[#2c2c70]">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
