import React from "react";
import { LinearProgress } from "@mui/material";

const Skills = () => {
  const skills = [
    { name: "Communication Skills", efficiency: 100 },
    { name: "React.js", efficiency: 90 },
    { name: "Strapi", efficiency: 80 },
    { name: "Node.js", efficiency: 70 },
    { name: "HTML 5 and CSS 3", efficiency: 100 },
    { name: "BootStrap", efficiency: 90 },
    { name: "Material UI", efficiency: 80 },
    { name: "JavaScript", efficiency: 90 },
    { name: "GraphQL", efficiency: 90 },
    { name: "Python", efficiency: 70 },
    { name: "MongoDB", efficiency: 80 },
    { name: "Express.js", efficiency: 90 },
    { name: "Git", efficiency: 90 },
  ];
  return (
    <div style={{ marginTop: "10px" }}>
      {skills.map((skill, index) => (
        <div>
          <h6>
            <b>{skill.name}</b>
          </h6>
          <LinearProgress
            style={{ height: "6px" }}
            variant="buffer"
            value={skill.efficiency}
            valueBuffer="100"
          />
        </div>
      ))}
    </div>
  );
};

export default Skills;
