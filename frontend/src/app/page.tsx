import React from 'react';

export default function Home () {
  return(
    <main>
        <div className="container-parent">
         <span className='game'>Discover your next Play Games</span>
         <h1 className='game-p'> <span>Gaming</span> </h1>
         <p>Play games with your friends and discover your next favorite game</p>
        <div className="container">
         <div className="btn"><a href="http://localhost:3001/auth/login">Join now</a></div>
        {/* <img src={'./image.svg'} alt="image" /> */}
        </div>
        </div>
    </main>
)
}