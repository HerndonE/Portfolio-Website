import "./App.css";
import "./styles.scss";
import CustomNav from "./components/CustomNav.js";
import { TagContainer } from "./components/TagData.js";
import Tags from "./components/Tags.js";
import { ExpierenceContainer } from "./components/ExpierenceData.js";
import Expierence from "./components/Expierence.js";

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
                  <Expierence
                    AllExpierences={ExpierenceContainer}
                    IndexOfAllExpierences={0}
                  />
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
                  <Expierence
                    AllExpierences={ExpierenceContainer}
                    IndexOfAllExpierences={1}
                  />
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
