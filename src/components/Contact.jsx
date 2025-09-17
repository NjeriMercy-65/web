import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import './contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-inner">
          <div className="contact-header">
            <h2 className="contact-title">
              <span className="contact-title-gradient">
                Let's Work Together
              </span>
            </h2>
            <p className="contact-subtitle">
              Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life.
            </p>
          </div>

          <div className="contact-content">
            {/* Contact Info */}
            <div className="contact-info">
              <div className="contact-info-header">
                <h3>Get in Touch</h3>
                <p className="contact-info-text">
                  I'm always open to discussing new opportunities, creative ideas, or potential collaborations. 
                  Feel free to reach out through any of the channels below.
                </p>
              </div>

              <div className="contact-details">
                <div className="contact-detail">
                  <div className="contact-detail-icon email">
                    <Mail />
                  </div>
                  <div className="contact-detail-info">
                    <p className="contact-detail-label">Email</p>
                    <p className="contact-detail-value">njorogemercy73@gmail.com</p>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="contact-detail-icon phone">
                    <Phone />
                  </div>
                  <div className="contact-detail-info">
                    <p className="contact-detail-label">Phone</p>
                    <p className="contact-detail-value">0715574813</p>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="contact-detail-icon location">
                    <MapPin />
                  </div>
                  <div className="contact-detail-info">
                    <p className="contact-detail-label">Location</p>
                    <p className="contact-detail-value">Nairobi, Kenya</p>
                  </div>
                </div>
              </div>

              <div className="contact-social">
                <h4>Follow Me</h4>
                <div className="contact-social-links">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-link github"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-link linkedin"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-link twitter"
                  >
                    <Twitter size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Project inquiry"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="form-textarea"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="form-submit"
                >
                  <Send size={18} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
