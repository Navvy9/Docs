import React, { useRef, useState } from "react";
import Cards from "./Cards";

function Foreground() {
  const ref = useRef(null);
  const [cardData, setCardData] = useState([
    {
      desc: "This is the background color of the card.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
  ]);

  const addCard = () => {
    setCardData([
      ...cardData,
      {
        desc: "This is the background color of the card.",
        filesize: ".9mb",
        close: true,
        tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
      },
    ]);
  };

  const deleteCard = (index) => {
    setCardData(cardData.filter((_, i) => i !== index));
  };

  const updateCardDesc = (index, newDesc) => {
    const updatedCards = [...cardData];
    updatedCards[index].desc = newDesc;
    setCardData(updatedCards);
  };

  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-10">
      <button
        onClick={addCard}
        className="absolute top-5 right-5 bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl"
      >
        +
      </button>
      {cardData.map((item, index) => (
        <Cards
          key={index}
          data={item}
          onDelete={() => deleteCard(index)}
          onUpdateDesc={(newDesc) => updateCardDesc(index, newDesc)}
        />
      ))}
    </div>
  );
}

export default Foreground;
