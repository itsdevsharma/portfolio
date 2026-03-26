import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Screen Recorder & Video Trimmer",
    description: "Full-stack web app to record your screen with audio, trim recorded videos with precise start/end selection, and upload them to cloud storage with metadata tracking.",
    techs: ["Next.js", "React", "TypeScript", "MongoDB", "FFmpeg", "Cloudinary"],
    github: "https://github.com/itsdevsharma/screen-recorder",
    demo: null,
  },
  {
    title: "Approval Workflow",
    description: "A workflow management system for handling multi-step approval processes with role-based access control and real-time status tracking.",
    techs: ["Node.js", "Express", "React", "MongoDB"],
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
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.techs.map((tech) => (
                  <span key={tech} className="px-2 py-1 rounded text-xs font-mono bg-secondary text-muted-foreground border border-border">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Github size={16} /> GitHub
                </a>
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink size={16} /> Demo
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
