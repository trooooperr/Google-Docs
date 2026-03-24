"use client";

import { useEffect, useState } from "react";
import { EditorContent, Editor as TipTapEditorInstance } from "@tiptap/react";

interface EditorProps {
  editor: TipTapEditorInstance | null;
}

const Editor = ({ editor }: EditorProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted || !editor) return null; // prevent SSR render

  return (
    <div className="size-full overflow-x-auto bg-[#F9FBFD] px-4 print:p-0 print:bg-white print:overflow-visible">
      <div className="min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0">
        <EditorContent
          editor={editor}
          className="focus:outline-none print:border-0 bg-white border border-[#C7C7C7] flex flex-col min-h-[1504px] w-[816px] pr-14 pb-10 cursor-text"
          style={{ paddingLeft: 30, paddingRight: 30 }}
        />
      </div>
    </div>
  );
};

export default Editor;