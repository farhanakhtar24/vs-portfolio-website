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
    const activeborderclass = `border-l-2 border-l-SideBarTextActive w-full flex justify-center py-2`;


    return (
        <div className='flex flex-col justify-between w-12 h-full bg-NavbarBg py-3'>

            {/* upar ke 5 icons */ }
            <div>
                <ul className='flex flex-col items-center'>
                    <li className={ `${activeborderclass}` }>
                        <Link to='/home'>
                            <FilesIcon className='text-2xl text-SideBarTextActive hover:text-SideBarTextHover' />
                        </Link>
                    </li>
                    <li className='w-full flex justify-center py-2'>
                        <Link to='/contact'>
                            <SearchIcon className='text-2xl text-SideBarText hover:text-SideBarTextHover' />
                        </Link>
                    </li>
                    <li className='w-full flex justify-center py-2'>
                        <Link to='/github'>
                            <GitBranchIcon className='text-2xl text-SideBarText hover:text-SideBarTextHover' />
                        </Link>
                    </li>
                    <li className='w-full flex justify-center py-2'>
                        <Link to='/projects'>
                            <ProjectsIcon className='text-2xl text-SideBarText hover:text-SideBarTextHover' />
                        </Link>
                    </li>
                    <li className='w-full flex justify-center py-2'>
                        <Link to='/about'>
                            <FilePdfIcon className='text-2xl text-SideBarText hover:text-SideBarTextHover' />
                        </Link>
                    </li>
                </ul>
            </div>

            {/* neeche ke 2 icons */ }
            <div>
                <ul className='flex flex-col items-center gap-4'>
                    <li><Link to='/about'><UserIcon className='text-2xl text-SideBarText hover:text-SideBarTextHover' /></Link></li>
                    <li><Link to='/about'><SettingsIcon className='text-2xl text-SideBarText hover:text-SideBarTextHover' /></Link></li>
                </ul>
            </div>
        </div >
    )
};

export default Sidebar;