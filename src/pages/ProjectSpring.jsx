import { Link } from 'react-router-dom';
import { Construction, TrendingUp, Leaf, Building2, Users, BarChart3, ArrowRight } from 'lucide-react';

const ProjectSpring = () => {
  const phases = [
    {
      icon: <Construction size={26} />,
      title: 'Manufacturing Development',
      desc: 'Laying the groundwork for a highly efficient, automated production facility. Focus areas include selecting state-of-the-art bottling and purification equipment, designing production workflow, and establishing quality control checkpoints at every stage of the process.',
      items: ['Equipment selection & evaluation', 'Automated production design', 'Quality control integration', 'Facility layout planning'],
    },
    {
      icon: <TrendingUp size={26} />,
      title: 'Workforce Development',
      desc: 'Partnering with local educational institutions and workforce agencies to build comprehensive training programs for manufacturing, quality assurance, compliance, and operational management roles in Salem, Missouri.',
      items: ['Manufacturing operations training', 'QA & compliance certification', 'Local hiring priority', 'Apprenticeship programs'],
    },
    {
      icon: <Leaf size={26} />,
      title: 'Community Investment',
      desc: 'Driving local economic growth through direct job creation, infrastructure utilization, and establishing Salem as an advanced manufacturing hub. Our presence is designed to have long-term positive impact on the local economy.',
      items: ['Direct local job creation', 'Local vendor partnerships', 'Tax base contribution', 'Salem, MO economic hub'],
    },
    {
      icon: <Building2 size={26} />,
      title: 'Facility Establishment',
      desc: 'Identifying and securing an appropriate facility site in Salem, Missouri that meets all regulatory, operational, and utility requirements for a purified water bottling plant.',
      items: ['Site selection & evaluation', 'Utility & infrastructure review', 'Zoning & permitting planning', 'Environmental compliance'],
    },
    {
      icon: <Users size={26} />,
      title: 'Stakeholder Engagement',
      desc: 'Proactive engagement with city officials, economic development organizations, regulatory bodies, and community leaders to build collaborative relationships that support long-term success.',
      items: ['City of Salem coordination', 'USDA & SBA engagement', 'Economic development partnerships', 'Community outreach'],
    },
    {
      icon: <BarChart3 size={26} />,
      title: 'Economic Impact Planning',
      desc: 'Comprehensive economic impact analysis identifying direct and indirect benefits to Dent County and the surrounding region, supporting applications for economic incentives and grant funding.',
      items: ['Impact assessment preparation', 'Grant & incentive applications', 'Regional economic analysis', 'Long-term growth planning'],
    },
  ];

  return (
    <div>
      <div className="page-banner">
        <div className="container">
          <span className="badge" style={{ background: 'rgba(30,180,240,0.2)', color: 'var(--sky-light)', border: '1px solid rgba(30,180,240,0.3)', marginBottom: '1rem' }}>
            Phase 1
          </span>
          <h1>Project <span style={{ color: 'var(--sky-light)' }}>Spring</span></h1>
          <p>The foundational phase focused on manufacturing development, workforce training, and long-term community investment.</p>
        </div>
      </div>

      {/* OVERVIEW */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid-2">
            <div>
              <span className="badge" style={{ marginBottom: '1.25rem' }}>Project Overview</span>
              <h2 style={{ marginBottom: '1.5rem' }}>Building a Foundation for <span className="gradient-text">Lasting Impact</span></h2>
              <div className="highlight-box" style={{ marginBottom: '1.5rem' }}>
                <p style={{ color: 'var(--dark-gray)', margin: 0, lineHeight: 1.8 }}>
                  Project Spring is the first phase of Salem Purified Water LLC's facility development plan. It focuses on establishing manufacturing capability, workforce capacity, and economic contribution in Salem, Missouri.
                </p>
              </div>
              <p style={{ color: 'var(--dark-gray)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                This phase is designed to validate the technical and economic feasibility of the project while putting in place the compliance, workforce, and operational frameworks needed for a successful launch.
              </p>
              <ul className="check-list">
                {['State-of-the-art purification technology', 'FDA & USDA regulatory readiness', 'Local workforce first hiring policy', 'Full compliance infrastructure', 'Transparent stakeholder communication'].map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src="/water_purity_process.png"
                alt="Water Purification Planning"
                style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SIX PILLARS */}
      <section className="section bg-sky-pale">
        <div className="container">
          <div className="section-header">
            <h2>Six Pillars of <span className="gradient-text">Project Spring</span></h2>
            <div className="section-divider" />
            <p style={{ marginTop: '1rem' }}>Each pillar addresses a critical component of building a successful, compliant, and community-focused manufacturing operation.</p>
          </div>
          <div className="card-grid">
            {phases.map((phase, i) => (
              <div key={i} className="card">
                <div className="card-icon">{phase.icon}</div>
                <h3 style={{ marginBottom: '0.6rem', fontSize: '1.1rem' }}>{phase.title}</h3>
                <p style={{ color: 'var(--dark-gray)', fontSize: '0.93rem', lineHeight: 1.65, marginBottom: '1rem' }}>{phase.desc}</p>
                <ul className="check-list">
                  {phase.items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LONG-TERM VISION */}
      <section className="section bg-navy-gradient">
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ color: 'var(--white)', marginBottom: '1.5rem' }}>
            Long-Term <span style={{ color: 'var(--sky)' }}>Community Investment</span>
          </h2>
          <p style={{ color: 'var(--text-on-dark)', fontSize: '1.05rem', lineHeight: 1.8, opacity: 0.9, marginBottom: '1.5rem' }}>
            Project Spring is not just a business venture — it is a commitment to the people of Salem, Missouri. By choosing Salem as our home, we are investing in the long-term prosperity of the community, creating stable manufacturing jobs, and contributing to the local tax base for years to come.
          </p>
          <p style={{ color: 'var(--text-on-dark)', opacity: 0.75, marginBottom: '2.5rem', lineHeight: 1.7 }}>
            We envision Salem Purified Water LLC as the cornerstone of a growing advanced manufacturing presence in Dent County, attracting additional investment and opportunity to the region.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/about" className="btn btn-primary">Project Status <ArrowRight size={18} /></Link>
            <Link to="/contact" className="btn btn-outline">Get Involved</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectSpring;
