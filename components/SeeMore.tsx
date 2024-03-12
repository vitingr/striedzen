import Link from 'next/link'
import React from 'react'
import { RiAddCircleLine } from "react-icons/ri";

interface SeeMoreProps {
  link: string
  color?: string
}
 
const SeeMore = ({link, color}: SeeMoreProps) => {
  return (
    <Link href={link} className='flex gap-x-2 mt-12 text-center cursor-pointer items-center'>
      <RiAddCircleLine size={17} className='gray-icon' />
      <span className="text-slate-700">Ver mais</span>
    </Link>
  )
}

export default SeeMore