import React from 'react'
import { Link, useLocation } from "react-router-dom";
const Header : React.FC = () => {
    const location = useLocation();
  return (
    <header className="bg-blue-500 w-full px-[20%] fixed left-0 top-0" style={{zIndex:100}}>
    <nav className='flex justify-center gap-[5rem] items-center h-[50px]'>
      {navData.map((item) => (
        <Link to={item.link} key={item.id} 
        className={`text-white text-base ${location.pathname === item.link ? "underline" : ""} `}>{item.name} </Link>
      ))}
    </nav>
</header>
  )
}

export default Header;


const navData = [
    {id:1,link:"/",name:"ອັດໂຫຼດຮູບພາບ"},
    {id:2,link:"/answer",name:"ຕອບຄໍາຖາມ"},
]