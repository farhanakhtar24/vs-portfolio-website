import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../Components/UI/Button';
import TypeAnimation from 'react-type-animation';


const Home = () => {
    return (
        <div className='flex h-full w-full p-7 justify-center items-center text-slate-200'>
            {/* img in background  */ }
            <div className='grid grid-cols-2 justify-center w-full h-full bg-i-code-websites bg-left bg-cover bg-no-repeat'>
                <div className='flex items-center justify-start'>
                    <div>
                        <div className='text-5xl font-semibold mb-5 truncate'>
                            Mohd Farhan Akhtar
                        </div>
                        <TypeAnimation
                            cursor={ true }
                            sequence={ ['Front-End Web Developer', 1] }
                            wrapper="h2"
                            className='text-2xl font-extralight mb-12'
                        />
                        <div className='flex gap-5 items-center'>
                            <Button>
                                <Link to='/projects'>View Work</Link>
                            </Button>
                            <Button>
                                <Link to='/contact'>Contact Me</Link>
                            </Button>
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}

export default Home;