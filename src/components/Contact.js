import React from 'react';

function Contact() {
  const contactInfoStyles = {
    backgroundColor: '#e3f2fd',
    padding: '20px',
    borderRadius: '5px',
    textAlign: 'center',
  };

  const contactItemStyles = {
    margin: '10px',
  };

  const linkStyles = {
    color: '#1565c0',
    textDecoration: 'none',
  };

  return (
    <section style={contactInfoStyles}>
      <div className="contact-info">
        <div style={contactItemStyles} className="contact-item">
          <p>Email: your.email@example.com</p>
        </div>

        <div style={contactItemStyles} className="contact-item">
          <p>Phone: +91 97728xxxxx</p>
        </div>

        <div style={contactItemStyles} className="contact-item">
          <p>
            LinkedIn: <a href="#" style={linkStyles}>linkedin.com/in/yourname</a>
          </p>
        </div>

        <div style={contactItemStyles} className="contact-item">
          <p>
            GitHub: <a href="#" style={linkStyles}>github.com/yourusername</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
