import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      {/* Background Effects */}
      <div className="hero-bg"></div>
      <div className="hero-bg-effect1"></div>
      <div className="hero-bg-effect2"></div>

      <div className="hero-content fade-in">
        <h1 className="hero-title">
          <span className="hero-title-gradient">
            Creative Developer
          </span>
        </h1>
        <p className="hero-subtitle">
          I craft beautiful, functional digital experiences that bring ideas to life through code and design.
        </p>
        
        <div className="hero-social">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-link github"
          >
            <Github size={24} className="hero-social-icon" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-link linkedin"
          >
            <Linkedin size={24} className="hero-social-icon" />
          </a>
          <a
            href="mailto:hello@example.com"
            className="hero-social-link email"
          >
            <Mail size={24} className="hero-social-icon" />
          </a>
        </div>

        <button
          onClick={scrollToAbout}
          className="hero-cta"
        >
          <span>Discover My Work</span>
          <ArrowDown size={18} className="hero-cta-icon" />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll-indicator">
        <div className="hero-scroll-mouse">
          <div className="hero-scroll-dot"></div>
        </div>
      </div>
    </section>
  );
}