import { Code, Palette, Zap, Heart } from 'lucide-react';
import './About.css';

export default function About() {
  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code that stands the test of time'
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Bringing artistic vision to digital experiences with attention to detail'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing for speed and efficiency without compromising functionality'
    },
    {
      icon: Heart,
      title: 'User-Centered',
      description: 'Putting users first in every design and development decision'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-inner">
          <div className="about-header">
            <h2 className="about-title">
              <span className="about-title-gradient">
                About Me
              </span>
            </h2>
            <p className="about-subtitle">
              I'm a passionate full-stack developer with 5+ years of experience creating digital solutions that make a difference. 
              I believe in the power of combining beautiful design with robust functionality.
            </p>
          </div>

          <div className="about-content">
            <div className="about-text">
              <h3 className="about-text-title">My Journey</h3>
              <p className="about-text-paragraph">
                Started as a curious student who fell in love with coding, I've evolved into a versatile developer 
                who enjoys tackling complex challenges. My experience spans from early-stage startups to established 
                companies, always focusing on creating meaningful user experiences.
              </p>
              <p className="about-text-paragraph">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                or sharing knowledge with the developer community through blog posts and speaking engagements.
              </p>
            </div>
            
            <div className="about-image">
              <div className="about-image-container">
                <div className="text-6xl">👨‍💻</div>
              </div>
              <div className="about-decoration1"></div>
              <div className="about-decoration2"></div>
            </div>
          </div>

          <div className="about-features">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="about-feature"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="about-feature-icon">
                  <feature.icon />
                </div>
                <h4 className="about-feature-title">{feature.title}</h4>
                <p className="about-feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}