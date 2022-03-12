import React from 'react';
import { VscFiles as FilesIcon } from 'react-icons/vsc';
import { VscSearch as SearchIcon } from 'react-icons/vsc';
import { BiGitBranch as GitBranchIcon } from 'react-icons/bi';
import { AiOutlineCode as ProjectsIcon } from 'react-icons/ai';
import { ImFilePdf as FilePdfIcon } from 'react-icons/im';
import { BiUserCircle as UserIcon } from 'react-icons/bi';
import { VscSettingsGear as SettingsIcon } from 'react-icons/vsc';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Sidebar = () => {
    const activeIcon = useSelector(state => state.activeIcon.value);

    const activeIconColor = 'text-Sidebar-IconActive';
    const activeIconBorder = 'border-l-2 border-l-Sidebar-IconActive';

    const TopIconList = [
        {
            name: 'home',
            icon: <FilesIcon />,
        },
        {
            name: 'contact',
            icon: <SearchIcon />,
        },
        {
            name: 'github',
            icon: <GitBranchIcon />,
        },
        {
            name: 'projects',
            icon: <ProjectsIcon />,
        },
        {
            name: 'about',
            icon: <FilePdfIcon />,
        },
    ]

    return (
        <div className='Sidebar-Main-Div'>

            {/* upar ke 5 icons */ }
            <ul>
                { TopIconList.map((object) => {
                    return (
                        <NavLink
                            key={ object.name }
                            to={ `/${object.name}` }
                            className={ `${activeIcon === object.name ? activeIconColor : ''}` }
                        >
                            <li className={ `${activeIcon === object.name ? activeIconBorder : ''} hover:bg-FileIndexer-Bg p-2` }>
                                { object.icon }
                            </li>
                        </NavLink>
                    )
                }) }
            </ul >

            {/* neeche ke 2 icons */ }
            < ul >
                <NavLink to='/home' className='hover:text-Sidebar-IconHover'>
                    <li className='p-2'>
                        <UserIcon />
                    </li>
                </NavLink>
                <NavLink to='/home' className='hover:text-Sidebar-IconHover'>
                    <li className='p-2'>
                        <SettingsIcon />
                    </li>
                </NavLink>
            </ ul>

        </div >
    )
};

export default Sidebar;