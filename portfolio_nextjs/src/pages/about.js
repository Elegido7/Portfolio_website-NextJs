import React from 'react';

const About = () => {
  return (
    <div id="about" style={{ padding: '20px' }}>
      <h1 style={{ color: 'indigo', fontSize: '3rem' }}>Who am I?</h1>
      <img
        src="../Elegido.png"
        alt="about me"
        width={'fit-content'}
        height={'400rem'}
        style={{ borderRadius: '20px' }}
      />
      <p>
        I'm a self-driven, passionate and creative individual who has over the time embarked on my
        journey as a software developer with a passion for problem-solving and creating impactful
        solutions. Driven by curiosity, I developed efficient and user-friendly applications while
        exploring innovative tools and frameworks. Each project deepened my understanding of
        programming concepts and best practices, from building responsive web designs to crafting
        robust APIs. Through continuous learning, I honed my ability to write clean, maintainable
        code and embraced collaboration as a cornerstone of my growth. This portfolio reflects the
        dedication and creativity I brought to every challenge.
      </p>
      <div>
        <h1>Areas of Study</h1>
        <ol>
          <li>Full-Stack Web Development</li>
          <li>Machine Learning and Artificial Intelligence</li>
          <li>Cloud Computing and DevOps</li>
          <li>Mobile Application Development</li>
        </ol>
      </div>
      <div>
        <h1>Some of my Achievements</h1>
        <ol>
          <li>Developed a highly scalable web application used by thousands of users daily.</li>
          <li>
            Contributed to several open-source projects, improving functionality and performance.
          </li>
          <li>Received the 'Best Developer' award at XYZ Company for outstanding performance.</li>
        </ol>
      </div>
    </div>
  );
};

export default About;
