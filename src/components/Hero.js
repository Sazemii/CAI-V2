"use client";

import { useState } from "react";
import Image from "next/image";
import ContactModal from "./ContactModal";
import useScrollAnimation from "../hooks/useScrollAnimation";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  const leftIntroRef = useScrollAnimation("fadeInLeft", 1, 0.2);
  const rightIntroRef = useScrollAnimation("fadeInRight", 1, 0.4);

  const handleBookConsultation = () => {
    setModalType("Book a consultation");
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="l-content">
        <div className="left-intro" ref={leftIntroRef}>
          <div className="l-heading">
            Bringing AI to the core of your business systems.
          </div>
          <div className="l-body">
            We help Philippine businesses transform operations through smart
            ERP, AI, and automation solutions. Our mission is to bring clarity,
            efficiency, and scalability by placing AI at the core of every
            business system we implement.
          </div>
          <div className="l-btn" onClick={handleBookConsultation}>
            Book a consultation
          </div>
        </div>

        <div className="right-intro" ref={rightIntroRef}>
          <div className="phonesvg">
            <Image
              src="/phone.svg"
              alt="Phone illustration"
              width={600}
              height={700}
              priority
            />
          </div>
        </div>
      </div>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        formType={modalType}
      />
    </>
  );
};

export default Hero;
