import React from 'react'
import { FaFileContract } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion"

const Card = ({data,reference}) => {
  return (
    <>
    {/* {flex-shrink karna hai??} */}
    <motion.div whileHover={{scale:1.2}} drag dragConstraints={reference} className='relative w-60 h-72 rounded-[12%] bg-zinc-900 text-white px-7 py-10 overflow-hidden'>
    <FaFileContract/>
        <p className='text-sm leading-tight mt-5 foont-semibold'>{data.desc}</p>

        <div className='footer absolute bottom-0 w-full left-0'>
            <div className='flex items-center justify-between px-8 py-5 mt-3'>
                <h5>{data.filesize}</h5>
                <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                    {data.close ? <IoCloseSharp/> : <FaDownload size={14}/> }
                
                </span>
            </div>
            {
                data.tag.isOpen ? (
                <div className={`tag w-full py-4 ${data.tag.tagColor==="blue"? "bg-blue-600": "bg-green-600"} flex items-center justify-center`}>
                <h3 className='text-md font-semibold'>{data.tag.tagTitle}</h3>
                </div>
            )
             : null
            }
            
        </div>
    </motion.div>
    </>
  )
}

export default Card