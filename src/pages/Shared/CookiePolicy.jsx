import React from "react";

const CookiePolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 ">
      <h1 className="text-3xl font-bold pt-18 mb-6">Cookie Policy</h1>

      <p className="mb-4">
        This Cookie Policy explains how <strong>Service Hub</strong> uses
        cookies and similar technologies on our website. By using our site, you
        agree to the use of cookies as described in this policy.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">1. What Are Cookies?</h2>
      <p className="mb-4">
        Cookies are small text files stored on your device when you visit a
        website. They help the site remember your preferences, improve
        performance, and provide a better user experience.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Cookies</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>To remember your login session and preferences.</li>
        <li>To understand how visitors use our site.</li>
        <li>To improve website performance and security.</li>
        <li>To personalize content and offers.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        3. Types of Cookies We Use
      </h2>
      <ul className="list-disc ml-6 mb-4">
        <li>
          <strong>Essential Cookies:</strong> Required for core website
          functions (e.g., login).
        </li>
        <li>
          <strong>Analytics Cookies:</strong> Help us analyze site traffic and
          usage.
        </li>
        <li>
          <strong>Functional Cookies:</strong> Remember your settings and
          preferences.
        </li>
        <li>
          <strong>Advertising Cookies:</strong> Deliver relevant ads and track
          campaign performance.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">4. Managing Cookies</h2>
      <p className="mb-4">
        You can control or delete cookies through your browser settings. Please
        note that disabling cookies may affect your experience and some
        features may not work properly.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        5. Changes to This Policy
      </h2>
      <p className="mb-4">
        We may update this Cookie Policy from time to time. Any changes will be
        posted on this page with a revised date.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">6. Contact Us</h2>
      <p>
        If you have questions about our Cookie Policy, please contact us at:{" "}
        <a
          href="mailto:support@servicehub.com"
          className="text-blue-600 underline"
        >
          support@servicehub.com
        </a>
      </p>
    </div>
  );
};

export default CookiePolicy;
