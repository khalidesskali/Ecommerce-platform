import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@stylenest.com",
      description: "We'll respond within 24 hours",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 6pm",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Fashion Street, NY 10001",
      description: "Come see our latest collection",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon-Sat: 9AM-8PM",
      description: "Sunday: 11AM-6PM",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-text mb-6">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions about our products or need assistance? We'd love to
              hear from you. Send us a message and we'll respond as soon as
              possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white dark:bg-card rounded-2xl shadow-xl p-8 border border-muted"
            >
              <h2 className="text-2xl font-bold text-text mb-6">
                Send us a Message
              </h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-text mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground">
                    Thank you for contacting us. We'll get back to you soon!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-text mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-muted rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 bg-background"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-text mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-muted rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 bg-background"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-text mb-2"
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-muted rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 bg-background"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-text mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-muted rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 bg-background resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 px-6 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Contact Info Cards */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="flex items-start space-x-4 p-6 bg-white dark:bg-card rounded-xl shadow-lg border border-muted hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-text mb-1">
                        {info.title}
                      </h3>
                      <p className="text-primary font-medium mb-1">
                        {info.details}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {info.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/20"
              >
                <h3 className="text-xl font-bold text-text mb-4">
                  Why Choose StyleNest?
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    Premium quality clothing and accessories
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    Fast and reliable shipping worldwide
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    Excellent customer service and support
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    Easy returns and exchanges
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-text mb-4">
              Find Our Store
            </h2>
            <p className="text-muted-foreground">
              Visit us in person to experience our collection firsthand
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="bg-white dark:bg-card rounded-2xl shadow-xl overflow-hidden border border-muted"
          >
            {/* Placeholder for map - you can integrate Google Maps or other mapping service here */}
            <div className="h-96 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground text-lg">
                  Interactive Map Coming Soon
                </p>
                <p className="text-muted-foreground text-sm">
                  123 Fashion Street, New York, NY 10001
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-text mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Quick answers to common questions
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "What are your shipping options?",
                answer:
                  "We offer standard shipping (3-5 business days), express shipping (1-2 business days), and overnight shipping for select locations. All orders over $100 qualify for free standard shipping.",
              },
              {
                question: "How can I return or exchange an item?",
                answer:
                  "We accept returns and exchanges within 30 days of purchase. Items must be unworn, unwashed, and in original condition with tags attached. Contact our customer service team to initiate a return.",
              },
              {
                question: "Do you ship internationally?",
                answer:
                  "Yes! We ship to most countries worldwide. International shipping rates and delivery times vary by location. You can view shipping options during checkout.",
              },
              {
                question: "What payment methods do you accept?",
                answer:
                  "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, and Google Pay. All payments are processed securely.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
                className="bg-white dark:bg-card rounded-xl p-6 shadow-lg border border-muted hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-text mb-3">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
