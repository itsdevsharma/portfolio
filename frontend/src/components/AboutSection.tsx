import { Server, Zap, Globe } from "lucide-react";

const highlights = [
  { icon: Server, label: "Backend Focused", desc: "Specializing in Node.js & server-side architecture" },
  { icon: Zap, label: "Scalable APIs", desc: "Building performant RESTful APIs & microservices" },
  { icon: Globe, label: "Full Stack", desc: "From database design to responsive frontends" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-gradient font-mono text-sm block mb-2">// about me</span>
          Building dependable digital products
        </h2>

        <p className="text-muted-foreground text-lg leading-relaxed mb-12 max-w-2xl">
          I'm a Software Developer with experience building and maintaining ERP, CRM, HRMS, CMS, and real-time web applications using React.js, Node.js, Express.js, TypeScript, PostgreSQL, and MongoDB. I enjoy creating robust REST APIs, improving production systems, and deploying reliable solutions with Docker and Linux.
        </p>

        <p className="text-muted-foreground text-lg leading-relaxed mb-12 max-w-2xl">
          I hold a B.Tech in Computer Science & Engineering with specialization in IT from Guru Jambheshwar University of Science & Technology, Hisar.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item) => (
            <div key={item.label} className="card-gradient rounded-xl border border-border p-6 hover-lift">
              <item.icon size={28} className="text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-2">{item.label}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
