"use client";

import { useState } from "react";
import ContactModal from "./ContactModal";
import useScrollAnimation from "../hooks/useScrollAnimation";

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const headerRef = useScrollAnimation("fadeInUp", 1, 0.1);
  const cardRef = useScrollAnimation("fadeInUp", 1, 0.3);

  const handleRequestDemo = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="ready-section" id="contact">
        <div className="ready-header" ref={headerRef}>
          Ready to Get Started?
        </div>
        <div className="contact-card" ref={cardRef}>
          <div className="contact-left">
            <div className="contact-title">Contact us!</div>
            <div className="contact-subtitle">
              We&apos;d love to learn more about your specific needs and
              challenges
            </div>
          </div>
          <div className="contact-right">
            <div className="contact-item">
              <svg
                className="contact-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              +63 998 554 2698
            </div>
            <div className="contact-item">
              <svg
                className="contact-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              coreaisolutionsopc@gmail.com
            </div>
            <button className="contact-demo-btn" onClick={handleRequestDemo}>
              Request a Demo
            </button>
          </div>
        </div>
      </section>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        formType="Request a Demo"
      />
    </>
  );
};

export default Contact;
