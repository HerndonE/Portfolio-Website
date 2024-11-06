import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
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
import ScrollToTop from "./components/ScrollToTop.js";

const handleClick = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

// Home Component
const Home = () => (
  <>
    <div className="app-container">
      <CustomNav
        li={[
          ["About", "#/"],
          ["Experience", "#/experience"],
          ["Projects", "#/projects"],
        ]}
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
          <a href="#/expierence" className="link">
            <div className="link-other">
              SEE FULL EXPERIENCE HERE
              <span>&#8599;</span>{" "}
            </div>
          </a>
        </div>
        <div id="projects" className="section">
          <p className="custom-paragraph">
            <div class="experience-entry">
              <div class="project-image">
                <img
                  src={`${process.env.PUBLIC_URL}/img/mcd-icon.png`}
                  alt="Project Icon"
                  width={100}
                  height={100}
                />
              </div>
              <div class="experience-description">
                <a
                  href={ProjectsContainer[0][0][3]}
                  target="_blank"
                  rel="noreferrer"
                  className="link"
                >
                  <div class="job-title">
                    {ProjectsContainer[0][0][1]} <span>&#8599;</span>{" "}
                  </div>
                </a>
                {ProjectsContainer[0][0][2]}
                <ProjectTags AllTags={ProjectTagContainer} IndexOfAllTags={0} />
              </div>
            </div>
            <div class="experience-entry">
              <div class="project-image">
                <img
                  src={`${process.env.PUBLIC_URL}/img/weather-app.png`}
                  alt="Project Icon"
                  width={100}
                  height={100}
                />
              </div>
              <div class="experience-description">
                <a
                  href={ProjectsContainer[6][0][3]}
                  target="_blank"
                  rel="noreferrer"
                  className="link"
                >
                  <div class="job-title">
                    {ProjectsContainer[6][0][1]} <span>&#8599;</span>{" "}
                  </div>
                </a>
                {ProjectsContainer[6][0][2]}
                <ProjectTags AllTags={ProjectTagContainer} IndexOfAllTags={6} />
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
                  href={ProjectsContainer[7][0][3]}
                  target="_blank"
                  rel="noreferrer"
                  className="link"
                >
                  <div class="job-title">
                    {ProjectsContainer[7][0][1]} <span>&#8599;</span>{" "}
                  </div>
                </a>
                {ProjectsContainer[7][0][2]}
                <ProjectTags AllTags={ProjectTagContainer} IndexOfAllTags={7} />
              </div>
            </div>
            <a href="#/projects" className="link">
              <div className="link-other">
                SEE FULL PROJECTS HERE
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
const ExpierencePage = () => (
  <>
    <div className="app-container">
      <div className="sections-container">
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
            <div class="experience-entry">
              <div class="experience-start-year"> July 2020 - May 2021</div>
              <div class="experience-description">
                <div class="company-names">
                  <a
                    href="https://www.rpcity.org/"
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    <div class="job-title">
                      Information Systems Technician 1 - City of Rohnert Park{" "}
                      <span>&#8599;</span>{" "}
                    </div>
                  </a>
                </div>
                <Expierence
                  AllExpierences={ExpierenceContainer}
                  IndexOfAllExpierences={2}
                />
                <ExperienceTags
                  AllTags={ExperienceTagContainer}
                  IndexOfAllTags={2}
                />
              </div>
            </div>
            <div class="experience-entry">
              <div class="experience-start-year"> Sept 2019 - Jun 2020</div>
              <div class="experience-description">
                <div class="company-names">
                  <a
                    href="https://csumb.edu/"
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    <div class="job-title">
                      Information Technology Technician - California State
                      University, Monterey Bay <span>&#8599;</span>{" "}
                    </div>
                  </a>
                </div>
                <Expierence
                  AllExpierences={ExpierenceContainer}
                  IndexOfAllExpierences={3}
                />
                <ExperienceTags
                  AllTags={ExperienceTagContainer}
                  IndexOfAllTags={3}
                />
              </div>
            </div>
            <div class="experience-entry">
              <div class="experience-start-year"> Apr 2019 - Aug 2019</div>
              <div class="experience-description">
                <div class="company-names">
                  <a
                    href="https://www.rpcity.org/"
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    <div class="job-title">
                      Information Systems Technician 1 - City of Rohnert Park{" "}
                      <span>&#8599;</span>{" "}
                    </div>
                  </a>
                </div>
                <Expierence
                  AllExpierences={ExpierenceContainer}
                  IndexOfAllExpierences={2}
                />
                <ExperienceTags
                  AllTags={ExperienceTagContainer}
                  IndexOfAllTags={2}
                />
              </div>
            </div>
          </p>
        </div>
      </div>
    </div>
  </>
);

// Project Component
const ProjectsPage = () => {
  const tableStyle = {
    width: "100%", // Set the width of the table
    maxWidth: "1400px", // Set a maximum width for the table
    margin: "50px auto", // Center the table with automatic margins
    borderCollapse: "collapse",
  };

  const thStyle = {
    padding: "10px", // Adjust padding for headers
    color: "#e6e6e6",
    textAlign: "left",
    borderBottom: "2px solid #ddd", // Horizontal line below header
  };

  const tdStyle = {
    padding: "20px", // Padding for table cells
    borderBottom: "1px solid #ddd", // Horizontal line below each cell
  };

  return (
    <>
      <div className="app-container">
        <div className="sections-container">
          <div class="table-entry">
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={thStyle}>Year</th>
                  <th style={thStyle}>Project Name</th>
                  <th style={thStyle}>Description</th>
                  <th style={thStyle}>Built/Designed with</th>
                  <th style={thStyle}>Project Link</th>
                </tr>
              </thead>
              <tbody>
                {ProjectsContainer.map((project, projectIndex) => (
                  <tr key={projectIndex}>
                    <td style={tdStyle}>{project[0][0]}</td>
                    <td style={{ ...tdStyle, color: "#e6e6e6" }}>
                      {project[0][1]}
                    </td>
                    <td style={tdStyle}>{project[0][2]}</td>
                    <td style={tdStyle}>
                      <ProjectTags
                        AllTags={ProjectTagContainer}
                        IndexOfAllTags={projectIndex}
                      />
                    </td>
                    <td style={tdStyle}>
                      <a
                        href={project[0][3]}
                        target="_blank"
                        rel="noreferrer"
                        className="link"
                      >
                        <div class="project-link">
                          {project[0][3]} <span>&#8599;</span>{" "}
                        </div>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

// NotFound Component
const NotFound = () => <h2>404 - Page Not Found</h2>;

// App Component
const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="expierence" element={<ExpierencePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
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
