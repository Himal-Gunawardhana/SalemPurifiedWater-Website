const Privacy = () => {
  return (
    <div className="animate-fade-in">
      <section className="page-header" style={{ padding: 'var(--spacing-lg) 0' }}>
        <div className="container">
          <h1 style={{ fontSize: '2.5rem' }}>Privacy Policy</h1>
          <p>Last Updated: {new Date().toLocaleDateString()}</p>
        </div>
      </section>

      <section className="section section-bg-light">
        <div className="container">
          <div className="glass-panel" style={{ maxWidth: '900px', margin: '0 auto', color: 'var(--color-text-main)' }}>
            
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>1. Information Collection</h2>
            <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-muted)' }}>
              Salem Purified Water LLC collects information that you voluntarily provide to us, including your name, email address, phone number, and any other details you choose to share when contacting us. We also automatically collect certain technical data when you visit our website.
            </p>

            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>2. Contact Forms</h2>
            <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-muted)' }}>
              When you use any contact forms on our site, we collect the submitted data to respond to your inquiries regarding project development, engineering, or investment opportunities. This data is kept strictly confidential and is only used for the stated communication purposes.
            </p>

            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>3. Cookies</h2>
            <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-muted)' }}>
              Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand where our audience is coming from. You can control cookie preferences through your browser settings.
            </p>

            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>4. Analytics</h2>
            <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-muted)' }}>
              We may utilize third-party analytics tools to monitor and evaluate the usage of our website. These tools gather information such as IP addresses, browser types, referring pages, and interaction data to help us improve our web presence.
            </p>

            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>5. Data Protection</h2>
            <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-muted)' }}>
              We implement reasonable administrative, technical, and physical security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>6. Third-Party Services</h2>
            <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-muted)' }}>
              We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties without your consent, except to trusted third parties who assist us in operating our website or conducting our business, so long as those parties agree to keep this information confidential.
            </p>

            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>7. Contact Information</h2>
            <p style={{ color: 'var(--color-text-muted)' }}>
              If you have any questions regarding this Privacy Policy, you may contact us using the information below:
              <br /><br />
              <strong>Salem Purified Water LLC</strong><br />
              Phone: (573) 706-7775<br />
              Email: <a href="mailto:admin@salempurifiedwater.com">admin@salempurifiedwater.com</a><br />
              Website: https://salempurifiedwater.com
            </p>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
