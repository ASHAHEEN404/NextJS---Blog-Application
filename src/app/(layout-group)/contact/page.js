import React from "react";

function Contact() {
  return (
    <div className="max-w-4xl p-8 mx-auto mt-10 bg-white rounded-lg shadow-md">
      <h1 className="mb-6 text-4xl font-bold text-center text-gray-800">
        Contact Us
      </h1>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Contact Information Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-700">Get in Touch</h2>
          <p className="text-gray-600">
            Have any questions or concerns? We'd love to hear from you! Reach
            out to us through any of the following ways:
          </p>
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="mr-2 text-blue-500">📞</span>
              <span className="font-medium text-gray-700">
                Phone: +123 456 7890
              </span>
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-blue-500">📧</span>
              <span className="font-medium text-gray-700">
                Email: contact@ourcompany.com
              </span>
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-blue-500">📍</span>
              <span className="font-medium text-gray-700">
                Address: ITI, Mansoura - Egypt
              </span>
            </li>
          </ul>
        </div>

        {/* Contact Form Section */}
        <div>
          <h2 className="mb-4 text-2xl font-semibold text-gray-700">
            Send Us a Message
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm bg-slate-400 focus:ring focus:ring-blue-500 focus:border-blue-500"
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Your Email
              </label>
              <input
                className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm bg-slate-400 focus:ring focus:ring-blue-500 focus:border-blue-500"
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm bg-slate-400 focus:ring focus:ring-blue-500 focus:border-blue-500"
                name="message"
                rows="5"
                placeholder="Type your message here..."
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-semibold text-white transition duration-300 bg-yellow-400 rounded-md hover:bg-yellow-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
