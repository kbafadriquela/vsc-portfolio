import CodeBlock from "../components/CodeBlock";

const Contact = () => {
    const code = `export interface Contact {
    name: "Krizia Bianca";
    email: "krzia.dev@gmail.com";
    message: "For more contact info please check the status bar below";
    location: "Makati, PH";
}`
    return (
        <CodeBlock language="jsx" code={code} />
    );
}

export default Contact;