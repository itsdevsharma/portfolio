import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Loom IQ — Clothing ERP",
    category: "Personal Product",
    website: "https://loomiq.site",
    description: "My personal product, Loom IQ, is clothing ERP software built for apparel businesses to manage their day-to-day operations in one place. Visit the product website to learn more, or use the demo account below to explore and test the software.",
    techs: ["Clothing ERP", "Apparel", "Business Software"],
    github: null,
    demo: "https://erp-system-olive-nine.vercel.app",
    demoLabel: "Log In & Try Demo",
    demoCredentials: {
      userId: "its.dev.sharma123@gmail.com",
      password: "qwerty",
    },
  },
  {
    title: "Screen Recorder & Video Trimmer",
    description: "Full-stack web app to record your screen with audio, trim recorded videos with precise start/end selection, and upload them to cloud storage with metadata tracking.",
    techs: ["Next.js", "React", "TypeScript", "MongoDB", "FFmpeg", "Cloudinary"],
    github: "https://github.com/itsdevsharma/screen-recorder",
    demo: null,
  },
  {
    title: "Approval Workflow",
    description: "Cross-platform workflow management app (web, mobile, desktop) with multi-step approval processes, role-based access control, and real-time status tracking. Built with SSR and PWA support.",
    techs: ["Quasar Framework", "Vue 3", "TypeScript", "Pinia", "PocketBase", "PWA", "SSR", "Capacitor", "Electron"],
    github: "https://github.com/sharmaankit25/approval-workflow",
    demo: null,
  },
  {
    title: "ChatBot",
    description: "Real-time chat application with WebSocket-based messaging, JWT authentication, and a modern React + TypeScript frontend powered by shadcn/ui.",
    techs: ["React", "TypeScript", "Node.js", "Socket.io", "MongoDB", "JWT"],
    github: "https://github.com/team-spartans-gju/ChatBot",
    demo: null,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          <span className="text-gradient font-mono text-sm block mb-2">// projects</span>
          Featured Work
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.title} className="card-gradient rounded-xl border border-border p-6 flex flex-col hover-lift group">
              {project.category && (
                <span className="self-start rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-3">
                  {project.category}
                </span>
              )}
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.techs.map((tech) => (
                  <span key={tech} className="px-2 py-1 rounded text-xs font-mono bg-secondary text-muted-foreground border border-border">
                    {tech}
                  </span>
                ))}
              </div>
              {project.demoCredentials && (
                <div className="rounded-lg border border-border bg-secondary p-3 mb-5 text-sm">
                  <p className="font-medium mb-2">Demo login</p>
                  <dl className="space-y-1 text-muted-foreground">
                    <div>
                      <dt className="inline">User ID: </dt>
                      <dd className="inline font-mono break-all select-all">{project.demoCredentials.userId}</dd>
                    </div>
                    <div>
                      <dt className="inline">Password: </dt>
                      <dd className="inline font-mono select-all">{project.demoCredentials.password}</dd>
                    </div>
                  </dl>
                </div>
              )}
              <div className="flex flex-wrap gap-3">
                {project.website && (
                  <a href={project.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink size={16} /> loomiq.site
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <Github size={16} /> GitHub
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink size={16} /> {project.demoLabel ?? "Demo"}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
