// src/ZigzagLayout.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ZigzagLayout.css';

const ZigzagLayout = () => {
  const items = [
    {
      imgSrc: "https://50mbps.com/wp-content/uploads/2023/08/service01.webp",
      title: "Fiber line & Broadband line",
      description: "Explore our high-speed internet services for both fiber and broadband connections."
    },
    {
      imgSrc: "https://50mbps.com/wp-content/uploads/2023/08/service02.webp",
      title: "Business Smart Television",
      description: "Discover our smart television solutions tailored for business environments."
    },
    {
      imgSrc: "https://50mbps.com/wp-content/uploads/2023/08/service03.webp",
      title: "Internet & Cyber Security",
      description: "Ensure the safety of your online activities with our robust internet security solutions."
    },
    {
      imgSrc: "https://50mbps.com/wp-content/uploads/2023/08/service04.webp",
      title: "Live Streaming Services",
      description: "Experience seamless live streaming solutions with our advanced technology."
    },
    {
      imgSrc: "https://50mbps.com/wp-content/uploads/2023/08/service05.webp",
      title: "Cloud Services",
      description: "Utilize our reliable cloud services to enhance your business operations."
    },
    {
      imgSrc: "https://50mbps.com/wp-content/uploads/2023/08/service06.webp",
      title: "Smart Home Solutions",
      description: "Transform your home with our cutting-edge smart home solutions."
    }
  ];

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 text-center my-5">
          <h2>Our Services</h2>
          <p>Services We’re Offering</p>
        </div>
      </div>
      {items.map((item, index) => (
        <div className="row my-4" key={index}>
          <div className={`col-md-6 ${index % 2 === 0 ? 'order-md-1' : 'order-md-2'}`}>
            <img src={item.imgSrc} className="img-fluid rounded" alt={item.title} />
          </div>
          <div className={`col-md-6 d-flex flex-column justify-content-center ${index % 2 === 0 ? 'order-md-2' : 'order-md-1'}`}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <button className="btn btn-primary mb-3">Learn More</button>
            <button className="btn btn-outline-primary">3D Button</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ZigzagLayout;
