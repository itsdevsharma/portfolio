import { Github, Terminal } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-muted-foreground font-mono text-sm">
          <Terminal size={16} className="text-primary" />
          <span>© {new Date().getFullYear()} Dev Sharma. All rights reserved.</span>
        </div>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Github size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
