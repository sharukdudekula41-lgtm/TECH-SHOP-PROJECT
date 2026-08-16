import "./Services.css";
import {
  FaShippingFast,
  FaUndoAlt,
  FaShieldAlt,
  FaHeadset,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <FaShippingFast />,
    title: "Free Shipping",
    description: "Free shipping on all orders above $100",
  },
  {
    id: 2,
    icon: <FaUndoAlt />,
    title: "Easy Returns",
    description: "30 days money back guarantee",
  },
  {
    id: 3,
    icon: <FaShieldAlt />,
    title: "Secure Payment",
    description: "100% secure online payment",
  },
  {
    id: 4,
    icon: <FaHeadset />,
    title: "24/7 Support",
    description: "Friendly customer support",
  },
];

const Services = () => {
  return (
    <section className="services">

      <h2>Our Services</h2>

      <div className="services-container">

        {services.map((service) => (
          <div className="service-card" key={service.id}>

            <div className="service-icon">
              {service.icon}
            </div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Services;