import { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactInfo = [
    { icon: <Phone size={22} />, label: 'Phone', value: '(573) 706-7775', href: 'tel:+15737067775' },
    { icon: <Mail size={22} />, label: 'Email', value: 'admin@salempurifiedwater.com', href: 'mailto:admin@salempurifiedwater.com' },
    { icon: <MapPin size={22} />, label: 'Location', value: 'Salem, Missouri', href: null },
  ];

  const interests = [
    'General Inquiry',
    'Engineering / Manufacturing Partnership',
    'Investment / Capital Formation',
    'City / Compliance Officials',
    'USDA / SBA / Lender Inquiry',
    'Economic Development',
    'Private Label / B2B',
    'Media / Press',
  ];

  return (
    <div>
      <div className="page-banner">
        <div className="container">
          <h1>Get In <span style={{ color: 'var(--sky-light)' }}>Touch</span></h1>
          <p>For inquiries related to project development, engineering partnerships, capital formation, or general questions.</p>
        </div>
      </div>

      <section className="section bg-white">
        <div className="container">
          <div className="grid-2" style={{ gap: '5rem' }}>

            {/* Contact Info */}
            <div>
              <span className="badge" style={{ marginBottom: '1.25rem' }}>Contact Information</span>
              <h2 style={{ marginBottom: '1rem' }}>Salem Purified <span className="gradient-text">Water LLC</span></h2>
              <p style={{ color: 'var(--dark-gray)', lineHeight: 1.75, marginBottom: '2.5rem' }}>
                We welcome inquiries from city officials, regulators, lenders, investors, engineers, manufacturing partners, economic development organizations, and future customers.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
                {contactInfo.map((info, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: '1.25rem',
                    padding: '1.25rem', background: 'var(--sky-pale)',
                    borderRadius: 'var(--radius-md)', border: '1px solid rgba(30,180,240,0.2)',
                  }}>
                    <div style={{
                      padding: '0.85rem',
                      background: 'linear-gradient(135deg, var(--sky-dark), var(--sky))',
                      borderRadius: '50%', color: 'white', display: 'flex',
                      boxShadow: 'var(--shadow-sky)',
                    }}>
                      {info.icon}
                    </div>
                    <div>
                      <p style={{ fontWeight: 600, color: 'var(--navy)', margin: '0 0 0.2rem 0', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{info.label}</p>
                      {info.href ? (
                        <a href={info.href} style={{ color: 'var(--sky-dark)', fontWeight: 600, fontSize: '1rem' }}>{info.value}</a>
                      ) : (
                        <span style={{ color: 'var(--navy)', fontWeight: 600, fontSize: '1rem' }}>{info.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="highlight-box">
                <p style={{ color: 'var(--dark-gray)', margin: 0, fontSize: '0.93rem', lineHeight: 1.7 }}>
                  <strong style={{ color: 'var(--navy)' }}>Salem Purified Water LLC</strong> is a project in development and not yet operational. We are happy to answer questions from qualified stakeholders, potential partners, and interested community members.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div style={{
                background: 'var(--white)', borderRadius: 'var(--radius-lg)',
                padding: '2.5rem', boxShadow: 'var(--shadow-lg)',
                border: '1px solid var(--light-gray)',
              }}>
                {submitted ? (
                  <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                    <div style={{
                      width: '72px', height: '72px', margin: '0 auto 1.5rem',
                      background: 'linear-gradient(135deg, var(--sky-dark), var(--sky))',
                      borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <CheckCircle size={36} color="white" />
                    </div>
                    <h3 style={{ marginBottom: '0.75rem' }}>Message Sent!</h3>
                    <p style={{ color: 'var(--dark-gray)', lineHeight: 1.7 }}>
                      Thank you for reaching out. We will review your message and respond as soon as possible to <strong>admin@salempurifiedwater.com</strong>.
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 style={{ marginBottom: '0.5rem' }}>Send a Message</h3>
                    <p style={{ color: 'var(--dark-gray)', marginBottom: '2rem', fontSize: '0.95rem' }}>All fields marked * are required.</p>
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                      <div className="grid-2-sm">
                        <div className="form-group">
                          <label className="form-label">Full Name *</label>
                          <input type="text" required className="form-input" placeholder="John Smith" />
                        </div>
                        <div className="form-group">
                          <label className="form-label">Organization</label>
                          <input type="text" className="form-input" placeholder="Company / Agency" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Email Address *</label>
                        <input type="email" required className="form-input" placeholder="john@example.com" />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Phone Number</label>
                        <input type="tel" className="form-input" placeholder="(555) 000-0000" />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Area of Interest *</label>
                        <select required className="form-input">
                          <option value="">Select an area...</option>
                          {interests.map((opt, i) => <option key={i}>{opt}</option>)}
                        </select>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Message *</label>
                        <textarea
                          required rows={5}
                          className="form-input"
                          placeholder="Please describe your inquiry..."
                          style={{ resize: 'vertical' }}
                        />
                      </div>
                      <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                        <Send size={18} /> Send Message
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
