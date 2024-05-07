
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
        <p className='custom-paragraph'>A condimentum vitae sapien pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque in dictum non consectetur a erat nam at. Urna duis convallis convallis tellus id. Mauris ultrices eros in cursus turpis massa tincidunt. Eget magna fermentum iaculis eu non diam phasellus vestibulum lorem. Mus mauris vitae ultricies leo integer malesuada nunc. Mus mauris vitae ultricies leo integer malesuada nunc vel. Ut tortor pretium viverra suspendisse potenti nullam ac tortor. Aliquam eleifend mi in nulla posuere sollicitudin. Porta nibh venenatis cras sed felis eget velit. Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt. Tortor aliquam nulla facilisi cras fermentum. Mi ipsum faucibus vitae aliquet nec ullamcorper.

Nisi vitae suscipit tellus mauris a. Cursus in hac habitasse platea dictumst quisque sagittis purus. A condimentum vitae sapien pellentesque. Sit amet consectetur adipiscing elit ut aliquam purus sit. Adipiscing elit duis tristique sollicitudin nibh. Lorem ipsum dolor sit amet consectetur adipiscing elit duis. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Consequat mauris nunc congue nisi vitae suscipit tellus. Volutpat diam ut venenatis tellus in metus. Morbi tempus iaculis urna id volutpat lacus laoreet. Turpis cursus in hac habitasse platea dictumst quisque sagittis. Phasellus vestibulum lorem sed risus ultricies tristique nulla. Lacus luctus accumsan tortor posuere ac ut. Tempor nec feugiat nisl pretium. Nisl tincidunt eget nullam non nisi. Elementum curabitur vitae nunc sed. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae. Dui sapien eget mi proin sed libero. Donec massa sapien faucibus et molestie ac feugiat. Massa placerat duis ultricies lacus.
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
