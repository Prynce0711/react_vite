import React from "react";
import "./App.css";
import Header from "./assets/Header";
import Contact from "./assets/Contact";
import Footer from "./assets/Footer";
import ImageCard from "./assets/Image"; // make sure file name matches (ImageCard.jsx)

function App() {
  return (
    <div className="app-container">
      <Header />

      <main className="main-content">
        <h2>Hi, I’m Prynce Carlo Clemente</h2>

        <div className="profile-picture">
          <img src="/profile.jpg" />
          <h4>Welcome to my portfolio! 👋</h4>

          <p>
            I'm a passionate React developer with a knack for building dynamic
            and responsive web applications. Explore my projects and feel free
            to reach out!
          </p>
        </div>
      </main>

      <section className="projects-container">
        <ImageCard
          image="/sample1.jpg"
          title="Sample Project 1"
          description="This is a sample description for the first image card."
        />
        <ImageCard
          image="/sample2.jpg"
          title="Sample Project 2"
          description="This is a sample description for the second image card."
        />

        <ImageCard
          image="/sample2.jpg"
          title="Sample Project 2"
          description="This is a sample description for the second image card."
        />
      </section>

      <section className="contact-container">
        <Contact />
      </section>

     
      <Footer />
    </div>
  );
}

export default App;
