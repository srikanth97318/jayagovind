import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

export function Education() {

  const education = [
    {
      degree: "B.Tech in Computer Science (AI & ML)",
      college: "PES University",
      location: "Electronic City, Bengaluru, India",
      year: "2024 – 2028",
      image: "/pesu.png"
    },
    {
      degree: "Pre-University (PUC)",
      college: "SDC Independent PU College",
      location: "Kolar, Karnataka, India",
      year: "2022 – 2024"
    },
    {
      degree: "SSLC",
      college: "Sharadha English High School",
      location: "Kolar, Karnataka, India",
      year: "2022"
    }
  ];

  return (
    <section id="education" className="py-32 relative">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-light-blue">
              Education
            </span>
          </h2>
        </motion.div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {education.map((edu, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="p-8 rounded-3xl glass-panel-advanced border-primary/30 transition-all duration-500"
            >

              

              {/* Graduation Icon */}
              <FaGraduationCap className="text-4xl text-light-blue mb-4" />

              {/* Degree */}
              <h3 className="text-xl font-semibold">
                {edu.degree}
              </h3>

              {/* College */}
              <p className="text-muted-foreground mt-2">
                {edu.college}
              </p>

              {/* Location */}
              <p className="text-muted-foreground">
                {edu.location}
              </p>

              {/* Year */}
              <p className="text-light-blue mt-2 font-medium">
                {edu.year}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}