function Header(){
  const name = "John doe";
  const profession = "Full Stack Devloper"

    return (<header className='header'>
        <h1>{name}</h1>
        <p>{profession}</p>
        <nav>
          <a href='#about'>About</a>
          <a href='#about'>Projects</a>
          <a href='#about'>Contact</a>
        </nav>
        </header>)
}

export default Header;