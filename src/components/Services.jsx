import React from 'react';
import './Services.css';

const Services = () => {
    // This is where you would define your services data
    const servicesData = [
        {
            title: "Frontend Development",
            description: "Building responsive and interactive user interfaces using modern web technologies.",
            icon: "💻 "
        },
        {
            title: "UI/UX Design",
            description: "Creating intuitive and beautiful designs that provide a seamless user experience.",
            icon: "🎨"
        },
        {
            title: "Performance Optimization",
            description: "Improving website speed and efficiency for a better user experience and SEO.",
            icon: "⚡"
        },
        {
            title: "API Integration",
            description: "Connecting your application to third-party services and backend APIs.",
            icon: "🔗"
        }
    ];

    return (
        <section id="services" className="services-section">
            <h2 className="section-title">My Services</h2>
            <p className="section-description">
                I offer a range of services to help bring your digital ideas to life.
            </p>

            <div className="services-grid">
                {servicesData.map((service, index) => (
                    <div key={index} className="service-card">
                        <div className="service-icon">{service.icon}</div>
                        <h3 className="service-title">{service.title}</h3>
                        <p className="service-description">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;