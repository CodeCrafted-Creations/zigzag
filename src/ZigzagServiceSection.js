import React, { useState } from "react";
import { Modal, Button, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ZigzagServiceSection.css";

const ZigzagServiceSection = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentPdfOptions, setCurrentPdfOptions] = useState([]);
  const [selectedPdf, setSelectedPdf] = useState("");


  const openModal = (pdfOptions) => {
    setCurrentPdfOptions(pdfOptions);
    setSelectedPdf(pdfOptions[0].link);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handlePdfSelection = (link) => {
    setSelectedPdf(link);
  };

  const services = [
    {
      imgSrc: "https://50mbps.com/wp-content/uploads/2023/08/SIP-trunk.webp",
      title: "PRI, SIP Trunk, Cloud Telephony- PSTN/VPN",
      description:
        "SIP enables users to engage in integrated communications from anywhere irrespective of the underlying network infrastructures used.",
      pdfOptions: [
        {
          name: "SIP Trunk Never Miss a Call Again with our Powerful Voice Solution",
          link: "https://50mbps.com/wp-content/uploads/2023/codec/pdf/products/SIP%20Trunk%20Never%20Miss%20a%20Call%20Again%20with%20our%20Powerful%20Voice%20Solution.pdf",
        },
        {
          name: "Connecting to the Cloud has Never Been this Easy",
          link: "https://50mbps.com/wp-content/uploads/2023/codec/pdf/products/Connecting%20to%20the%20Cloud%20has%20Never%20Been%20this%20Easy.pdf",
        },
      ],
    },
    {
      imgSrc: "https://50mbps.com/wp-content/uploads/2023/08/data-solutions.webp",
      title: "Data Solutions",
      description:
        "Enhance your business with secure Internet Lease Lines, DNS Security, Point-to-Point, NLD, MPLS-VPN, and SD-WAN solutions for optimized connectivity and performance.",
      pdfOptions: [
        {
          name: "All-inone Innovative Single BOX solution",
          link: "https://50mbps.com/wp-content/uploads/2023/codec/pdf/products/All-inone%20Innovative%20Single%20BOX%20solution.pdf",
        },
        {
          name: "Connect Create and Colla borate Easily",
          link: "https://50mbps.com/wp-content/uploads/2023/codec/pdf/products/Connect%20Create%20and%20Colla%20borate%20Easily.pdf",
        },
      ],
    },
    {
      imgSrc: "https://50mbps.com/wp-content/uploads/2023/08/Cyber_Secuirty.webp",
      title: "Safeguard your Businesses from Cyber Attacks",
      description:
        "TTBS Data Loss Prevention (DLP) solution protects sensitive data from unauthorized access, leaks, and breaches, ensuring compliance and enabling secure collaboration in today’s digital environments.",
      pdfOptions: [
        {
          name: "ACCELERATING DIGITAL ADOPTION WITH SMART BUSINESS SOLUTIONS",
          link: "https://50mbps.com/wp-content/uploads/2023/codec/pdf/products/ACCELERATING%20DIGITAL%20ADOPTION%20WITH%20SMART%20BUSINESS%20SOLUTIONS.pdf",
        },
        {
          name: "Cyber Security I Protect your Business from CyberThreats",
          link: "https://50mbps.com/wp-content/uploads/2023/codec/pdf/products/Cyber%20Security%20I%20Protect%20your%20Business%20from%20CyberThreats.pdf",
        },
      ],
    },
    {
      imgSrc: "https://50mbps.com/wp-content/uploads/2023/08/MPLS.webp",
      title: "The Smarter and Safer MPLS Network",
      description:
        "This is particularly true in the BFSI and FMCG industries. With its any-to-any connectivity, outsourced routing model, QoS and SLAs, multi-protocol label switching (MPLS) is a secure and efficient option for VPN.",
      pdfOptions: [
        {
          name: "Harness the Power of Productivity",
          link: "https://50mbps.com/wp-content/uploads/2023/codec/pdf/products/Harness%20the%20Power%20of%20Productivity.pdf",
        },
        {
          name: "High Quality Unified Communication Solutions",
          link: "https://50mbps.com/wp-content/uploads/2023/codec/pdf/products/High%20Quality%20Unified%20Communication%20Solutions.pdf",
        },
        {
          name: "Making Businesses Fasterand Flexible",
          link: "https://50mbps.com/wp-content/uploads/2023/codec/pdf/products/Making%20Businesses%20Fasterand%20Flexible.pdf",
        },
        {
          name: "ONE-STOP SHOP FOR ALL YOUR ICT NEEDS",
          link: "https://50mbps.com/wp-content/uploads/2023/codec/pdf/products/ONE-STOP%20SHOP%20FOR%20ALL%20YOUR%20ICT%20NEEDS.pdf",
        },
        {
          name: "A Cloud for Every Dream",
          link: "https://50mbps.com/wp-content/uploads/2023/codec/pdf/products/A%20Cloud%20for%20Every%20Dream.pdf",
        },
        {
          name: "Smart Internet Leased Line I Smarter Safer Speedier",
          link: "https://50mbps.com/wp-content/uploads/2023/codec/pdf/products/Smart%20Internet%20Leased%20Line%20I%20Smarter%20Safer%20Speedier.pdf",
        },
        {
          name: "Smart VPN MPLS Multi-Location Private Connectivity",
          link: "https://50mbps.com/wp-content/uploads/2023/codec/pdf/products/Smart%20VPN%20MPLS%20Multi-Location%20Private%20Connectivity.pdf",
        },
        {
          name: "Toll Free Services More Market Reach than Ever Before",
          link: "https://50mbps.com/wp-content/uploads/2023/codec/pdf/products/Toll%20Free%20Services%20More%20Market%20Reach%20than%20Ever%20Before.pdf",
        },
        {
          name: "Transforming Businesses Through Digitalization",
          link: "https://50mbps.com/wp-content/uploads/2023/codec/pdf/products/Transforming%20Businesses%20Through%20Digitalization.pdf",
        },
        {
          name: "Ultra-Flexible Anytime Anywhere Cloud Communication",
          link: "https://50mbps.com/wp-content/uploads/2023/codec/pdf/products/Ultra-Flexible%20Anytime%20Anywhere%20Cloud%20Communication.pdf",
        },
      ],
    },
  ];

  return (
    <div className="container">
      <section id="zigzag-services">
        {services.map((service, index) => (
          <div key={index} className="zigzag-item">
            <img src={service.imgSrc} alt={service.title} className="zigzag-image" />
            <div className="zigzag-text">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <Button className="custom-btn" onClick={() => openModal(service.pdfOptions)}>
                Learn More
              </Button>
            </div>
          </div>
        ))}

        <Modal show={modalIsOpen} onHide={closeModal} centered className="custom-modal">
          <Modal.Header closeButton>
            <Modal.Title>Service PDF Options</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Choose PDF
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {currentPdfOptions.map((option, index) => (
                  <Dropdown.Item key={index} onClick={() => handlePdfSelection(option.link)}>
                    {option.name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            {selectedPdf && (
              <iframe
                src={selectedPdf}
                className="pdf-viewer"
                title="PDF Viewer"
                frameBorder="0"
              />
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </section>
    </div>
  );
};

export default ZigzagServiceSection;