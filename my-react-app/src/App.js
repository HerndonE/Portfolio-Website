
import './App.css';
import "./styles.scss";
import CustomNav from "./components/CustomNav.js";


/*
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque in dictum non consectetur a erat nam at. Urna duis convallis convallis tellus id. Mauris ultrices eros in cursus turpis massa tincidunt. Eget magna fermentum iaculis eu non diam phasellus vestibulum lorem. Mus mauris vitae ultricies leo integer malesuada nunc. Mus mauris vitae ultricies leo integer malesuada nunc vel. Ut tortor pretium viverra suspendisse potenti nullam ac tortor. Aliquam eleifend mi in nulla posuere sollicitudin. Porta nibh venenatis cras sed felis eget velit. Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt. Tortor aliquam nulla facilisi cras fermentum. Mi ipsum faucibus vitae aliquet nec ullamcorper.

Nisi vitae suscipit tellus mauris a. Cursus in hac habitasse platea dictumst quisque sagittis purus. A condimentum vitae sapien pellentesque. Sit amet consectetur adipiscing elit ut aliquam purus sit. Adipiscing elit duis tristique sollicitudin nibh. Lorem ipsum dolor sit amet consectetur adipiscing elit duis. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Consequat mauris nunc congue nisi vitae suscipit tellus. Volutpat diam ut venenatis tellus in metus. Morbi tempus iaculis urna id volutpat lacus laoreet. Turpis cursus in hac habitasse platea dictumst quisque sagittis. Phasellus vestibulum lorem sed risus ultricies tristique nulla. Lacus luctus accumsan tortor posuere ac ut. Tempor nec feugiat nisl pretium. Nisl tincidunt eget nullam non nisi. Elementum curabitur vitae nunc sed. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae. Dui sapien eget mi proin sed libero. Donec massa sapien faucibus et molestie ac feugiat. Massa placerat duis ultricies lacus.
*/

function App() {
  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="app-container">
    <CustomNav
      li={[
        ["About", "img/dashboard.svg"],
        ["Experience", "img/restaurant.svg"],
        ["Projects", "img/manage user.svg"]
      ]}
      handleClick={handleClick} // Pass handleClick function to CustomNav
    />
    <div className="sections-container">
      <div id="about" className="section">
        <h2>About</h2>
        <p className='custom-paragraph'> 
              Back in 2001, I laid my eyes on the video game that would ignite my Computer Science career. From that moment, I knew I wanted to share that inspiration with the world. Fast forward to present times, 
							I've had the privilege of serving government entities, the medical industry, and global software corporations by developing software as well as provide quality information technology support.<br /><br />
							Outside of the world of computers, I enjoy camping, hiking, and water-skiing.<br /><br />
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
        <h2>Experience</h2>
        <p className='custom-paragraph'>             
              <div class="experience-entry">
								<div class="experience-start-year">2022 - PRESENT</div>						
								<div class="experience-description">						
									<div class="job-title">Software Engineer - Mighty Oak Medical</div>						
									<ul>
										<li>Designed, developed, and maintained a dynamic full-stack web and mobile application utilizing Flutter, Elixir, React.js, Docker, AWS (S3), and PostgreSQL, serving both internal and over 150 external users via the mobile application. Ensure optimal performance and scalability through ongoing support and maintenance of the application stack.</li>
										<li>Converting pre-existing in house macros (Visual Basic) in SolidWorks 2016 to new maintainable high quality codebases such as Python.</li>
										<li>Collaborate with other developers and engineers to identify opportunities for macro conversion and develop a process for maintaining and improving code quality.</li>
										<li>Stay up-to-date with new developments in SolidWorks and Python to ensure that the converted macros continue to work efficiently and effectively.</li>
										<li>Work closely with stakeholders to understand their needs and identify areas where key clinical-use automation programs can be most effective.</li>
										<li>Proactively identifying areas for improvement aligned with company goals and values.</li>
										<li>Using HTML, CSS, Node.js, JavaScript, and MySQL to build an employee intranet that is hosted on Windows Server. Employees can log in by accessing their PTO and various company information.</li>
										<li>Monitor and maintain the security of the employee intranet to protect sensitive company and employee information.</li>
										<li>Using Python, created numerous system integrations for continuous data collection.</li>
										<li>Conducting comprehensive statistical analysis using Matplotlib and Pandas to inform executive management on company-wide operations.</li>
										<li>Sketching out ideas for automated software test procedures.</li>
										<li>Implemented and using Confluence to keep track and maintain high level documentation.</li>
										<li>Continue to develop expertise in Confluence and other documentation tools to effectively track and maintain project documentation.</li>
										<li>Regularly evaluate the effectiveness of the documentation and identify areas for improvement.</li>
										<li>Using Jira for Agile and SCRUM methodologies.</li>
										<li>Conform and uphold to FDA standards by working closely with stakeholders to ensure that compliance is a priority and that all projects and processes are developed with compliance in mind.</li>
									</ul>
									<div class="tags">
										<span class="tag">Python</span>
										<span class="tag">AWS</span>
										<span class="tag">Javascript</span>
										<span class="tag">Git</span>
										<span class="tag">win32com</span>
										<span class="tag">Flutter</span>
										<span class="tag">VBA</span>
										<span class="tag">Automation</span>
									</div>
								</div>
							</div>

							<div class="experience-entry">						
								<div class="experience-start-year"> July 2021 - Dec 2021</div>						
								<div class="experience-description">						
									<div class="company-names">						
										<div class="job-title">Junior Technical Support Specialist - Atlassian</div>						
									</div>						
									<ul>
										<li>Assisting over 8000 Atlassian employees worldwide by responding to help chat, tickets, and providing level 2 technical support.</li>
										<li>Utilizing Jira to manage and work on assigned ticket orders efficiently.</li>
										<li>Leveraging Jira's integrated reporting and analytics tools to gain valuable insights into team performance and identify areas for enhancement.</li>
										<li>Employing Confluence as a tool for organizing and maintaining comprehensive documentation.</li>
										<li>Utilizing Workspace One and Jamf mobile device management solutions to ensure compliance of employee devices with Atlassian requirements.</li>
										<li>Successfully integrating more than 5 SAML (Security Assertion Markup Language) integrations.</li>
										<li>Streamlining SAML change ticket processes through automation.</li>
									  </ul>
									<div class="tags">
										<span class="tag">Jira</span>
										<span class="tag">Confluence</span>
										<span class="tag">Jira Service Desk</span>
										<span class="tag">Help Desk Support</span>
										<span class="tag">SAML</span>
									</div>
								</div>						
							</div>
    </p>
      </div>
      <div id="projects" className="section">
        <h2>Projects</h2>
        <p className='custom-paragraph'>Lorem ipsum dolor sit amet, vitae suscipit tellus mauris a. Cursus in hac habitasse platea dictumst quisque sagittis purus. A condimentum vitae sapien pellentesque. Sit amet consectetur adipiscing elit ut aliquam purus sit. Adipiscing elit duis tristique sollicitudin nibh. Lorem ipsum dolor sit amet consectetur adipiscing elit duis. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Consequat mauris nunc congue nisi vitae suscipit tellus. Volutpat diam ut venenatis tellus in metus. Morbi tempus iaculis urna id volutpat lacus laoreet. Turpis cursus in hac habitasse platea dictumst quisque sagittis. Phasellus vestibulum lorem sed risus ultricies tristique nulla. Lacus luctus accumsan tortor posuere ac ut. Tempor nec feugiat nisl pretium. Nisl tincidunt eget nullam non nisi. Elementum curabitur vitae nunc sed. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae. Dui sapien eget mi proin sed libero. Donec massa sapien faucibus et molestie ac feugiat. Massa placerat duis ultricies lacus.
        </p>
      </div>
    </div>
  </div>
  );
}

export default App;
