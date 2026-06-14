const Privacy = () => {
  return (
    <div>
      <div className="page-banner">
        <div className="container">
          <h1>Privacy <span style={{ color: 'var(--sky-light)' }}>Policy</span></h1>
          <p>Effective Date: June 2025 | Salem Purified Water LLC</p>
        </div>
      </div>

      <section className="section bg-white">
        <div className="container" style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>

            <div>
              <p style={{ color: 'var(--dark-gray)', lineHeight: 1.8 }}>
                Salem Purified Water LLC (<strong>"we," "us," or "our"</strong>) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect information when you visit our website at <strong>https://salempurifiedwater.com</strong>. By using this website, you agree to the practices described in this policy.
              </p>
            </div>

            {[
              {
                title: '1. Information We Collect',
                body: 'We may collect the following types of information: (a) Information you provide voluntarily through contact forms, including your name, organization, email address, phone number, and message content. (b) Automatically collected technical information such as IP address, browser type, referring URL, and pages visited when you use our website.',
              },
              {
                title: '2. Contact Forms',
                body: 'When you submit a contact form on our website, the information you provide is used solely to respond to your inquiry. We do not sell, rent, or share this information with third parties for marketing purposes. Submissions are directed to admin@salempurifiedwater.com.',
              },
              {
                title: '3. Cookies',
                body: 'Our website may use cookies — small text files placed on your device — to improve your browsing experience. Cookies help us understand how visitors use our site. You may disable cookies through your browser settings; however, some features of the website may not function correctly without them.',
              },
              {
                title: '4. Analytics',
                body: 'We may use third-party analytics tools (such as Google Analytics) to help us understand how visitors interact with our website. These tools may collect information about your visit in an anonymized form, including pages viewed, time spent on pages, and general geographic region. This information is used solely to improve the website experience.',
              },
              {
                title: '5. Data Protection',
                body: 'We implement reasonable technical and organizational measures to protect the information you provide from unauthorized access, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute data security.',
              },
              {
                title: '6. Third-Party Services',
                body: 'Our website may contain links to third-party services or websites. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party services you visit.',
              },
              {
                title: '7. Children\'s Privacy',
                body: 'This website is not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has submitted personal information through our website, please contact us so we can remove it.',
              },
              {
                title: '8. Changes to This Privacy Policy',
                body: 'We reserve the right to update this Privacy Policy at any time. Changes will be effective upon posting to this page. We encourage you to review this policy periodically. Continued use of the website after changes are posted constitutes your acceptance of the updated policy.',
              },
            ].map((section, i) => (
              <div key={i}>
                <h3 style={{ color: 'var(--navy)', marginBottom: '0.75rem', fontSize: '1.15rem', borderBottom: '2px solid var(--sky-pale)', paddingBottom: '0.5rem' }}>{section.title}</h3>
                <p style={{ color: 'var(--dark-gray)', lineHeight: 1.8 }}>{section.body}</p>
              </div>
            ))}

            <div className="highlight-box">
              <h3 style={{ marginBottom: '0.75rem' }}>9. Contact Us About Privacy</h3>
              <p style={{ color: 'var(--dark-gray)', marginBottom: '0.75rem' }}>If you have any questions about this Privacy Policy or how we handle your information, please contact us:</p>
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

export default Privacy;
