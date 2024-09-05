import "./App.css";
import "./styles.scss";
import CustomNav from "./components/CustomNav.js";
import { TagContainer } from "./components/TagData.js";

import Tags from "./components/Tags.js";

function App() {
  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div className="app-container">
        <CustomNav
          li={[["About"], ["Experience"], ["Projects"]]}
          handleClick={handleClick} // Pass handleClick function to CustomNav
        />
        <div className="sections-container">
          <div id="about" className="section">
            <p className="custom-about">
              Back in 2001, I laid my eyes on the video game that would ignite
              my Computer Science career. From that moment, I knew I wanted to
              share that inspiration with the world. Fast forward to present
              times, I've had the privilege of serving government entities, the
              medical industry, and global software corporations by developing
              software as well as provide quality information technology
              support. Outside of the world of computers, I enjoy camping,
              hiking, and water-skiing.
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
                      Software Engineer - Mighty Oak Medical
                      <span>&#8599;</span>
                    </div>
                  </a>
                  <ul>
                    <li>
                      Designed, developed, and maintained a dynamic full-stack
                      web and mobile application utilizing Flutter, Elixir,
                      React.js, Docker, AWS (S3), and PostgreSQL, serving both
                      internal and over 150 external users via the mobile
                      application. Ensure optimal performance and scalability
                      through ongoing support and maintenance of the application
                      stack.
                    </li>
                    <li>
                      Converting pre-existing in house macros (Visual Basic) in
                      SolidWorks 2016 to new maintainable high quality codebases
                      such as Python.
                    </li>
                    <li>
                      Collaborate with other developers and engineers to
                      identify opportunities for macro conversion and develop a
                      process for maintaining and improving code quality.
                    </li>
                    <li>
                      Stay up-to-date with new developments in SolidWorks and
                      Python to ensure that the converted macros continue to
                      work efficiently and effectively.
                    </li>
                    <li>
                      Work closely with stakeholders to understand their needs
                      and identify areas where key clinical-use automation
                      programs can be most effective.
                    </li>
                    <li>
                      Proactively identifying areas for improvement aligned with
                      company goals and values.
                    </li>
                    <li>
                      Using HTML, CSS, Node.js, JavaScript, and MySQL to build
                      an employee intranet that is hosted on Windows Server.
                      Employees can log in by accessing their PTO and various
                      company information.
                    </li>
                    <li>
                      Monitor and maintain the security of the employee intranet
                      to protect sensitive company and employee information.
                    </li>
                    <li>
                      Using Python, created numerous system integrations for
                      continuous data collection.
                    </li>
                    <li>
                      Conducting comprehensive statistical analysis using
                      Matplotlib and Pandas to inform executive management on
                      company-wide operations.
                    </li>
                    <li>
                      Sketching out ideas for automated software test
                      procedures.
                    </li>
                    <li>
                      Implemented and using Confluence to keep track and
                      maintain high level documentation.
                    </li>
                    <li>
                      Continue to develop expertise in Confluence and other
                      documentation tools to effectively track and maintain
                      project documentation.
                    </li>
                    <li>
                      Regularly evaluate the effectiveness of the documentation
                      and identify areas for improvement.
                    </li>
                    <li>Using Jira for Agile and SCRUM methodologies.</li>
                    <li>
                      Conform and uphold to FDA standards by working closely
                      with stakeholders to ensure that compliance is a priority
                      and that all projects and processes are developed with
                      compliance in mind.
                    </li>
                  </ul>
                  <Tags AllTags={TagContainer} IndexOfAllTags={0} />
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
                  <ul>
                    <li>
                      Assisting over 8000 Atlassian employees worldwide by
                      responding to help chat, tickets, and providing level 2
                      technical support.
                    </li>
                    <li>
                      Utilizing Jira to manage and work on assigned ticket
                      orders efficiently.
                    </li>
                    <li>
                      Leveraging Jira's integrated reporting and analytics tools
                      to gain valuable insights into team performance and
                      identify areas for enhancement.
                    </li>
                    <li>
                      Employing Confluence as a tool for organizing and
                      maintaining comprehensive documentation.
                    </li>
                    <li>
                      Utilizing Workspace One and Jamf mobile device management
                      solutions to ensure compliance of employee devices with
                      Atlassian requirements.
                    </li>
                    <li>
                      Successfully integrating more than 5 SAML (Security
                      Assertion Markup Language) integrations.
                    </li>
                    <li>
                      Streamlining SAML change ticket processes through
                      automation.
                    </li>
                  </ul>
                  <Tags AllTags={TagContainer} IndexOfAllTags={1} />
                </div>
              </div>
            </p>
            SEE FULL RESUME HERE
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
                  A Discord bot communicates with people and players between
                  Discord and Minecraft.
                  <Tags AllTags={TagContainer} IndexOfAllTags={2} />
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
                  A simple way for users to use a send-only sendmail emulator.
                  <Tags AllTags={TagContainer} IndexOfAllTags={3} />
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
                  Introducing 5 new missions for Battlezone Combat Commander;
                  follow the ISDF on their pursuit to destroy the Scion. This
                  fan made campaign branches parallel with the ISDF campaign
                  bringing a new adventure for the game.
                  <Tags AllTags={TagContainer} IndexOfAllTags={4} />
                </div>
                SEE FULL PROJECTS HERE
              </div>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
