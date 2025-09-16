"use client";

import { useState } from "react";
import {
  X,
  CheckCircle2,
  User,
  Mail,
  MessageCircle,
  Send,
  Calendar,
} from "lucide-react";

const ContactModal = ({ isOpen, onClose, formType }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: `${formType}: ${formData.message}`,
          subject: `${formType} - ${formData.name}`,
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => {
          setIsSuccess(false);
          onClose();
        }, 2000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setError("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-header-content">
            <div className="modal-icon">
              {formType === "Book a consultation" ? (
                <Calendar className="w-6 h-6" />
              ) : (
                <MessageCircle className="w-6 h-6" />
              )}
            </div>
            <div>
              <h2 className="modal-title">
                {formType === "Book a consultation"
                  ? "Book a Consultation"
                  : "Request a Demo"}
              </h2>
              <p className="modal-subtitle">
                {formType === "Book a consultation"
                  ? "Let's discuss how we can help your business"
                  : "See our solutions in action"}
              </p>
            </div>
          </div>
          <button className="modal-close" onClick={onClose}>
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          <div className="success-message">
            <div className="success-icon">
              <CheckCircle2 className="w-16 h-16" />
            </div>
            <h3>Thank you!</h3>
            <p>
              Your message has been sent successfully. We'll get back to you
              soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="modal-form">
            <div className="form-group">
              <label htmlFor="name">
                <User className="w-4 h-4" />
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                <Mail className="w-4 h-4" />
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email address"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">
                <MessageCircle className="w-4 h-4" />
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                placeholder={
                  formType === "Book a consultation"
                    ? "Tell us about your business needs and challenges..."
                    : "Tell us what you'd like to see in the demo..."
                }
              ></textarea>
            </div>

            {error && <div className="error-message">{error}</div>}

            <div className="form-actions">
              <button type="button" onClick={onClose} className="btn-secondary">
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary"
              >
                <Send className="w-4 h-4" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
