import { Briefcase } from "lucide-react";

const roles = [
  {
    title: "Backend Developer (Freelance)",
    company: "Investment Management Platform",
    timeframe: "Nov 2025 - Jan 2026",
    location: "Remote",
    highlights: [
      "Architected and deployed 15+ RESTful APIs for user accounts, wallet transactions, and investment tracking.",
      "Designed relational schemas for users, wallets, transactions, and investments with indexing strategies improving query performance by ~30%.",
      "Implemented JWT authentication and RBAC to secure financial data and session management.",
      "Engineered transaction processing with validation, structured error handling, and balance reconciliation for edge cases.",
      "Integrated backend APIs with frontend systems, reducing API failure rates through consistent data contracts.",
      "Containerized services with Docker and deployed to cloud infrastructure for production readiness.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company: "DPvision Analytics",
    timeframe: "Jan 2026 - Present",
    location: "Mohali, Punjab",
    highlights: [
      "Developed scalable modules across CRM, ERP, and LMS systems used in real client deployments.",
      "Built RESTful APIs using Node.js, Express.js, and TypeScript supporting core business workflows.",
      "Optimized PostgreSQL and MongoDB queries, reducing response times by ~25%.",
      "Designed schema structures, indexing, and validation logic to ensure data integrity.",
      "Integrated React frontends with backend APIs for seamless state management and data synchronization.",
      "Contributed to production deployments, debugging, performance tuning, and Agile feature releases.",
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
