"use client";

import Image from "next/image";
import useScrollAnimation from "../hooks/useScrollAnimation";

const HowDifferent = () => {
  const headerRef = useScrollAnimation("fadeInUp", 1, 0.1);
  const cardsRef = useScrollAnimation("fadeInUp", 1, 0.3);
  const differentiators = [
    {
      number: "1",
      title: "Global Standards",
      description:
        "ERP and AI practices aligned with international best practices",
      numberIcon: "/1.svg",
    },
    {
      number: "2",
      title: "End-To-End Service",
      description:
        "From design and implementation to training and ongoing support, we handle everything",
      numberIcon: "/2.svg",
    },
    {
      number: "3",
      title: "Builth for Growth",
      description: "Scalable solutions that grow with your business needs",
      numberIcon: "/3.svg",
    },
  ];

  return (
    <section className="how-different" id="how-different">
      <div className="floating-element floating-element-4"></div>
      <div className="floating-element floating-element-5"></div>
      <div className="how-different-header" ref={headerRef}>
        How We&apos;re Different?
      </div>
      <div className="how-different-container" ref={cardsRef}>
        {differentiators.map((item, index) => (
          <DifferentiatorCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

const DifferentiatorCard = ({ item }) => {
  return (
    <div className="hd-card">
      <div className="hd-number">
        <Image
          src={item.numberIcon}
          alt={item.number}
          width={120}
          height={120}
        />
      </div>
      <div className="hd-content">
        <div className="hd-title">{item.title}</div>
        <div className="hd-description">{item.description}</div>
      </div>
    </div>
  );
};

export default HowDifferent;
