import React from "react";

const TermsOfUse = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6 md:px-16 lg:px-32">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg mt-18 p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Terms of Use</h1>
        <p className="text-gray-600 mb-4">
          Welcome to <span className="font-semibold">Service Hub</span>. By
          accessing or using our website, services, or applications, you agree
          to comply with and be bound by the following terms and conditions.
        </p>

        {/* Section 1 */}
        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          1. Acceptance of Terms
        </h2>
        <p className="text-gray-600 mb-4">
          By using our platform, you agree to these Terms of Use and our Privacy
          Policy. If you do not agree, please discontinue using the platform.
        </p>

        {/* Section 2 */}
        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          2. Use of Services
        </h2>
        <p className="text-gray-600 mb-4">
          You agree to use Service Hub only for lawful purposes and in
          accordance with applicable laws. Misuse of the platform, including
          fraud, harassment, or infringement of others’ rights, is strictly
          prohibited.
        </p>

        {/* Section 3 */}
        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          3. Account Responsibility
        </h2>
        <p className="text-gray-600 mb-4">
          You are responsible for maintaining the confidentiality of your
          account credentials and for all activities under your account.
        </p>

        {/* Section 4 */}
        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          4. Service Provider Terms
        </h2>
        <p className="text-gray-600 mb-4">
          If you are a service provider, you must ensure that your services are
          delivered as described and meet all applicable legal and quality
          standards.
        </p>

        {/* Section 5 */}
        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          5. Limitation of Liability
        </h2>
        <p className="text-gray-600 mb-4">
          Service Hub is not liable for any damages or losses resulting from the
          use of our platform, except as required by law.
        </p>

        {/* Section 6 */}
        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          6. Changes to Terms
        </h2>
        <p className="text-gray-600 mb-4">
          We reserve the right to update these terms at any time. Changes will
          be effective immediately upon posting.
        </p>

        {/* Section 7 */}
        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          7. Contact Us
        </h2>
        <p className="text-gray-600">
          If you have any questions about these Terms of Use, please contact us
          at{" "}
          <a
            href="mailto:support@servicehub.com"
            className="text-blue-600 hover:underline"
          >
            support@servicehub.com
          </a>
          .
        </p>

        <p className="text-gray-500 text-sm mt-6">
          Last Updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default TermsOfUse;
