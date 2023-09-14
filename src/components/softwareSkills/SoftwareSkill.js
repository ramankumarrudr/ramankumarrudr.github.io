import React from "react";
import "./SoftwareSkill.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <h1 className="skills-heading">FoE</h1>
        <ul className="dev-icons">

          {skillsSection.FoE.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                <FontAwesomeIcon icon={skills.fontAwesomeClassname} />
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>

        <h1 className="skills-heading">Skills</h1>
        <div className="skill"><p>Programming Langauges :</p></div>
        <ul className="dev-icons">

          {skillsSection.ProgrammingLanguages.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                <FontAwesomeIcon icon={skills.fontAwesomeClassname} />
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
        <div className="skill"><p>Databases :</p></div>
        <ul className="dev-icons">
          {skillsSection.Databases.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                <FontAwesomeIcon icon={skills.fontAwesomeClassname} />
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
        <div className="skill"><p>Cloud & Container softwares and tools:</p></div>
        <ul className="dev-icons">
          {skillsSection.Cloud_Containers_Orchestration.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                <FontAwesomeIcon icon={skills.fontAwesomeClassname} />
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
        <div className="skill"><p>Operating Systems :</p></div>
        <ul className="dev-icons">
          {skillsSection.Os.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                <FontAwesomeIcon icon={skills.fontAwesomeClassname} />
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
        
      </div>
    </div>
  );
}
