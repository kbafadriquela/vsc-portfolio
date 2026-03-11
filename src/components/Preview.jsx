import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import CodeBlock from "../components/CodeBlock";

const Preview = ({ markdown }) => {
  return (
    <div className="preview-content readme-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({ inline, className, children, ...props }) {
            // Detect language from className (e.g., language-js)
            const match = /language-(\w+)/.exec(className || "");

            // If code block (not inline) and language detected, use CodeBlock
            if (!inline && match) {
              return <CodeBlock language={match[1]} code={String(children).trim()} />;
            }

            // Otherwise, render inline code normally
            return (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
};

export default Preview;