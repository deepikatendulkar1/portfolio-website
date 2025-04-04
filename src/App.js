import React from "react";

function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-800 scroll-smooth">
      {/* Navbar */}
      <header className="fixed top-0 w-full bg-white shadow z-50">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">DEEPIKA TENDULKAR</h1>
          <ul className="flex gap-6 text-sm font-medium">
            <li><a href="#about" className="hover:text-blue-600">About</a></li>
            <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Add padding top to push content below the fixed nav */}
      <div className="pt-24">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-white px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
            Hi, I'm <span className="text-blue-600">DEEPIKA </span>
          </h1>
          <p className="text-lg  text-gray-600 max-w-2xl mb-6">
          Software Engineer with expertise in full-stack development, cloud computing, and DevOps. Skilled in ASP.NET, Angular, React.js,
and microservices, with a passion for building scalable solutions and optimizing system performance. STEM OPT eligible, eager to
tackle dynamic challenges and drive innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/Resume.docx"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
            >
              Download Resume
            </a>
            <a
              href="#projects"
              className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-xl hover:bg-blue-50 transition"
            >
              View Projects
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-6 bg-white text-center">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
            I'm currently pursuing a Master's in Computer Science at George Mason University. I’ve built microservices, cloud-based systems, and data-driven tools — blending full-stack skills with data analysis and AI exploration.
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6 bg-gray-100 text-center">
          <h2 className="text-3xl font-bold mb-12">Projects</h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2">AI Caption Generator</h3>
              <p className="text-gray-600 text-sm">
                Transformer-based image captioning system using BLIP/CLIP models, extended for multilingual output.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2">Survey Microservices App</h3>
              <p className="text-gray-600 text-sm">
                Full-stack app with Spring Boot + Angular, Dockerized & deployed on Kubernetes with CI/CD.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2">Spam Mail Classifier</h3>
              <p className="text-gray-600 text-sm">
                Built with Naive Bayes on a dataset of 5k+ emails. Integrated filters & visualizations.
              </p>
            </div>
          </div>
        </section>

        {/* Contact / Footer */}
        <footer id="contact" className="py-16 px-6 bg-white text-center border-t">
          <h2 className="text-2xl font-bold mb-4">Let’s Connect</h2>
          <p className="text-gray-600">Have a project in mind or want to connect? Email me anytime.</p>
          <a
            href="mailto:your.email@example.com"
            className="mt-4 inline-block text-blue-600 font-medium underline hover:text-blue-800"
          >
            your.email@example.com
          </a>
          <p className="mt-8 text-sm text-gray-500">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
