import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Project Spring', href: '/project-spring' },
    { name: 'Salem Facility', href: '/salem-facility' },
    { name: 'Products & Services', href: '/products' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer style={{
      background: 'linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)',
      color: 'var(--text-on-dark)',
      padding: 'var(--spacing-lg) 0 var(--spacing-sm)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle glow accent */}
      <div style={{
        position: 'absolute', top: 0, right: 0,
        width: '400px', height: '300px',
        background: 'radial-gradient(ellipse at top right, rgba(30,180,240,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
          gap: 'var(--spacing-lg)',
          marginBottom: 'var(--spacing-lg)',
        }}>

          {/* Brand */}
          <div>
            <img src="/salemlogo.png" alt="Salem Purified Water LLC" style={{ height: '56px', width: 'auto', marginBottom: '1.25rem', filter: 'brightness(0) invert(1)' }} />
            <p style={{ color: 'var(--mid-gray)', lineHeight: 1.7, fontSize: '0.95rem', maxWidth: '280px' }}>
              Currently in due diligence, engineering review, manufacturing planning, and capital formation for a state-of-the-art purified water facility in Salem, Missouri.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: 'var(--white)', marginBottom: '1.25rem', fontSize: '1rem', letterSpacing: '0.5px' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {quickLinks.map(link => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    style={{ color: 'var(--mid-gray)', fontSize: '0.95rem', transition: 'color var(--transition-fast)', display: 'inline-block' }}
                    onMouseOver={e => e.target.style.color = 'var(--sky-light)'}
                    onMouseOut={e => e.target.style.color = 'var(--mid-gray)'}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: 'var(--white)', marginBottom: '1.25rem', fontSize: '1rem', letterSpacing: '0.5px' }}>Contact</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ background: 'rgba(30,180,240,0.15)', padding: '0.4rem', borderRadius: '50%', display: 'flex' }}>
                  <Phone size={14} color="var(--sky-light)" />
                </div>
                <span style={{ color: 'var(--mid-gray)', fontSize: '0.95rem' }}>(573) 706-7775</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ background: 'rgba(30,180,240,0.15)', padding: '0.4rem', borderRadius: '50%', display: 'flex' }}>
                  <Mail size={14} color="var(--sky-light)" />
                </div>
                <a
                  href="mailto:admin@salempurifiedwater.com"
                  style={{ color: 'var(--mid-gray)', fontSize: '0.95rem', transition: 'color var(--transition-fast)' }}
                  onMouseOver={e => e.target.style.color = 'var(--sky-light)'}
                  onMouseOut={e => e.target.style.color = 'var(--mid-gray)'}
                >
                  admin@salempurifiedwater.com
                </a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ background: 'rgba(30,180,240,0.15)', padding: '0.4rem', borderRadius: '50%', display: 'flex' }}>
                  <MapPin size={14} color="var(--sky-light)" />
                </div>
                <span style={{ color: 'var(--mid-gray)', fontSize: '0.95rem' }}>Salem, Missouri</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 style={{ color: 'var(--white)', marginBottom: '1.25rem', fontSize: '1rem', letterSpacing: '0.5px' }}>Legal</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <li>
                <Link to="/terms" style={{ color: 'var(--mid-gray)', fontSize: '0.95rem' }}
                  onMouseOver={e => e.target.style.color = 'var(--sky-light)'}
                  onMouseOut={e => e.target.style.color = 'var(--mid-gray)'}
                >Terms of Use</Link>
              </li>
              <li>
                <Link to="/privacy" style={{ color: 'var(--mid-gray)', fontSize: '0.95rem' }}
                  onMouseOver={e => e.target.style.color = 'var(--sky-light)'}
                  onMouseOut={e => e.target.style.color = 'var(--mid-gray)'}
                >Privacy Policy</Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
          alignItems: 'center',
          textAlign: 'center',
        }}>
          <p style={{ color: 'var(--mid-gray)', fontSize: '0.85rem' }}>
            © {year} Salem Purified Water LLC. All rights reserved.
          </p>
          <p style={{ color: 'var(--mid-gray)', fontSize: '0.8rem', opacity: 0.7, maxWidth: '750px', fontStyle: 'italic' }}>
            Disclaimer: The project is in the development phase. Final treatment configuration and manufacturing specifics remain subject to engineering review and water analysis results.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
