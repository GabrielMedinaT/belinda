import React from "react";
import "../components/Showcase.css";
const Showcase = () => {
  return (
    <div>
      <div className="showcaseContainer">
        <div className="imgContainer">
          <img
            src="https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBzeWNob2xvZ2lzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="Imagen de Belinda"
          />
        </div>
        <div className="textContainer">
          <h2>Profesionalidad ante todo</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione a
            labore, vitae consequatur, voluptates molestias commodi facilis
            quisquam sunt pariatur aliquam, vel similique. Incidunt, dolor?
            Ipsam, impedit facilis consequatur porro dignissimos neque
            accusantium asperiores quaerat. Iste incidunt velit dignissimos!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
