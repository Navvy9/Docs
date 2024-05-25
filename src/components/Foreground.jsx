import React,{useRef,useState} from "react";
import Cards from "./Cards";

function Foreground() {
  // required things
  // const data=[
  // desc,filesize, close, closeOrDownload, tagDetails

  // ];

  const ref=useRef(null);
  const data = [
    {
      desc: "This is the background color of the card.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor:"green" },
    },
    {
        desc: "This is the background color of the card.",
        filesize: ".9mb",
        close: true,
        tag: { isOpen: true, tagTitle: "Download Now", tagColor:"blue" },
      },
      {
        desc: "This is the background color of the card.",
        filesize: ".9mb",
        close: true,
        tag: { isOpen: false, tagTitle: "Upload Now", tagColor:"green" },
      },
      {
        desc: "This is the background color of the card.",
        filesize: ".9mb",
        close: true,
        tag: { isOpen: false, tagTitle: "Upload Now", tagColor:"green" },
      },
      {
        desc: "This is the background color of the card.",
        filesize: ".9mb",
        close: true,
        tag: { isOpen: true, tagTitle: "Upload Now", tagColor:"green" },
      },
      {
        desc: "This is the background color of the card.",
        filesize: ".9mb",
        close: true,
        tag: { isOpen: true, tagTitle: "Upload Now", tagColor:"blue" },
      },
  ];

  return (
    <div ref={ref} className=" fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-10">
      {data.map((item,index)=>(
        <Cards data={item} referrence={ref}/>
      ))}
    </div>
  );
}

export default Foreground;
