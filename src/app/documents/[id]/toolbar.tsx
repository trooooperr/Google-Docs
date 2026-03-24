"use client";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { File, Edit, Eye, Plus, Type, Wrench } from "lucide-react";

interface ToolbarButtonProps {
    onClick?: () => void;
    icon: LucideIcon;
    isActive?: boolean;
}
export const Toolbar = () => {
    return (
        <div className="flex items-center gap-x-1 p-2">
            <ToolbarButton icon={File} onClick={() => {}} />
            <ToolbarButton icon={Edit} onClick={() => {}} />
            <ToolbarButton icon={Eye} onClick={() => {}} />
            <ToolbarButton icon={Plus} onClick={() => {}} />
            <ToolbarButton icon={Type} onClick={() => {}} />
            <ToolbarButton icon={Wrench} onClick={() => {}} />
        </div>
    );
};

const ToolbarButton = ({ onClick, icon: Icon, isActive }: ToolbarButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={cn("text-sm h-7 min-w-7 flex items-center justify-center rounded-sm hover:bg-neutral-200", isActive && "bg-neutral-200/80")}
        >
    <Icon className="size-4"/>
    </button>
)};


