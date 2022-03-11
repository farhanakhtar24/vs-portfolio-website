import React, { useState } from 'react';
import { IoIosArrowDown as ArrowDownIcon } from 'react-icons/io';
import { FaReact as HomePageIcon } from 'react-icons/fa';
import { ImCss3 as ContactPageIcon } from 'react-icons/im';
import { VscGithubInverted as GithubPageIcon } from 'react-icons/vsc';
import { SiJavascript as ProjectsPageIcon } from 'react-icons/si';
import { SiHtml5 as AboutPageIcon } from 'react-icons/si';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { activeIconSliceActions } from '../../../Redux/active-icon-slice';

const FileIndexer = () => {
    const activePage = useSelector(state => state.activeIcon.value);
    // const dispatch = useDispatch();

    const [arrowDirection, setArrowDirection] = useState('rotate-0');

    const portfolioArrow = function () {
        setArrowDirection(arrowDirection === 'rotate-0' ? '-rotate-90' : 'rotate-0');
    }

    // const activePageHandler = function (page) {
    //     dispatch(activeIconSliceActions.setActiveIcon(page));
    // }

    const divClassName = 'flex px-5 py-1 gap-2 items-center hover:bg-FileIndexer-Hover';

    return (
        <div className=' flex flex-col gap-2 bg-FileIndexer-Bg w-60'>
            {/* Explorer div */ }
            <div className='FileIndexer-Headings'>
                Explorer
            </div>

            {/* sibling large idv */ }
            <div className='flex flex-col gap-1 overflow-hidden '>

                {/* foldername div */ }
                <div className='FileIndexer-Headings shadow-sm shadow-zinc-900 pb-1'>
                    <button onClick={ portfolioArrow }><ArrowDownIcon className={ `mr-2 ${arrowDirection}` } /></button>
                    Portfolio
                </div>

                {/* index list */ }
                <ul className={ `text-white text-sm font-normal ${arrowDirection === 'rotate-0' ? '' : 'hidden'}` }>
                    <Link
                        to='/home'
                    // onClick={ () => activePageHandler('home') }
                    >
                        <li className={ `${divClassName} ${activePage === 'home' ? 'bg-FileIndexer-Active' : ''}` }>
                            <HomePageIcon className='text-FileIndexer-Icons-Home' />
                            home.jsx
                        </li>
                    </Link>
                    <Link
                        to='/contact'
                    // onClick={ () => activePageHandler('contact') }
                    >
                        <li className={ `${divClassName} ${activePage === 'contact' ? 'bg-FileIndexer-Active' : ''}` }>
                            <ContactPageIcon className='text-FileIndexer-Icons-Contact' />
                            contact.css
                        </li>
                    </Link>
                    <Link
                        to='/github'
                    // onClick={ () => activePageHandler('github') }
                    >
                        <li className={ `${divClassName} ${activePage === 'github' ? 'bg-FileIndexer-Active' : ''}` }>
                            <GithubPageIcon className='text-FileIndexer-Icons-Github' />
                            github.md
                        </li>
                    </Link>
                    <Link
                        to='/projects'
                    // onClick={ () => activePageHandler('projects') }
                    >
                        <li className={ `${divClassName} ${activePage === 'projects' ? 'bg-FileIndexer-Active' : ''}` }>
                            <ProjectsPageIcon className='text-FileIndexer-Icons-Projects' />
                            projects.js
                        </li>
                    </Link>
                    <Link
                        to='/about'
                    // onClick={ () => activePageHandler('about') }
                    >
                        <li className={ `${divClassName} ${activePage === 'about' ? 'bg-FileIndexer-Active' : ''}` }>
                            <AboutPageIcon className='text-FileIndexer-Icons-About' />
                            about.html
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    )
};

export default FileIndexer;