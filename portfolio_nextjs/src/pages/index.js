function HomePage() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <img
        src="../Dennis.jpg"
        alt="Profile"
        width={'300rem'}
        height={'fit-content'}
        style={{ borderRadius: '50%' }}
      />
      <div id="homeText">
        <h1>Welcome to My Portfolio</h1>
        <p>
          Thank you for visiting my portfolio, where I showcase my journey into the world of
          software development. Fueled by a passion for
          <strong id="homeColor"> problem-solving</strong> and technology, I am dedicated to building
          <span id="textColor"> efficient</span> and
          <strong id="homeColor"> user-friendly </strong> applications. With a foundation in core programming
          concepts, I am continually expanding my skills and knowledge to tackle diverse challenges.
          This space reflects my commitment to growth and highlights the projects that demonstrate
          my learning and creativity.
        </p>
        <p>
          As I progress, I focus on understanding best practices, writing
          <span id="homeColor"> clean code</span>, and exploring
          <span id="textColor"> modern tools and frameworks</span>. Whether it’s crafting responsive web
          applications, developing APIs, or solving real-world problems through technology, I aim to
          contribute meaningfully to any team or project. I invite you to explore my work and
          connect with me to collaborate or share insights on exciting development opportunities.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
