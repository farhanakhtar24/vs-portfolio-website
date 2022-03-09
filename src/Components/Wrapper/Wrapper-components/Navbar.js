import React from 'react';
import vsIcon from '../../../Assets/Taskbar Icons/VS_code_icon.svg';
import Cross_Icon from '../../../Assets/Taskbar Icons/Cross_Icon.svg';
import Maximize_icon from '../../../Assets/Taskbar Icons/Maximize_icon.svg';
import Minimize_icon from '../../../Assets/Taskbar Icons/Minimize_icon.svg';
import { Link } from 'react-router-dom';

const taskBarOptions = ["File", "Edit", "Selection", "View", "Go", "Run", "Terminal", "Help"];

const Navbar = (props) => {
    return (
        <div className='flex justify-between border-b-2 border-gray-800 bg-NavbarBg text-NavbarFont items-center'>
            {/* vs logo */ }

            {/* file edit selecton view go run terminal help */ }
            <div className=''>
                <ul className='flex gap-2 items-center'>
                    <li><img src={ vsIcon } alt="vs-code-icon" className='px-2 py-1 w-9 mr-1' /></li>
                    { taskBarOptions.map(option => {
                        return <li className='text-sm'>{ option }</li>
                    }) }
                </ul>
            </div>

            {/* My name - Visual Studio Code */ }
            <div className='items-center'>
                <span className='text-sm font-semibold'>Mohd Farhan Akhtar - Visual Studio Code</span>
            </div>

            <div></div>
            {/* closing minimize maximize buttons */ }
            <div className='flex gap-2'>
                <Link to='/home'><img src={ Minimize_icon } alt="vs-code-icon" /></Link>
                <Link to='/home'><img src={ Maximize_icon } alt="vs-code-icon" /></Link>
                <Link to='/home'><img src={ Cross_Icon } alt="vs-code-icon" /></Link>
            </div>
        </div>
    );
};

export default Navbar;