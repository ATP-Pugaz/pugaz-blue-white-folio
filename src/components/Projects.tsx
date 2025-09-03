const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Money Managing Application",
      description: "A comprehensive personal finance tracker built with modern frontend technologies. Features include expense tracking, budget planning, and financial analytics.",
      tech: ["HTML5", "CSS3", "JavaScript", "Chart.js"],
      features: ["Expense Tracking", "Budget Planning", "Financial Reports", "Responsive Design"],
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "Social Media Frontend",
      description: "A responsive social media platform interface with real-time interactions, user profiles, and engaging UI/UX design.",
      tech: ["HTML5", "CSS3", "JavaScript", "Local Storage"],
      features: ["User Profiles", "Post Sharing", "Interactive UI", "Mobile Responsive"],
      color: "from-blue-400 to-blue-500"
    },
    {
      id: 3,
      title: "Streaming Platform Registration",
      description: "An elegant registration form for a streaming service with form validation, user authentication flow, and modern design patterns.",
      tech: ["HTML5", "CSS3", "JavaScript", "Form Validation"],
      features: ["Form Validation", "User Authentication", "Modern UI", "Accessibility"],
      color: "from-blue-600 to-blue-700"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-text-gradient bg-clip-text text-transparent mb-4">
            My Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing my frontend development skills through three distinct projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-card-gradient rounded-2xl p-6 shadow-card hover:shadow-blue transition-all duration-500 transform hover:-translate-y-2 border border-primary/10"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Header */}
              <div className={`h-40 bg-gradient-to-br ${project.color} rounded-xl mb-6 flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <h3 className="text-white font-bold text-xl text-center z-10 px-4">
                  {project.title}
                </h3>
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-white/10 rounded-full"></div>
                <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-white/10 rounded-full"></div>
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div>
                  <h4 className="font-semibold text-foreground mb-2 text-sm">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-semibold text-foreground mb-2 text-sm">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature) => (
                      <li key={feature} className="text-muted-foreground text-xs flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300 mt-4">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;