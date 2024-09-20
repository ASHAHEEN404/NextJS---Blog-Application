import React from "react";

function About() {
  return (
    <div className="max-w-5xl p-8 mx-auto mt-10 bg-white rounded-lg shadow-md">
      <h1 className="mb-6 text-4xl font-bold text-center text-gray-800">
        About Us
      </h1>

      {/* Company Overview Section */}
      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-gray-700">
          Who We Are
        </h2>
        <p className="leading-relaxed text-gray-600">
          Welcome to Our Company! We are a dedicated team of professionals
          passionate about providing the best services to our clients. With
          years of experience in the industry, we are committed to delivering
          exceptional results through innovative solutions and a
          customer-centric approach.
        </p>
      </section>

      {/* Mission Section */}
      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-gray-700">
          Our Mission
        </h2>
        <p className="leading-relaxed text-gray-600">
          Our mission is to empower individuals and businesses by providing
          cutting-edge products and services that simplify their lives. We
          strive to lead with innovation and integrity, ensuring that we offer
          value in everything we do.
        </p>
      </section>

      {/* Team Section */}
      <section>
        <h2 className="mb-4 text-2xl font-semibold text-gray-700">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Team Member 1 */}
          <div className="text-center">
            <img
              src="/images/team-member-1.jpg"
              alt="Team Member 1"
              className="w-32 h-32 mx-auto mb-4 rounded-full"
            />
            <h3 className="text-xl font-medium text-gray-800">John Doe</h3>
            <p className="text-gray-600">CEO & Founder</p>
          </div>

          {/* Team Member 2 */}
          <div className="text-center">
            <img
              src="/images/team-member-2.jpg"
              alt="Team Member 2"
              className="w-32 h-32 mx-auto mb-4 rounded-full"
            />
            <h3 className="text-xl font-medium text-gray-800">Jane Smith</h3>
            <p className="text-gray-600">Chief Marketing Officer</p>
          </div>

          {/* Team Member 3 */}
          <div className="text-center">
            <img
              src="/images/team-member-3.jpg"
              alt="Team Member 3"
              className="w-32 h-32 mx-auto mb-4 rounded-full"
            />
            <h3 className="text-xl font-medium text-gray-800">Michael Brown</h3>
            <p className="text-gray-600">Lead Developer</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
