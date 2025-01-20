import React, { useState } from 'react';
import { Cpu, BookOpen, Brain, Rocket, ChevronRight, Github, Menu, X } from 'lucide-react';

// Create components for different pages
const Home = () => (
  <>
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Welcome to The Advanced School</h1>
          <p>Join the future of education with our TAS-powered learning platform. Master the skills you need with personalized guidance and cutting-edge technology.</p>
          <div className="button-group">
            <button 
              onClick={() => window.location.href = '#pricing'} 
              className="button button-primary hover-scale">
              Start Learning <ChevronRight size={20} style={{ marginLeft: '0.5rem' }} />
            </button>
            <button 
              onClick={() => window.open('https://github.com/tas-education', '_blank')}
              className="button button-secondary hover-scale">
              <Github size={20} style={{ marginRight: '0.5rem' }} /> GitHub
            </button>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Technology and Education"
          />
        </div>
      </div>
    </section>

    <section className="features">
      <div className="features-container">
        <div className="features-header">
          <h2>Why Choose TAS?</h2>
          <p>Experience the next generation of learning with our advanced learning platform</p>
        </div>

        <div className="features-grid">
          <div className="feature-card hover-lift">
            <div className="feature-icon">
              <BookOpen size={48} />
            </div>
            <h3>Smart Learning</h3>
            <p>Adaptive curriculum that evolves with your progress and learning style</p>
          </div>

          <div className="feature-card hover-lift">
            <div className="feature-icon">
              <Brain size={48} />
            </div>
            <h3>TAS Mentorship</h3>
            <p>24/7 personalized guidance from our advanced tutoring system</p>
          </div>

          <div className="feature-card hover-lift">
            <div className="feature-icon">
              <Rocket size={48} />
            </div>
            <h3>Rapid Progress</h3>
            <p>Achieve your learning goals faster with TAS-optimized learning paths</p>
          </div>
        </div>
      </div>
    </section>
  </>
);

const Features = () => (
  <div className="page-container">
    <h1>Our Features</h1>
    <div className="features-list">
      <div className="feature-item hover-lift">
        <h2>Personalized Learning Paths</h2>
        <p>Custom-tailored education journey based on your goals and pace</p>
      </div>
      <div className="feature-item hover-lift">
        <h2>Interactive Exercises</h2>
        <p>Learn by doing with hands-on practical exercises</p>
      </div>
      <div className="feature-item hover-lift">
        <h2>Progress Tracking</h2>
        <p>Monitor your growth with detailed analytics and insights</p>
      </div>
    </div>
  </div>
);

const Pricing = () => (
  <div className="page-container" id="pricing">
    <h1>Pricing Plans</h1>
    <div className="pricing-grid">
      <div className="pricing-card hover-lift">
        <h2>Basic</h2>
        <p className="price">$29/month</p>
        <ul>
          <li>Access to basic courses</li>
          <li>Community support</li>
          <li>Monthly webinars</li>
        </ul>
        <button onClick={() => alert('Basic plan selected!')} className="button button-primary hover-scale">
          Choose Plan
        </button>
      </div>
      <div className="pricing-card hover-lift featured">
        <h2>Pro</h2>
        <p className="price">$49/month</p>
        <ul>
          <li>All basic features</li>
          <li>Advanced courses</li>
          <li>Priority support</li>
          <li>Weekly mentoring</li>
        </ul>
        <button onClick={() => alert('Pro plan selected!')} className="button button-primary hover-scale">
          Choose Plan
        </button>
      </div>
      <div className="pricing-card hover-lift">
        <h2>Enterprise</h2>
        <p className="price">Custom</p>
        <ul>
          <li>All pro features</li>
          <li>Custom curriculum</li>
          <li>Dedicated support</li>
          <li>Team management</li>
        </ul>
        <button onClick={() => alert('Contact us for enterprise pricing!')} className="button button-primary hover-scale">
          Contact Us
        </button>
      </div>
    </div>
  </div>
);

const Contact = () => (
  <div className="page-container">
    <h1>Contact Us</h1>
    <div className="contact-form">
      <input type="text" placeholder="Name" className="form-input" />
      <input type="email" placeholder="Email" className="form-input" />
      <textarea placeholder="Message" className="form-input" rows={5}></textarea>
      <button onClick={() => alert('Message sent!')} className="button button-primary hover-scale">
        Send Message
      </button>
    </div>
  </div>
);

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderPage = () => {
    switch(currentPage) {
      case 'features': return <Features />;
      case 'pricing': return <Pricing />;
      case 'contact': return <Contact />;
      default: return <Home />;
    }
  };

  return (
    <div>
      <nav>
        <div className="nav-container">
          <div className="logo hover-scale" onClick={() => setCurrentPage('home')} style={{ cursor: 'pointer' }}>
            <Cpu size={32} />
            <span>TAS</span>
          </div>
          <button className="mobile-menu-button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <a href="#" onClick={() => setCurrentPage('home')} className={currentPage === 'home' ? 'active' : ''}>Home</a>
            <a href="#" onClick={() => setCurrentPage('features')} className={currentPage === 'features' ? 'active' : ''}>Features</a>
            <a href="#" onClick={() => setCurrentPage('pricing')} className={currentPage === 'pricing' ? 'active' : ''}>Pricing</a>
            <a href="#" onClick={() => setCurrentPage('contact')} className={currentPage === 'contact' ? 'active' : ''}>Contact</a>
            <button onClick={() => setCurrentPage('pricing')} className="button button-primary hover-scale">Get Started</button>
          </div>
        </div>
      </nav>

      {renderPage()}

      <section className="cta">
        <div className="cta-container">
          <h2>Transform Your Learning Journey</h2>
          <p>Join thousands of students already experiencing the future of education</p>
          <button onClick={() => setCurrentPage('pricing')} className="button button-secondary hover-scale">Enroll Now</button>
        </div>
      </section>

      <footer>
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-column">
              <div className="footer-logo">
                <Cpu size={32} />
                <span>TAS</span>
              </div>
              <p>Revolutionizing education through advanced technology</p>
            </div>
            <div className="footer-column">
              <h3>Product</h3>
              <ul className="footer-links">
                <li><a href="#" onClick={() => setCurrentPage('features')}>Features</a></li>
                <li><a href="#" onClick={() => setCurrentPage('pricing')}>Pricing</a></li>
                <li><a href="#" onClick={() => setCurrentPage('home')}>Documentation</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Company</h3>
              <ul className="footer-links">
                <li><a href="#" onClick={() => setCurrentPage('home')}>About</a></li>
                <li><a href="#" onClick={() => setCurrentPage('home')}>Blog</a></li>
                <li><a href="#" onClick={() => setCurrentPage('contact')}>Careers</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Legal</h3>
              <ul className="footer-links">
                <li><a href="#" onClick={() => setCurrentPage('home')}>Privacy</a></li>
                <li><a href="#" onClick={() => setCurrentPage('home')}>Terms</a></li>
                <li><a href="#" onClick={() => setCurrentPage('contact')}>Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 The Advanced School. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;