import React, { useState } from 'react';
import { VscFiles as FilesIcon } from 'react-icons/vsc';
import { VscSearch as SearchIcon } from 'react-icons/vsc';
import { BiGitBranch as GitBranchIcon } from 'react-icons/bi';
import { AiOutlineCode as ProjectsIcon } from 'react-icons/ai';
import { ImFilePdf as FilePdfIcon } from 'react-icons/im';
import { BiUserCircle as UserIcon } from 'react-icons/bi';
import { VscSettingsGear as SettingsIcon } from 'react-icons/vsc';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const [activeIcon, setActiveIcon] = useState('home');

    const activeIconColor = 'text-SideBarTextActive';
    let activeClassBorder = 'border-l-2 border-l-SideBarTextActive';

    return (
        <div className='flex flex-col justify-between h-full bg-NavbarBg border-b-2 border-gray-900'>

            {/* upar ke 5 icons */ }
            <ul>
                <li className={ `${activeIcon === 'home' ? activeClassBorder : ''} p-2` }>
                    <NavLink to='/home' onClick={ () => setActiveIcon('home') }>
                        <FilesIcon className={ `text-2xl  hover:text-SideBarTextHover  ${activeIcon === 'home' ? activeIconColor : 'text-SideBarText'}` } />
                    </NavLink>
                </li>
                <li className={ `${activeIcon === 'about' ? activeClassBorder : ''} p-2` }>
                    <NavLink to='/about' onClick={ () => setActiveIcon('about') }>
                        <SearchIcon className={ `text-2xl  hover:text-SideBarTextHover  ${activeIcon === 'about' ? activeIconColor : 'text-SideBarText'}` } />
                    </NavLink>
                </li>
                <li className={ `${activeIcon === 'github' ? activeClassBorder : ''} p-2` }>
                    <NavLink to='/github' onClick={ () => setActiveIcon('github') }>
                        <GitBranchIcon className={ `text-2xl  hover:text-SideBarTextHover  ${activeIcon === 'github' ? activeIconColor : 'text-SideBarText'}` } />
                    </NavLink>
                </li>
                <li className={ `${activeIcon === 'projects' ? activeClassBorder : ''} p-2` }>
                    <NavLink to='/projects' onClick={ () => setActiveIcon('projects') }>
                        <ProjectsIcon className={ `text-2xl  hover:text-SideBarTextHover  ${activeIcon === 'projects' ? activeIconColor : 'text-SideBarText'}` } />
                    </NavLink>
                </li>
                <li className={ `${activeIcon === 'contact' ? activeClassBorder : ''} p-2` }>
                    <NavLink to='/contact' onClick={ () => setActiveIcon('contact') }>
                        <FilePdfIcon className={ `text-2xl  hover:text-SideBarTextHover  ${activeIcon === 'contact' ? activeIconColor : 'text-SideBarText'}` } />
                    </NavLink>
                </li>
            </ul>

            {/* neeche ke 2 icons */ }
            <ul>
                <li className='p-2'>
                    <NavLink to='/home'>
                        <UserIcon className='text-2xl text-SideBarText hover:text-SideBarTextHover' />
                    </NavLink>
                </li>
                <li className='p-2'>
                    <NavLink to='/home'>
                        <SettingsIcon className='text-2xl text-SideBarText hover:text-SideBarTextHover' />
                    </NavLink>
                </li>
            </ul>

        </div >
    )
};

export default Sidebar;