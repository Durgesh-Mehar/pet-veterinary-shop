import React from 'react';
import './Home.css'; // Import the CSS for this component

function HomePage() {
  return (
    <div className="home-container">
      <header className="header">
        <h1>Welcome to Our Pet Veterinary Shop</h1>
        <p>Your trusted partner in pet care.</p>
        <button className="cta-button">Learn More</button>
      </header>
      <main className="main-content">
        <section className="about-us">
          <h2>About Us</h2>
          <p>
            We are passionate about providing the best care for your beloved
            pets. Our experienced team of veterinarians is dedicated to keeping
            your pets healthy and happy.
          </p>
        </section>
        <section className="services">
          <h2>Our Services</h2>
          <ul>
            <li>Pet Checkups</li>
            <li>Vaccinations</li>
            <li>Pet Surgery</li>
            <li>Pet Grooming</li>
          </ul>
        </section>
        <p>
            We are passionate about providing the best care for your beloved
            pets. Our experienced team of veterinarians is dedicated to keeping
            your pets healthy and happy.
            We are passionate about providing the best care for your beloved
            pets. Our experienced team of veterinarians is dedicated to keeping
            your pets healthy and happy.
          </p>
      </main>
    </div>
  );
}

export default HomePage;
