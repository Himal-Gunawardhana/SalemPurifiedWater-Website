const Terms = () => {
  return (
    <div>
      <div className="page-banner">
        <div className="container">
          <h1>Terms of <span style={{ color: 'var(--sky-light)' }}>Use</span></h1>
          <p>Effective Date: June 2025 | Salem Purified Water LLC</p>
        </div>
      </div>

      <section className="section bg-white">
        <div className="container" style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>

            <div>
              <p style={{ color: 'var(--dark-gray)', lineHeight: 1.8 }}>
                Welcome to the Salem Purified Water LLC website (<strong>https://salempurifiedwater.com</strong>). By accessing or using this website, you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, please do not use this website.
              </p>
            </div>

            {[
              {
                title: '1. Website Use Terms',
                body: 'This website is intended for informational purposes only. You may access and view the content of this website for personal, non-commercial use. You may not reproduce, distribute, modify, transmit, or otherwise use any content from this website without the prior written consent of Salem Purified Water LLC.',
              },
              {
                title: '2. Intellectual Property Notice',
                body: 'All content on this website, including but not limited to text, images, logos, graphics, and design elements, is the intellectual property of Salem Purified Water LLC or its licensors and is protected by applicable copyright, trademark, and other intellectual property laws. The Salem Purified Water name, logo, and associated marks are proprietary to Salem Purified Water LLC.',
              },
              {
                title: '3. Accuracy of Information Disclaimer',
                body: 'The information provided on this website is for general informational purposes only. While we make reasonable efforts to keep information current and accurate, Salem Purified Water LLC makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the information. The company is currently in a development phase and all information is subject to change without notice.',
              },
              {
                title: '4. No Investment Solicitation Disclaimer',
                body: 'Nothing on this website constitutes an offer or solicitation to buy or sell any security, investment product, or financial instrument. Information about the company\'s development stage, capital formation activities, or business plans does not constitute investment advice. Any investment decisions should be made only after consultation with qualified financial and legal professionals.',
              },
              {
                title: '5. No Engineering Advice Disclaimer',
                body: 'The technical information, process descriptions, and manufacturing details provided on this website are for informational purposes only and do not constitute professional engineering advice. Final facility design, treatment configuration, and manufacturing processes remain subject to engineering review, water analysis, and regulatory approval.',
              },
              {
                title: '6. No Legal Advice Disclaimer',
                body: 'Nothing on this website constitutes legal advice. Any legal questions related to the company\'s operations, compliance, regulatory status, or business activities should be directed to qualified legal counsel.',
              },
              {
                title: '7. Limitation of Liability',
                body: 'To the fullest extent permitted by applicable law, Salem Purified Water LLC shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of, or reliance on, any information contained on this website.',
              },
              {
                title: '8. External Links Disclaimer',
                body: 'This website may contain links to third-party websites for your convenience. Salem Purified Water LLC does not endorse and is not responsible for the content, privacy practices, or accuracy of information on any linked external websites.',
              },
              {
                title: '9. Modifications to These Terms',
                body: 'Salem Purified Water LLC reserves the right to modify these Terms of Use at any time. Changes will be effective upon posting to this website. Continued use of the website after changes are posted constitutes acceptance of the revised terms.',
              },
            ].map((section, i) => (
              <div key={i}>
                <h3 style={{ color: 'var(--navy)', marginBottom: '0.75rem', fontSize: '1.15rem', borderBottom: '2px solid var(--sky-pale)', paddingBottom: '0.5rem' }}>{section.title}</h3>
                <p style={{ color: 'var(--dark-gray)', lineHeight: 1.8 }}>{section.body}</p>
              </div>
            ))}

            <div className="highlight-box">
              <h3 style={{ marginBottom: '0.75rem' }}>10. Contact Information</h3>
              <p style={{ color: 'var(--dark-gray)', marginBottom: '0.75rem' }}>For questions about these Terms of Use, please contact us:</p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <li><strong>Salem Purified Water LLC</strong></li>
                <li><strong>Phone:</strong> (573) 706-7775</li>
                <li><strong>Email:</strong> <a href="mailto:admin@salempurifiedwater.com">admin@salempurifiedwater.com</a></li>
                <li><strong>Website:</strong> <a href="https://salempurifiedwater.com">https://salempurifiedwater.com</a></li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
