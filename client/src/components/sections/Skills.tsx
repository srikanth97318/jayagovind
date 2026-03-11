import { motion } from "framer-motion";

import {
  SiC,
  SiCplusplus,
  SiPython,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiJavascript,
  SiHtml5,
  SiGit,
  SiLinux
} from "react-icons/si";

import { FaBrain, FaNetworkWired, FaMicrochip, FaCss3Alt } from "react-icons/fa";
import { MdStorage } from "react-icons/md";

const skills = [
  { name: "C Programming", icon: SiC, color: "from-primary to-light-blue" },
  { name: "C++", icon: SiCplusplus, color: "from-light-blue to-primary" },
  { name: "Python", icon: SiPython, color: "from-primary to-light-blue" },
  { name: "JavaScript", icon: SiJavascript, color: "from-light-blue to-primary" },

  { name: "HTML", icon: SiHtml5, color: "from-primary to-light-blue" },
  { name: "CSS", icon: FaCss3Alt, color: "from-light-blue to-primary" },

  { name: "React.js", icon: SiReact, color: "from-primary to-light-blue" },
  { name: "Node.js", icon: SiNodedotjs, color: "from-light-blue to-primary" },
  { name: "MongoDB", icon: SiMongodb, color: "from-primary to-light-blue" },

  { name: "Data Structures", icon: FaBrain, color: "from-light-blue to-primary" },
  { name: "Algorithms", icon: FaBrain, color: "from-primary to-light-blue" },

  { name: "Operating Systems", icon: MdStorage, color: "from-primary to-light-blue" },
  { name: "Computer Networks", icon: FaNetworkWired, color: "from-light-blue to-primary" },
  { name: "Computer Architecture", icon: FaMicrochip, color: "from-primary to-light-blue" },

  { name: "Git & GitHub", icon: SiGit, color: "from-light-blue to-primary" },
  { name: "Linux", icon: SiLinux, color: "from-primary to-light-blue" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 }
  }
};

export function Skills() {
  return (
    <section id="skills" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-light-blue/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Technical{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-light-blue">
              Arsenal
            </span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative p-8 rounded-3xl glass-panel-advanced border-primary/30 hover:border-light-blue/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(96,165,250,0.3)]"
            >

              {/* Gradient hover background */}
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
              />

              {/* Icon */}
              <div className="text-6xl text-light-blue transition-all duration-300 group-hover:scale-110 transform">
                <skill.icon />
              </div>

              {/* Skill name */}
              <span className="font-semibold text-foreground group-hover:text-light-blue transition-colors mt-4 block">
                {skill.name}
              </span>

              {/* Shimmer effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer pointer-events-none" />

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}