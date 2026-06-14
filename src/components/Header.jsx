import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Project Spring', path: '/project-spring' },
  { name: 'Salem Facility', path: '/salem-facility' },
  { name: 'Products & Services', path: '/products' },
  { name: 'Contact', path: '/contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setIsMobileOpen(false); }, [location.pathname]);

  return (
    <>
      {/* Top info strip */}
      <div className="info-strip">
        <div className="container" style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <span>📞 (573) 706-7775</span>
          <span>✉ admin@salempurifiedwater.com</span>
          <span>📍 Salem, Missouri</span>
        </div>
      </div>

      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: 'var(--white)',
        borderBottom: isScrolled ? '1px solid var(--light-gray)' : '1px solid transparent',
        boxShadow: isScrolled ? 'var(--shadow-md)' : 'none',
        transition: 'all var(--transition)',
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem var(--spacing-sm)' }}>

          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/salemlogo.png" alt="Salem Purified Water LLC" style={{ height: '52px', width: 'auto', objectFit: 'contain' }} />
          </Link>

          {/* Desktop Nav */}
          <nav className="desktop-nav" style={{ display: 'flex', gap: '0.25rem', alignItems: 'center' }}>
            {navLinks.map(link => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className="nav-link"
                  style={{
                    color: isActive ? 'var(--sky-dark)' : 'var(--navy)',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    padding: '0.5rem 0.85rem',
                    borderRadius: 'var(--radius-sm)',
                    position: 'relative',
                    transition: 'all var(--transition-fast)',
                    backgroundColor: isActive ? 'var(--sky-pale)' : 'transparent',
                  }}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link to="/contact" className="btn btn-primary" style={{ padding: '0.55rem 1.2rem', fontSize: '0.9rem', marginLeft: '0.5rem' }}>
              Get In Touch
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            style={{ background: 'var(--navy)', border: 'none', cursor: 'pointer', color: 'white', padding: '0.5rem', borderRadius: 'var(--radius-sm)', display: 'flex' }}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileOpen && (
          <nav style={{
            position: 'absolute', top: '100%', left: 0, right: 0,
            background: 'var(--white)', borderTop: '1px solid var(--light-gray)',
            boxShadow: 'var(--shadow-lg)', padding: '1rem',
            display: 'flex', flexDirection: 'column', gap: '0.25rem',
          }}>
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileOpen(false)}
                style={{
                  color: location.pathname === link.path ? 'var(--sky-dark)' : 'var(--navy)',
                  fontWeight: 600,
                  padding: '0.85rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  background: location.pathname === link.path ? 'var(--sky-pale)' : 'transparent',
                  display: 'block',
                  fontSize: '1rem',
                }}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMobileOpen(false)}
              className="btn btn-primary"
              style={{ marginTop: '0.5rem', justifyContent: 'center' }}
            >
              Get In Touch
            </Link>
          </nav>
        )}

        <style>{`
          .nav-link:hover { color: var(--sky-dark) !important; background: var(--sky-pale) !important; }
          @media (min-width: 993px) { .mobile-menu-btn { display: none !important; } }
          @media (max-width: 992px) { .desktop-nav { display: none !important; } }
        `}</style>
      </header>
    </>
  );
};

export default Header;
