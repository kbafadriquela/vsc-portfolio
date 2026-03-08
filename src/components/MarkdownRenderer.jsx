import ReactMarkdown from "react-markdown";
import CodeBlock from "./CodeBlock";

const MarkdownRenderer = ({ content }) => {
  return (
    <ReactMarkdown
      components={{
        code({ inline, className, children }) {
          const match = /language-(\w+)/.exec(className || "");

          return !inline ? (
            <CodeBlock
              language={match ? match[1] : "javascript"}
              code={String(children).replace(/\n$/, "")}
            />
          ) : (
            <code className={className}>{children}</code>
          );
        }
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;