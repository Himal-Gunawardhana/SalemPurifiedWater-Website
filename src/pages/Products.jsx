import { Droplet, Box, Briefcase, Package, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  { icon: <Droplet size={22} />, name: '16.9 oz Purified Bottled Water', category: 'Consumer' },
  { icon: <Droplet size={22} />, name: '20 oz Purified Bottled Water', category: 'Consumer' },
  { icon: <Droplet size={22} />, name: '1-Liter Purified Bottled Water', category: 'Consumer' },
  { icon: <Droplet size={22} />, name: '1-Gallon Purified Water', category: 'Consumer' },
  { icon: <Box size={22} />, name: 'Emergency Water Pallets', category: 'Emergency Supply' },
  { icon: <Briefcase size={22} />, name: 'Private-Label Bottled Water', category: 'B2B' },
];

const faqs = [
  {
    q: 'Is Salem Purified Water currently operational?',
    a: 'The project is currently in due diligence, engineering review, and development planning. The company is not yet operational and no products are currently available for sale.',
  },
  {
    q: 'Where will the facility be located?',
    a: 'Salem, Missouri. The exact facility site is subject to final site selection as part of the current planning process.',
  },
  {
    q: 'What products are planned?',
    a: 'Purified bottled water products in multiple sizes (16.9 oz, 20 oz, 1-liter, 1-gallon) and emergency water supply pallets. Private-label opportunities are also being evaluated.',
  },
  {
    q: 'Is the project working with engineers?',
    a: 'Yes. Engineering review and water-treatment evaluation are currently underway with experienced beverage and water-treatment professionals.',
  },
  {
    q: 'Will the project create jobs?',
    a: 'Workforce development and local job creation are key project objectives. We are committed to prioritizing local hiring in Salem, Missouri.',
  },
  {
    q: 'Will the company offer private-label bottled water?',
    a: 'Private-label opportunities are being evaluated as part of long-term planning. Interested organizations are welcome to reach out via our contact page.',
  },
  {
    q: 'How is water quality being evaluated?',
    a: 'Water source evaluation, treatment planning, and engineering review are ongoing. Final treatment configuration remains subject to engineering review and water analysis results.',
  },
];

const Products = () => {
  return (
    <div>
      <div className="page-banner">
        <div className="container">
          <h1>Products <span style={{ color: 'var(--sky-light)' }}>& Services</span></h1>
          <p>Our planned product line designed to meet consumer, emergency supply, and private-label needs.</p>
        </div>
      </div>

      {/* DISCLAIMER BANNER */}
      <div style={{ background: 'var(--sky-pale)', borderBottom: '1px solid rgba(30,180,240,0.2)', padding: '1rem 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Package size={18} color="var(--sky-dark)" />
          <p style={{ margin: 0, color: 'var(--navy)', fontWeight: 600, fontSize: '0.95rem' }}>
            Note: All products are under development and are <em>not currently available for sale.</em>
          </p>
        </div>
      </div>

      {/* PRODUCTS */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid-2">
            <div>
              <span className="badge" style={{ marginBottom: '1.25rem' }}>Product Line Under Development</span>
              <h2 style={{ marginBottom: '1.5rem' }}>Products <span className="gradient-text">Under Development</span></h2>
              <p style={{ color: 'var(--dark-gray)', lineHeight: 1.75, marginBottom: '2rem' }}>
                Exploring a planned product line designed to meet everyday consumer hydration, emergency preparedness, and business-to-business supply needs.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {products.map((product, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: '1rem',
                    padding: '1rem 1.25rem',
                    background: 'var(--sky-pale)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid rgba(30,180,240,0.2)',
                    transition: 'all var(--transition-fast)',
                  }}>
                    <div style={{
                      background: 'linear-gradient(135deg, var(--sky-dark), var(--sky))',
                      padding: '0.6rem', borderRadius: 'var(--radius-sm)',
                      color: 'white', display: 'flex',
                    }}>
                      {product.icon}
                    </div>
                    <div>
                      <p style={{ fontWeight: 600, color: 'var(--navy)', margin: 0 }}>{product.name}</p>
                      <span className="badge" style={{ fontSize: '0.75rem', padding: '0.15rem 0.6rem', marginTop: '0.25rem' }}>{product.category}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <img
                src="/bottled_water_line.png"
                alt="Planned Bottled Water Manufacturing Line"
                style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', marginBottom: '1.5rem' }}
              />

              {/* B2B Info */}
              <div className="highlight-box">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <Briefcase size={20} color="var(--sky-dark)" />
                  <h4 style={{ margin: 0 }}>B2B & Private Label</h4>
                </div>
                <p style={{ color: 'var(--dark-gray)', margin: 0, fontSize: '0.95rem', lineHeight: 1.65 }}>
                  Private-label opportunities are being evaluated as part of long-term planning. Tailored manufacturing solutions for brands, organizations, and institutional buyers are a key part of our business development strategy.
                </p>
              </div>

              {/* Emergency Supply */}
              <div style={{ marginTop: '1rem', background: 'var(--white)', borderRadius: 'var(--radius-md)', border: '1px solid var(--light-gray)', padding: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <Box size={20} color="var(--sky-dark)" />
                  <h4 style={{ margin: 0 }}>Emergency Supply</h4>
                </div>
                <p style={{ color: 'var(--dark-gray)', margin: 0, fontSize: '0.95rem', lineHeight: 1.65 }}>
                  Emergency water pallets designed for disaster relief, institutional stockpiling, government agencies, and long-term storage requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-sky-pale" id="faq">
        <div className="container">
          <div className="section-header">
            <span className="badge" style={{ marginBottom: '1rem' }}>FAQ</span>
            <h2>Frequently Asked <span className="gradient-text">Questions</span></h2>
            <div className="section-divider" />
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item">
                <div className="faq-question">
                  <HelpCircle size={20} color="var(--sky-dark)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  {faq.q}
                </div>
                <div className="faq-answer">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-navy-gradient">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'var(--white)', marginBottom: '1rem' }}>
            Interested in <span style={{ color: 'var(--sky)' }}>Partnering With Us?</span>
          </h2>
          <p style={{ color: 'var(--text-on-dark)', opacity: 0.85, maxWidth: '540px', margin: '0 auto 2rem', fontSize: '1.05rem' }}>
            Whether you're a retailer, distributor, government agency, or investor — we'd love to connect and discuss how we can work together.
          </p>
          <Link to="/contact" className="btn btn-primary">Get In Touch</Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
