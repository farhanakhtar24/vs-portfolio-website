import React from 'react'
import FileIndexer from './Wrapper-components/FileIndexer';
import Navbar from './Wrapper-components/Navbar';
import Sidebar from './Wrapper-components/Sidebar';
import Taskbar from './Wrapper-components/Taskbar';
const Wrapper = (props) => {
    return (
        <div >
            <Navbar></Navbar>
            <Sidebar></Sidebar>
            <FileIndexer></FileIndexer>
            { props.children }
            <Taskbar></Taskbar>
        </div>
    )
};

export default Wrapper;