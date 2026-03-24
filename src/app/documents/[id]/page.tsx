"use client";

import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import ImageResize from "tiptap-extension-resize-image";

import { Toolbar } from "./toolbar";
import Editor from "./editor";

const DocumentsPage = () => {
  const editor = useEditor({
    extensions: [StarterKit, Image, ImageResize],
    content: `<h1 class="text-3xl font-bold mb-4">Welcome to the Editor</h1>`,
    editorProps: {
      attributes: {
        class:
          "focus:outline-none text-black bg-white w-full min-h-screen p-1 cursor-text",
      },
    },
    immediatelyRender: false,
  });

  if (!editor) return null;

  return (
    <div className="min-h-screen bg-white flex flex-col">
        
      <div className="w-full px-4 py-2 border-b border-gray-200">
        <Toolbar editor={editor} />
      </div>

      <div className="flex-1">
        <Editor editor={editor} />
      </div>
    </div>
  );
};

export default DocumentsPage;