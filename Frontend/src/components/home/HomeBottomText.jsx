import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {

  return (
    <div className='font-[font2] flex items-end justify-center gap-4'>
        <Link className='text-[6.5vw] uppercase border-3 leading-[4.3vw] pt-7 px-6 border-white rounded-full hover:text-[#D3FD50] hover:border-[#D3FD50]  ' to='/projects' >Projets</Link>
        <Link className='text-[6.5vw] uppercase border-3 leading-[4.3vw] pt-7 px-6 border-white rounded-full hover:text-[#D3FD50] hover:border-[#D3FD50] ' to='/agence' >Agence</Link>
 
    </div>
  )
}

export default HomeBottomText