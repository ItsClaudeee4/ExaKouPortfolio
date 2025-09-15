import React from "react";
import "./Skills.css";
import SectionTitle from "./SectionTitle";
import afterEffect from "../assets/afterEffect.png";
import capcut from "../assets/capcut.webp";
import P from "../assets/P.png";
import photoshop from "../assets/photoshop.png";
import pr from "../assets/Pr.png";
import Kinemaster from "../assets/Kinemaster.png";
import TiltedCard from "../ReactBitComponents/TiltedCard";

function Skills() {
  const videoSkills = [
    { name: "Premier Pro", percentage: 80, icon: pr },
    { name: "After effecte", percentage: 25, icon: afterEffect },
    { name: "Photoshop ", percentage: 60, icon: photoshop },
    { name: "Capcut ", percentage: 60, icon: capcut },
    { name: "Picsart ", percentage: 80, icon: P },
    { name: "Kinemaster ", percentage: 80, icon: Kinemaster },
  ];

  return (
    <main className="mainSkill">
      <SectionTitle title={"Skills & Expertise"} />
      <main className="skills-content">
        <section className="skills-section">
          <div className="skills-grid">
            {videoSkills.map((skill, index) => (
              <TiltedCard key={index} skill={skill} />
            ))}
          </div>
        </section>
      </main>
    </main>
  );
}

export default Skills;
