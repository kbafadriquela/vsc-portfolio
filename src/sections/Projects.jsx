import CodeBlock from "../components/CodeBlock";

const Projects = () => {
   const code = `const Projects = () => {
   return(
      <h2>Works</h2>

      <p>Checkout my <em>works</em> below.</p>
         <ol>
            <li>
               <div class="projects" id="project1">
                  <h2>MedFad</h2>
                     <p>MedFad is a responsive and user-friendly website for educator Meden F. Fadriquela to showcase her campus journalism resources for basic education students. Built with WordPress, the site features organized lesson content, downloadable materials, and testimonials, ensuring easy navigation and accessibility across devices.</p>
               </div>
            </li>
            <li>
               <div class="projects" id="project2">
                  <h2>Next Level</h2>
                     <p>Next Level is a responsive landing page inspired from a Figma design, built with HTML5 and TailwindCSS for flexible customization.</p>
                  </div>
            </li>
            <li>
               <div class="projects" id="project3">
                  <h2>Airport Codes PH</h2>
                     <p>Airport Codes PH is a website about Philippine Airports, its corresponding airport codes and the explanation behind each code.</p>
               </div>
            </li>
         </ol>
         )
      };

export default Projects;`
 return (
     <CodeBlock language="jsx" code={code} />
 )   
}

export default Projects;