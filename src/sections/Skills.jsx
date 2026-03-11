import CodeBlock from "../components/CodeBlock";

const Skills = () => {
   const code = `const skills = [
  {
    category: "Languages",
    items: ["HTML", "CSS", "JavaScript", "PHP"]
  },
  {
    category: "WordPress",
    items: ["Custom Themes", "Plugin Integration", "ACF", "Gutenberg"]
  },
  {
    category: "Frameworks",
    items: ["React.js", "Bootstrap", "Tailwind CSS"]
  },
  {
    category: "Page Builders",
    items: ["Elementor", "Divi"]
  },
  {
    category: "Tools",
    items: ["Git", "VS Code", "Figma", "Adobe XD"]
  }
];

export default function Skills() {
  return (
    <section className="skills">
      <h2>Skills</h2>

      {skills.map((skill) => (
        <div key={skill.category} className="skill-category">
          <h3>{skill.category}</h3>

          <ul>
            {skill.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}`
 return (
     <CodeBlock language="jsx" code={code} />
 )   
}

export default Skills;