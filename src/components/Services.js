"use client";

import Image from "next/image";
import useScrollAnimation from "../hooks/useScrollAnimation";

const Services = () => {
  const headerRef = useScrollAnimation("fadeInUp", 1, 0.1);
  const servicesGridRef = useScrollAnimation("fadeInUp", 1, 0.3);
  const services = [
    {
      id: "accounting",
      title: "Accounting & BIR Compliance",
      description:
        "Philippine-standard configuration, compliant  invoicing, automated financial reporting",
      icon: "/accounting-icon.svg",
      illustration: "/accounting_illustration.svg",
      className: "s-accounting",
      iconClassName: "s-accounting-icon",
      illustrationClassName: "s-accounting-illustration",
    },
    {
      id: "customization",
      title: "Customization",
      description:
        "tailored to your business processes with seamless integration",
      icon: "/customization-icon.svg",
      illustration: "/customization_illustration.svg",
      className: "s-customization",
      iconClassName: "s-customization-icon",
    },
    {
      id: "automation",
      title: "Sales & CRM Automation",
      description:
        "end-to-end workflows, pipeline management, enhanced customer experience",
      icon: "/automation-icon.svg",
      illustration: "/automation-illustration.svg",
      className: "s-automation",
      iconClassName: "s-automation-icon",
    },
    {
      id: "training",
      title: "Training & Ongoing Support",
      description:
        "hands-on team training, post-implementation support, continuous optimization",
      icon: "/training-icon.svg",
      illustration: "/training-illustration.svg",
      className: "s-training",
      iconClassName: "s-training-icon",
    },
  ];

  return (
    <section className="services" id="services">
      {/* Floating decorative elements */}
      <div className="floating-element floating-element-1"></div>
      <div className="floating-element floating-element-2"></div>

      <div className="services-header" ref={headerRef}>
        Our Odoo ERP Services
      </div>

      {/* Services Container 1 - Accounting & Customization */}
      <div className="services-container-1" ref={servicesGridRef}>
        {services.slice(0, 2).map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      {/* Services Container 2 - Automation & Training with different flex */}
      <div className="services-container-2">
        {services.slice(2, 4).map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};

const ServiceCard = ({ service }) => {
  return (
    <div className={service.className}>
      <div className="s-header-row">
        <div className={service.iconClassName}>
          <Image
            src={service.icon}
            alt={`${service.title} icon`}
            width={32}
            height={32}
          />
        </div>
        <div className="s-title">{service.title}</div>
      </div>

      <div className="s-description">{service.description}</div>

      <div className={`s-illustration ${service.illustrationClassName || ""}`}>
        <Image
          src={service.illustration}
          alt={`${service.title} illustration`}
          width={230}
          height={120}
        />
      </div>
    </div>
  );
};

export default Services;
