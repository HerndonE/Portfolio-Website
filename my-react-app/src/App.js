import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import "./App.css";
import "./styles.scss";
import CustomNav from "./components/CustomNav.js";
import { ExperienceTagContainer } from "./components/Expierence/ExpierenceTagData.js";
import ExperienceTags from "./components/Expierence/ExpierenceTags.js";
import { ExpierenceContainer } from "./components/Expierence/ExpierenceData.js";
import Expierence from "./components/Expierence/Expierence.js";
import { ProjectTagContainer } from "./components/Projects/ProjectTagData.js";
import ProjectTags from "./components/Projects/ProjectTags.js";
import { ProjectsContainer } from "./components/Projects/ProjectsData.js";
import Projects from "./components/Projects/Projects.js";

const handleClick = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

// Home Component
//<Navbar />
const Home = () => (
  <>
    <div className="app-container">
      <CustomNav
        li={[["About"], ["Experience"], ["Projects"]]}
        handleClick={handleClick} // Pass handleClick function to CustomNav
        // <a href="C++" />{" "} <img src="https://img.shields.io/badge/c++%20-%2300599C.svg?&style=for-the-badge&logo=c%2B%2B&ogoColor=white" /> <a href="Python" />{" "}
      />
      <div className="sections-container">
        <div id="about" className="section">
          <p className="custom-about">
            Back in 2001, I laid my eyes on the video game that would ignite my
            Computer Science career. From that moment, I knew I wanted to share
            that inspiration with the world. Fast forward to present times, I've
            had the privilege of serving government entities, the medical
            industry, and global software corporations by developing software as
            well as provide quality information technology support. Outside of
            the world of computers, I enjoy camping, hiking, and water-skiing.
            <br />
            <br />
            Here are the current technologies I have been working with:
            <br />
            <div class="ul-modified">
              <li>Python</li>
              <li>AWS (EC2)</li>
              <li>Flutter</li>
              <li>Discord.py</li>
              <li>SQL</li>
              <li>React</li>
            </div>
          </p>
        </div>
        <div id="experience" className="section">
          <p className="custom-paragraph">
            <div class="experience-entry">
              <div class="experience-start-year">Jan 2022 - PRESENT</div>
              <div class="experience-description">
                <a
                  href="https://mightyoakmedical.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="link"
                >
                  <div className="job-title">
                    Software Engineer - Mighty Oak Medical <span>&#8599;</span>
                  </div>
                </a>
                <Expierence
                  AllExpierences={ExpierenceContainer}
                  IndexOfAllExpierences={0}
                />
                <ExperienceTags
                  AllTags={ExperienceTagContainer}
                  IndexOfAllTags={0}
                />
              </div>
            </div>
            <div class="experience-entry">
              <div class="experience-start-year"> July 2021 - Dec 2021</div>
              <div class="experience-description">
                <div class="company-names">
                  <a
                    href="https://www.atlassian.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    <div class="job-title">
                      Junior Technical Support Specialist - Atlassian{" "}
                      <span>&#8599;</span>{" "}
                    </div>
                  </a>
                </div>
                <Expierence
                  AllExpierences={ExpierenceContainer}
                  IndexOfAllExpierences={1}
                />
                <ExperienceTags
                  AllTags={ExperienceTagContainer}
                  IndexOfAllTags={1}
                />
              </div>
            </div>
          </p>
          <a
            href="ADD NEW PAGE HERE"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            <div className="link-other">
              SEE FULL EXPIERENCE <NavToXp />
              <span>&#8599;</span>{" "}
            </div>
          </a>
        </div>
        <div id="projects" className="section">
          <p className="custom-paragraph">
            <div class="experience-entry">
              <div class="project-image">
                <img
                  src={`/img/mcd-icon.png`}
                  alt="Project Icon"
                  width={100}
                  height={100}
                />
              </div>
              <div class="experience-description">
                <a
                  href="https://github.com/HerndonE/Vanilla-Minecraft-Discord-Bot"
                  target="_blank"
                  rel="noreferrer"
                  className="link"
                >
                  <div class="job-title">
                    Discord Bot for Vanilla Minecraft (Java Edition){" "}
                    <span>&#8599;</span>{" "}
                  </div>
                </a>
                <Projects
                  AllProjects={ProjectsContainer}
                  IndexOfAllProjects={0}
                />
                <ProjectTags AllTags={ProjectTagContainer} IndexOfAllTags={0} />
              </div>
            </div>
            <div class="experience-entry">
              <div class="project-image">
                <img
                  src={`/img/weather-app.png`}
                  alt="Project Icon"
                  width={100}
                  height={100}
                />
              </div>
              <div class="experience-description">
                <a
                  href="https://github.com/HerndonE/SSMTP-Messenger"
                  target="_blank"
                  rel="noreferrer"
                  className="link"
                >
                  <div class="job-title">
                    SSMTP Messenger <span>&#8599;</span>{" "}
                  </div>
                </a>
                <Projects
                  AllProjects={ProjectsContainer}
                  IndexOfAllProjects={1}
                />
                <ProjectTags AllTags={ProjectTagContainer} IndexOfAllTags={1} />
              </div>
            </div>
            <div class="experience-entry">
              <div class="project-image">
                <img
                  src={`https://raw.githubusercontent.com/HerndonE/Battlezone-Missions/master/BZCC%20Lost%20Missions%20Campaign/Images/LMBZCCLogo.png`}
                  alt="Project Icon"
                  width={200}
                  height={100}
                />
              </div>
              <div class="experience-description">
                <a
                  href="https://github.com/HerndonE/Battlezone-Missions"
                  target="_blank"
                  rel="noreferrer"
                  className="link"
                >
                  <div class="job-title">
                    Battlezone Combat Commander: Lost Missions Campaign{" "}
                    <span>&#8599;</span>{" "}
                  </div>
                </a>
                <Projects
                  AllProjects={ProjectsContainer}
                  IndexOfAllProjects={2}
                />
                <ProjectTags AllTags={ProjectTagContainer} IndexOfAllTags={2} />
              </div>
            </div>
            <a
              href="/products"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              <div className="link-other">
                SEE FULL PROJECTS <NavToProjects />
                <span>&#8599;</span>
              </div>
            </a>
          </p>
        </div>
      </div>
    </div>
  </>
);

// Expierence Component
const ExpierencePage = () => <h2>Expierence Page</h2>;

// Project Component
const ProjectsPage = () => <h2>Project Page</h2>;

// NotFound Component
const NotFound = () => <h2>404 - Page Not Found</h2>;

// Navbar Component
const NavToXp = () => {
  const location = useLocation();

  // Hide navbar on Expierence page
  if (location.pathname === "/expierence") {
    return null;
  }

  return (
    <nav>
      <Link to="/expierence">HERE</Link>
    </nav>
  );
};

// Navbar Component
const NavToProjects = () => {
  const location = useLocation();

  // Hide navbar on Projects page
  if (location.pathname === "/projects") {
    return null;
  }

  return (
    <nav>
      <Link to="/projects">HERE</Link>
    </nav>
  );
};

// App Component
const App = () => {
  const location = useLocation();
  const hideContent = location.pathname === "/expierence";

  return (
    <div>
      {!hideContent && (
        <Routes>
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
      {hideContent && <ExpierencePage />}
    </div>
  );
};

// Wrapping App in Router
const Root = () => (
  <Router>
    <App />
  </Router>
);

export default Root;
