import './Header.css'

function Header() {
  return (
    <header>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/640px-International_Pok%C3%A9mon_logo.svg.png" alt="Pokemon Logo" />
      <div className='hh'>
      <h1>Memory Game</h1>
      <h4>Get points by clicking on an image but don't click on any more than once !</h4>
      </div>
      <div className='h'>
        <h3 id='score'> </h3>
        <h3 id='highscore'> </h3>
      </div>
    </header>
  )
}

export default Header