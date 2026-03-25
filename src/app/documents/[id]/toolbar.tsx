"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import {  SpellCheckIcon, PrinterIcon, RotateCcw, RotateCw } from "lucide-react";
import { Editor as TipTapEditorInstance } from "@tiptap/react";

interface ToolbarButtonProps {
  onClick?: () => void;
  icon: LucideIcon;
  isActive?: boolean;
}

interface ToolbarProps {
  editor: TipTapEditorInstance | null;
}

export const Toolbar = ({ editor }: ToolbarProps) => {
  const [, setUpdate] = React.useState(0);

  React.useEffect(() => {
    if (!editor) return;

    const listener = () => setUpdate(u => u + 1);
    editor.on("update", listener);
    editor.on("transaction", listener);

    return () => {
      editor.off("update", listener);
      editor.off("transaction", listener);
    };
  }, [editor]);

  return (
    <div className="flex items-center gap-x-1 p-2 bg-gray-50 border-b border-gray-200">

      <ToolbarButton icon={SpellCheckIcon} onClick={() => {
        const current = editor?.view.dom.getAttribute("spellcheck");
        editor?.view.dom.setAttribute("spellcheck", current === "true" ? "false" : "true");
      }} />
      <ToolbarButton icon={PrinterIcon} onClick={() => window.print()} />
      
      <ToolbarButton
        icon={RotateCcw}
        onClick={() => editor?.chain().focus().undo().run()}
        isActive={editor?.can().undo()}
      />
      <ToolbarButton
        icon={RotateCw}
        onClick={() => editor?.chain().focus().redo().run()}
        isActive={editor?.can().redo()}
      />
    </div>
  );
};

const ToolbarButton = ({ onClick, icon: Icon, isActive }: ToolbarButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center justify-center rounded-sm p-1 hover:bg-gray-200",
        isActive ? "bg-gray-200/80" : ""
      )}
    >
      <Icon className="w-4 h-4" />
    </button>
  );
};