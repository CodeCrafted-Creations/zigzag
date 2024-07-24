import React from 'react';
import './ZigzagServiceSection.css';

const ZigzagServiceSection = () => {
  const services = [
    {
      imgSrc: 'https://50mbps.com/wp-content/uploads/2023/08/SIP-trunk.webp',
      title: 'PRI, SIP Trunk, Cloud Telephony- PSTN/VPN',
      description: 'SIP enables users to engage in integrated communications from anywhere irrespective of the underlying network infrastructures used.',
      link: 'https://example.com/sip-trunk'
    },
    {
      imgSrc: 'https://50mbps.com/wp-content/uploads/2023/08/data-solutions.webp',
      title: 'Data Solutions',
      description: 'Enhance your business with secure Internet Lease Lines, DNS Security, Point-to-Point, NLD, MPLS-VPN, and SD-WAN solutions for optimized connectivity and performance.',
      link: 'https://example.com/data-solutions'
    },
    {
      imgSrc: 'https://50mbps.com/wp-content/uploads/2023/08/Cyber_Secuirty.webp',
      title: 'Safeguard your Businesses from Cyber Attacks',
      description: 'TTBS Data Loss Prevention (DLP) solution protects sensitive data from unauthorized access, leaks, and breaches, ensuring compliance and enabling secure collaboration in today’s digital environments.',
      link: 'https://example.com/cyber-attacks'
    },
    {
      imgSrc: 'https://50mbps.com/wp-content/uploads/2023/08/MPLS.webp',
      title: 'The Smarter and Safer MPLS Network',
      description: 'This is particularly true in the BFSI and FMCG industries. With its any-to-any connectivity, outsourced routing model, QoS and SLAs,multi-protocol label switching (MPLS) is a secure and efficient option for VPN.',
      link: 'https://example.com/mpls-network'
    },
  ];

  return (
    <section className="zigzag-section">
      <div className="zigzag-container">
        <div className="text-center">
          <span className="tx-sectionHeading__subTitle tx-uppercase">Our Services</span>
          <h2 className="split-in-right">Services We’re Offering</h2>
        </div>

        {services.map((service, index) => (
          <div key={index} className={`zigzag-row ${index % 2 === 0 ? 'even' : 'odd'}`}>
            <div className="zigzag-content">
              <img src={service.imgSrc} alt={service.title} />
            </div>
            <div className="zigzag-content">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <a href={service.link} className="custom-btn">Learn More</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ZigzagServiceSection;
