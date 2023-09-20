import React from 'react';
import './Footer.css'; // Import your CSS file

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <h2>About Us</h2>
            <p>
              We are a pet veterinary shop dedicated to providing the best care
              for your furry friends. Our experienced team of veterinarians is
              here to serve you.
            </p>
          </div>
          <div className="footer-section contact">
            <h2>Contact Information</h2>
            <address>
              <p>
                <strong>Address:</strong> 1234 Pet Avenue, City, Country
              </p>
              <p>
                <strong>Email:</strong> info@petvetshop.com
              </p>
              <p>
                <strong>Phone:</strong> +1 (123) 456-7890
              </p>
            </address>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 Pet Vet Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
