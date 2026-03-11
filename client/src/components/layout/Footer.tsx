import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="font-display font-bold text-lg">
            Srikanth G   <span className="text-primary">.dev</span>
          </span>
        </div>
        
        <p className="text-muted-foreground text-sm text-center md:text-left">
          © {currentYear} Srikanth. All rights reserved. Built with passion & React.
        </p>

        <div className="flex items-center gap-4">
          {[Github, Linkedin, Twitter].map((Icon, i) => (
            <a 
              key={i}
              href="#" 
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
