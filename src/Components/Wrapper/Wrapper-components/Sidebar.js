import React from 'react';
import { VscFiles as FilesIcon } from 'react-icons/vsc';
import { VscSearch as SearchIcon } from 'react-icons/vsc';
import { BiGitBranch as GitBranchIcon } from 'react-icons/bi';
import { AiOutlineCode as ProjectsIcon } from 'react-icons/ai';
import { ImFilePdf as FilePdfIcon } from 'react-icons/im';
import { BiUserCircle as UserIcon } from 'react-icons/bi';
import { VscSettingsGear as SettingsIcon } from 'react-icons/vsc';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { activeIconSliceActions } from '../../../Redux/active-icon-slice';

const Sidebar = () => {
    const activeIcon = useSelector(state => state.activeIcon.value);
    // const dispatch = useDispatch();

    // const activeIconHandler = function (page) {
    //     dispatch(activeIconSliceActions.setActiveIcon(page));
    // }

    const activeIconColor = 'text-Sidebar-IconActive';
    const activeIconBorder = 'border-l-2 border-l-Sidebar-IconActive';

    return (
        <div className='Sidebar-Main-Div'>

            {/* upar ke 5 icons */ }
            <ul>
                <NavLink
                    to='/home'
                    // onClick={ () => activeIconHandler('home') }
                    className={ `hover:text-Sidebar-IconHover  ${activeIcon === 'home' ? activeIconColor : ''}` } >
                    <li className={ `${activeIcon === 'home' ? activeIconBorder : ''} p-2` }>
                        <FilesIcon />
                    </li>
                </NavLink>
                <NavLink
                    to='/contact'
                    // onClick={ () => activeIconHandler('contact') }
                    className={ `hover:text-Sidebar-IconHover  ${activeIcon === 'contact' ? activeIconColor : ''}` } >
                    <li className={ `${activeIcon === 'contact' ? activeIconBorder : ''} p-2` }>
                        <SearchIcon />
                    </li>
                </NavLink>
                <NavLink
                    to='/github'
                    // onClick={ () => activeIconHandler('github') }
                    className={ `hover:text-Sidebar-IconHover  ${activeIcon === 'github' ? activeIconColor : ''}` }>
                    <li className={ `${activeIcon === 'github' ? activeIconBorder : ''} p-2` }>
                        <GitBranchIcon />
                    </li>
                </NavLink>
                <NavLink
                    to='/projects'
                    // onClick={ () => activeIconHandler('projects') }
                    className={ `hover:text-Sidebar-IconHover  ${activeIcon === 'projects' ? activeIconColor : ''}` } >
                    <li className={ `${activeIcon === 'projects' ? activeIconBorder : ''} p-2` }>
                        <ProjectsIcon />
                    </li>
                </NavLink>
                <NavLink
                    to='/about'
                    // onClick={ () => activeIconHandler('about') }
                    className={ `hover:text-Sidebar-IconHover  ${activeIcon === 'about' ? activeIconColor : ''}` }>
                    <li className={ `${activeIcon === 'about' ? activeIconBorder : ''} p-2` }>
                        <FilePdfIcon />
                    </li>
                </NavLink>

            </ul>

            {/* neeche ke 2 icons */ }
            <ul>
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
            </ul>

        </div >
    )
};

export default Sidebar;