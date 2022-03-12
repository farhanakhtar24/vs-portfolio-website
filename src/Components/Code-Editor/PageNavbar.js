import React from 'react'
import { useSelector } from 'react-redux'
import { FaReact as HomePageIcon } from 'react-icons/fa';
import { ImCss3 as ContactPageIcon } from 'react-icons/im';
import { VscGithubInverted as GithubPageIcon } from 'react-icons/vsc';
import { SiJavascript as ProjectsPageIcon } from 'react-icons/si';
import { SiHtml5 as AboutPageIcon } from 'react-icons/si';
import { NavLink } from 'react-router-dom';

const PageNavbar = () => {
    const activePage = useSelector(state => state.activeIcon.value);

    const pageList = [
        {
            name: 'home',
            page: <HomePageIcon className='text-PageNavbar-Icons-Home' />,
            extension: 'jsx',
        },
        {
            name: 'contact',
            page: <ContactPageIcon className='text-PageNavbar-Icons-Contact' />,
            extension: 'css',
        },
        {
            name: 'github',
            page: <GithubPageIcon className='text-PageNavbar-Icons-Github' />,
            extension: 'md',
        },
        {
            name: 'projects',
            page: <ProjectsPageIcon className='text-PageNavbar-Icons-Projects' />,
            extension: 'js',
        },
        {
            name: 'about',
            page: <AboutPageIcon className='text-PageNavbar-Icons-About' />,
            extension: 'html',
        }
    ]

    const activePageClass = 'bg-PageNavbar-ActivePageBg border-t-2 border-t-PageNavbar-ActivePageBorder';

    return (
        <div className='text-sm text-PageNavbar-Text bg-PageNavbar-Bg'>
            <ul className='flex'>
                { pageList.map(pageObject => {
                    return (
                        <NavLink to={ `/${pageObject.name}` }>
                            <li className={ `flex items-center gap-2 px-7 py-1.5 border-y-2 border-x border-PageNavbar-HoverPageBg hover:bg-PageNavbar-HoverPageBg ${activePage === pageObject.name ? activePageClass : 'bg-PageNavbar-Bg'}` }>
                                { pageObject.page }
                                { `${pageObject.name} ${pageObject.extension}` }
                            </li>
                        </NavLink>
                    )
                }) }
            </ul>
        </div>
    )
}

export default PageNavbar