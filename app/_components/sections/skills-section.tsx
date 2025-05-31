const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "GraphQL",
  "MongoDB",
  "AWS",
];

export function SkillsSection() {
  return (
    <section className="container-custom section-spacing">
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <h2 className="heading-lg mb-6">Skills</h2>
        </div>
        <div className="md:col-span-2">
          <div className="grid grid-cols-2 gap-y-8 gap-x-16">
            {skills.map((skill, index) => (
              <div key={skill} className="border-b border-border pb-2 group">
                <div className="flex items-baseline">
                  <span className="text-sm text-muted-foreground mr-4 group-hover:text-foreground transition-colors">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <span className="text-2xl group-hover:translate-x-2 transition-transform">
                    {skill}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
