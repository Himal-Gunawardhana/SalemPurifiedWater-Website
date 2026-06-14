import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Status', path: '#status' },
    { name: 'Compliance', path: '#compliance' },
    { name: 'Process', path: '#process' },
    { name: 'Products', path: '#products' },
    { name: 'Project Spring', path: '#project-spring' },
    { name: 'FAQ & Docs', path: '#faq-docs' },
    { name: 'Contact', path: '#contact' },
  ];

  return (
    <header className={isScrolled ? "glass-panel" : ""} style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      backgroundColor: isScrolled ? 'var(--glass-bg)' : 'var(--color-surface)',
      borderBottom: isScrolled ? '1px solid var(--glass-border)' : '1px solid transparent',
      boxShadow: isScrolled ? 'var(--shadow-md)' : 'none',
      transition: 'all var(--transition-normal)',
      borderRadius: isScrolled ? '0 0 var(--border-radius-lg) var(--border-radius-lg)' : '0',
      padding: isScrolled ? '0' : '0'
    }}>
      <div className="container" style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        padding: '1rem var(--spacing-sm)' 
      }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <img 
            src="/salemlogo.png" 
            alt="Salem Purified Water Logo" 
            style={{ height: '48px', width: 'auto', objectFit: 'contain' }} 
            className="animate-pulse-soft"
          />
          <div>
            <h1 style={{ fontSize: '1.25rem', margin: 0, color: 'var(--color-text-main)', letterSpacing: '-0.02em' }}>Salem Purified Water</h1>
            <p className="gradient-text-sunset" style={{ fontSize: '0.7rem', margin: 0, textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>Project In Development</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav style={{ display: 'flex', gap: '1.5rem' }} className="desktop-nav">
          {navLinks.map((link) => (
            <a 
              key={link.path} 
              href={link.pathname === '/' ? `/${link.path}` : link.path}
              className="nav-link"
              style={{
                color: 'var(--color-text-main)',
                fontWeight: '600',
                fontSize: '0.95rem',
                position: 'relative',
                padding: '0.5rem 0'
              }}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))', border: 'none', cursor: 'pointer', color: 'white', padding: '0.5rem', borderRadius: 'var(--border-radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <nav className="glass-panel" style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          borderRadius: '0 0 var(--border-radius-lg) var(--border-radius-lg)',
          marginTop: '0.5rem',
          borderTop: 'none'
        }}>
          {navLinks.map((link) => (
            <a 
              key={link.path} 
              href={link.pathname === '/' ? `/${link.path}` : link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                color: 'var(--color-text-main)',
                fontWeight: '600',
                padding: '0.75rem 1rem',
                borderRadius: 'var(--border-radius-sm)',
                background: 'rgba(37, 99, 235, 0.05)',
                transition: 'background var(--transition-fast)'
              }}
            >
              {link.name}
            </a>
          ))}
        </nav>
      )}

      <style>{`
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 0;
          background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
          transition: width var(--transition-fast);
          border-radius: 2px;
        }
        .nav-link:hover {
          color: var(--color-primary);
        }
        .nav-link:hover::after {
          width: 100%;
        }
        @media (min-width: 993px) {
          .mobile-menu-btn { display: none !important; }
        }
        @media (max-width: 992px) {
          .desktop-nav { display: none !important; }
        }
      `}</style>
    </header>
  );
};

export default Header;
