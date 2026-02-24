'use client';

export default function PrivacyPolicyPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-16 mt-20">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-gray-600">Last Updated: February 23, 2026</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-200">
          {/* Section 1 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Clearform ("Clearform", "we", "our", or "us") operates a response-first form and feedback platform that enables organizations to collect structured responses and analyze insights.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We are committed to protecting personal data in accordance with:
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>The Information Technology Act, 2000 (India)</li>
              <li>The Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011</li>
              <li>The General Data Protection Regulation (GDPR), where applicable</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              This Privacy Policy explains how we collect, process, store, and safeguard personal data.
            </p>
          </div>

          {/* Section 2 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Roles & Data Responsibility</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Clearform operates as:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Data Controller</strong> for account-related data (users who sign up for Clearform)</li>
              <li><strong>Data Processor</strong> for form response data submitted to forms created by our customers</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              The customer creating the form is the Data Controller for response data. We process response data strictly in accordance with customer instructions.
            </p>
          </div>

          {/* Section 3 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information We Collect</h2>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">3.1 Account & Registration Data</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number (if provided)</li>
              <li>Company name</li>
              <li>Billing information</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">3.2 Form Response Data</h3>
            <p className="text-gray-700 leading-relaxed mb-2">Collected on behalf of customers, which may include:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
              <li>Text responses</li>
              <li>Ratings</li>
              <li>Uploaded files (if enabled)</li>
              <li>Contact details submitted via forms</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-2">We do not determine how this data is used. The form owner is responsible for lawful data collection.</p>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">3.3 Technical & Usage Data</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>IP address</li>
              <li>Device information</li>
              <li>Browser type</li>
              <li>Log files</li>
              <li>Cookies</li>
              <li>Session data</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Legal Basis for Processing (GDPR)</h2>
            <p className="text-gray-700 leading-relaxed mb-2">Where GDPR applies, we process data under:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Contractual necessity</li>
              <li>Legitimate interests (service improvement, security)</li>
              <li>Legal obligations</li>
              <li>User consent (where required)</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Purpose of Processing</h2>
            <p className="text-gray-700 leading-relaxed mb-2">We process data to:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
              <li>Provide and maintain Clearform services</li>
              <li>Authenticate users</li>
              <li>Ensure platform security</li>
              <li>Process payments</li>
              <li>Improve performance and usability</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">We do not sell personal data. We do not use response data for advertising.</p>
          </div>

          {/* Section 6 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Sensitive Personal Data (India IT Rules)</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not intentionally collect sensitive personal data unless explicitly submitted through a customer's form.
            </p>
            <p className="text-gray-700 leading-relaxed mb-2">Customers are responsible for:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Obtaining lawful consent</li>
              <li>Ensuring compliance with applicable regulations</li>
            </ul>
          </div>

          {/* Section 7 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Sharing & Sub-Processors</h2>
            <p className="text-gray-700 leading-relaxed mb-2">We may share data with trusted third-party service providers, including:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
              <li>Cloud hosting providers</li>
              <li>Payment processors</li>
              <li>Infrastructure providers</li>
              <li>Analytics providers</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-2">
              All sub-processors are contractually obligated to protect data. We do not sell or trade personal data.
            </p>
          </div>

          {/* Section 8 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. International Data Transfers</h2>
            <p className="text-gray-700 leading-relaxed">
              Data may be processed outside India. Where required, we ensure appropriate safeguards consistent with GDPR standards.
            </p>
          </div>

          {/* Section 9 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Data Retention</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Account data retained while active</li>
              <li>Form response data retained until deleted by customer</li>
              <li>Backup copies retained for limited recovery purposes</li>
              <li>Upon account deletion, data will be removed within a reasonable timeframe, except where legally required</li>
            </ul>
          </div>

          {/* Section 10 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Security Measures</h2>
            <p className="text-gray-700 leading-relaxed mb-2">We implement reasonable technical and organizational measures including:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
              <li>HTTPS encryption</li>
              <li>Access controls</li>
              <li>Secure cloud infrastructure</li>
              <li>Limited internal data access</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              However, no method of transmission over the Internet is 100% secure.
            </p>
          </div>

          {/* Section 11 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. User Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-2">Where applicable, users may:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
              <li>Request access to personal data</li>
              <li>Request correction</li>
              <li>Request deletion</li>
              <li>Object to processing</li>
              <li>Request data portability</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">Requests can be sent to: <a href="mailto:hello@clearform.in" className="text-red-600 hover:text-red-700 font-semibold">hello@clearform.in</a></p>
          </div>

          {/* Section 12 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Children's Privacy</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Clearform is not intended for individuals under 18</li>
              <li>We do not knowingly collect children's data</li>
            </ul>
          </div>

          {/* Section 13 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Policy Updates</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>We may update this policy periodically</li>
              <li>Changes will be posted with an updated effective date</li>
            </ul>
          </div>

          {/* Section 14 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Contact</h2>
            <div className="text-gray-700 space-y-2">
              <p><strong>Clearform</strong></p>
              <p>Email: <a href="mailto:hello@clearform.in" className="text-red-600 hover:text-red-700 font-semibold">hello@clearform.in</a></p>
              <p>Website: <a href="https://clearform.in" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-700 font-semibold">https://clearform.in</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
