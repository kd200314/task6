import React from 'react';

export function Home() {
  const homeStyles = {
    backgroundColor: '#f0f0f0',
    padding: '20px',
    textAlign: 'center',
  };

  const ctaStyles = {
    backgroundColor: '#a5d6a7',
    padding: '10px',
    borderRadius: '5px',
  };

  return (
    <section style={homeStyles} className="home">
      <h2>Welcome to My Portfolio</h2>
      <p>
        I am a web developer passionate about creating amazing websites that deliver exceptional user experiences. My goal is to turn ideas into functional and visually appealing digital solutions.
      </p>
      <div style={ctaStyles} className="cta">
        <h4>I have to write more so I'll update it later.</h4>
        <h3>Click on about me and conatct</h3>
      </div>
    </section>
  );
}

export function About() {
  const aboutStyles = {
    padding: '20px',
    textAlign: 'center',
  };

  const skillsStyles = {
    backgroundColor: '#c3d6e4',
    padding: '10px',
    borderRadius: '5px',
    textAlign:'left'
  };

  return (
    <section style={aboutStyles} className="about">
      <h3>My Name is Karan Durugkar</h3>
      <p>
        I am currently pursuing my Btech degree from Vellore Institute of Technology. I have completed my schooling from Pune.
      </p>

      <div style={skillsStyles} className="skills">
        <h3>My Skills</h3>
        <ul>
          <li>Python</li>
          <li>Java</li>
          <li>Front-end Development (HTML, CSS, JavaScript)</li>
          <li>React.js</li>
          <li>MATLAB</li>
        </ul>
      </div>
      <h3>Will Update Later</h3>
    </section>
  );
}


