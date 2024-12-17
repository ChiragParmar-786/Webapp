function ProjectList(){
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
    )
}

export default ProjectList;