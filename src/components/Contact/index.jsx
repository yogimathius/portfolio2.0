import React, { useState } from "react";
import emailjs, { init } from "emailjs-com";
import GetInTouch from "./GetInTouch";

init("user_8MpnZ33kDRAuQaBFXueiA");

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  function sendEmail(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const messageDetails = {
      name: formData.firstName + " " + formData.lastName,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs.send("service_d5hlzw7", "template_hlrzfln", messageDetails).then(
      (result) => {
        setSubmitStatus({
          success: true,
          message: "Message sent successfully! I'll get back to you soon.",
        });
        resetForm();
        setIsSubmitting(false);
      },
      (error) => {
        console.error(error.text);
        setSubmitStatus({
          success: false,
          message: "An error occurred. Please try again later.",
        });
        setIsSubmitting(false);
      }
    );
  }

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="section bg-gray-light dark:bg-gray-800">
      <div className="container">
        <div className="max-w-7xl mx-auto">
          <GetInTouch />

          <div className="mt-16">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-card p-8">
              <form className="space-y-6" onSubmit={sendEmail}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-dark dark:text-gray-light mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Jane"
                      className="form-input"
                      required
                    />
                  </div>

                  {/* Last Name */}
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-dark dark:text-gray-light mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-dark dark:text-gray-light mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane.doe@example.com"
                    className="form-input"
                    required
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-dark dark:text-gray-light mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    className="form-input"
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-dark dark:text-gray-light mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="form-input resize-none"
                    placeholder="Tell me about your project..."
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary w-full md:w-auto"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>

                {/* Status Message */}
                {submitStatus && (
                  <div
                    className={`mt-4 p-4 rounded-md ${
                      submitStatus.success
                        ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100"
                        : "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100"
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
