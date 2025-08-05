import React from 'react';

const About = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-10 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-start text-orange-700 mb-6">
        About Us
      </h1>

      <p className="text-lg text-gray-700 mb-4">
        <strong>Mall Mandi</strong> is a modern twist on the traditional Indian mandi. We bring the freshness and
        authenticity of local markets into a clean, organized, and family-friendly mall environment. It’s a place
        where tradition meets technology.
      </p>

      <p className="text-lg text-gray-700 mb-4">
        Our aim is to create a platform for local farmers, small vendors, and artisans to showcase their products in
        a premium environment — while customers enjoy the best quality at mandi prices.
      </p>

      <p className="text-lg text-gray-700 mb-4">
        Whether you’re looking for fresh fruits, vegetables, handmade crafts, spices, or daily essentials, Mall Mandi
        has it all — under one roof!
      </p>

      <h2 className="text-2xl font-semibold text-orange-600 mt-8 mb-4">Why Choose Mall Mandi?</h2>
      <ul className="list-disc pl-6 text-gray-700 text-lg space-y-2">
        <li>Fresh produce directly from farmers</li>
        <li>Affordable mandi-style pricing</li>
        <li>Hygienic and air-conditioned shopping space</li>
        <li>Support for small/local businesses</li>
        <li>Fun cultural events, food stalls, and weekend specials</li>
      </ul>

      <p className="text-lg text-gray-700 mt-6">
        At Mall Mandi, we believe in reviving the local economy and connecting people through smart, ethical,
        and convenient shopping experiences.
      </p>

      <p className="text-lg text-gray-700 mt-2 font-semibold">
        Come be a part of the Mall Mandi movement – where the heart of the mandi beats inside a mall!
      </p>
    </section>
  );
};

export default About;
