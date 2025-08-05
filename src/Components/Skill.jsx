import { useEffect, useState } from "react";
import CountUp from "react-countup";

const Skill = () => {
  const skills = [
    {
      name: "Frontend",
      level: 85,
    },

    {
      name: "Backend",
      level: 70,
    },
  ];

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="hidden md:block">
      {skills.map((skill, idx) => (
        <div key={idx}>
          <h1 className="text-sm font-medium font-sans">{skill.name}: </h1>
          <div className="flex items-center gap-4">
            <div
              className={`h-2 rounded shadow-md ${
                skill.level > 70 ? "bg-emerald-600" : "bg-yellow-600"
              }`}
              style={{ width: loaded ? `${skill.level}%` : "0%" }}
            ></div>
            <p
              className={`whitespace-nowrap ${
                skill.level > 70 ? "text-emerald-600" : "text-yellow-600"
              }`}
            >
              <CountUp
                end={skill.level}
                delay={1}
                className={` whitespace-nowrap`}
              />{" "}
              %
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skill;
