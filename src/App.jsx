import { motion } from "framer-motion";
import "./App.css";

function App() {
  const projects = [
    {
      title: "Voting System",
      description: "A web-based voting app with real-time results.",
      link: "#",
    },

    {
      title: "Quiz Society App",
      description: "Gamified quiz application with leaderboard.",
      link: "#",
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio built with React and Tailwind.",
      link: "#",
    },

    {
      title: "Barcie International Center",
      description: "A web-based voting app with real-time results.",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <section className="p-6 bg-blue-600/70 text-white shadow-md backdrop-blur-sm">
        <h1 className="text-3xl font-bold">My Portfolio</h1>
        <p className="text-sm">React Developer | Backend Enthusiast</p>
      </section>

      {/* About Section */}
      <section className="p-8 text-center">
        <motion.h2
          className="text-2xl font-semibold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          About Me
        </motion.h2>
        <p className="max-w-2xl mx-auto">
          Hi Im Prynce Carlo Clemente, I’m a passionate developer who enjoys
          building interactive web apps and backend systems. I work with React,
          Node.js, and MySQL.
        </p>
      </section>

      {/* Projects Section */}
      <section className="p-8 bg-white">
        <h2 className="text-2xl font-semibold mb-6 text-center">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="p-8 text-center bg-gray-100">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p>
          Email:{" "}
          <a href="pc.clemente11@gmail.com" className="text-blue-600">
            pc.clemente11@gmail.com
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a href="https://github.com/Prynce0711  " className="text-blue-600">
            github.com/Prynce0711
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer className="p-6 bg-blue-600 text-white text-center">
        <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
