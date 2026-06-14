import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ 
      background: 'linear-gradient(135deg, var(--color-primary-dark), #0f172a)',
      padding: 'var(--spacing-lg) 0 var(--spacing-sm)',
      color: 'var(--color-text-light)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative blurred background element */}
      <div style={{
        position: 'absolute',
        top: 0, right: 0,
        width: '300px', height: '300px',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
        filter: 'blur(40px)',
        zIndex: 0
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
          gap: 'var(--spacing-lg)',
          marginBottom: 'var(--spacing-lg)'
        }}>
          <div>
            <h3 style={{ color: 'var(--color-surface)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span className="gradient-text-sunset">Salem</span> Purified Water
            </h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', maxWidth: '300px', lineHeight: '1.6' }}>
              Currently in due diligence, engineering review, manufacturing planning, and capital formation for a state-of-the-art purified water facility in Salem, Missouri.
            </p>
          </div>

          <div>
            <h4 style={{ color: 'var(--color-surface)', marginBottom: '1rem', letterSpacing: '0.5px' }}>Contact Information</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-text-light)' }}>
                <div style={{ background: 'rgba(6, 182, 212, 0.1)', padding: '0.4rem', borderRadius: '50%' }}>
                  <Phone size={16} color="var(--color-accent)" />
                </div>
                <span>(573) 706-7775</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-text-light)' }}>
                <div style={{ background: 'rgba(6, 182, 212, 0.1)', padding: '0.4rem', borderRadius: '50%' }}>
                  <Mail size={16} color="var(--color-accent)" />
                </div>
                <a href="mailto:admin@salempurifiedwater.com" style={{ color: 'inherit', transition: 'color var(--transition-fast)' }} onMouseOver={e => e.target.style.color = 'var(--color-accent)'} onMouseOut={e => e.target.style.color = 'inherit'}>admin@salempurifiedwater.com</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-text-light)' }}>
                <div style={{ background: 'rgba(6, 182, 212, 0.1)', padding: '0.4rem', borderRadius: '50%' }}>
                  <MapPin size={16} color="var(--color-accent)" />
                </div>
                <span>Salem, Missouri</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: 'var(--color-surface)', marginBottom: '1rem', letterSpacing: '0.5px' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { name: 'Project Status', href: '#status' },
                { name: 'Compliance', href: '#compliance' },
                { name: 'Process', href: '#process' },
                { name: 'FAQ', href: '#faq-docs' },
                { name: 'Project Spring', href: '#project-spring' }
              ].map(link => (
                <li key={link.name}>
                  <a href={link.href} style={{ color: 'var(--color-text-muted)', transition: 'all var(--transition-fast)', display: 'inline-block' }} onMouseOver={e => { e.target.style.color = 'var(--color-accent)'; e.target.style.transform = 'translateX(5px)'; }} onMouseOut={e => { e.target.style.color = 'var(--color-text-muted)'; e.target.style.transform = 'translateX(0)'; }}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.05)',
          paddingTop: 'var(--spacing-md)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          textAlign: 'center',
          color: 'var(--color-text-muted)',
          fontSize: '0.85rem'
        }}>
          <p>© {new Date().getFullYear()} Salem Purified Water LLC. All rights reserved.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <Link to="/terms" style={{ color: 'inherit', transition: 'color var(--transition-fast)' }} onMouseOver={e => e.target.style.color = 'var(--color-accent)'} onMouseOut={e => e.target.style.color = 'inherit'}>Terms of Use</Link>
            <span style={{ opacity: 0.3 }}>|</span>
            <Link to="/privacy" style={{ color: 'inherit', transition: 'color var(--transition-fast)' }} onMouseOver={e => e.target.style.color = 'var(--color-accent)'} onMouseOut={e => e.target.style.color = 'inherit'}>Privacy Policy</Link>
          </div>
          <p style={{ fontStyle: 'italic', opacity: 0.6, marginTop: '0.5rem', maxWidth: '800px', margin: '0.5rem auto 0' }}>
            Disclaimer: The project is in the development phase. Final treatment configuration and manufacturing specifics remain subject to engineering review and water analysis results.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
