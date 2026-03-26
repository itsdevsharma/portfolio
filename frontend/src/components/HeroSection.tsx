import { ArrowDown, Code2 } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding pt-32 overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      {/* Glow orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-8 animate-fade-in font-mono text-sm text-muted-foreground">
          <Code2 size={14} className="text-primary" />
          <span>Available for hire</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s", animationFillMode: "both" }}>
          Hi, I'm <span className="text-gradient">Dev Sharma</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground font-mono mb-4 animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
          Node.js Developer | JavaScript & TypeScript
        </p>

        <p className="max-w-2xl mx-auto text-muted-foreground text-lg mb-10 animate-fade-in" style={{ animationDelay: "0.3s", animationFillMode: "both" }}>
          I build scalable backend systems and modern web applications. Passionate about clean code, robust APIs, and developer experience.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s", animationFillMode: "both" }}>
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-lg font-semibold text-sm transition-all duration-300 bg-primary text-primary-foreground hover:opacity-90 glow-shadow"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-lg font-semibold text-sm border border-border text-foreground hover:border-primary hover:text-primary transition-all duration-300"
          >
            Contact Me
          </a>
        </div>

        <a href="#about" className="inline-block mt-16 text-muted-foreground hover:text-primary transition-colors animate-pulse-glow">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
