import React from "react";

const skills = ["react", "html", "css", "js", "php", "git", "mysql", "java", "python"];

const SkillIcons = () => {
return (
    <div className="flex flex-wrap justify-center gap-4 p-4 mb-4">
        {skills.map((skill) => (
            <div key={skill} className="relative group">
                <img
                    src={`https://skillicons.dev/icons?i=${skill}`}
                    alt={skill}
                    className="w-16 h-16"
                />
                <p className="absolute bottom-0 left-0 right-0 text-center text-sm opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white p-1 rounded-xl">
                    {skill}
                </p>
            </div>
        ))}
    </div>
);
};

export default SkillIcons;
