const Terms = () => {
  return (
    <div className="animate-fade-in">
      <section className="page-header" style={{ padding: 'var(--spacing-lg) 0' }}>
        <div className="container">
          <h1 style={{ fontSize: '2.5rem' }}>Terms of Use</h1>
          <p>Last Updated: {new Date().toLocaleDateString()}</p>
        </div>
      </section>

      <section className="section section-bg-light">
        <div className="container">
          <div className="glass-panel" style={{ maxWidth: '900px', margin: '0 auto', color: 'var(--color-text-main)' }}>
            
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>1. Website Use Terms</h2>
            <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-muted)' }}>
              By accessing and using https://salempurifiedwater.com (the "Website"), you agree to comply with and be bound by these Terms of Use. If you do not agree with any part of these terms, please do not use our website.
            </p>

            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>2. Intellectual Property Notice</h2>
            <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-muted)' }}>
              All content on this Website, including but not limited to text, graphics, logos, and images, is the property of Salem Purified Water LLC and is protected by applicable intellectual property laws.
            </p>

            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>3. Accuracy of Information Disclaimer</h2>
            <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-muted)' }}>
              While we strive to provide accurate and up-to-date information, the project is currently in the development phase. All details, including manufacturing plans and treatment configurations, are subject to change pending engineering review and final evaluations.
            </p>

            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>4. No Investment Solicitation Disclaimer</h2>
            <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-muted)' }}>
              The information provided on this Website is for informational purposes only and does not constitute an offer to sell, a solicitation to buy, or a recommendation for any security or investment opportunity.
            </p>

            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>5. No Engineering Advice Disclaimer</h2>
            <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-muted)' }}>
              The technical and manufacturing process descriptions provided herein do not constitute professional engineering advice. Final designs remain subject to certified engineering review.
            </p>

            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>6. No Legal Advice Disclaimer</h2>
            <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-muted)' }}>
              Nothing on this Website should be construed as legal advice. Consult with appropriate legal counsel for any legal questions regarding project compliance or engagement.
            </p>

            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>7. Limitation of Liability</h2>
            <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-muted)' }}>
              Salem Purified Water LLC shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to, or use of, this Website or any information contained herein.
            </p>

            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>8. External Links Disclaimer</h2>
            <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-muted)' }}>
              This Website may contain links to third-party websites. Salem Purified Water LLC is not responsible for the content, privacy policies, or practices of any external sites.
            </p>

            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>9. Contact Information</h2>
            <p style={{ color: 'var(--color-text-muted)' }}>
              If you have any questions about these Terms of Use, please contact us at:
              <br /><br />
              <strong>Salem Purified Water LLC</strong><br />
              Phone: (573) 706-7775<br />
              Email: <a href="mailto:admin@salempurifiedwater.com">admin@salempurifiedwater.com</a>
            </p>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
