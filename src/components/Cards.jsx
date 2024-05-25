import React, { useState } from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function Cards({ data, onDelete, onUpdateDesc }) {
  const [isEditing, setIsEditing] = useState(false);
  const [desc, setDesc] = useState(data.desc);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onUpdateDesc(desc);
    setIsEditing(false);
  };

  return (
    <motion.div
      drag
      dragConstraints="parent"
      whileDrag={{ scale: 1.2 }}
      dragElastic={0.2}
      className="relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden"
    >
      <FaRegFileAlt />
      {isEditing ? (
        <div className="mt-5">
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="w-full bg-zinc-800 text-white rounded p-2"
          />
          <button
            onClick={handleSave}
            className="mt-2 bg-green-500 text-white rounded p-2 w-full"
          >
            Save
          </button>
        </div>
      ) : (
        <p className="text-sm mt-5 leading-tight font-semibold" onClick={handleEdit}>
          {desc}
        </p>
      )}
      <div className="footer absolute bottom-0 left-0 w-full">
        <div className="flex items-center justify-between py-3 px-8 mb-3">
          <h5>{data.filesize}</h5>
          <button
            onClick={onDelete}
            className="w-7 h-7 bg-red-500 rounded-full flex items-center justify-center text-white"
          >
            <IoClose />
          </button>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full py-4 ${
              data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
            } flex items-center justify-center`}
          >
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Cards;
