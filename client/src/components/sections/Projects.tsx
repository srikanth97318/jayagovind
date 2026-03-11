import { motion } from "framer-motion";
import { FolderGit2, Activity, ArrowUpRight, Code, Brain, Database } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [

  {
    title: "AI-Powered Financial Assistant",
    description: "An intelligent assistant designed to provide personalized financial guidance and evaluate loan eligibility using machine learning algorithms. Helps users make informed financial decisions.",
    tags: ["Python", "Machine Learning", "AI", "Data Analysis"],
    icon: Activity,
    gradient: "from-light-blue/30 to-primary/20",
    borderGradient: "from-light-blue to-primary"
  },
  {
    title: "Medicine Inventory Management System",
    description: "A robust system-level application built to track and manage medicine stocks. Features comprehensive file handling for persistent data storage, user authentication, and inventory alerts.",
    tags: ["C Programming", "File Handling", "System Architecture"],
    icon: FolderGit2,
    gradient: "from-primary/30 to-light-blue/20",
    borderGradient: "from-primary to-light-blue"
  },
  {
    title: "Full-Stack Web Application",
    description: "A modern full-stack web application built with React and Node.js. Features real-time data synchronization, responsive design, and comprehensive API endpoints for scalability.",
    tags: ["React.js", "Node.js", "MongoDB", "REST API"],
    icon: Code,
    gradient: "from-light-blue/30 to-primary/20",
    borderGradient: "from-light-blue to-primary"
  },
  {
    title: "Algorithm Visualization Platform",
    description: "Interactive platform to visualize and understand complex algorithms. Supports sorting, pathfinding, and graph algorithms with step-by-step execution and performance metrics.",
    tags: ["React", "JavaScript", "DSA", "Visualization"],
    icon: Brain,
    gradient: "from-primary/30 to-light-blue/20",
    borderGradient: "from-primary to-light-blue"
  },
  {
    title: "Real-time Chat Application",
    description: "Scalable real-time chat platform with WebSocket support, user authentication, and message persistence. Includes typing indicators, file sharing, and group conversations.",
    tags: ["Node.js", "WebSocket", "React", "PostgreSQL"],
    icon: Database,
    gradient: "from-light-blue/30 to-primary/20",
    borderGradient: "from-light-blue to-primary"
  }
];




const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.15, duration: 0.5 }}
    whileHover={{ y: -10 }}
    className="min-w-[350px] md:min-w-[400px]"
  >
    <Card className={`group h-full relative overflow-hidden bg-gradient-to-br from-background/80 to-secondary/50 border-primary/30 transition-all duration-500 hover:border-light-blue/50 hover:shadow-[0_0_40px_rgba(96,165,250,0.2)]`}>
      <div className={`absolute top-0 right-0 w-72 h-72 bg-gradient-to-br ${project.gradient} blur-3xl rounded-full group-hover:opacity-100 opacity-50 transition-opacity duration-500`} />
      
      <CardHeader className="relative z-10 pb-4">
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.borderGradient} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-500`}>
          <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
            <project.icon className="w-7 h-7 text-light-blue" />
          </div>
        </div>
        <CardTitle className="text-xl font-display mb-2 text-foreground group-hover:text-light-blue transition-colors line-clamp-2">{project.title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {project.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="relative z-10 pt-4 flex flex-col justify-between h-[calc(100%-11rem)]">
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map(tag => (
            <Badge key={tag} className={`bg-gradient-to-r ${project.borderGradient} text-xs py-1 px-2 text-white border-0 hover:opacity-80 transition-opacity`}>
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="mt-auto flex items-center text-sm font-semibold text-light-blue cursor-pointer group/link hover:text-primary transition-colors">
          View Details
          <ArrowUpRight className="ml-1 w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

export function Projects() {
  const isMultipleRows = projects.length > 4;

  return (
    <section id="projects" className="py-32 relative">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-0 w-full h-full -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-light-blue">Projects</span></h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary via-light-blue to-transparent rounded-full" />
          </div>
          <p className="text-muted-foreground max-w-md text-lg">
            A selection of my recent academic and personal projects that showcase my problem-solving skills.
          </p>
        </motion.div>

        {/* Responsive Grid or Horizontal Scroll */}
        <div className={isMultipleRows ? "overflow-x-auto pb-4 scrollbar-hide" : ""}>
          <div className={isMultipleRows ? "flex gap-8 min-w-max" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"}>
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Scroll hint for mobile */}
        {isMultipleRows && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-2 mt-8 text-muted-foreground text-sm md:hidden"
          >
            <span>← Scroll to see more →</span>
          </motion.div>
        )}
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
