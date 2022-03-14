import React from 'react';
import vsIcon from '../../../Assets/VS_code_icon.svg';
import { MdClose as Cross } from 'react-icons/md';
import { BiWindows as Maximize } from 'react-icons/bi';
import { VscChromeMinimize as Minimize } from 'react-icons/vsc';
import { Link } from 'react-router-dom';

const taskBarOptions = ["File", "Edit", "Selection", "View", "Go", "Run", "Terminal", "Help"];

const Navbar = () => {
    return (
        <div className='Navbar'>

            {/* TaskBar Options */ }
            <div className=''>
                {/* vs logo */ }
                <ul className='flex items-center h-full'>
                    <li><img src={ vsIcon } alt="vs-code-icon" className='px-2 w-8' /></li>
                    { taskBarOptions.map(option => {
                        return <li className='hidden lg:block text-sm px-2 py-0.5 hover:bg-NavbarHover cursor-pointer'>{ option }</li>
                    }) }
                </ul>
            </div>

            {/* My name - Visual Studio Code */ }
            <div className='text-center'>
                <span className='text-xs lg:text-sm font-semibold'>Mohd Farhan Akhtar - Visual Studio Code</span>
            </div>

            <div className='hidden lg:block'></div>
            {/* closing minimize maximize buttons */ }
            <div className='flex items-center'>
                <Link to='/home'><Minimize className='lg:w-8 lg:h-6 m-1 hover:bg-NavbarHover' /></Link>
                <Link to='/home'><Maximize className='lg:w-8 lg:h-6 p-0.5 m-1 hover:bg-NavbarHover' /></Link>
                <Link to='/home'><Cross className='lg:w-8 lg:h-6 m-1 hover:bg-NavbarHover' /></Link>
            </div>
        </div>
    );
};

export default Navbar;