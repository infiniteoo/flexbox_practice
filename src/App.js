import React from "react";
import './App.css'

const App = () => {
  return (
    <>
      <header className="masthead">
        <div className="centered">
          <div className="site-branding">
            <h1 className="site-title">Flexbox Menus</h1>
          </div>
        </div>
      </header>

      <main className="main-area">
        <div className="centered">

        <section className="menu-section">
            <h2 className="menu-heading">Simple Menu</h2>
            <nav className="single-nav menu" >
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Testimonials</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                   

                </ul>
            </nav>

        </section>

        <section className="menu-section">
        <h2 className="menu-heading">
            Advanced Menu
        </h2>
        <nav className='advanced-nav menu'>
            <ul>
                <li>
                    <a href='#'>
                        <div className='icon'>
                            <i class='fas fa-futbol'></i>
                        </div>
                        <div className='text'>
                            football
                            <span> is a great sport!</span>
                        </div>
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <div className='icon'>
                            <i class='fas fa-film'></i>
                        </div>
                        <div className='text'>
                            movies
                            <span> make your life better!</span>
                        </div>
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <div className='icon'>
                            <i class='fas fa-camera'></i>
                        </div>
                        <div className='text'>
                            camera
                            <span> captures great moments!</span>
                        </div>
                    </a>
                </li>
            </ul>
        </nav>


        </section>





        </div>
      </main>
    </>
  );
};

export default App;
