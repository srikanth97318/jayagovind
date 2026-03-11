import { motion } from "framer-motion";
import { User, BookOpen, Target, Zap } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">About Me<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-Dark-blue">Me</span></h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary via-light-blue to-transparent rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              I am a passionate <strong className="text-light-blue">Computer Science student</strong> with a strong interest in software development, problem solving, and emerging technologies such as <strong className="text-light-blue">Artificial Intelligence</strong> and <strong className="text-light-blue">Machine Learning</strong>.
            </p>
            <p>
              I enjoy building practical projects that solve real-world problems and help improve people's lives. I am continuously improving my skills in <strong className="text-light-blue">Data Structures and Algorithms</strong> to strengthen my problem-solving ability and prepare for software engineering roles in top technology companies.
            </p>
            <p>
              Apart from academics, I enjoy exploring new technologies, building full-stack applications, and contributing to meaningful software solutions. My goal is to become a skilled software engineer and work on impactful technologies in fields such as AI, cloud computing, and scalable systems.
            </p>
            <div className="p-6 rounded-2xl glass-panel-advanced border-primary/30 mt-8 relative overflow-hidden group hover:border-light-blue/50 transition-all duration-300">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-light-blue" />
              <p className="italic font-medium text-foreground">
                "I believe in learning by building, staying curious, and constantly pushing myself to grow as a developer."
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {[
              { icon: User, title: "Student", desc: "Computer Science" },
              { icon: BookOpen, title: "Learner", desc: "Always exploring" },
              { icon: Target, title: "Goal", desc: "Software Engineer" },
              { icon: Zap, title: "Interest", desc: "AI & Scalable Systems" },
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl glass-panel-advanced group hover:border-light-blue/50 transition-all duration-300 border-primary/20 hover:shadow-[0_0_30px_rgba(96,165,250,0.2)]"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/30 to-light-blue/30 flex items-center justify-center mb-4 group-hover:from-primary/50 group-hover:to-light-blue/50 transition-all">
                  <item.icon className="w-6 h-6 text-light-blue" />
                </div>
                <h3 className="font-bold text-lg text-primary group-hover:text-light-blue transition-colors">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
