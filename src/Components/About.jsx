function About() {
  const name = "John doe";
  const profession = "Full Stack Devloper";

    return (
        <section id='about' className='about-section'>
        <h2>About me</h2>
        <p>Hello! I am {name}, a passionate {profession}. I love building applications that solve real world user problems.</p>
      </section>
    );
}

export default About;

