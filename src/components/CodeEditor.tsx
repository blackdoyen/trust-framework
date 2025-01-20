import React from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-rust';

interface CodeEditorProps {
  code: string;
  language: string;
  title: string;
}

export function CodeEditor({ code, language, title }: CodeEditorProps) {
  const highlightedCode = Prism.highlight(
    code,
    Prism.languages[language],
    language
  );

  return (
    <div className="code-editor">
      <div className="code-editor-header">
        <div className="code-editor-dot bg-[#FF5F56]"></div>
        <div className="code-editor-dot bg-[#FFBD2E]"></div>
        <div className="code-editor-dot bg-[#27C93F]"></div>
        <span className="ml-2 text-xs text-gray-400">{title}</span>
      </div>
      <div className="code-editor-content">
        <pre>
          <code
            className={`language-${language}`}
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
          />
        </pre>
      </div>
    </div>
  );
}