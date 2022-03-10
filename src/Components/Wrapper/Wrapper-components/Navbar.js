import React from 'react';
import vsIcon from '../../../Assets/VS_code_icon.svg';
import { MdClose as Cross } from 'react-icons/md';
import { BiWindows as Maximize } from 'react-icons/bi';
import { VscChromeMinimize as Minimize } from 'react-icons/vsc';
import { Link } from 'react-router-dom';

const taskBarOptions = ["File", "Edit", "Selection", "View", "Go", "Run", "Terminal", "Help"];

const Navbar = (props) => {
    return (
        <div className='basis-1/11 flex justify-between border-b-2 border-gray-900 bg-NavbarBg text-NavbarFont items-center'>
            {/* vs logo */ }

            {/* file edit selecton view go run terminal help */ }
            <div className='sm'>
                <ul className='flex items-center h-full'>
                    <li><img src={ vsIcon } alt="vs-code-icon" className='px-2 w-8' /></li>
                    { taskBarOptions.map(option => {
                        return <li className='text-sm px-2 py-0.5 hover:bg-NavbarHover cursor-pointer'>{ option }</li>
                    }) }
                </ul>
            </div>

            {/* My name - Visual Studio Code */ }
            <div className='items-center'>
                <span className='text-sm font-semibold'>Mohd Farhan Akhtar - Visual Studio Code</span>
            </div>

            <div></div>
            {/* closing minimize maximize buttons */ }
            <div className='flex items-center'>
                <Link to='/home'><Minimize className='w-8 h-6 hover:bg-NavbarHover' /></Link>
                <Link to='/home'><Maximize className='w-8 h-6 p-1 hover:bg-NavbarHover' /></Link>
                <Link to='/home'><Cross className='w-8 h-6 hover:bg-NavbarHover' /></Link>
            </div>
        </div>
    );
};

export default Navbar;