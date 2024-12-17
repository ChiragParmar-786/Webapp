
import './App.css'

const name = "Chirag";

function App() {

  const name = "John doe";
  const profession = "Full Stack Devloper"
  const projects = [
    {
      title : "Proeject One",
      description : "A web application built using React and Node js",
      link: "#"
    },
    {
      title : "Proeject Two",
      description : "An eCommerce platform built using Django",
      link: "#"
    },
    {
      title : "Proeject Three",
      description : "Hotel Management service using Springboot and React",
      link: "#"
    }
  ]

  return (
    <div className='App'>
        <header className='header'>
        <h1>{name}</h1>
        <p>{profession}</p>
        <nav>
          <a href='#about'>About</a>
          <a href='#about'>Projects</a>
          <a href='#about'>Contact</a>
        </nav>
        </header>
        {/*About Section */}
        <section id='about' className='about-section'>
          <h2>About me</h2>
          <p>Hello! I am {name}, a passionate {profession}. I love building applications that solve real world user problems.</p>
        </section>

        {/*Projects Section */}
        <section id='projects' className='project-section'>
          <h2>Projects</h2>
           <div className='project-list'>
            {projects.map((project,index)=> (
              <div key={index} className='project-item'>
                <h3>{project.title}</h3>
                <h3>{project.description}</h3>
                <h3><a href={project.link} target='_blank' rel='noopener noreferner'>View Project</a></h3>
              </div>
            ))}
            </div> 
        </section>

        {/* Contact Section */}
        <section id='contact' className='contact-section'>
          <h2>Contact me</h2>
          <p>If you would like to get in touch, feel free to email me at <a href='mailto:johndoe@example.com'>johndoe@example.com</a></p>
        </section>

         {/* Footer Section */}
         <footer className='footer'>
          <p>2024. All right reserved</p>
         </footer>
    </div>
  )
}

export default App
