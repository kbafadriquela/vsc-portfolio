import CodeBlock from "../components/CodeBlock";

const Skills = () => {
   const code = `{
  "HTML": "Intermediate",
  "CSS": "Intermediate",
  "JavaScript": "Intermediate",
  "React": "Beginner",
  "PHP": "Beginner",
  "WordPress": "Expert",
  "Git": "Intermediate",
  "Node.js": "Beginner"
}`
 return (
     <CodeBlock language="json" code={code} />
 )   
}

export default Skills;