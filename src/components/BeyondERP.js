"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import useScrollAnimation from "../hooks/useScrollAnimation";

const BeyondERP = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const headerRef = useScrollAnimation("fadeInUp", 1, 0.1);
  const cardsRef = useScrollAnimation("fadeInUp", 1, 0.3);

  const cards = [
    {
      id: "automation",
      title: "Process Automation",
      description: "streamline repetitive tasks and workflows",
      icon: "/streamline-icon.svg",
      illustration: "/streamline-illustration.svg",
      className: "be-automation",
      iconClassName: "be-automation-icon",
    },
    {
      id: "analytics",
      title: "Data Analytics & Reporting",
      description: "transform your data into actionable insights",
      icon: "/data-icon.svg",
      illustration: "/data-illustration.svg",
      className: "be-analytics",
      iconClassName: "be-analytics-icon",
    },
    {
      id: "insights",
      title: "Intelligent Insights",
      description: "AI-driven recommendations for better decision-making",
      icon: "/bulb-icon.svg",
      illustration: "/bulb-illustration.svg",
      className: "be-insights",
      iconClassName: "be-insights-icon",
    },
  ];

  const toggleCard = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  // Handle window resize to reset expanded state on desktop
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 920;
      if (!isMobile) {
        setExpandedCard(null);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="beyond-erp">
      <div className="floating-element floating-element-3"></div>
      <div className="beyond-erp-header" ref={headerRef}>
        Beyond ERP
      </div>
      <div className="beyond-erp-container" ref={cardsRef}>
        {cards.map((card) => (
          <BeyondERPCard
            key={card.id}
            card={card}
            isExpanded={expandedCard === card.id}
            onToggle={() => toggleCard(card.id)}
          />
        ))}
      </div>
    </section>
  );
};

const BeyondERPCard = ({ card, isExpanded, onToggle }) => {
  return (
    <div className={`${card.className} ${isExpanded ? "expanded" : ""}`}>
      <button
        className={`be-toggle ${isExpanded ? "rotated" : ""}`}
        onClick={onToggle}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6,9 12,15 18,9"></polyline>
        </svg>
      </button>

      <div className="be-header-row">
        <div className={card.iconClassName}>
          <Image
            src={card.icon}
            alt={`${card.title} icon`}
            width={32}
            height={32}
          />
        </div>
        <div className="be-title">{card.title}</div>
      </div>

      <div className="be-description">{card.description}</div>

      <div className="be-illustration">
        <Image
          src={card.illustration}
          alt={`${card.title} illustration`}
          width={240}
          height={80}
        />
      </div>
    </div>
  );
};

export default BeyondERP;
