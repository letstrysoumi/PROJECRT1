import React from 'react';
import Footer from '../Components/Footer';

export default function Home() {
  return (
    <>
    <main id="main"> <br></br>
     <section id="hero" className="d-flex align-items-center">
    <div className="container d-flex flex-column align-items-center" data-aos="zoom-in" data-aos-delay="100">
      <h1>Kelly Adams</h1>
      <h2>I'm a professional illustrator from San Francisco</h2>
      <a href="about.html" className="btn-about">About Me</a>
    </div>
  </section>
  </main>
  <Footer />
  
  </>
  );
}
