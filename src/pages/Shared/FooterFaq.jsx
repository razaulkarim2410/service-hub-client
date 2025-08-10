import React from "react";

const FAQSection = () => {
  return (
    <section className="mb-8 pt-20 w-11/12 mx-auto">
      <h2 className="text-2xl font-semibold mb-3 ">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        <details className="border rounded-lg p-4 bg-gray-50">
          <summary className="cursor-pointer font-medium text-gray-700">
            How do I book a service?
          </summary>
          <p className="mt-2 text-gray-600">
            Browse available services, select one, and click &quot;Book Now&quot;. 
            Fill out the booking form and confirm payment.
          </p>
        </details>

        <details className="border rounded-lg p-4 bg-gray-50">
          <summary className="cursor-pointer font-medium text-gray-700">
            Can I cancel or reschedule my booking?
          </summary>
          <p className="mt-2 text-gray-600">
            Yes, bookings can be canceled or rescheduled up to 24 hours before
            the scheduled time through your account dashboard.
          </p>
        </details>

        <details className="border rounded-lg p-4 bg-gray-50">
          <summary className="cursor-pointer font-medium text-gray-700">
            How do I contact the service provider?
          </summary>
          <p className="mt-2 text-gray-600">
            After booking, you’ll receive the provider’s contact details in your
            confirmation email and booking dashboard.
          </p>
        </details>

        <details className="border rounded-lg p-4 bg-gray-50">
          <summary className="cursor-pointer font-medium text-gray-700">
            Do I need to create an account to book a service?
          </summary>
          <p className="mt-2 text-gray-600">
            Yes, creating a free account allows you to manage bookings, track
            orders, and communicate with providers easily.
          </p>
        </details>

        <details className="border rounded-lg p-4 bg-gray-50">
          <summary className="cursor-pointer font-medium text-gray-700">
            Are payments secure?
          </summary>
          <p className="mt-2 text-gray-600">
            Absolutely. We use trusted, encrypted payment gateways to keep your
            personal and financial information safe.
          </p>
        </details>

        <details className="border rounded-lg p-4 bg-gray-50">
          <summary className="cursor-pointer font-medium text-gray-700">
            What if I’m not satisfied with the service?
          </summary>
          <p className="mt-2 text-gray-600">
            If you encounter any issues, you can request a refund or file a
            complaint through our resolution center within 48 hours.
          </p>
        </details>
      </div>
    </section>
  );
};

export default FAQSection;
