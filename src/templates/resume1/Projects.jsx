import { ExternalLink } from "lucide-react";
import productStore from "../../features/productStore";
import SectionWrapper from "./Sections";

const Projects = () => {
  const { projects } = productStore();
    if (projects && projects?.length === 0) return;

  return (
    <SectionWrapper title={"Projects"}>
      {projects.map((project, index) => {
        const { title, techStack, description, startDate, endDate, link } =
          project;
        return (
          <div className="project-card mb-2" key={index}>
            <a
              href={link}
              target="_blank"
              className="h2 flex gap-2 cursor-pointer items-center"
            >
              {title} <ExternalLink size={20} />
            </a>
            <p>
              {startDate} - {endDate}
            </p>
            {description.map((desc, i) => (
              <li className="text-[13px]" key={i}>
                {desc}
              </li>
            ))}
            <p>{project.technologies}</p>
            <p>
              <span className="text-md font-bold">Tech stack :</span>
              <span className="text-black ml-2">{techStack.join(" , ")}</span>
            </p>
          </div>
        );
      })}
    </SectionWrapper>
  );
};

export default Projects;
