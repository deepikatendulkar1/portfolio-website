import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-800 scroll-smooth">
      {/* Navbar */}
      <header className="fixed top-0 w-full bg-white shadow z-50">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">DEEPIKA TENDULKAR</h1>
          <ul className="flex gap-6 text-sm font-medium">
            <li><a href="#about" className="hover:text-blue-600">About</a></li>
            <li><a href="#experience" className="hover:text-blue-600">Experience & Skills</a></li>
            <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Content Wrapper */}
      <div className="pt-24">
        {/* Hero */}
        <section
          className="min-h-screen flex flex-col justify-center items-center px-6 text-center bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + '/bg1.jpg'})`,
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            backgroundBlendMode: 'lighten'
          }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight text-gray-900">
            Hi, I'm <span className="text-blue-600">DEEPIKA</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mb-6">
            Software Engineer with expertise in full-stack development, cloud computing, and DevOps. Skilled in ASP.NET, Angular, React.js, and microservices, with a passion for building scalable solutions and optimizing system performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="Resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
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

        {/* Carousel 
        <section className="py-20 px-6 bg-white text-center">
          <h2 className="text-3xl font-bold mb-8">Project Highlights</h2>
          <div className="max-w-4xl mx-auto">
            <Carousel
              showArrows={true}
              showThumbs={false}
              autoPlay={true}
              infiniteLoop={true}
              interval={3000}
              showStatus={false}
            >
              <div>
                <img src={`${process.env.PUBLIC_URL}/carousel1.jpeg`} alt="AI Caption Generator" />
                <p className="legend">AI Caption Generator</p>
              </div>
              <div>
                <img src={`${process.env.PUBLIC_URL}/carousel2.jpg`} alt="Survey Microservices App" />
                <p className="legend">Survey Microservices App</p>
              </div>
              <div>
                <img src={`${process.env.PUBLIC_URL}/carousel3.png`} alt="Spam Mail Classifier" />
                <p className="legend">Spam Mail Classifier</p>
              </div>
            </Carousel>
          </div>
        </section>*/}

        {/* About */}
        <section id="about" className="py-20 px-6 bg-white text-center">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-gray-700 max-w-5xl mx-auto leading-relaxed text-justify">
            I'm currently pursuing a Master's in Computer Science at George Mason University. I’ve built microservices, cloud-based systems, and data-driven tools — blending full-stack skills with data analysis and AI exploration.
          </p>
        </section>
        <section id="education" className="py-20 px-6 bg-gradient-to-br from-white to-blue-50">
  <h2 className="text-3xl font-bold text-center mb-16">Education</h2>

  <div className="max-w-5xl mx-auto space-y-12">

    {/* Mason */}
    <div className="relative border-l-4 border-blue-600 pl-6">
      <h3 className="text-2xl font-semibold text-blue-700">George Mason University</h3>
      <div className="flex flex-wrap justify-between text-sm text-gray-600 mt-1 mb-2">
        <span>Fairfax, VA</span>
        <span>Aug 2023 – May 2025</span>
      </div>
      <p className="text-base text-gray-800 font-medium mb-1">Master’s in Computer Science (GPA: 3.82 / 4.0)</p>
      <p className="text-sm text-gray-700 mb-1">
        <span className="font-semibold">Relevant Courses:</span> Database Systems, Data Mining, Software Design & Architecture, Web Engineering, Component-Based Dev, Deep Learning
      </p>
      <p className="text-sm text-gray-700">
        <span className="font-semibold">Work Authorization:</span> F1 OPT (STEM Eligible)
      </p>
    </div>

    {/* Atharva */}
    <div className="relative border-l-4 border-purple-500 pl-6">
      <h3 className="text-2xl font-semibold text-purple-700">Atharva College of Engineering, Mumbai University</h3>
      <div className="flex flex-wrap justify-between text-sm text-gray-600 mt-1 mb-2">
        <span>Mumbai, India</span>
        <span>Aug 2016 – Oct 2020</span>
      </div>
      <p className="text-base text-gray-800 font-medium">Bachelor of Engineering in Information Technology (GPA: 7.4 / 10.0)</p>
    </div>

  </div>
</section>


        <section id="experience" className="py-20 px-6 bg-white text-left">
          <h2 className="text-3xl font-bold text-center mb-16">Work Experience</h2>
          <div className="max-w-5xl mx-auto relative border-l-4 border-blue-200 pl-6 space-y-12">

             {/* Accenture */}
            <div className="relative">
              <div className="absolute -left-3 top-1 w-6 h-6 bg-blue-600 rounded-full border-4 border-white"></div>
              <div className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-xl transition w-full">
                <h3 className="text-xl font-semibold text-blue-700">Accenture</h3>
                <p className="text-sm text-gray-500 mb-2">Custom Software Engineering Analyst | Sept 2022 – Jul 2023</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-justify">
      <li>Developed and maintained ASP.NET Core and .NET MVC applications with RESTful APIs, boosting system reliability and client satisfaction.</li>
      <li>Built modern, responsive UIs using Angular and collaborated on performance-focused front-end solutions using HTML, CSS, and JavaScript.</li>
      <li>Automated deployments using Azure DevOps pipelines, achieving a 35% increase in release efficiency.</li>
      <li>Migrated key services to Azure Kubernetes Service, ensuring scalability and reducing infrastructure costs.</li>
      <li>Used Git for version control, collaborating across cross-functional teams.</li>
      <li>Implemented robust API testing using Postman, ensuring 99.9% system uptime and security.</li>
    </ul>
              </div>
            </div>
            {/* Accenture */}
            <div className="relative">
              <div className="absolute -left-3 top-1 w-6 h-6 bg-blue-600 rounded-full border-4 border-white"></div>
              <div className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-xl transition w-full">
                <h3 className="text-xl font-semibold text-blue-700">Accenture</h3>
                <p className="text-sm text-gray-500 mb-2">Custom Software Engineering Associate | Jan 2021 – Aug 2022</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-justify">
                <li>Engineered backend modules with C# and ASP.NET MVC, improving operational workflows by 20%.</li>
      <li>Enhanced UI components with accessibility best practices (ARIA), reducing defects by 40%.</li>
      <li>Authored optimized SQL queries and stored procedures, improving data retrieval performance by 15%.</li>
      <li>Contributed to agile sprints and documentation, ensuring effective collaboration and timely delivery.</li>
     </ul>
              </div>
            </div>

                        {/* Aspire Tapes */}
                        <div className="relative">
              <div className="absolute -left-3 top-1 w-6 h-6 bg-blue-600 rounded-full border-4 border-white"></div>
              <div className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-xl transition w-full">
                <h3 className="text-xl font-semibold text-blue-700">Aspire Tapes Pvt Ltd</h3>
                <p className="text-sm text-gray-500 mb-2">Web Developer Intern | May 2023 – Aug 2023</p>
                <p className="text-gray-700 text-sm">
                  Built a responsive website and internal stock management app. Handled frontend, backend integration, and deployment.
                </p>
              </div>
            </div>
          </div>
        </section>
{/* Fancy Skills Section */}
<section id="skills" className="py-20 px-6 bg-gradient-to-br from-white to-blue-50 text-center">
  <h2 className="text-3xl font-bold mb-10">Skills</h2>
  <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
    {[
      "C#", ".NET Core", "ASP.NET", "MVC", "Java", "SQL", "JavaScript", "HTML", "CSS",
      "React", "Angular", "Spring Boot", "Python", "MySQL", "SQL Server", "Oracle",
      "RESTful APIs", "Entity Framework", "LINQ", "Visual Studio", "Azure DevOps",
      "Git", "GitHub", "Postman", "Docker", "Kubernetes", "VS Code", "Azure",
      "AWS (EC2, RDS, S3, SES)", "Azure Kubernetes Service (AKS)", "Agile/Scrum",
      "Problem Solving", "Collaboration", "Time Management", "Communication"
    ].map((skill, index) => (
      <div
        key={index}
        className="relative group bg-white px-4 py-3 rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-transparent hover:border-blue-400"
      >
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-10 transition duration-300 pointer-events-none"></div>
        <p className="text-sm font-semibold text-gray-800 group-hover:text-blue-700 transition duration-300">
          {skill}
        </p>
      </div>
    ))}
  </div>
</section>

        {/* Projects Grid */}
        <section id="projects" className="py-20 px-6 bg-gray-100 text-center">
  <h2 className="text-3xl font-bold mb-12">Projects</h2>
  <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

    {/* Project 1 */}
    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
      <img
        src={`${process.env.PUBLIC_URL}/carousel1.jpeg`} // Replace with your actual image path
        alt="Spam Mail Prediction"
        className="h-48 w-full object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold text-blue-600 mb-2">Spam Mail Prediction Using Naive Bayes Algorithm</h3>
      <p className="text-sm text-gray-500 mb-4">Nov 2024</p>
      <p className="text-gray-700 text-sm text-justify">
        Developed an email classifier using the Naive Bayes algorithm to detect spam emails with 89% accuracy, leveraging a dataset of 5,171 emails.
        Optimized feature extraction by implementing Count Vectorizer with a vocabulary of ~200 unique terms, enhancing text representation for improved classification.
      </p>
    </div>

    {/* Project 2 */}
    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
      <img
        src={`${process.env.PUBLIC_URL}/carousel2.jpg`} // Replace with your actual image path
        alt="Microservices-based Student Survey Application"
        className="h-48 w-full object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold text-blue-600 mb-2">Microservices-based Student Survey Application</h3>
      <p className="text-sm text-gray-500 mb-4">Oct 2024 – Nov 2024</p>
      <p className="text-gray-700 text-sm text-justify">
        Designed with Spring Boot, REST APIs, Vue.js, and MySQL on Amazon RDS for managing survey data, processing 50+ submissions.
        Enabled CRUD operations for campus visit feedback, deployed on a 3-node GCP Kubernetes cluster via Docker and CI/CD pipeline.
        Tested backend functionality with Postman, focusing on 15+ data fields and recommendation likelihood.
      </p>
    </div>

    {/* Project 3 */}
    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
      <img
        src={`${process.env.PUBLIC_URL}/carousel3.png`} // Replace with your actual image path
        alt="Bird Species Identification"
        className="h-48 w-full object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold text-blue-600 mb-2">Bird Species Identification Using Image Mining and CNN Algorithm</h3>
      <p className="text-sm text-gray-500 mb-4">Oct 2019</p>
      <p className="text-gray-700 text-sm text-justify">
        Implemented an innovative image recognition app in collaboration with 2 peers employing CNN techniques.
        Delivered accurate bird species classifications at 85% precision, enhancing field study operations through quick result generation.
      </p>
    </div>

  </div>
</section>


        {/* Footer / Contact */}
        <footer id="contact" className="py-16 px-6 bg-white text-center border-t">
          <h2 className="text-2xl font-bold mb-4">Let’s Connect</h2>
          <p className="text-gray-600">Have a project in mind or want to connect? Email me anytime.</p>
          <a
            href="mailto:your.email@example.com"
            className="mt-4 inline-block text-blue-600 font-medium underline hover:text-blue-800"
          >
            dtendulk@gmu.edu
          </a>
          <p className="mt-8 text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Deepika Tendulkar. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
