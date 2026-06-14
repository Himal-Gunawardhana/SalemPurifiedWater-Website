import { Link } from 'react-router-dom';
import { ClipboardCheck, Award, HeartPulse, Factory, Download, FileText, ArrowRight } from 'lucide-react';

const processSteps = [
  'Water Source', 'Raw Water Evaluation', 'Pre-Treatment', 'Filtration',
  'Reverse Osmosis', 'UV Sterilization', 'Ozone Treatment', 'Finished Water Storage',
  'Bottle Rinsing', 'Filling', 'Capping', 'Labeling', 'Packaging',
  'Palletizing', 'Warehouse Storage', 'Distribution',
];

const certifications = [
  {
    icon: <ClipboardCheck size={24} />,
    title: 'Food Safety & Regulatory Compliance',
    color: 'var(--sky-dark)',
    items: [
      'HACCP Fundamentals',
      'Advanced HACCP Training',
      'Managing HACCP Essentials (FDA Perspective)',
      'FSMA Preventive Controls Qualified Individual (PCQI)',
      'Good Manufacturing Practices (GMP)',
    ],
  },
  {
    icon: <Award size={24} />,
    title: 'Quality Systems & Continuous Improvement',
    color: 'var(--sky-dark)',
    items: [
      'ISO 9001 Internal Auditor Training',
      'CAPA Management',
      'Root Cause Analysis',
      'Lean Six Sigma Yellow Belt',
    ],
  },
  {
    icon: <HeartPulse size={24} />,
    title: 'Workplace Safety',
    color: 'var(--sky-dark)',
    items: [
      'OSHA 30 General Industry',
      'OSHA Injury & Illness Recordkeeping',
    ],
  },
  {
    icon: <Factory size={24} />,
    title: 'Water Industry & Manufacturing Readiness',
    color: 'var(--sky-dark)',
    items: [
      'Water Treatment Fundamentals',
      'Bottled Water Industry Training',
    ],
  },
];

const documents = [
  { title: 'Executive Summary', status: 'In Development' },
  { title: 'Project Fact Sheet', status: 'In Development' },
  { title: 'Economic Impact Summary', status: 'In Development' },
  { title: 'Community Benefits Summary', status: 'In Development' },
  { title: 'Future Engineering Updates', status: 'Pending Review' },
];

const SalemFacility = () => {
  return (
    <div>
      <div className="page-banner">
        <div className="container">
          <h1>Salem <span style={{ color: 'var(--sky-light)' }}>Facility</span></h1>
          <p>How our water is produced, our compliance certifications, and the document library for partners and reviewers.</p>
        </div>
      </div>

      {/* HOW OUR WATER IS MADE */}
      <section className="section bg-white" id="process">
        <div className="container">
          <div className="grid-2">
            <div>
              <span className="badge" style={{ marginBottom: '1.25rem' }}>Manufacturing Process</span>
              <h2 style={{ marginBottom: '1.5rem' }}>How Salem Purified <span className="gradient-text">Water Is Made</span></h2>
              <p style={{ color: 'var(--dark-gray)', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '2rem' }}>
                Our planned state-of-the-art manufacturing process is designed for absolute purity and safety, following industry-standard treatment stages from raw water intake to final distribution.
              </p>

              <div className="warning-box" style={{ marginBottom: '2rem' }}>
                <strong>Disclaimer:</strong> Final treatment configuration remains subject to engineering review and water analysis results.
              </div>

              {/* Process Flow */}
              <div className="process-flow">
                {processSteps.map((step, index) => (
                  <div key={index} className="process-step">
                    <span>{step}</span>
                    {index < processSteps.length - 1 && <span className="process-arrow">↓</span>}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <img
                src="/water_purity_process.png"
                alt="Water Purification Process"
                style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', marginBottom: '1.5rem' }}
              />
              <img
                src="/bottled_water_line.png"
                alt="Bottled Water Manufacturing Line"
                style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* COMPLIANCE & CERTIFICATIONS */}
      <section className="section bg-sky-pale" id="compliance">
        <div className="container">
          <div className="section-header">
            <span className="badge" style={{ marginBottom: '1rem' }}>Compliance & Operational Excellence</span>
            <h2>Our <span className="gradient-text">Certifications & Training</span></h2>
            <div className="section-divider" />
            <p style={{ marginTop: '1rem' }}>
              Building a foundation of food safety, quality systems, and regulatory readiness for USDA, FDA, and institutional standards.
            </p>
          </div>

          <div className="card-grid">
            {certifications.map((cert, i) => (
              <div key={i} className="card">
                <div className="card-icon" style={{ color: cert.color }}>{cert.icon}</div>
                <h3 style={{ marginBottom: '1rem', fontSize: '1.05rem' }}>{cert.title}</h3>
                <ul className="check-list">
                  {cert.items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>

          {/* Excellence Focus */}
          <div style={{ marginTop: '3rem', background: 'var(--white)', borderRadius: 'var(--radius-lg)', padding: '2.5rem', border: '1px solid rgba(30,180,240,0.2)' }}>
            <h3 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Development Emphasis Areas</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
              {[
                'Food Safety', 'Quality Systems', 'Documentation Control', 'Workforce Development',
                'Operational Excellence', 'Continuous Improvement', 'Compliance Readiness'
              ].map((area, i) => (
                <span key={i} className="badge badge-navy" style={{ fontSize: '0.92rem', padding: '0.55rem 1.1rem' }}>{area}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DOCUMENT LIBRARY */}
      <section className="section bg-white" id="documents">
        <div className="container">
          <div className="section-header">
            <span className="badge" style={{ marginBottom: '1rem' }}>Document Library</span>
            <h2>Project <span className="gradient-text">Documents</span></h2>
            <div className="section-divider" />
            <p style={{ marginTop: '1rem' }}>Documents are being compiled during due diligence and will be available for download upon completion.</p>
          </div>

          <div style={{ maxWidth: '700px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {documents.map((doc, i) => (
              <div key={i} className="doc-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ background: 'var(--sky-pale)', padding: '0.65rem', borderRadius: 'var(--radius-sm)', display: 'flex' }}>
                    <FileText size={22} color="var(--sky-dark)" />
                  </div>
                  <div>
                    <p style={{ fontWeight: 600, color: 'var(--navy)', margin: 0 }}>{doc.title}</p>
                    <span className="badge" style={{ fontSize: '0.78rem', padding: '0.2rem 0.65rem', marginTop: '0.25rem' }}>{doc.status}</span>
                  </div>
                </div>
                <button
                  disabled
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                    padding: '0.5rem 1rem', border: '1.5px solid var(--light-gray)',
                    borderRadius: 'var(--radius-sm)', background: 'transparent',
                    color: 'var(--mid-gray)', cursor: 'not-allowed', fontSize: '0.88rem', fontWeight: 600
                  }}
                >
                  <Download size={14} /> PDF
                </button>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <p style={{ color: 'var(--dark-gray)', marginBottom: '1.5rem' }}>
              For specific document requests or inquiries, please contact us directly.
            </p>
            <Link to="/contact" className="btn btn-navy">Request Documents <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SalemFacility;
