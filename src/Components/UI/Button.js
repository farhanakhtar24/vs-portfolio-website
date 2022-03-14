import React from 'react';

const Button = (props) => {
    return (
        <button className='border border-PageNavbar-ActivePageBorder p-2 interFont transition-all hover:scale-95'>
            { props.children }
        </button>
    )
};

export default Button;