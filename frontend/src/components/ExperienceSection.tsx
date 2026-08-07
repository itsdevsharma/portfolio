import { Briefcase } from "lucide-react";

const roles = [
  {
    title: "Software Developer",
    company: "Nextsparks Ventures LLP",
    timeframe: "07/2026 – Present",
    location: "Gurugram, Haryana",
    highlights: [
      "Managed and maintained the company website and custom-built CMS while resolving production issues promptly.",
      "Developed and enhanced website and CMS features using React.js, Node.js, Express.js, JavaScript, and TypeScript.",
      "Diagnosed and fixed production bugs while improving application performance and code quality.",
      "Built and integrated REST APIs with PostgreSQL and MongoDB for efficient data management.",
      "Collaborated with cross-functional teams to ship new features and maintain production-ready applications.",
      "Assisted with deployment and server maintenance using Docker, Linux, and Nginx.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company: "DPvision Analytics",
    timeframe: "01/2026 – 05/2026",
    location: "Mohali, Punjab",
    highlights: [
      "Developed and maintained CRM, ERP, and LMS modules using Node.js, Express.js, TypeScript, and React.js.",
      "Built REST APIs supporting inventory, HRMS, and CRM workflows.",
      "Optimized PostgreSQL and MongoDB queries using indexing and query tuning techniques.",
      "Designed database schemas and validation logic to maintain data integrity.",
      "Integrated React frontends with backend APIs for seamless data flow.",
      "Delivered features, resolved production bugs, and improved application performance during Agile cycles.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Freelance",
    timeframe: "11/2025 – 01/2026",
    location: "Remote",
    highlights: [
      "Developed REST APIs for user management, authentication, wallet transactions, and investment tracking.",
      "Implemented JWT-based authentication and role-based access control to secure financial data.",
      "Engineered transaction validation, error handling, and balance verification for investment workflows.",
      "Integrated backend APIs with the React frontend and handled validation and error handling.",
      "Deployed backend services using Docker, Linux, and Nginx.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          <span className="text-gradient font-mono text-sm block mb-2">// experience</span>
          Work Experience
        </h2>

        <div className="space-y-6">
          {roles.map((role) => (
            <div key={`${role.company}-${role.title}`} className="card-gradient rounded-xl border border-border p-6 hover-lift">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Briefcase size={18} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{role.title}</h3>
                    <p className="text-muted-foreground text-sm">{role.company}</p>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground font-mono">
                  <span>{role.timeframe}</span>
                  <span className="mx-2 text-border">|</span>
                  <span>{role.location}</span>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {role.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
