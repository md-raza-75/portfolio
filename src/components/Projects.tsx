import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Code, Database, Smartphone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// 🎬 Animation Variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "SQL", "JavaScript", "React JS", "Spring Boot", "Postman"],
      icon: "💻"
    },
    {
      title: "Libraries / Frameworks",
      skills: [
        "Node.js",
        "Express",
        "ReactJS",
        "PostgreSQL",
        "Spring Framework",
        "Servlet & JSP",
        "JDBC",
        "Hibernate / JPA",
        "Bootstrap",
        "Tailwind CSS",
        "Apache Tomcat",
      ],
      icon: "⚡"
    },
    {
      title: "Fundamentals",
      skills: [
        "OOPs",
        "Exception Handling",
        "Collections",
        "Multithreading",
        "HTML",
        "CSS",
        "JavaScript",
        "DBMS",
        "Data Structures & Algorithms",
      ],
      icon: "🔧"
    },
    {
      title: "Platforms / Tools",
      skills: [
        "Windows",
        "IntelliJ IDEA",
        "Eclipse",
        "VS Code",
        "Git",
        "GitHub",
        "Apache Tomcat",
        "MySQL",
        "Postman",
      ],
      icon: "🛠️"
    },
    {
      title: "Interests",
      skills: ["Playing Cricket", "Watching Cricket Matches", "Reading Books"],
      icon: "🎯"
    },
  ];

  const projects = [
    {
      id: 1,
      title: "Fashion Studio",
      description: "Complete fashion e-commerce platform with modern UI",
      backend: "Node.js with Express, PostgreSQL, pgAdmin",
      frontend: "React.js with modern hooks and state management",
      technologies: ["React", "Node.js", "Express", "PostgreSQL", "JavaScript", "CSS3", "REST API"],
      githubLinks: {
        frontend: "https://github.com/md-raza-75/Fashion-Studio",
        backend: "https://github.com/md-raza-75/Fashion-Studio"
      },
      category: "Full Stack",
      icon: "🛍️",
      features: ["Product Catalog", "User Auth", "Shopping Cart", "Order Management"]
    },
    {
      id: 2,
      title: "College Complaint System",
      description: "College grievance management with real-time tracking",
      backend: "Spring Boot, REST API, File Upload, CRUD Operations",
      frontend: "React.js with responsive design",
      technologies: ["React", "Spring Boot", "Java", "REST API", "File Upload", "CRUD"],
      githubLinks: {
        frontend: "https://github.com/md-raza-75/college-complaint-frontend",
        backend: "https://github.com/md-raza-75/college-complaint-backend"
      },
      category: "Full Stack",
      icon: "🎓",
      features: ["Complaint Submission", "Status Tracking", "Admin Panel", "File Upload"]
    },
    {
      id: 3,
      title: "Email Writer AI",
      description: "AI-powered email composition and automation tool",
      backend: "Spring Boot, Java, Maven, AI Integration",
      frontend: "React.js with Material UI",
      technologies: ["React", "Material UI", "Spring Boot", "Java", "AI", "Maven", "REST"],
      githubLinks: {
        frontend: "https://github.com/md-raza-75/Email-Writer-AI-frontend",
        backend: "https://github.com/md-raza-75/Email-Writer-AI-backend"
      },
      category: "Full Stack",
      icon: "✉️",
      features: ["AI Email Generation", "Customization", "Extensions", "Material UI"]
    },
    {
      id: 4,
      title: "Hotel Booking System",
      description: "Complete hotel reservation platform",
      backend: "Node.js, Express, MongoDB, REST API",
      frontend: "JavaScript, HTML5, CSS3",
      technologies: ["JavaScript", "Node.js", "Express", "MongoDB", "REST API", "JWT"],
      githubLinks: {
        fullstack: "https://github.com/md-raza-75/hotel_booking"
      },
      category: "Full Stack",
      icon: "🏨",
      features: ["Room Booking", "User Auth", "Payment Integration", "Admin Dashboard"]
    },
    {
      id: 5,
      title: "Coffee Shop App",
      description: "Mobile application for coffee shop management",
      backend: "Database integration for data management",
      frontend: "Flutter with Dart for cross-platform",
      technologies: ["Flutter", "Dart", "Database", "Mobile", "REST API"],
      githubLinks: {
        mobile: "https://github.com/md-raza-75/coffee_shop"
      },
      category: "Mobile",
      icon: "☕",
      features: ["Menu Browsing", "Order Placement", "Customer Management", "Mobile First"]
    },
    {
      id: 6,
      title: "Fashion Studio Java",
      description: "Java-based e-commerce with Eclipse and pgAdmin",
      backend: "Java Servlets, JSP, PostgreSQL, Eclipse",
      frontend: "JSP, HTML, CSS, JavaScript",
      technologies: ["Java", "Servlet", "JSP", "PostgreSQL", "Eclipse", "pgAdmin"],
      githubLinks: {
        backend: "https://github.com/md-raza-75/FashionStudio-Java"
      },
      category: "Backend",
      icon: "☕",
      features: ["Product Management", "User Auth", "Database CRUD", "Server-side Rendering"]
    }
  ];

  const categories = ["All", "Full Stack", "Mobile", "Backend"];
  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  // Handle project card click
  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  // Handle button clicks - stop propagation
  const handleButtonClick = (e, link) => {
    e.stopPropagation(); // Important: stops the click from reaching the parent
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4">

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies I work with to build amazing digital experiences
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-20"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={item}
              className="glass rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-slate-200 dark:border-slate-700 group"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-slate-200 group-hover:text-blue-600 transition-colors">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="mb-2 group-hover:bg-blue-100 group-hover:text-blue-700 dark:group-hover:bg-blue-900 dark:group-hover:text-blue-300 transition-all duration-300"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Full-stack applications showcasing my expertise in modern web technologies
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                onClick={() => setActiveFilter(category)}
                className="rounded-full px-6 hover:scale-105 transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className="group"
            >
              <div 
                className="glass rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-slate-200 dark:border-slate-700 cursor-pointer"
                onClick={() => handleProjectClick(project)}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-3xl">{project.icon}</div>
                    <Badge variant="outline" className="group-hover:bg-blue-100 group-hover:text-blue-700 dark:group-hover:bg-blue-900 transition-colors">
                      {project.category}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-slate-200 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs group-hover:bg-slate-200 dark:group-hover:bg-slate-700 transition-colors">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Code className="w-4 h-4 text-green-600" />
                      <span className="font-medium">Frontend:</span>
                      <span className="text-muted-foreground">{project.frontend}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Database className="w-4 h-4 text-blue-600" />
                      <span className="font-medium">Backend:</span>
                      <span className="text-muted-foreground">{project.backend}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Buttons with stopPropagation */}
                  <div className="flex gap-2 pt-4 border-t border-slate-200 dark:border-slate-700">
                    {project.githubLinks.frontend && (
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="flex-1 gap-1"
                        onClick={(e) => handleButtonClick(e, project.githubLinks.frontend)}
                      >
                        <Globe className="w-3 h-3" /> Frontend
                      </Button>
                    )}
                    {project.githubLinks.backend && (
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="flex-1 gap-1"
                        onClick={(e) => handleButtonClick(e, project.githubLinks.backend)}
                      >
                        <Database className="w-3 h-3" /> Backend
                      </Button>
                    )}
                    {project.githubLinks.fullstack && (
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="flex-1 gap-1"
                        onClick={(e) => handleButtonClick(e, project.githubLinks.fullstack)}
                      >
                        <Code className="w-3 h-3" /> Code
                      </Button>
                    )}
                    {project.githubLinks.mobile && (
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="flex-1 gap-1"
                        onClick={(e) => handleButtonClick(e, project.githubLinks.mobile)}
                      >
                        <Smartphone className="w-3 h-3" /> Mobile
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="glass rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                    {selectedProject.title}
                  </h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedProject(null)}
                  >
                    ✕
                  </Button>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  {selectedProject.description}
                </p>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold mb-2">Frontend</h4>
                    <p className="text-muted-foreground">{selectedProject.frontend}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Backend</h4>
                    <p className="text-muted-foreground">{selectedProject.backend}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  {selectedProject.githubLinks.frontend && (
                    <Button asChild className="flex-1">
                      <a 
                        href={selectedProject.githubLinks.frontend} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Globe className="w-4 h-4 mr-2" /> Frontend
                      </a>
                    </Button>
                  )}
                  {selectedProject.githubLinks.backend && (
                    <Button variant="outline" asChild className="flex-1">
                      <a 
                        href={selectedProject.githubLinks.backend} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Database className="w-4 h-4 mr-2" /> Backend
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};