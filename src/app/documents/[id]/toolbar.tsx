"use client";
import React from "react";
import { Editor as TipTapEditorInstance } from "@tiptap/react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { SpellCheckIcon, 
        PrinterIcon, 
        RotateCcw, 
        RotateCw, 
        BoldIcon, 
        ItalicIcon, 
        LucideIcon, 
        MessageSquarePlusIcon, 
        Underline, 
        RemoveFormattingIcon
      } from "lucide-react";

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
      <Separator orientation="vertical" className="h-6 w-px bg-gray-300 mx-2" />

      <ToolbarButton
        icon={BoldIcon}
        onClick={() => editor?.chain().focus().toggleBold().run()}
        isActive={editor?.isActive("bold")}
      />
      <ToolbarButton
        icon={ItalicIcon}
        onClick={() => editor?.chain().focus().toggleItalic().run()}
        isActive={editor?.isActive("italic")}
      />
      <ToolbarButton
        icon={Underline}
        onClick={() => editor?.chain().focus().toggleUnderline().run()}
        isActive={editor?.isActive("underline")}
      />
      <ToolbarButton
        icon={MessageSquarePlusIcon}
        onClick={() => console.log("Add comment")}
        isActive= {false}
      />
      <ToolbarButton
        icon={RemoveFormattingIcon}
        onClick={() => editor?.chain().focus().unsetAllMarks().run()}
      />

    </div>
  );
};

const ToolbarButton = ({ onClick, icon: Icon, isActive }: ToolbarButtonProps) => {
  return (
    <button
      onClick={onClick} className={cn("flex items-center justify-center rounded-sm p-1 hover:bg-gray-200",
        isActive ? "bg-gray-200/80" : ""
      )}
    >
      <Icon className="w-4 h-4" />
    </button>
  );
};