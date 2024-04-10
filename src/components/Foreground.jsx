import React, { useRef, useState } from 'react'
import Card from './Card'


const Foreground = () => {

    const ref = useRef(null);

    const data = [
        {
            desc: "Pratham is the best",
            filesize: "0.4mb",
            close: true,
            tag: {isOpen: true, tagTitle: "Download now", tagColor: "green"}, //if isOpen is true, the download button will be visible
        },
        {
            desc: "Are bhai bahut badiya hai",
            filesize: "0.4mb",
            close: true,
            tag: {isOpen: true, tagTitle: "Download now", tagColor: "blue"}, //if isOpen is true, the download button will be visible
        },
        {
            desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            filesize: "0.4mb",
            close: true,
            tag: {isOpen: false, tagTitle: "Download now", tagColor: "green"}, //if isOpen is true, the download button will be visible
        },

    ];
    // useState()
  return (
    <>
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-7 flex-wrap p-5'>
        {data.map((item, index) => (
            <Card data = {item} reference={ref}/>
        ))} 
        {/* .map iterates and render every thing written in const */}
    </div>
    </>
  )
}

export default Foreground