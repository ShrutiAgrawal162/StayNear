import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

const Contact = () => {
  return (
    <>
      <Navbar />

      <div className="bg-gray-50 min-h-screen">

        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">

            <h1 className="text-4xl md:text-6xl font-bold">
              Contact Us
            </h1>

            <p className="mt-6 text-lg max-w-3xl mx-auto">
              Have questions about StayNear? We'd love to hear from you.
            </p>

          </div>
        </section>

        {/* Contact Section */}
        <section className="max-w-7xl mx-auto px-6 py-16">

          <div className="grid lg:grid-cols-2 gap-10">

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-sm">

              <h2 className="text-2xl font-bold mb-6">
                Send us a Message
              </h2>

              <form className="space-y-5">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border rounded-xl px-4 py-3"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border rounded-xl px-4 py-3"
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full border rounded-xl px-4 py-3"
                />

                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className="w-full border rounded-xl px-4 py-3"
                />

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
                >
                  Send Message
                </button>

              </form>

            </div>

            {/* Contact Info */}
            <div className="space-y-6">

              <div className="bg-white p-6 rounded-2xl shadow-sm flex gap-4">
                <Mail className="text-blue-600" size={28} />

                <div>
                  <h3 className="font-bold">
                    Email Us
                  </h3>

                  <p className="text-gray-600">
                    support@staynear.com
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm flex gap-4">
                <Phone className="text-green-600" size={28} />

                <div>
                  <h3 className="font-bold">
                    Call Us
                  </h3>

                  <p className="text-gray-600">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm flex gap-4">
                <MapPin className="text-red-500" size={28} />

                <div>
                  <h3 className="font-bold">
                    Visit Us
                  </h3>

                  <p className="text-gray-600">
                    Varanasi, Uttar Pradesh, India
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm flex gap-4">
                <Clock className="text-orange-500" size={28} />

                <div>
                  <h3 className="font-bold">
                    Working Hours
                  </h3>

                  <p className="text-gray-600">
                    Mon - Sat : 9 AM - 6 PM
                  </p>
                </div>
              </div>

            </div>

          </div>

        </section>

      </div>

      <Footer />
    </>
  );
};

export default Contact;