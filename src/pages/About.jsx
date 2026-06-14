import { Link } from 'react-router-dom';
import { Cog, FileSearch, Target, Users, ShieldCheck, Activity, ArrowRight } from 'lucide-react';

const About = () => {
  const currentActivities = [
    { label: 'Due Diligence', active: true },
    { label: 'Engineering Review', active: true },
    { label: 'Water Source Evaluation', active: true },
    { label: 'Manufacturing Planning', active: true },
    { label: 'Facility Planning', active: true },
    { label: 'Equipment Evaluation', active: true },
    { label: 'Compliance Planning', active: true },
    { label: 'Workforce Development Planning', active: true },
    { label: 'Capital Formation', active: true },
  ];

  const pillars = [
    { icon: <Cog size={24} />, title: 'Engineering Review', desc: 'Engineering review is currently underway with experienced beverage and water-treatment professionals, covering facility design, process flow, and equipment evaluation.' },
    { icon: <FileSearch size={24} />, title: 'Due Diligence', desc: 'Comprehensive due diligence including water source evaluation, market analysis, regulatory landscape review, and site feasibility assessment.' },
    { icon: <Target size={24} />, title: 'Capital Formation', desc: 'Actively pursuing capital structure development through engagement with SBA lenders, commercial lenders, and strategic investors.' },
    { icon: <ShieldCheck size={24} />, title: 'Compliance Planning', desc: 'Full regulatory readiness planning for FDA, USDA, and state-level requirements including food safety, GMP, and FSMA standards.' },
    { icon: <Users size={24} />, title: 'Workforce Development', desc: 'Partnering with local institutions to develop training programs for manufacturing, QA, compliance, and operational roles.' },
    { icon: <Activity size={24} />, title: 'Facility Planning', desc: 'Evaluating facility design, site selection, automation requirements, and utility infrastructure for the planned Salem, Missouri location.' },
  ];

  return (
    <div>
      <div className="page-banner">
        <div className="container">
          <h1>Project Development <span style={{ color: 'var(--sky-light)' }}>Status</span></h1>
          <p>A transparent look at where Salem Purified Water LLC stands today and the path forward.</p>
        </div>
      </div>

      {/* STATUS OVERVIEW */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid-2">
            <div>
              <span className="badge" style={{ marginBottom: '1.25rem' }}>Current Status</span>
              <h2 style={{ marginBottom: '1.5rem' }}>Active Development <span className="gradient-text">Phase</span></h2>
              <div className="highlight-box" style={{ marginBottom: '2rem' }}>
                <p style={{ color: 'var(--dark-gray)', lineHeight: 1.8, margin: 0 }}>
                  Salem Purified Water LLC is actively engaged in the critical planning phases of facility development.{' '}
                  <strong style={{ color: 'var(--navy)' }}>Engineering review is currently underway with experienced beverage and water-treatment professionals.</strong>{' '}
                  Our team is committed to completing all necessary evaluations before advancing to capital deployment and construction.
                </p>
              </div>
              <h3 style={{ marginBottom: '1.25rem', fontSize: '1.1rem' }}>Current Activities:</h3>
              <div>
                {currentActivities.map((item, i) => (
                  <div key={i} className="status-step">
                    <div className={`status-dot ${item.active ? 'active' : 'pending'}`} />
                    <span style={{ color: 'var(--dark-gray)', fontSize: '0.97rem' }}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="/engineers_planning.png"
                alt="Engineering Review in Progress"
                style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }}
              />
              <div style={{ background: 'var(--sky-pale)', borderRadius: 'var(--radius-md)', padding: '1.5rem', marginTop: '1.5rem', border: '1px solid rgba(30,180,240,0.2)' }}>
                <p style={{ color: 'var(--dark-gray)', margin: 0, fontSize: '0.95rem', lineHeight: 1.7 }}>
                  <strong style={{ color: 'var(--navy)' }}>Note:</strong> Salem Purified Water LLC is not yet operational. The company is in the pre-construction, planning, and capital formation stage. No products are currently available for sale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEVELOPMENT PILLARS */}
      <section className="section bg-sky-pale">
        <div className="container">
          <div className="section-header">
            <h2>Our Development <span className="gradient-text">Pillars</span></h2>
            <div className="section-divider" />
            <p style={{ marginTop: '1rem' }}>Six foundational areas driving our planning and execution efforts.</p>
          </div>
          <div className="card-grid">
            {pillars.map((p, i) => (
              <div key={i} className="card">
                <div className="card-icon">{p.icon}</div>
                <h3 style={{ marginBottom: '0.6rem', fontSize: '1.1rem' }}>{p.title}</h3>
                <p style={{ color: 'var(--dark-gray)', fontSize: '0.93rem', lineHeight: 1.65 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION STATEMENT */}
      <section className="section bg-navy-gradient">
        <div className="container" style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ color: 'var(--white)', marginBottom: '1.5rem' }}>
            Our <span style={{ color: 'var(--sky)' }}>Mission</span>
          </h2>
          <p style={{ color: 'var(--text-on-dark)', fontSize: '1.1rem', lineHeight: 1.8, opacity: 0.9, marginBottom: '2rem' }}>
            To build a world-class purified water manufacturing facility in Salem, Missouri that delivers safe, high-quality purified water products to consumers and emergency supply chains, while creating meaningful local jobs and economic growth for our community.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/project-spring" className="btn btn-primary">Project Spring <ArrowRight size={18} /></Link>
            <Link to="/salem-facility" className="btn btn-outline">Our Facility Plans</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
