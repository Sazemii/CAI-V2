"use client";

import Image from "next/image";
import useScrollAnimation from "../hooks/useScrollAnimation";

const Retail = () => {
  const headerRef = useScrollAnimation("fadeInUp", 1, 0.1);
  const contentRef = useScrollAnimation("fadeInUp", 1, 0.3);

  return (
    <section className="retail">
      <div className="r-header" ref={headerRef}>
        Operations and Retail
      </div>
      <div className="r-content" ref={contentRef}>
        <div className="laptop-illustration">
          <Image
            src="/laptop-icon.svg"
            alt="Laptop illustration"
            width={380}
            height={224}
          />
        </div>
        <div className="r-content-text">
          <div className="r-title">POS & Retail Solutions</div>
          <div className="r-description">
            BIR-compliant Odoo POS integrated with accounting and inventory,
            ideal for cafés, restaurants, and retail
          </div>
        </div>
      </div>
    </section>
  );
};

export default Retail;
