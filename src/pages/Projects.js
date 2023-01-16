import { useState, useEffect } from "react";

function Projects(props) {
  // create state to hold projects
  const [projects, setProjects] = useState(null);

  //create function to make api call
  const getProjectsData = async () => {
    //make api call and get response
    const response = await fetch(props.URL + "projects");
    // turn response into javascript object
    const data = await response.json();
    // set the projects state to the data
    setProjects(data);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => {getProjectsData()}, []);

  // define a function that will return the JSX needed once we get the data

  //anytime I have an href that takes the user away from my page I used the target="_blank" attribute to open another tab instead of taking the user completely away from your page
  const loaded = () => {
    return projects.map((project) => (
      <div>
        <h1>{project.name}</h1>
        <img src={project.image} />
        <a target='_blank' href={project.git}>
          <button>Github</button>
        </a>
        <a target='_blank' href={project.live}>
          <button>live site</button>
        </a>
      </div>
    ));
  };
//added spinner instead of loading text
  return projects ? loaded() : <i class="fa fa-spinner fa-spin" style={{ fontSize:"40px", textAlign: "center", color: 'red', display: 'block'}}></i>;
}

export default Projects;