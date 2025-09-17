import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

export default function Projects() {
    const projects = [
        {
            title: 'E-Commerce Platform',
            description: 'A modern e-commerce solution built with React, Node.js, and PostgreSQL. Features include real-time inventory, payment processing, and advanced analytics.',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
            tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
            liveUrl: 'https://example.com',
            githubUrl: 'https://github.com',
            featured: true
        },
        {
            title: 'hotel website',
            description: 'A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
            image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
            tech: ['Vue.js', 'Firebase', 'Tailwind CSS'],
            liveUrl: 'https://hotel-website-qjie.vercel.app/',
            githubUrl: 'https://github.com/NjeriMercy-65/hotel-website',
            featured: true
        },
        {
            title: 'Weather Dashboard',
            description: 'A beautiful weather application with interactive maps, detailed forecasts, and location-based recommendations.',
            image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
            tech: ['React', 'Weather API', 'Chart.js'],
            liveUrl: 'https://example.com',
            githubUrl: 'https://github.com',
            featured: false
        },
        {
            title: 'Social Media Analytics',
            description: 'A comprehensive analytics platform for social media managers with detailed insights and automated reporting.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
            tech: ['Python', 'Django', 'D3.js', 'Redis'],
            liveUrl: 'https://example.com',
            githubUrl: 'https://github.com',
            featured: false
        }
    ];

    return (
        <section id="projects" className="projects">
            <div className="projects-container">
                <div className="projects-inner">
                    <div className="projects-header">
                        <h2 className="projects-title">
                            <span className="projects-title-gradient">
                                Featured Projects
                            </span>
                        </h2>
                        <p className="projects-subtitle">
                            A showcase of my recent work, demonstrating my skills in full-stack development,
                            UI/UX design, and problem-solving.
                        </p>
                    </div>

                    <div className="projects-featured">
                        {projects.filter(p => p.featured).map((project, index) => (
                            <div
                                key={project.title}
                                className="project-card"
                                style={{ animationDelay: `${index * 200}ms` }}
                            >
                                <div className="project-image">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                    />
                                    <div className="project-image-overlay"></div>
                                </div>

                                <div className="project-content">
                                    <h3 className="project-title">
                                        {project.title}
                                    </h3>
                                    <p className="project-description">
                                        {project.description}
                                    </p>

                                    <div className="project-tech">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="project-tech-item"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="project-actions">
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-action primary"
                                        >
                                            <ExternalLink size={16} />
                                            <span>Live Demo</span>
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-action secondary"
                                        >
                                            <Github size={16} />
                                            <span>Code</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="projects-grid">
                        {projects.filter(p => !p.featured).map((project, index) => (
                            <div
                                key={project.title}
                                className="project-card small"
                            >
                                <div className="project-image">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                    />
                                </div>

                                <div className="project-content">
                                    <h4 className="project-title">
                                        {project.title}
                                    </h4>
                                    <p className="project-description">
                                        {project.description}
                                    </p>

                                    <div className="project-tech">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="project-tech-item"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="project-actions">
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-action primary"
                                        >
                                            <ExternalLink size={14} />
                                            <span>Demo</span>
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-action secondary"
                                        >
                                            <Github size={14} />
                                            <span>Code</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}