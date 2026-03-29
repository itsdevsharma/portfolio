import { Code2, Server, Database, Wrench, GitBranch } from "lucide-react";

const categories = [
  {
    title: "Frontend",
    icon: Code2,
    techs: ["React.js", "Vue 3", "Quasar Framework", "JavaScript", "TypeScript", "Pinia"],
  },
  {
    title: "Backend",
    icon: Server,
    techs: ["Node.js", "Express.js", "PocketBase"],
  },
  {
    title: "Databases",
    icon: Database,
    techs: ["MongoDB", "PostgreSQL"],
  },
  {
    title: "DevOps & Tools",
    icon: GitBranch,
    techs: ["Docker", "GitHub Actions", "CI/CD", "PWA", "SSR", "Electron", "Vercel", "Render", "Postman", "Git"],
  },
];

const TechStackSection = () => {
  return (
    <section id="tech" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          <span className="text-gradient font-mono text-sm block mb-2">// tech stack</span>
          Technologies I Work With
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {categories.map((cat) => (
            <div key={cat.title} className="card-gradient rounded-xl border border-border p-6 hover-lift">
              <div className="flex items-center gap-3 mb-5">
                <cat.icon size={22} className="text-primary" />
                <h3 className="font-semibold text-lg">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground text-sm font-mono border border-border hover:border-primary hover:text-primary transition-colors duration-200 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
