import React from 'react';

const Services = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-10 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-start text-orange-700 mb-10">
        Our Services
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Service 1 */}
        <div className="bg-orange-50 p-6 rounded-xl shadow hover:shadow-md transition">
          <h2 className="text-2xl font-semibold text-orange-800 mb-3">Fresh Produce</h2>
          <p className="text-gray-700 text-lg">
            We offer a wide range of fresh fruits, vegetables, and grains directly sourced from local farmers at fair prices.
          </p>
        </div>

        {/* Service 2 */}
        <div className="bg-orange-50 p-6 rounded-xl shadow hover:shadow-md transition">
          <h2 className="text-2xl font-semibold text-orange-800 mb-3">Local Vendor Support</h2>
          <p className="text-gray-700 text-lg">
            Empowering small businesses, artisans, and farmers with a premium platform to showcase and sell their products.
          </p>
        </div>

        {/* Service 3 */}
        <div className="bg-orange-50 p-6 rounded-xl shadow hover:shadow-md transition">
          <h2 className="text-2xl font-semibold text-orange-800 mb-3">Mandi Price Guarantee</h2>
          <p className="text-gray-700 text-lg">
            Affordable, transparent pricing — just like your traditional mandi — with the comfort of a modern mall.
          </p>
        </div>

        {/* Service 4 */}
        <div className="bg-orange-50 p-6 rounded-xl shadow hover:shadow-md transition">
          <h2 className="text-2xl font-semibold text-orange-800 mb-3">Cultural Events</h2>
          <p className="text-gray-700 text-lg">
            Enjoy weekly events, local food festivals, live folk music, and more — celebrating local traditions and flavors.
          </p>
        </div>

        {/* Service 5 */}
        <div className="bg-orange-50 p-6 rounded-xl shadow hover:shadow-md transition">
          <h2 className="text-2xl font-semibold text-orange-800 mb-3">Clean & Secure Environment</h2>
          <p className="text-gray-700 text-lg">
            A clean, air-conditioned space for shopping with family — complete with hygiene, security, and parking facilities.
          </p>
        </div>

        {/* Service 6 */}
        <div className="bg-orange-50 p-6 rounded-xl shadow hover:shadow-md transition">
          <h2 className="text-2xl font-semibold text-orange-800 mb-3">Digital Payment & Loyalty</h2>
          <p className="text-gray-700 text-lg">
            Modern payment options, loyalty programs, and digital receipts for your convenience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
