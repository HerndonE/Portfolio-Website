import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./styles.scss";
import CustomNav from "./components/CustomNav.js";
import CustomNavXp from "./components/CustomNavExp.js";
import { ExperienceTagContainer } from "./components/Expierence/ExpierenceTagData.js";
import ExperienceTags from "./components/Expierence/ExpierenceTags.js";
import { ExpierenceContainer } from "./components/Expierence/ExpierenceData.js";
import Expierence from "./components/Expierence/Expierence.js";
import { ProjectTagContainer } from "./components/Projects/ProjectTagData.js";
import ProjectTags from "./components/Projects/ProjectTags.js";
import { ProjectsContainer } from "./components/Projects/ProjectsData.js";
import ScrollToTop from "./components/ScrollToTop.js";

const ProjectOneIndex = 2;
const ProjectTwoIndex = 8;
const ProjectThreeIndex = 9;

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
      <div class="hide-on-mobile">
        <CustomNav
          li={[
            ["About", "#/about"],
            ["Experience", "#/experience"],
            ["Projects", "#/projects"],
          ]}
          handleClick={handleClick} // Pass handleClick function to CustomNav
          /*
        <a href="cpp">
                <img
                  src="https://img.shields.io/badge/c++%20-%2300599C.svg?&style=for-the-badge&logo=c%2B%2B&ogoColor=white"
                  alt="cpp"
                />
              </a>
        */
        />
      </div>
      <div className="sections-container">
        <div className="custom-about">
          <div className="aligned-content">
            <div class="show-on-mobile">
              <div class="name">
                <h1>Ethan Herndon</h1>
              </div>
              <br />
              <div class="role">
                <h3>Senior Software Engineer</h3>
              </div>
              <br />
              <p>
                Developing new quality codebases, programs, and full-stack
                applications from the ground up.
              </p>
            </div>
            <div class="divider">
              <h3>About</h3>
            </div>
            <p>
              Back in 2001, I laid my eyes on the video game that would ignite
              my Computer Science career. From that moment, I knew I wanted to
              share that inspiration with the world. Fast forward to present
              times, I've had the privilege of serving government entities, the
              medical industry, and global software corporations by developing
              software as well as providing quality IT support. Outside of the
              world of computers, I enjoy camping, hiking, and water-skiing.
            </p>

            <p>Here are the current technologies I have been working with:</p>

            <ul className="ul-modified">
              <li>Python</li>
              <li>AWS (EC2)</li>
              <li>Flutter</li>
              <li>Discord.py</li>
              <li>SQL</li>
              <li>React</li>
            </ul>
          </div>
        </div>
        <div id="experience" className="section">
          <p className="custom-paragraph">
            <div class="experience-entry">
              <div class="experience-start-year">Jan 2022 - Jul 2025</div>
              <div class="experience-description">
                <div class="divider">
                  <h3>Experience</h3>
                </div>
                <div class="year-span">
                  <span>Jan 2022 - Jul 2025</span>
                </div>
                <a
                  href="https://mightyoakmedical.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="link"
                >
                  <div className="job-title">
                    Senior Software Engineer - Mighty Oak Medical{" "}
                    <span>&#8599;</span>
                  </div>
                </a>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <h3 style={{ marginRight: "8px" }}>Software Engineer</h3>
                  <span>Jan 2022 - Jan 2025</span>
                </div>
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
                <div class="year-span">
                  <span>July 2021 - Dec 2021</span>
                </div>
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
              <div class="hide-project-image">
                <div class="project-image">
                  <img
                    src={`${process.env.PUBLIC_URL}/img/mcd-icon.png`}
                    alt="Project Icon"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
              <div class="experience-description">
                <div class="divider">
                  <h3>Projects</h3>
                </div>
                <a
                  href={ProjectsContainer[ProjectOneIndex][0][3]}
                  target="_blank"
                  rel="noreferrer"
                  className="link"
                >
                  <div class="job-title">
                    {ProjectsContainer[ProjectOneIndex][0][1]}{" "}
                    <span>&#8599;</span>{" "}
                  </div>
                  {ProjectsContainer[ProjectOneIndex][0][2]}
                </a>
                <ProjectTags
                  AllTags={ProjectTagContainer}
                  IndexOfAllTags={ProjectOneIndex}
                />
              </div>
            </div>
            <div class="experience-entry">
              <div class="hide-project-image">
                <div class="project-image">
                  <img
                    src={`${process.env.PUBLIC_URL}/img/weather-app.png`}
                    alt="Project Icon"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
              <div class="experience-description">
                <a
                  href={ProjectsContainer[ProjectTwoIndex][0][3]}
                  target="_blank"
                  rel="noreferrer"
                  className="link"
                >
                  <div class="job-title">
                    {ProjectsContainer[ProjectTwoIndex][0][1]}{" "}
                    <span>&#8599;</span>{" "}
                  </div>
                  {ProjectsContainer[ProjectTwoIndex][0][2]}
                </a>

                <ProjectTags
                  AllTags={ProjectTagContainer}
                  IndexOfAllTags={ProjectTwoIndex}
                />
              </div>
            </div>
            <div class="experience-entry">
              <div class="hide-project-image">
                <div class="project-image">
                  <img
                    src={`https://raw.githubusercontent.com/HerndonE/Battlezone-Missions/master/BZCC%20Lost%20Missions%20Campaign/Images/LMBZCCLogo.png`}
                    alt="Project Icon"
                    width={200}
                    height={100}
                  />
                </div>
              </div>
              <div class="experience-description">
                <a
                  href={ProjectsContainer[ProjectThreeIndex][0][3]}
                  target="_blank"
                  rel="noreferrer"
                  className="link"
                >
                  <div class="job-title">
                    {ProjectsContainer[ProjectThreeIndex][0][1]}{" "}
                    <span>&#8599;</span>{" "}
                  </div>
                  {ProjectsContainer[ProjectThreeIndex][0][2]}
                </a>

                <ProjectTags
                  AllTags={ProjectTagContainer}
                  IndexOfAllTags={ProjectThreeIndex}
                />
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
      <div class="nav-footer-icons-mobile">
        <a href="https://github.com/HerndonE" target="_blank" rel="noreferrer">
          <i class="bi bi-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/ethan-herndon/"
          target="_blank"
          rel="noreferrer"
        >
          <i class="bi bi-linkedin"></i>
        </a>
      </div>
    </div>
  </>
);

// Expierence Component
const ExpierencePage = () => (
  <>
    <div className="app-container">
      <div class="hide-on-mobile">
        <CustomNavXp
          li={[
            ["Experience", "#/experience"],
            ["Education", "#/education"],
            ["Achievements", "#/achievements"],
          ]}
          handleClick={handleClick}
        />
      </div>
      <div className="sections-container">
        <div id="experience" className="section">
          <p className="custom-paragraph">
            <div class="experience-entry">
              <div class="experience-start-year">Jan 2022 - Jul 2025</div>
              <div class="experience-description">
                <a href="/" rel="noreferrer" className="link">
                  <div className="job-title">
                    <span>&#8592;</span> Home
                  </div>
                </a>
                <div class="divider">
                  <h3>Experience</h3>
                </div>
                <div class="year-span">
                  <span>Jan 2022 - Jul 2025</span>
                </div>
                <a
                  href="https://mightyoakmedical.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="link"
                >
                  <div className="job-title">
                    Senior Software Engineer - Mighty Oak Medical{" "}
                    <span>&#8599;</span>
                  </div>
                </a>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <h3 style={{ marginRight: "8px" }}>Software Engineer</h3>
                  <span>Jan 2022 - Jan 2025</span>
                </div>
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
                <div class="year-span">
                  <span>July 2021 - Dec 2021</span>
                </div>
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
                <div class="year-span">
                  <span>July 2020 - May 2021</span>
                </div>
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
                <div class="year-span">
                  <span>Sept 2019 - Jun 2020</span>
                </div>
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
                <div class="year-span">
                  <span>Apr 2019 - Aug 2019</span>
                </div>
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
        <div id="education" className="section">
          <p className="custom-paragraph">
            <div class="experience-entry">
              <div class="experience-start-year">Aug 2019 - June 2021</div>
              <div class="experience-description">
                <div class="divider">
                  <h3>Education</h3>
                </div>
                <div class="year-span">
                  <span>Aug 2019 - Jun 2021</span>
                </div>
                <a
                  href="https://csumb.edu/"
                  target="_blank"
                  rel="noreferrer"
                  className="link"
                >
                  <div className="job-title">
                    B.S. Computer Science - California State Monetery Bay{" "}
                    <span>&#8599;</span>
                  </div>
                </a>
              </div>
            </div>
          </p>
          <p className="custom-paragraph">
            <div class="experience-entry">
              <div class="experience-start-year">Jun 2015 - Jun 2019</div>
              <div class="experience-description">
                <div class="year-span">
                  <span>Jun 2015 - Jun 2019</span>
                </div>
                <a
                  href="https://www.santarosa.edu/"
                  target="_blank"
                  rel="noreferrer"
                  className="link"
                >
                  <div className="job-title">
                    A.S. Computer Science - Santa Rosa Junior College{" "}
                    <span>&#8599;</span>
                    <p></p>
                    A.S. Natural Science<p></p>
                    A.A. Communications<p></p>
                    Cisco Networking Certificate<p></p>
                  </div>
                </a>
              </div>
            </div>
          </p>
        </div>

        <div id="achievements" className="section">
          <p className="custom-paragraph">
            <div class="experience-entry">
              <div class="experience-start-year">Dec 2010</div>
              <div class="experience-description">
                <div class="divider">
                  <h3>Achievements</h3>
                </div>
                <div class="year-span">
                  <span>Dec 2010</span>
                </div>
                <a
                  href="https://www.scouting.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="link"
                >
                  <div className="job-title">
                    Eagle Scout - Boy Scouts of America <span>&#8599;</span>
                  </div>
                </a>
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
    margin: "20px auto", // Center the table with automatic margins
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

  const tableStyleMobile = {
    borderCollapse: "collapse",
    marginLeft: "20px",
    marginRight: "10px",
  };

  const thStyleMobile = {
    padding: "10px",
    color: "#e6e6e6",
    textAlign: "left",
    borderBottom: "1px solid #ddd",
  };

  const tdStyleMobile = {
    padding: "5px",
    borderBottom: "1px solid #ddd",
  };

  return (
    <>
      <div className="app-container">
        <div className="sections-container">
          <div class="hide-on-mobile">
            <a href="/" rel="noreferrer" className="link">
              <div className="job-title" style={{ paddingTop: "20px" }}>
                <span>&#8592;</span> Home
              </div>
            </a>

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
                        {typeof project[0][3] === "string" &&
                        project[0][3] !== "" ? (
                          <a
                            href={project[0][3]}
                            target="_blank"
                            rel="noreferrer"
                            className="link"
                          >
                            <div className="project-link">
                              {project[0][3]} <span>&#8599;</span>
                            </div>
                          </a>
                        ) : (
                          <div className="project-link">No link available.</div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div class="show-on-mobile">
            <a href="/" rel="noreferrer" className="link">
              <div
                className="job-title"
                style={{ paddingTop: "20px", marginLeft: "20px" }}
              >
                <span>&#8592;</span> Home
              </div>
            </a>
            <div class="table-entry">
              <table style={tableStyleMobile}>
                <thead>
                  <tr>
                    <th style={thStyleMobile}>Year</th>
                    <th style={thStyleMobile}>Project</th>
                    <th style={thStyleMobile}>Project Link</th>
                  </tr>
                </thead>
                <tbody>
                  {ProjectsContainer.map((project, projectIndex) => (
                    <tr key={projectIndex}>
                      <td style={tdStyleMobile}>{project[0][0]}</td>
                      <td style={{ ...tdStyleMobile, color: "#e6e6e6" }}>
                        {project[0][1]}
                      </td>
                      <td style={tdStyleMobile}>
                        {typeof project[0][3] === "string" &&
                        project[0][3] !== "" ? (
                          <a
                            href={project[0][3]}
                            target="_blank"
                            rel="noreferrer"
                            className="link"
                          >
                            <div className="project-link-mobile">
                              {project[0][3]} <span>&#8599;</span>
                            </div>
                          </a>
                        ) : (
                          <div className="project-link-mobile">
                            No link available.
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
