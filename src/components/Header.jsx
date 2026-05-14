import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';
const Header = () => {
    return (
        <div className='flex justify-center flex-col items-center'>
            <img className='w-[350px]' src={logo} alt="" />
            <p className=''>Journalism Without Fear or Favour</p>
            <p>{format(new Date(),'EEEE , MMMM MM, yyyy')}</p>
        </div>
    );
};

export default Header;