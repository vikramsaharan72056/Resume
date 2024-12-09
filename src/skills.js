import React from "react";
import { LinearProgress, Box, Typography } from "@mui/material";

const Skill = ({ name, efficiency }) => (
  <Box sx={{ mb: 2 }}>
    <Typography variant="body1" component="h6" sx={{ fontWeight: "bold" }}>
      {name}
    </Typography>
    <LinearProgress
      sx={{
        height: 8,
        borderRadius: 2,
      }}
      variant="determinate"
      value={efficiency}
      aria-label={`${name} proficiency level: ${efficiency}%`}
    />
  </Box>
);

const Skills = () => {
  const skills = [
    { name: "React.js", efficiency: 95 },
    { name: "Shopify Polaris & Liquid", efficiency: 90 },
    { name: "Node.js", efficiency: 85 },
    { name: "PostgreSQL", efficiency: 80 },
    { name: "MongoDB", efficiency: 80 },
    { name: "GraphQL", efficiency: 85 },
    { name: "Express.js", efficiency: 90 },
    { name: "PHP", efficiency: 75 },
    { name: "AngularJS", efficiency: 80 },
    { name: "HTML5 & CSS3", efficiency: 95 },
    { name: "Tailwind CSS", efficiency: 90 },
    { name: "Git", efficiency: 90 },
    { name: "RESTful APIs", efficiency: 85 },
    { name: "Data Structures & Algorithms", efficiency: 80 },
  ];

  return (
    <Box sx={{ mt: 2 }}>
      {skills.map((skill, index) => (
        <Skill key={index} name={skill.name} efficiency={skill.efficiency} />
      ))}
    </Box>
  );
};

export default Skills;
