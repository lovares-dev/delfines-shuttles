import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const InformationContainer = () => {
  return (
    <Container>
      <section id="about" className="section-about">
        <Row>
          <Col md={12}>
            <h2>Business Information</h2>
            <p>
              Welcome to Los Defines Shuttles, your trusted partner for
              reliable, comfortable, and safe transportation services in Costa
              Rica. Whether you're traveling from the airport, heading to the
              beautiful beaches of Montezuma, Tambor, Cóbano, Santa Teresa, or
              Mal Pais, or exploring the stunning nature of the Nicoya
              Peninsula, we ensure a smooth, hassle-free journey.
            </p>
            <p>
              We specialize in personalized transfers, shuttles, and private
              transportation tailored to meet the needs of tourists seeking the
              ultimate Costa Rican experience. Our goal is to provide top-notch
              service with a local touch, so you can focus on enjoying the "Pura
              Vida" lifestyle without worry.
            </p>
            <p>
              Book your ride with us today, and let us take you where the vibes
              are always positive!
            </p>
          </Col>
        </Row>
      </section>

      <section id="services" className="section-services">
        <h2>Our Services</h2>
        <Row>
          {servicesData.map((service, index) => (
            <Col key={index} md={6} lg={3} className="mb-4">
              <Card className="service-card">
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </Container>
  );
};

const servicesData = [
  {
    title: 'Visa Run Services',
    description:
      "We offer comfortable and reliable transportation for your visa run needs. Whether you're traveling from Santa Teresa, Montezuma, Cóbano, Tambor, or other nearby areas, we provide safe and hassle-free trips to the northern border of Costa Rica at Peñas Blancas.",
  },
  {
    title: 'Shuttle Services',
    description:
      "Our shuttle services operate in key locations including Mal Pais, Santa Teresa, Montezuma, Tambor, and other surrounding areas. Whether you're traveling solo, with friends, or as part of a group, our shuttles provide a convenient and efficient way to get around.",
  },
  {
    title: 'Transfer Services',
    description:
      "Offering both local transfers and airport transportation, our services cover areas like Mal Pais, Santa Teresa, Montezuma, Tambor, Cóbano, and all international airports in Costa Rica. Whether you're arriving at one of Costa Rica's major airports or need a transfer within the peninsula, we ensure smooth, private, and dependable rides.",
  },
  {
    title: 'Tour Services',
    description:
      "Experience the beauty and culture of Costa Rica through our exclusive tours. We specialize in guiding you around the stunning landscapes of the Nicoya Peninsula and other top destinations across the country. Whether you're seeking adventure, nature exploration, or cultural immersion, our tailored tours provide a unique opportunity to discover Costa Rica at your own pace.",
  },
];

export default InformationContainer;
