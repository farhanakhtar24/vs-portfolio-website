import React from 'react';
import { VscFiles as FilesIcon } from 'react-icons/vsc';
import { VscSearch as SearchIcon } from 'react-icons/vsc';
import { BiGitBranch as GitBranchIcon } from 'react-icons/bi';
import { AiOutlineCode as ProjectsIcon } from 'react-icons/ai';
import { ImFilePdf as FilePdfIcon } from 'react-icons/im';
import { BiUserCircle as UserIcon } from 'react-icons/bi';
import { VscSettingsGear as SettingsIcon } from 'react-icons/vsc';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const activeborderclass = `border-l-2 border-l-SideBarTextActive w-full h-full flex justify-center p-2`;


    return (
        <div className='flex flex-col justify-between h-full bg-NavbarBg border-b-2 border-gray-900'>

            {/* upar ke 5 icons */ }
            {/* <div>
                <ul className='flex flex-col items-center'>
                    <li className={ `${activeborderclass}` }>
                        <Link to='/home'>
                            <FilesIcon className='text-2xl text-SideBarTextActive hover:text-SideBarTextHover' />
                        </Link>
                    </li>
                    <li className='w-full flex justify-center p-2'>
                        <Link to='/contact'>
                            <SearchIcon className='text-2xl text-SideBarText hover:text-SideBarTextHover' />
                        </Link>
                    </li>
                    <li className='w-full flex justify-center p-2'>
                        <Link to='/github'>
                            <GitBranchIcon className='text-2xl text-SideBarText hover:text-SideBarTextHover' />
                        </Link>
                    </li>
                    <li className='w-full flex justify-center p-2'>
                        <Link to='/projects'>
                            <ProjectsIcon className='text-2xl text-SideBarText hover:text-SideBarTextHover' />
                        </Link>
                    </li>
                    <li className='w-full flex justify-center p-2'>
                        <Link to='/about'>
                            <FilePdfIcon className='text-2xl text-SideBarText hover:text-SideBarTextHover' />
                        </Link>
                    </li>
                </ul>
            </div> */}

            {/* neeche ke 2 icons */ }
            {/* <div>
                <ul className='flex flex-col items-center'>
                    <li className='w-full flex justify-center py-2'>
                        <Link to='/about' className='text-2xl text-SideBarText hover:text-SideBarTextHover'>
                            <UserIcon />
                        </Link>
                    </li>
                    <li className='w-full flex justify-center '>
                        <Link to='/about' className='text-2xl text-SideBarText hover:text-SideBarTextHover'>
                            <SettingsIcon />
                        </Link>
                    </li>
                </ul>
            </div> */}
        </div >
    )
};

export default Sidebar;