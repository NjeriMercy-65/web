import React from 'react';
import './Skills.css';

const Skills = () => {
    const skillsData = [
        { name: "HTML5", icon: "🌐" },
        { name: "CSS3", icon: "🎨" },
        { name: "JavaScript", icon: "💻" },
        { name: "React", icon: "⚛️" },
        { name: "Node.js", icon: "🍃" },
        { name: "Git", icon: "🐙" },
        { name: "Tailwind CSS", icon: "💨" },
        { name: "Figma", icon: "🖌️" },
    ];

    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2 className="section-title">My Skills</h2>
                <p className="section-description">
                    A list of my technical skills and technologies I'm proficient in.
                </p>

                <div className="skills-grid">
                    {skillsData.map((skill, index) => (
                        <div key={index} className="skill-card">
                            <span className="skill-icon">{skill.icon}</span>
                            <p className="skill-name">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;