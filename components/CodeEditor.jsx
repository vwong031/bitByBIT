import React from "react";

const CodeEditor = () => {
  return (
    <div className="p-6 w-full h-full">
      <textarea className="text-code-white bg-transparent w-full resize-none border-white border-2 focus:outline-none"></textarea>
    </div>
  );
};

export default CodeEditor;
