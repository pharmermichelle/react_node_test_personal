import React from "react";
import { useDroppable } from "@dnd-kit/core";

const Column = ({ id, title, children }) => {
  const { setNodeRef, isOver } = useDroppable({
    id, // This is crucial — tells DnD system this is a drop target
  });

  return (
    <div
      ref={setNodeRef}
      className={`p-4 rounded-lg min-h-[500px] flex flex-col transition-all duration-200 ${
        isOver ? "bg-blue-200" : "bg-gray-200"
      } hover:bg-gray-300 hover:shadow-lg`}
    >
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      <div className="flex-1 space-y-2 mt-2">{children}</div>
    </div>
  );
};

export default Column;
