import React, { useState } from "react";
import { SKILL_TABS, SKILLS } from "../utils/data";
import Tabs from "../components/Tabs";
import SkillCard from "../components/SkillCard";
import { motion } from "framer-motion";

const TechnicalProficiency = () => {
  const [tabData, setTabData] = useState(SKILLS);
  const [activeTab, setActiveTab] = useState("all");

  const handleTabChange = (value) => {
    if (value === "all") {
      setTabData(SKILLS);
      setActiveTab("all");
      return;
    }

    const filteredData = SKILLS.filter((skill) => skill.type === value);
    setTabData(filteredData);
    setActiveTab(value);
  };

  return (
    <section id="skills" className="bg-background mt-20">
      <div className="container mx-auto p-10">
        <div className="w-full lg:w-[60vw] mx-auto">
          <h4 className="section-title">Technical Proficiency</h4>

          <p>
            A versatile developer with hands-on expertise in modern
            technologies, tools and frameworks, dedicated to building efficient,
            scalable, and user-centric solutions.
          </p>
        </div>

        <Tabs
          tablist={SKILL_TABS}
          activeTab={activeTab}
          onChange={handleTabChange}
        />
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 min-h-[180px]'>
          {tabData.map((skill, index) => (
            <motion.div key={skill.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <SkillCard
                icon={<skill.icon className="w-7 h-7 text-primary" />}
                skillName={skill.skill}
                progress={skill.progress}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalProficiency;
