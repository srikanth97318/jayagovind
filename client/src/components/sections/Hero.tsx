import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, TerminalSquare, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const slideInVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7 },
  },
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Advanced background effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/25 rounded-full blur-[128px] pointer-events-none opacity-60" />
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-light-blue/15 rounded-full blur-[128px] pointer-events-none opacity-40" />
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left side - Content */}
          <motion.div
            className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel-advanced mb-8 border-primary/40"
            >
              <span className="text-sm font-medium text-light-blue">AI & ML DEVELOPER</span>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight">
                <span className="block">Hi, I'm</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-light-blue to-primary text-glow animate-slide-words animate-gradient-shift">
                  Srikanth G
                </span>
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 font-light leading-relaxed animate-slide-text"
            >
              An aspiring software engineer passionate about <span className="text-light-blue font-semibold">Artificial Intelligence</span>, <span className="text-light-blue font-semibold">Machine Learning</span>, and building scalable solutions to real-world problems.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Button 
                size="lg" 
                className="text-base h-14 px-8 rounded-full bg-gradient-to-r from-primary to-light-blue hover:shadow-[0_0_40px_rgba(96,165,250,0.5)] transition-all duration-300 font-semibold"
                onClick={() => document.getElementById('projects')?.scrollIntoView()}
                data-testid="button-view-projects"
              >
                View Projects
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-base h-14 px-8 rounded-full border-2 border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300 font-semibold"
                onClick={() => window.open('https://github.com', 'https://github.com/srikanth97318')}
                data-testid="button-github"
              >
                <TerminalSquare className="mr-2 w-5 h-5 text-light-blue" />
                GitHub 
              </Button>

              <Button 
                variant="outline" 
                size="lg" 
                className="text-base h-14 px-8 rounded-full border-2 border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300 font-semibold"
                onClick={() => window.open('https://linkedin.com', 'www.linkedin.com/in/sri-kanth-g')}
                data-testid="button-github"
              >
                <TerminalSquare className="mr-2 w-5 h-5 text-light-blue" />
                Linkedin
              </Button>


            </motion.div>
          </motion.div>

          {/* Right side - Profile Picture */}
          <motion.div
            variants={slideInVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 flex justify-center"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              {/* Glowing outer ring with gradient */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-light-blue to-primary p-1 blur opacity-80 group-hover:opacity-100 transition duration-1000 animate-spin-slow"
                style={{
                  animation: 'spin-slow 4s linear infinite',
                }}
              />

              {/* Second glow ring */}
              <div className="absolute inset-2 rounded-full bg-gradient-to-l from-light-blue/30 to-primary/30 blur-lg opacity-50 animate-spin-slow"
                style={{
                  animation: 'spin-slow 6s linear infinite reverse',
                }}
              />

              {/* Profile picture container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-gradient-to-br from-primary/50 to-light-blue/30 border-2 border-primary/70 flex items-center justify-center shadow-2xl animate-glow-pulse">
                {/* Placeholder avatar with initials */}
                <div className="w-full h-full bg-gradient-to-br from-blue-950 via-slate-950 to-black flex items-center justify-center relative overflow-hidden group">
                  {/* Animated background elements */}
                  <div className="absolute inset-0 opacity-50">
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary rounded-full blur-3xl animate-float" />
                    <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-light-blue rounded-full blur-3xl animate-float" style={{ animationDelay: '-2s' }} />
                  </div>

                  {/* Initials or placeholder icon */}
                  <div className="relative z-10 text-center">
                     <img
                          src={`${import.meta.env.BASE_URL}wrr.png`}
                          alt="Srikanth"
                          className="w-full h-full object-cover rounded-full"
                        />
                    <p className="text-sm text-light-blue mt-2 font-semibold">Srikanth</p>
                  </div>

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 animate-shimmer" />

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Decorative orbiting elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-light-blue/80 shadow-lg shadow-light-blue/50" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary/80 shadow-lg shadow-primary/50" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-light-blue/60 shadow-lg shadow-light-blue/30" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView()}
        data-testid="scroll-indicator"
      >
        <ChevronDown className="w-8 h-8 text-light-blue hover:text-primary transition-colors" />
      </motion.div>
    </section>
  );
}
