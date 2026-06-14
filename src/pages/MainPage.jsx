import { Activity, Cog, Target, Users, ShieldCheck, HardHat, FileSearch, Banknote, ClipboardCheck, Award, HeartPulse, Factory, ArrowDown, Package, Droplet, Box, Briefcase, HelpCircle, Leaf, Construction, TrendingUp, Presentation, FileText, Download, Mail, Phone, MapPin, Send } from 'lucide-react';

const MainPage = () => {
  const processSteps = [
    "Water Source", "Raw Water Evaluation", "Pre-Treatment", "Filtration",
    "Reverse Osmosis", "UV Sterilization", "Ozone Treatment", "Finished Water Storage",
    "Bottle Rinsing", "Filling", "Capping", "Labeling", "Packaging",
    "Palletizing", "Warehouse Storage", "Distribution"
  ];

  const faqs = [
    { q: "Is Salem Purified Water currently operational?", a: "The project is currently in due diligence, engineering review, and development planning." },
    { q: "Where will the facility be located?", a: "Salem, Missouri." },
    { q: "What products are planned?", a: "Purified bottled water products and emergency water supply products." },
    { q: "Is the project working with engineers?", a: "Yes. Engineering review and water-treatment evaluation are currently underway." },
    { q: "Will the project create jobs?", a: "Workforce development and local job creation are key project objectives." },
    { q: "Will the company offer private-label bottled water?", a: "Private-label opportunities are being evaluated as part of long-term planning." },
    { q: "How is water quality being evaluated?", a: "Water source evaluation, treatment planning, and engineering review are ongoing." }
  ];

  return (
    <div className="animate-fade-in" style={{ position: 'relative' }}>
      {/* Background Blobs for depth */}
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>
      <div className="bg-blob blob-3"></div>

      {/* HERO SECTION */}
      <section id="home" className="section hero-section" style={{ 
        backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.8)), url(/hero_water_facility.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: 'white',
        padding: '10rem 0 8rem 0',
        textAlign: 'center',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div className="container">
          <h1 style={{ color: 'white', fontSize: '4rem', marginBottom: '1.5rem', textShadow: '0 4px 20px rgba(0,0,0,0.6)', letterSpacing: '-0.03em' }}>
            <span className="gradient-text-sunset">Salem</span> Purified Water LLC
          </h1>
          <p style={{ fontSize: '1.35rem', maxWidth: '800px', margin: '0 auto', opacity: 0.9, lineHeight: 1.6, textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
            Advancing a state-of-the-art purified water manufacturing facility in Salem, Missouri through rigorous due diligence and engineering review.
          </p>
          <div style={{ marginTop: '3rem', display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#status" className="btn btn-primary">
              Project Status
            </a>
            <a href="#contact" className="btn btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'white' }}>
              Partner With Us
            </a>
          </div>
        </div>
      </section>

      {/* STATUS SECTION */}
      <section id="status" className="section bg-gradient-primary">
        <div className="container">
          <div className="responsive-grid-2">
            <div>
              <h2 style={{ marginBottom: '1.5rem' }}>Project <span className="gradient-text">Development Status</span></h2>
              <div className="glass-panel" style={{ marginBottom: '2rem', borderLeft: '4px solid var(--color-accent)' }}>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.8', margin: 0 }}>
                  Salem Purified Water LLC is actively engaged in the critical planning phases of facility development. 
                  <strong style={{ color: 'var(--color-primary-dark)' }}> Engineering review is currently underway with experienced beverage and water-treatment professionals. </strong> 
                  Our team is committed to completing all necessary evaluations before advancing to capital deployment and construction.
                </p>
              </div>
              <div className="responsive-grid-2-sm">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div className="card-icon" style={{ margin: 0, width: '48px', height: '48px' }}><Cog /></div>
                  <span style={{ fontWeight: '600', color: 'var(--color-text-main)' }}>Engineering Review</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div className="card-icon" style={{ margin: 0, width: '48px', height: '48px' }}><FileSearch /></div>
                  <span style={{ fontWeight: '600', color: 'var(--color-text-main)' }}>Due Diligence</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div className="card-icon" style={{ margin: 0, width: '48px', height: '48px' }}><Target /></div>
                  <span style={{ fontWeight: '600', color: 'var(--color-text-main)' }}>Capital Formation</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div className="card-icon" style={{ margin: 0, width: '48px', height: '48px' }}><Users /></div>
                  <span style={{ fontWeight: '600', color: 'var(--color-text-main)' }}>Workforce Planning</span>
                </div>
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-20px', left: '-20px', right: '20px', bottom: '20px', background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))', borderRadius: 'var(--border-radius-lg)', zIndex: 0, opacity: 0.1 }}></div>
              <img src="/engineers_planning.png" alt="Engineers Planning" style={{ width: '100%', borderRadius: 'var(--border-radius-lg)', boxShadow: 'var(--shadow-lg)', position: 'relative', zIndex: 1 }} />
            </div>
          </div>
        </div>
      </section>

      {/* COMPLIANCE SECTION */}
      <section id="compliance" className="section bg-gradient-forest">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2>Compliance & <span style={{ color: 'var(--color-green)' }}>Operational Excellence</span></h2>
            <p style={{ maxWidth: '800px', margin: '1rem auto 0', color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>
              Building a foundation of food safety, quality systems, and regulatory readiness for USDA, FDA, and institutional standards.
            </p>
          </div>
          
          <div className="card-grid">
            <div className="card">
              <div className="card-icon" style={{ color: 'var(--color-green)' }}><ClipboardCheck /></div>
              <h3>Food Safety</h3>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
                <li>HACCP Fundamentals & Advanced</li>
                <li>FSMA PCQI</li>
                <li>Good Manufacturing Practices (GMP)</li>
              </ul>
            </div>
            <div className="card">
              <div className="card-icon" style={{ color: 'var(--color-green)' }}><Award /></div>
              <h3>Quality Systems</h3>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
                <li>ISO 9001 Internal Auditor</li>
                <li>CAPA Management</li>
                <li>Lean Six Sigma</li>
              </ul>
            </div>
            <div className="card">
              <div className="card-icon" style={{ color: 'var(--color-green)' }}><HeartPulse /></div>
              <h3>Workplace Safety</h3>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
                <li>OSHA 30 General Industry</li>
                <li>Injury & Illness Recordkeeping</li>
              </ul>
            </div>
            <div className="card">
              <div className="card-icon" style={{ color: 'var(--color-green)' }}><Factory /></div>
              <h3>Industry Readiness</h3>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
                <li>Water Treatment Fundamentals</li>
                <li>Bottled Water Industry Training</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section id="process" className="section bg-gradient-sunset">
        <div className="container">
          <div className="responsive-grid-2">
            <div style={{ order: 2 }}>
              <h2>How Salem Purified <span className="gradient-text-sunset">Water Is Made</span></h2>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', fontSize: '1.1rem' }}>
                Our planned state-of-the-art manufacturing process designed for absolute purity and safety.
              </p>
              <div className="glass-panel" style={{ borderLeft: '4px solid var(--color-orange)', marginBottom: '2rem' }}>
                <p style={{ margin: 0, color: 'var(--color-orange)', fontWeight: '600', fontSize: '0.95rem' }}>
                  Disclaimer: Final treatment configuration remains subject to engineering review and water analysis results.
                </p>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {processSteps.map((step, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ 
                      background: 'var(--color-surface)', 
                      color: 'var(--color-text-main)', 
                      border: '1px solid rgba(249, 115, 22, 0.2)',
                      padding: '0.5rem 1rem', 
                      borderRadius: '999px', 
                      fontSize: '0.9rem', 
                      fontWeight: '500',
                      boxShadow: 'var(--shadow-sm)'
                    }}>
                      {step}
                    </span>
                    {index < processSteps.length - 1 && <span style={{ color: 'var(--color-orange)', margin: '0 0.25rem' }}>→</span>}
                  </div>
                ))}
              </div>
            </div>
            <div style={{ order: 1, position: 'relative' }}>
              <div style={{ position: 'absolute', top: '20px', left: '20px', right: '-20px', bottom: '-20px', background: 'linear-gradient(135deg, var(--color-orange), var(--color-pink))', borderRadius: 'var(--border-radius-lg)', zIndex: 0, opacity: 0.15 }}></div>
              <img src="/water_purity_process.png" alt="Water Purification Process" style={{ width: '100%', borderRadius: 'var(--border-radius-lg)', boxShadow: 'var(--shadow-lg)', position: 'relative', zIndex: 1 }} />
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="products" className="section bg-gradient-purple">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2>Products <span style={{ color: 'var(--color-purple)' }}>Under Development</span></h2>
            <p style={{ maxWidth: '800px', margin: '1rem auto 0', color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>
              Exploring our planned product line designed to meet consumer and emergency supply needs.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem', background: 'rgba(139, 92, 246, 0.1)', padding: '0.5rem 1rem', borderRadius: '999px', color: 'var(--color-purple)' }}>
              <Package size={16} /> <span style={{ fontWeight: '500', fontSize: '0.9rem' }}>Note: Products are under development and not currently available for sale.</span>
            </div>
          </div>
          
          <div className="responsive-grid-2">
            <div style={{ position: 'relative' }}>
               <div style={{ position: 'absolute', top: '-15px', left: '-15px', right: '15px', bottom: '15px', background: 'linear-gradient(135deg, var(--color-purple), var(--color-pink))', borderRadius: 'var(--border-radius-lg)', zIndex: 0, opacity: 0.15 }}></div>
              <img src="/bottled_water_line.png" alt="Manufacturing Line" style={{ width: '100%', borderRadius: 'var(--border-radius-lg)', boxShadow: 'var(--shadow-lg)', position: 'relative', zIndex: 1 }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="glass-panel card" style={{ padding: '1.5rem' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', color: 'var(--color-text-main)' }}><Droplet color="var(--color-purple)"/> Consumer Bottled Water</h3>
                <p style={{ color: 'var(--color-text-muted)', margin: 0, fontSize: '1rem' }}>16.9 oz, 20 oz, 1-liter, and 1-gallon purified bottled water.</p>
              </div>
              <div className="glass-panel card" style={{ padding: '1.5rem' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', color: 'var(--color-text-main)' }}><Box color="var(--color-purple)"/> Emergency Supply</h3>
                <p style={{ color: 'var(--color-text-muted)', margin: 0, fontSize: '1rem' }}>Emergency water pallets designed for disaster relief, institutional stockpiling, and long-term storage.</p>
              </div>
              <div className="glass-panel card" style={{ padding: '1.5rem' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', color: 'var(--color-text-main)' }}><Briefcase color="var(--color-purple)"/> B2B Solutions</h3>
                <p style={{ color: 'var(--color-text-muted)', margin: 0, fontSize: '1rem' }}>Private-label opportunities providing tailored manufacturing solutions for brands and organizations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT SPRING SECTION */}
      <section id="project-spring" className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2>Project Spring <span className="gradient-text">(Phase 1)</span></h2>
            <p style={{ maxWidth: '800px', margin: '1rem auto 0', color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>
              The foundational phase focused on manufacturing development, workforce training, and economic impact.
            </p>
          </div>
          <div className="card-grid">
            <div className="card">
              <div className="card-icon"><Construction /></div>
              <h3>Manufacturing Development</h3>
              <p style={{ color: 'var(--color-text-muted)' }}>Laying the groundwork for a highly efficient, automated production facility. Focus on selecting equipment and engineering workflow.</p>
            </div>
            <div className="card">
              <div className="card-icon"><TrendingUp /></div>
              <h3>Workforce Development</h3>
              <p style={{ color: 'var(--color-text-muted)' }}>Partnering with local institutions to build training programs in manufacturing, QA, and compliance.</p>
            </div>
            <div className="card">
              <div className="card-icon"><Leaf /></div>
              <h3>Community Investment</h3>
              <p style={{ color: 'var(--color-text-muted)' }}>Driving local economic growth through job creation, infrastructure utilization, and establishing Salem as an advanced manufacturing hub.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ & DOCUMENTS SECTION */}
      <section id="faq-docs" className="section bg-gradient-primary">
        <div className="container">
          <div className="responsive-grid-faq">
            
            <div>
              <h2 style={{ marginBottom: '2.5rem' }}>Frequently Asked <span className="gradient-text">Questions</span></h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {faqs.map((faq, index) => (
                  <div key={index} className="glass-panel" style={{ padding: '1.5rem' }}>
                    <h4 style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.75rem', fontSize: '1.1rem', color: 'var(--color-text-main)' }}>
                      <HelpCircle color="var(--color-accent)" style={{ flexShrink: 0, marginTop: '3px' }} size={20} />
                      {faq.q}
                    </h4>
                    <p style={{ color: 'var(--color-text-muted)', margin: 0, paddingLeft: '2.25rem', fontSize: '0.95rem', lineHeight: '1.6' }}>{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 id="documents" style={{ marginBottom: '2.5rem' }}>Document <span className="gradient-text">Library</span></h2>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', fontSize: '1.05rem' }}>
                Documents are being compiled during due diligence and will be available for download here upon completion.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { title: "Executive Summary", status: "In Development" },
                  { title: "Project Fact Sheet", status: "In Development" },
                  { title: "Economic Impact Summary", status: "In Development" },
                  { title: "Community Benefits Summary", status: "In Development" },
                  { title: "Future Engineering Updates", status: "Pending Review" }
                ].map((doc, index) => (
                  <div key={index} className="glass-panel" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{ background: 'rgba(37, 99, 235, 0.1)', padding: '0.5rem', borderRadius: '8px' }}>
                        <FileText color="var(--color-primary)" size={24} />
                      </div>
                      <div>
                        <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '1.05rem' }}>{doc.title}</h4>
                        <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>{doc.status}</span>
                      </div>
                    </div>
                    <button className="btn btn-secondary" disabled style={{ padding: '0.5rem 1rem', opacity: 0.5, cursor: 'not-allowed' }}>
                      <Download size={16} style={{ marginRight: '0.5rem' }} /> PDF
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2>Get In <span className="gradient-text">Touch</span></h2>
            <p style={{ maxWidth: '800px', margin: '1rem auto 0', color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>
              For inquiries related to project development, engineering partnerships, or capital formation.
            </p>
          </div>
          <div className="responsive-grid-contact">
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', justifyContent: 'center' }}>
              <div className="glass-panel card" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', padding: '1.5rem' }}>
                <div style={{ padding: '1rem', background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(6, 182, 212, 0.2))', borderRadius: '50%', color: 'var(--color-primary)' }}>
                  <Phone size={24} />
                </div>
                <div>
                  <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '1.1rem' }}>Phone</h4>
                  <p style={{ margin: 0, color: 'var(--color-text-muted)' }}>(573) 706-7775</p>
                </div>
              </div>
              <div className="glass-panel card" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', padding: '1.5rem' }}>
                <div style={{ padding: '1rem', background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(6, 182, 212, 0.2))', borderRadius: '50%', color: 'var(--color-primary)' }}>
                  <Mail size={24} />
                </div>
                <div>
                  <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '1.1rem' }}>Email</h4>
                  <a href="mailto:admin@salempurifiedwater.com" style={{ margin: 0, color: 'var(--color-primary)', textDecoration: 'none', fontWeight: '500' }}>admin@salempurifiedwater.com</a>
                </div>
              </div>
              <div className="glass-panel card" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', padding: '1.5rem' }}>
                <div style={{ padding: '1rem', background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(6, 182, 212, 0.2))', borderRadius: '50%', color: 'var(--color-primary)' }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '1.1rem' }}>Location</h4>
                  <p style={{ margin: 0, color: 'var(--color-text-muted)' }}>Salem, Missouri</p>
                </div>
              </div>
            </div>

            <div className="glass-panel" style={{ padding: '2.5rem' }}>
              <h3 style={{ marginBottom: '2rem', fontSize: '1.5rem' }}>Send a Message</h3>
              <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <input type="text" style={{ width: '100%', padding: '1rem', borderRadius: 'var(--border-radius-sm)', border: '1px solid rgba(0,0,0,0.1)', background: 'var(--color-surface)', fontSize: '1rem', transition: 'border-color var(--transition-fast)', outline: 'none' }} placeholder="Full Name" />
                </div>
                <div>
                  <input type="email" style={{ width: '100%', padding: '1rem', borderRadius: 'var(--border-radius-sm)', border: '1px solid rgba(0,0,0,0.1)', background: 'var(--color-surface)', fontSize: '1rem', transition: 'border-color var(--transition-fast)', outline: 'none' }} placeholder="Email Address" />
                </div>
                <div>
                  <select style={{ width: '100%', padding: '1rem', borderRadius: 'var(--border-radius-sm)', border: '1px solid rgba(0,0,0,0.1)', background: 'var(--color-surface)', color: 'var(--color-text-muted)', fontSize: '1rem', outline: 'none' }}>
                    <option>Area of Interest...</option>
                    <option>General Inquiry</option>
                    <option>Engineering / Manufacturing</option>
                    <option>Investment / Capital Formation</option>
                    <option>City / Compliance Officials</option>
                  </select>
                </div>
                <div>
                  <textarea rows="4" style={{ width: '100%', padding: '1rem', borderRadius: 'var(--border-radius-sm)', border: '1px solid rgba(0,0,0,0.1)', background: 'var(--color-surface)', resize: 'vertical', fontSize: '1rem', outline: 'none' }} placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem', padding: '1rem' }}>
                  <Send size={20} style={{ marginRight: '0.5rem' }} /> Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default MainPage;
