import React from 'react'
import FileIndexer from './Wrapper-components/FileIndexer';
import Navbar from './Wrapper-components/Navbar';
import Sidebar from './Wrapper-components/Sidebar';
import Taskbar from './Wrapper-components/Taskbar';
const Wrapper = (props) => {
    return (
        <div className='flex flex-col h-screen w-screen'>
            <Navbar></Navbar>
            <div className='flex flex-1'>
                <Sidebar></Sidebar>
                <FileIndexer></FileIndexer>
                { props.children }
            </div>
            <Taskbar></Taskbar>
        </div>
    )
};

export default Wrapper;