import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Cog, Users, TrendingUp, Droplets, Award, HardHat, Leaf } from 'lucide-react';

const Home = () => {
  const audiences = [
    'City of Salem Officials', 'USDA Reviewers', 'SBA & Commercial Lenders',
    'Investors', 'Engineers', 'Manufacturing Partners',
    'Economic Development Organizations', 'Future Customers',
  ];

  const highlights = [
    { icon: <Cog size={24} />, title: 'Engineering Review', desc: 'Underway with experienced beverage and water-treatment professionals.' },
    { icon: <ShieldCheck size={24} />, title: 'Compliance Ready', desc: 'HACCP, GMP, FSMA PCQI, OSHA 30, ISO 9001 training completed.' },
    { icon: <TrendingUp size={24} />, title: 'Capital Formation', desc: 'Actively working toward capital structure for facility development.' },
    { icon: <Users size={24} />, title: 'Workforce Development', desc: 'Partnering with local institutions for job creation in Salem.' },
    { icon: <Award size={24} />, title: 'Quality Systems', desc: 'ISO 9001, CAPA, Lean Six Sigma, and root cause analysis frameworks in place.' },
    { icon: <Leaf size={24} />, title: 'Community Investment', desc: 'Driving economic growth and establishing Salem as a manufacturing hub.' },
  ];

  return (
    <div>
      {/* HERO */}
      <section className="hero-section">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '720px' }}>
            <span className="badge" style={{ background: 'rgba(30,180,240,0.2)', color: 'var(--sky-light)', border: '1px solid rgba(30,180,240,0.3)', marginBottom: '1.5rem' }}>
              <Droplets size={14} /> Project In Development
            </span>
            <h1 style={{ color: 'var(--white)', fontSize: 'clamp(2.2rem, 6vw, 3.8rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
              Salem Purified Water <span style={{ color: 'var(--sky)' }}>LLC</span>
            </h1>
            <p style={{ color: 'var(--text-on-dark)', fontSize: '1.15rem', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: '600px', opacity: 0.9 }}>
              Advancing a state-of-the-art purified water manufacturing facility in Salem, Missouri through rigorous due diligence, engineering review, and manufacturing planning.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/about" className="btn btn-primary">
                Project Status <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Partner With Us
              </Link>
            </div>
          </div>
        </div>

        {/* Floating logo watermark */}
        <div style={{
          position: 'absolute', right: '5%', top: '50%', transform: 'translateY(-50%)',
          opacity: 0.07, pointerEvents: 'none',
        }}>
          <img src="/salemlogo.png" alt="" style={{ width: '420px', filter: 'brightness(0) invert(1)' }} />
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="section bg-sky-pale">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-navy" style={{ marginBottom: '1rem' }}>Our Stakeholders</span>
            <h2>Built for <span className="gradient-text">Key Decision-Makers</span></h2>
            <div className="section-divider" />
            <p style={{ marginTop: '1rem' }}>This project is designed to meet the standards and expectations of regulatory, financial, and community stakeholders.</p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
            {audiences.map((a, i) => (
              <span key={i} className="badge badge-navy" style={{ fontSize: '0.92rem', padding: '0.55rem 1.1rem' }}>{a}</span>
            ))}
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header">
            <span className="badge" style={{ marginBottom: '1rem' }}>Current Activities</span>
            <h2>Where We Are <span className="gradient-text">Right Now</span></h2>
            <div className="section-divider" />
          </div>
          <div className="card-grid">
            {highlights.map((h, i) => (
              <div key={i} className="card" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="card-icon">{h.icon}</div>
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.15rem' }}>{h.title}</h3>
                <p style={{ color: 'var(--dark-gray)', fontSize: '0.95rem', lineHeight: 1.6 }}>{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT OVERVIEW STRIP */}
      <section className="section bg-navy-gradient">
        <div className="container">
          <div className="grid-2" style={{ gap: '5rem' }}>
            <div>
              <span className="badge" style={{ background: 'rgba(30,180,240,0.2)', color: 'var(--sky-light)', border: '1px solid rgba(30,180,240,0.3)', marginBottom: '1rem' }}>
                Phase 1 — Project Spring
              </span>
              <h2 style={{ color: 'var(--white)', marginBottom: '1.25rem' }}>
                A Foundation Built for <span style={{ color: 'var(--sky)' }}>Long-Term Success</span>
              </h2>
              <p style={{ color: 'var(--text-on-dark)', opacity: 0.85, lineHeight: 1.75, marginBottom: '2rem' }}>
                Project Spring represents the foundational phase of Salem Purified Water LLC, focused on establishing a manufacturing facility that serves consumer, emergency supply, and private-label markets.
              </p>
              <ul className="check-list" style={{ color: 'var(--text-on-dark)' }}>
                {['Automated production facility design', 'Local workforce training programs', 'Community economic development', 'Compliance & quality systems ready'].map((item, i) => (
                  <li key={i} style={{ color: 'var(--text-on-dark)', opacity: 0.9 }}>{item}</li>
                ))}
              </ul>
              <Link to="/project-spring" className="btn btn-primary" style={{ marginTop: '2rem' }}>
                Learn About Project Spring <ArrowRight size={18} />
              </Link>
            </div>
            <div>
              <img
                src="/engineers_planning.png"
                alt="Engineers Planning Facility"
                style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', opacity: 0.9 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-sky-pale">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: '1rem' }}>Ready to <span className="gradient-text">Partner With Us?</span></h2>
          <p style={{ color: 'var(--dark-gray)', maxWidth: '540px', margin: '0 auto 2rem', fontSize: '1.05rem' }}>
            For inquiries related to project development, engineering partnerships, or capital formation, we'd love to hear from you.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-navy">Contact Us</Link>
            <Link to="/products" className="btn btn-outline-navy">View Products</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
