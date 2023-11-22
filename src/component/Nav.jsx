import React from 'react'

const Nav = () => {
  return (
    <>
    <nav>
        <div className="nav-bar">
            <div className="logo">
                <img src="/src/component/media/Vector.png" alt="Buddy" />
                <span className='bud'>Buddy</span>
            </div>
            <div className="page">
                <span className='home'>Home</span>
                <span>cgpa</span>
                <span>about</span>
                <span>faq</span>
            </div>
            <div className="login">
                <a href="#">Login</a>
                <a href="#">
                    <button>signup</button>
                </a>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Nav