import React from 'react';
import { IoIosArrowDown as ArrowDownIcon } from 'react-icons/io';
import { SiHtml5 as HTMLicon } from 'react-icons/si';
import { ImHtmlFive as HTMLicon2 } from 'react-icons/im';
import { Link } from 'react-router-dom';

const FileIndexer = () => {
    return (
        <div className=' flex flex-col gap-2 bg-FileIndexer-Bg w-60'>
            {/* Explorer div */ }
            <div className='FileIndexer-Headings'>
                Explorer
            </div>

            {/* sibling large idv */ }
            <div className='flex flex-col gap-1 overflow-hidden '>

                {/* foldername div */ }
                <div className='FileIndexer-Headings shadow-md shadow-zinc-900'>
                    <button><ArrowDownIcon className='mr-2' /></button>
                    Portfolio
                </div>

                {/* index list */ }
                <ul className='text-white text-sm font-normal'>
                    <Link to='/about'>
                        <li className='flex px-5 py-2 gap-2 items-center hover:bg-NavbarHover'>
                            <HTMLicon className='text-FileIndexer-HTMLcolor' />
                            home.jsx
                        </li>
                    </Link>
                    <Link to='/about'>
                        <li className='flex px-5 py-2 gap-2 items-center hover:bg-NavbarHover'>
                            <HTMLicon2 className='text-FileIndexer-HTMLcolor' />
                            home.jsx
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    )
};

export default FileIndexer;